import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { Link } from 'react-router-dom';
import './MapItem.css';
import { Button } from 'antd';
import { BattleActionType, GameActionType } from '../../../redux/definition';


const BossBattleMapItem = ({ item }) => {
  const dispatch = useDispatch();
  const { character } = useMappedState((state) => ({
    character: state.game.character,
  }))
  const onExit = () => {
    dispatch({ type: GameActionType.NEXT_MAP_LEVEL });
  };
  const onFight = (character, monster, mapItemId) => {
    dispatch({
      type: BattleActionType.INIT_BATTLE,
      character: character,
      monster: monster,
      mapItemId: mapItemId
    });
  }
  const handleFight = () => {
    onFight(character, item.Content, item.Id);
  }
  const handleExit = () => {
    onExit();
  }
  return (
    <div className="base-map-item boss-battle-map-item">
      <div className="map-item-title">
        {item.Description}
      </div>
      <div className="map-item-content">
        {
          !item.Passed &&
          <Link to='/battle'>
            <Button title="开战" onClick={handleFight} className="map-item-btn" type="primary">开战</Button>
          </Link>
        }
        {
          item.Passed &&
          <Button title="离开" onClick={handleExit} className="map-item-btn" type="primary">离开</Button>
        }
      </div>
    </div>
  )
}

export default BossBattleMapItem;
