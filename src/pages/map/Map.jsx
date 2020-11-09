import React, { useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import AppLayout from '../../layout';
import './Map.css';
import { Row, Col } from 'antd';
import MapItem from './map-item/MapItem';
import { useHistory } from 'react-router-dom';
import { GameActionType } from '../../redux/definition';

const Map = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { map, success } = useMappedState((state) => ({
    map: state.game.map,
    success: state.game.success
  }))

  useEffect(() => {
    const onInitMap = () => {
      dispatch({ type: GameActionType.INIT_MAP });
    }
    onInitMap();
  }, [dispatch]);

  const onSuccess = () => {
    history.push('/success');
  }
  if (success) {
    onSuccess();
  }
  return (
    <AppLayout statusDrawerEnable={true}>
      {
        map &&
        <div className="map">
          <div className="map-title">第{map.Level}层</div>
          <Row gutter={16}>
            {
              map.Items.map((item) => {
                return <Col key={item.Id} span={8}><MapItem item={item} /></Col>
              })
            }
          </Row>
        </div>
      }
    </AppLayout>
  )
}

export default Map;
