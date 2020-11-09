import React, { useState } from 'react';
import './MapItem.css';
import { Button } from 'antd';
import { StoreModal } from '../../../components';


const StoreMapItem = ({ item }) => {
  const [storeVisible, setStoreVisible] = useState(false);
  const handleEnter = () => {
    setStoreVisible(true)
  }
  const handleClose = () => {
    setStoreVisible(false)
  }
  return (
    <div className="base-map-item store-map-item">
      <div className="map-item-title">
        {item.Description}
      </div>
      <div className="map-item-content">
        <Button title="进入" onClick={handleEnter} className="map-item-btn" type="primary">进入</Button>
      </div>
      <StoreModal
        storeContent={item.Content}
        visible={storeVisible}
        onCancel={handleClose}
      />
    </div>
  )
}

export default StoreMapItem;
