import React from 'react';
import { Popconfirm, Popover } from 'antd';
import './SkillTree.css';
import { CharacterSkillFactory } from '../../infrastructure/skills';
import { Skill } from '../../infrastructure/skills/definition';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { GameActionType } from '../../redux/definition';
import { SkillType } from '../../definitions';

const levels = [1, 10, 20, 30];

const SkillTree = () => {
  const dispatch = useDispatch();
  const { character } = useMappedState((state) => ({
    character: state.game.character,
  }));
  const consumeSkillPoint = (skill: Skill) => {
    dispatch({ type: GameActionType.USE_SKILLPOINT, skill },)
  }
  const handleUseSkillPoint = (skill: Skill) => {
    consumeSkillPoint(skill);
  }

  if (!character) {
    return null;
  }
  const hasSkillPoint = character.SkillPoint > 0;
  const skillMaps = character.Skills;
  const characterLevel = character.Level;
  return (
    <div>
      <p>天赋点：{character.SkillPoint}</p>
      {levels.map(level => {
        const disabled = level > characterLevel;
        const skillConstructors = CharacterSkillFactory.get(character.Type, level);
        return <div key={level} className="skill-tree-container">
          <div className="skill-tree-level">等级{level}</div>
          {skillConstructors.map(skillConstructor => {
            const skill: Skill = new skillConstructor();
            const skillMapExist = skillMaps && skillMaps.find((m: { Type: SkillType; }) => m.Type === skill.type);
            const currentLevel = skillMapExist ? skillMapExist.Level : 0;
            const levelToDisplay = currentLevel > 0 ? currentLevel : 1;
            return <Popover key={skill.type} placement="bottom" content={
              <div>
                {skill.getHpCost(levelToDisplay) ? <p>生命消耗：{skill.getHpCost(levelToDisplay)}</p> : ''}
                {skill.getMpCost(levelToDisplay) ? <p>魔力消耗：{skill.getMpCost(levelToDisplay)}</p> : ''}
                <p>{skill.getDescription(levelToDisplay)}</p>
              </div>

            } title={skill.name}>
              <div className={"skill-tree-item " + (disabled ? 'skill-tree-item-disabled' : '')}>
                <img alt="icon" src={`${process.env.PUBLIC_URL}/assets/icons/skills/${skill.type}.png`} />
                {currentLevel > 0 && <div className="skill-tree-item-level">{currentLevel}</div>}
                {hasSkillPoint && !disabled && <Popconfirm key={skill.type}
                  title={`确定使用天赋点？`}
                  onConfirm={() => handleUseSkillPoint(skill)}
                  okText="是"
                  cancelText="否"
                >
                  <div className="skill-tree-item-plus">
                    <PlusOutlined type="plus" />
                  </div>
                </Popconfirm>}
              </div>
            </Popover>
          })}
        </div>
      })}
    </div>
  );
}

export default SkillTree;
