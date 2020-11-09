import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { Popconfirm, Popover } from 'antd';
import { Item } from '../../definitions';
import './Inventory.css';
import { GameActionType } from '../../redux/definition';

const Inventory = () => {
	const dispatch = useDispatch();
	const { character } = useMappedState((state) => ({
		character: state.game.character,
	}));
	const handleUseItem = (item: Item) => {
		dispatch({ type: GameActionType.USE_ITEM, item })
	}

	if (!character) {
		return (
			<div></div>
		)
	}
	const items = character.Items as Item[];
	return (
		<div className="item-drawer-container">
			{items.map(item => {
				return <Popconfirm key={item.Id}
					title={`确定使用${item.Name}？`}
					onConfirm={() => handleUseItem(item)}
					okText="是"
					cancelText="否"
				>
					<Popover placement="bottom" content={item.Description} title={item.Name}>
						<div className="item-drawer-item">
							<img alt="icon" src={item.Icon} />
							<span className="item-drawer-amount">{item.Amount}</span>
						</div>
					</Popover>
				</Popconfirm>
			})}
		</div>
	);
}

export default Inventory;

