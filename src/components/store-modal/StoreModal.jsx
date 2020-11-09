import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { Modal, Collapse, Popconfirm, Popover } from 'antd';
import { EquipmentLevel } from '../../definitions';
import EquipmentFactory from '../../infrastructure/equipments';
import Global from '../../config';
import MessageService from '../../utils/message';
import { GameActionType } from '../../redux/definition';
const Panel = Collapse.Panel;

const StoreModal = ({ storeContent, visible, onCancel }) => {
  const dispatch = useDispatch();
  const { character } = useMappedState((state) => ({
    character: state.game.character,
  }));
  const setCharacter = (character) => {
    dispatch({ type: GameActionType.SET_CHARACTER, character })
  };
  const setStore = (store) => {
    dispatch({ type: GameActionType.SET_STORE, store })
  }
  const buyItem = (item) => {
    if (character.Money < item.Price) {
      MessageService.error('金币不足！');
      return;
    }

    character.Money -= item.Price;
    const itemExist = character.Items.find((i => i.Type === item.Type));
    if (itemExist) {
      itemExist.Amount++;
    } else {
      character.Items.push({
        ...item,
        Amount: 1
      });
    }
    setCharacter(character);
    if (item.Amount > 1) {
      item.Amount--;
    } else {
      storeContent.items.splice(storeContent.items.indexOf(item), 1);
    }
    setStore(storeContent);
  }

  const buyEquipment = (equipment) => {
    if (character.Money < equipment.Price) {
      MessageService.error('金币不足！');
      return;
    }

    character.Money -= equipment.Price;
    character.Equipments.push({
      ...equipment
    });
    setCharacter(character);
    storeContent.equipments.splice(storeContent.equipments.indexOf(equipment), 1);
    setStore(storeContent);
  }

  const sellItem = (item) => {
    const price = Math.round(item.Price * Global.sellGoodsDiscount);
    character.Money += price;
    if (item.Amount > 1) {
      item.Amount--;
    } else {
      character.Items.splice(character.Items.indexOf(item), 1);
    }
    setCharacter(character);
  }

  const sellEquipment = (equipment) => {
    const price = Math.round(equipment.Price * Global.sellGoodsDiscount);
    character.Money += price;
    character.Equipments.splice(character.Equipments.indexOf(equipment), 1);
    setCharacter(character);
  }

  const getLevelColorClass = (level) => {
    switch (level) {
      case EquipmentLevel.Common:
        return 'weapon-level-common';
      case EquipmentLevel.Good:
        return 'weapon-level-good';
      case EquipmentLevel.Rare:
        return 'weapon-level-rare';
      case EquipmentLevel.God:
        return 'weapon-level-god';
      case EquipmentLevel.Legend:
        return 'weapon-level-legend';
      default:
        return '';
    }
  }

  const isLimited = (limit) => {
    return limit.indexOf(character.Type) === -1;
  }

  return (
    <Modal
      title={storeContent.name}
      visible={visible}
      footer={null}
      onCancel={onCancel}
    >
      <Collapse defaultActiveKey={['store', 'user']}>
        <Panel showArrow={false} header="商品" key="store">
          <div className="item-drawer-container">
            {storeContent.items.map((item) => {
              return <Popconfirm key={item.Id}
                title={`确定购买${item.Name}？`}
                onConfirm={() => buyItem(item)}
                okText="是"
                cancelText="否"
              >
                <Popover placement="bottom" content={
                  <div>
                    <p>价值：{item.Price}</p>
                    <p>{item.Description}</p>
                  </div>
                } title={item.Name}>
                  <div className="item-drawer-item">
                    <img alt="icon" src={item.Icon} />
                    <span className="item-drawer-amount">{item.Amount}</span>
                  </div>
                </Popover>
              </Popconfirm>
            })}
          </div>
          <div className="item-drawer-container">
            {storeContent.equipments.map((equipment) => {
              const actions = EquipmentFactory.getEquipment(equipment.Type);
              return <Popconfirm key={equipment.Id}
                title={`确定购买${equipment.Name}？`}
                onConfirm={() => buyEquipment(equipment)}
                okText="是"
                cancelText="否"
              >
                <Popover placement="top" content={actions?.getDescription()} title={<span className={getLevelColorClass(equipment.Level)}>{equipment.Level.toString()}的{equipment.Name}{equipment.Equipped ? '（已装备）' : ''}</span>}>
                  <div className={"item-drawer-item " + (equipment.Equipped ? "equipped" : isLimited(equipment.Limit) ? 'limited' : '')}>
                    <img alt="icon" className="equipment-img" src={equipment.Icon} />
                  </div>
                </Popover>
              </Popconfirm>
            })}
          </div>
        </Panel>
        <Panel showArrow={false} header={`你的物品　金币${character.Money}`} key="user">
          <div className="item-drawer-container">
            {character.Items.map((item) => {
              return <Popconfirm key={item.Id}
                title={`确定出售${item.Name}？你将获得${Math.round(item.Price * Global.sellGoodsDiscount)}金币`}
                onConfirm={() => sellItem(item)}
                okText="是"
                cancelText="否"
              >
                <Popover placement="bottom" content={
                  <div>
                    <p>价值：{item.Price}</p>
                    <p>{item.Description}</p>
                  </div>
                } title={item.Name}>
                  <div className="item-drawer-item">
                    <img alt="icon" src={item.Icon} />
                    <span className="item-drawer-amount">{item.Amount}</span>
                  </div>
                </Popover>
              </Popconfirm>
            })}
          </div>
          <div className="item-drawer-container">
            {character.Equipments.map((equipment) => {
              if (equipment.Equipped) {
                return null;
              }
              const actions = EquipmentFactory.getEquipment(equipment.Type);
              return <Popconfirm key={equipment.Id}
                title={`确定出售${equipment.Name}？你将获得${Math.round(equipment.Price * Global.sellGoodsDiscount)}金币`}
                onConfirm={() => sellEquipment(equipment)}
                okText="是"
                cancelText="否"
              >
                <Popover placement="bottom" content={actions?.getDescription()} title={<span className={getLevelColorClass(equipment.Level)}>{equipment.Level.toString()}的{equipment.Name}{equipment.Equipped ? '（已装备）' : ''}</span>}>
                  <div className={"item-drawer-item " + (equipment.Equipped ? "equipped" : isLimited(equipment.Limit) ? 'limited' : '')}>
                    <img alt="icon" className="equipment-img" src={equipment.Icon} />
                  </div>
                </Popover>
              </Popconfirm>
            })}
          </div>
        </Panel>
      </Collapse>
    </Modal>
  )


}

export default StoreModal;
