import React from 'react';
import './MapItem.css';
import { Button } from 'antd';
import { useDispatch } from 'redux-react-hook';
import { GameActionType } from '../../../redux/definition';

const ExitMapItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleExit = () => {
        dispatch({ type: GameActionType.NEXT_MAP_LEVEL });
    }
    return (
        <div className="base-map-item exit-map-item">
            <div className="map-item-title">
                {item.Description}
            </div>
            <div className="map-item-content">
                <Button title="离开" onClick={handleExit} className="map-item-btn" type="primary">离开</Button>
            </div>
        </div>
    )
}

export default ExitMapItem;
