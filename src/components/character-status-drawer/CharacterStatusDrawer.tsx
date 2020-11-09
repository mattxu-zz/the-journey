import React from 'react';
import { Drawer, Tabs } from 'antd';
import Global from '../../config';
import Inventory from '../inventory/Inventory';
import EquipmentBar from '../equipment-bar/EquipmentBar';
import SkillTree from '../skill-tree/SkillTree';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { PlusCircleOutlined } from '@ant-design/icons';
import { GameActionType } from '../../redux/definition';
import { Status } from '../../definitions';

const TabPane = Tabs.TabPane;
const CharacterStatusDrawer = () => {
	const dispatch = useDispatch();
	const { character, characterStatusDrawerVisible } = useMappedState((state) => ({
		characterStatusDrawerVisible: state.game.characterStatusDrawerVisible,
		character: state.game.character
	}))
	const onClose = () => {
		dispatch({ type: GameActionType.CLOSE_CHARACTER_STATUS_DRAWER });
	};

	const onSetStatus = (status: Status) => {
		dispatch({ type: GameActionType.SET_CHARACTER_STATUS, status: status });
	};

	const onUseStatusPoint = () => {
		dispatch({ type: GameActionType.USE_STATUS_POINT });
	};

	const toUseStatusPoint = (type: any) => {
		const status = character.Status;
		switch (type) {
			case 'HP':
				status.HP += Global.statusPointConversionRate.HP;
				status.MaxHP += Global.statusPointConversionRate.HP;
				break;
			case 'MP':
				status.MP += Global.statusPointConversionRate.MP;
				status.MaxMP += Global.statusPointConversionRate.MP;
				break;
			case 'Attack':
				status.Attack += Global.statusPointConversionRate.Attack; break;
			case 'Defend':
				status.Defend += Global.statusPointConversionRate.Defend; break;
		}
		onSetStatus(status);
		onUseStatusPoint();
	}

	const renderStatusPoint = (field: string) => {
		return (
			<PlusCircleOutlined onClick={() => toUseStatusPoint(field)} />
		)
	}

	if (!character) {
		return (
			<div></div>
		)
	}
	return (
		<Drawer
			title={character.Status.Name}
			placement="right"
			closable={false}
			width={350}
			onClose={onClose}
			visible={characterStatusDrawerVisible}
		>
			<Tabs defaultActiveKey="1">
				<TabPane tab="属性" key="1">
					<div>
						<p>职业：{character.Type}</p>
						<p>等级：{character.Level}</p>
						<p>生命：{character.Status.HP}/{character.Status.MaxHP}&nbsp;{character.StatusPoint > 0 && renderStatusPoint('HP')}</p>
						<p>魔力：{character.Status.MP}/{character.Status.MaxMP}&nbsp;{character.StatusPoint > 0 && renderStatusPoint('MP')}</p>
						<p>攻击：{character.Status.Attack}&nbsp;{character.StatusPoint > 0 && renderStatusPoint('Attack')}</p>
						<p>防御：{character.Status.Defend}&nbsp;{character.StatusPoint > 0 && renderStatusPoint('Defend')}</p>
						<p>经验：{character.Experience}/{character.ExperienceToLevelUp}</p>
						<p>属性点：{character.StatusPoint}</p>
						<p>金币：{character.Money}</p>
					</div>
				</TabPane>
				<TabPane tab="高级" key="2">
					<div>
						<p>暴击率：{character.Status.Critical * 100}%</p>
						<p>暴击伤害：{character.Status.CriticalDamage * 100}%</p>
						<p>闪避率：{character.Status.Dodge * 100}%</p>
						<p>吸血率：{character.Status.Bloodsucking * 100}%</p>
						<p>吸血转化率：{character.Status.BloodsuckingRate * 100}%</p>
					</div>
				</TabPane>
				<TabPane tab="天赋树" key="3">
					<SkillTree />
				</TabPane>
			</Tabs>

			<Tabs defaultActiveKey="1">
				<TabPane tab="物品栏" key="1">
					<Inventory />
				</TabPane>
				<TabPane tab="装备栏" key="2">
					<EquipmentBar />
				</TabPane>
			</Tabs>
		</Drawer>
	);
}

export default CharacterStatusDrawer;
