import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { Popconfirm, Popover } from 'antd';
import { Equipment, EquipmentLevel, EquipmentPlace, RoleType } from '../../definitions';
import './EquipmentBar.css';
import EquipmentFactory from '../../infrastructure/equipments';
import { GameActionType } from '../../redux/definition';

const EquipmentBar = () => {
	const dispatch = useDispatch();
	const { character } = useMappedState((state) => ({
		character: state.game.character,
	}));
	const takeOn = (equipment: Equipment) => {
		if (isLimited(equipment.Limit)) {
			return;
		}
		if (equipment.Equipped) {
			return;
		}
		dispatch({ type: GameActionType.TAKEON_EQUIPMENT, equipment });
	}

	const takeOff = (place: EquipmentPlace, equipment: Equipment) => {
		dispatch({ type: GameActionType.TAKEOFF_EQUIPMENT, equipment, place });
	}

	const getLevelColorClass = (level: EquipmentLevel): string => {
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

	const renderEquipmentWear = (place: EquipmentPlace, equipment: Equipment) => {
		const actions = EquipmentFactory.getEquipment(equipment.Type);
		return <Popconfirm key={place}
			title={`确定脱下${equipment.Name}？`}
			onConfirm={() => takeOff(place, equipment)}
			okText="是"
			cancelText="否"
		>
			<Popover placement="top" content={actions?.getDescription()} title={<span className={getLevelColorClass(equipment.Level)}>{equipment.Level.toString()}的{equipment.Name}</span>}>
				<div className="equipment-wear">
					<img alt="equipment-icon" className="equipment-img" src={equipment.Icon} />
				</div>
			</Popover>
		</Popconfirm>
	}

	const isLimited = (limit: RoleType[]) => {
		return limit.indexOf(character.Type) === -1;
	}

	if (!character) {
		return (
			<div></div>
		)
	}
	const equipments = character.Equipments as Equipment[];
	return (
		<div className="equipment-bar-container">
			<img alt="human-body" className="equipment-bar-body" src={`${process.env.PUBLIC_URL}/assets/icons/human-body.png`} />
			<div className="equipment equipment-left-hand">
				<div className="equipment-empty">
					{character.Wearing.LeftHand &&
						renderEquipmentWear(EquipmentPlace.LeftHand, character.Wearing.LeftHand)}
				</div>
			</div>
			<div className="equipment equipment-right-hand">
				<div className="equipment-empty">
					{character.Wearing.RightHand &&
						renderEquipmentWear(EquipmentPlace.RightHand, character.Wearing.RightHand)}
				</div>
			</div>
			<div className="equipment equipment-body">
				<div className="equipment-empty">
					{character.Wearing.Body &&
						renderEquipmentWear(EquipmentPlace.Body, character.Wearing.Body)}
				</div>
			</div>
			<div className="item-drawer-container">
				{equipments.map(equipment => {
					const actions = EquipmentFactory.getEquipment(equipment.Type);
					return <Popconfirm key={equipment.Id}
						title={`确定装备${equipment.Name}？`}
						onConfirm={() => takeOn(equipment)}
						okText="是"
						cancelText="否"
					>
						<Popover placement="top" content={actions?.getDescription()} title={<span className={getLevelColorClass(equipment.Level)}>{equipment.Level.toString()}的{equipment.Name}{equipment.Equipped ? '（已装备）' : ''}</span>}>
							<div className={"item-drawer-item " + (equipment.Equipped ? "equipped" : isLimited(equipment.Limit) ? 'limited' : '')}>
								<img alt="equipment-icon" className="equipment-img" src={equipment.Icon} />
							</div>
						</Popover>
					</Popconfirm>
				})}
			</div>
		</div>
	);
}

export default EquipmentBar;
