import './Battle.css'
import React, { useCallback, useEffect, useState } from 'react';
import AppLayout from '../../layout';
import { Col, Row, Card, Button, Timeline, Popconfirm, Popover } from 'antd';
import MessageService from '../../utils/message';
import { BattleReportType } from '../../redux/definition';
import { SkillCategory, Skill } from '../../infrastructure/skills/definition';
import { CharacterSkillFactory } from '../../infrastructure/skills';
import { SkillMap } from '../../definitions';
import DamageAnimation from '../../components/damage-animation/DamageAnimation';
import { useDispatch, useMappedState } from 'redux-react-hook';
import useBattleDispatch from './use-battle-dispatch';
import { useHistory } from 'react-router-dom';

const Battle = () => {
	const [autoAttack, setAutoAttack] = useState(false);
	const {
		character, monster, success, mapItemId,
		reports, currentDamage, currentMonsterDamage, lock,
	} = useMappedState((state) => ({
		character: state.battle.character,
		monster: state.battle.monster,
		success: state.battle.success,
		mapItemId: state.battle.mapItemId,
		reports: state.battle.reports,
		currentDamage: state.battle.currentDamage,
		currentMonsterDamage: state.battle.currentMonsterDamage,
		lock: state.battle.lock,
	}));
	const dispatch = useDispatch();
	const {
		onAttack, onDropItem, onGainExp, onGainMoney,
		onGameOver, onPassMapItem, onSetStatus, onUseSkill,
	} = useBattleDispatch(dispatch);
	const history = useHistory();

	const handleSuccess = useCallback(() => {
		MessageService.success(`战斗胜利，获得${monster.Experience}点经验值，获得${monster.Money}金币`);
		onSetStatus(character.Status);
		onDropItem(monster.Type);
		onPassMapItem(mapItemId);
		onGainExp(monster.Experience);
		onGainMoney(monster.Money);
		history.push('/map');
	}, [character.Status, history, mapItemId, monster.Experience, monster.Money, monster.Type, onDropItem, onGainExp, onGainMoney, onPassMapItem, onSetStatus])
	
	const handleGameOver = useCallback(() => {
		MessageService.error('战斗失败');
		onGameOver();
		history.push('/game-over');
	}, [history, onGameOver])

	useEffect(() => {
		if (success) {
			handleSuccess();
		}
		if (character && character.Status.HP <= 0) {
			handleGameOver();
		}
	}, [character, handleGameOver, handleSuccess, success])

	useEffect(() => {
		if (autoAttack) {
			const interval = setInterval(() => {
				onAttack();
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [autoAttack, onAttack])

	
	const getReportColor = (reportType: BattleReportType): string => {
		switch (reportType) {
			case BattleReportType.characterAttack:
				return 'green';
			case BattleReportType.monsterAttack:
				return 'red';
			case BattleReportType.characterCritical:
			case BattleReportType.monsterCritical:
				return 'rgb(185, 3, 185)';
			case BattleReportType.characterDodge:
			case BattleReportType.monsterDodge:
				return 'rgb(59, 199, 235)';
			case BattleReportType.characterSuck:
			case BattleReportType.monsterSuck:
				return 'rgb(255, 41, 41)';
			default:
				return 'green';
		}
	}
	const onAutoAttack = () => {
		setAutoAttack(true);
	}
	const handleUseSkill = (skill: Skill | null, skillMap: SkillMap) => {
		if (!skill) return;
		const hpCost = skill.getHpCost(skillMap.Level);
		const mpCost = skill.getMpCost(skillMap.Level);
		if (hpCost > character.Status.HP) {
			MessageService.error('生命不足！');
			return;
		}
		if (mpCost > character.Status.MP) {
			MessageService.error('魔力不足！');
			return;
		}
		onUseSkill(skill, skillMap);
	}

	const positiveSkills = character.Skills.filter((s: { Category: SkillCategory; }) => s.Category === SkillCategory.Positive);
	return (
		<AppLayout>
			<Row gutter={96}>
				<Col span={12}>
					<Card title={character.Status.Name}>
						<Row align="middle">
							<Col span={16}>
								<div>
									<p>生命:{character.Status.HP}/{character.Status.MaxHP}</p>
									<p>魔力:{character.Status.MP}/{character.Status.MaxMP}</p>
									<p>攻击:{character.Status.Attack}</p>
									<p>防御:{character.Status.Defend}</p>
									<p>
										<Button disabled={lock} title="攻击" onClick={onAttack}>攻击</Button>&nbsp; <Button disabled={lock} title="自动攻击" onClick={onAutoAttack.bind(this)}>自动攻击</Button>
										<div className="item-drawer-container">
											{positiveSkills && positiveSkills.map((skillMap: SkillMap) => {
												const skill = CharacterSkillFactory.getByType(skillMap.Type);
												if (!skill) return null;
												const level = skillMap.Level;
												return <Popconfirm key={skillMap.Type}
													title={`确定使用技能${skill?.name}？`}
													onConfirm={() => handleUseSkill(skill, skillMap)}
													okText="是"
													cancelText="否"
												>
													<Popover placement="bottom" content={
														<div>
															{skill.getHpCost(level) ? <p>生命消耗：{skill.getHpCost(level)}</p> : ''}
															{skill.getMpCost(level) ? <p>魔力消耗：{skill.getMpCost(level)}</p> : ''}
															<p>{skill.getDescription(level)}</p>
														</div>
													} title={skill.name}>
														<div className="item-drawer-item">
															<img alt="icon" src={`${process.env.PUBLIC_URL}/assets/icons/skills/${skill.type}.png`} />
														</div>
													</Popover>
												</Popconfirm>
											})}
										</div>
									</p>
								</div>
							</Col>
							<Col span={8}>
								<div className="battle-scene-container">
									<img alt="icon" className="battle-scene-icon" src={character.Icon} />
									<div className="battle-scene-damage">
										{currentMonsterDamage && <DamageAnimation damage={currentMonsterDamage} />}
									</div>
								</div>
							</Col>
						</Row>

					</Card>
				</Col>
				<Col span={12}>
					<Card title={monster.Status.Name}>
						<Row align="middle">
							<Col span={16}>
								<div>
									<p>生命:{monster.Status.HP}/{monster.Status.MaxHP}</p>
									<p>魔力:{monster.Status.MP}/{monster.Status.MaxMP}</p>
									<p>攻击:{monster.Status.Attack}</p>
									<p>防御:{monster.Status.Defend}</p>
								</div>
							</Col>
							<Col span={8}>
								<div className="battle-scene-container">
									<img alt="icon" className="battle-scene-icon" src={monster.Icon} />
									<div className="battle-scene-damage">
										{currentDamage && <DamageAnimation damage={currentDamage} />}
									</div>
								</div>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
			<Row gutter={96}>
				<Col span={24}>
					<Card title='对战内容' className="report-container">
						<Timeline>
							{reports.map((report: { Id: string | number | null | undefined; type: BattleReportType; content: React.ReactNode; }) => {
								return <Timeline.Item key={report.Id} color={getReportColor(report.type)}>{report.content}</Timeline.Item>
							})}
						</Timeline>
					</Card>
				</Col>
			</Row>
		</AppLayout>
	)
}

export default Battle;
