import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { Link } from 'react-router-dom';
import './MapItem.css';
import { Button } from 'antd';
import { BattleActionType } from '../../../redux/definition';


const BattleMapItem = ({ item }) => {
    const dispatch = useDispatch();
    const { character } = useMappedState((state) => ({
        character: state.game.character,
    }));
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
    return (
        <div className="base-map-item battle-map-item">
            <div className="map-item-title">
                {item.Description}
            </div>
            <div className="map-item-content">
                <Link to='/battle'>
                    <Button title="开战" onClick={handleFight} className="map-item-btn" type="primary">开战</Button>
                </Link>
            </div>
        </div>
    )
}

export default BattleMapItem;
