import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import './MapItem.css';
import { MapType } from '../../../infrastructure/map-builder/definition';
import BattleMapItem from './BattleMapItem';
import ExitMapItem from './ExitMapItem';
import BossBattleMapItem from './BossBattleMapItem';
import StoreMapItem from './StoreMapItem';
import { GameActionType } from '../../../redux/definition';

const MapItem = ({ item }) => {
  const dispatch = useDispatch();
  const { mapLocked } = useMappedState((state) => ({
    mapLocked: state.game.mapLocked
  }));

  const onLockMap = () => {
    dispatch({ type: GameActionType.LOCK_MAP });
  };
  const onShowMapItem = (mapItemId) => {
    dispatch({ type: GameActionType.SHOW_MAP_ITEM, mapItemId: mapItemId });
  }

  const show = () => {
    if ((!item.Show && mapLocked) || item.Passed) {
      return;
    }
    onShowMapItem(item.Id);
    if (item.Type === MapType.Exit || item.Type === MapType.BossBattle || item.Type === MapType.Store) {
      return;
    }
    // 取消注释启用地图锁定
    onLockMap();
  }
  const renderMapItem = () => {
    switch (item.Type) {
      case MapType.Battle: {
        return <BattleMapItem item={item} />
      }
      case MapType.BossBattle: {
        return <BossBattleMapItem item={item} />
      }
      case MapType.Exit: {
        return <ExitMapItem item={item} />
      }
      case MapType.Store: {
        return <StoreMapItem item={item} />
      }
      default: {
        return null;
      }
    }
  }
  return (
    <div className={
      'map-item ' +
      (item.Show ? '' : 'map-item-hide')}>
      {!item.Show ?
        <div onClick={show} className={
          "question-mark " +
          ((!item.Show && mapLocked) || (item.Type !== MapType.BossBattle && item.Type !== MapType.Store && item.Passed) ? 'disabled' : '')
        }>?</div> :
        (renderMapItem())
      }
    </div>
  )
}

export default MapItem;
