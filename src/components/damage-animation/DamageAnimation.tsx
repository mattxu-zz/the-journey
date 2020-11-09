import React from 'react';
import './DamageAnimation.css';
import { BattleDamage, DamageType } from '../../redux/definition';
const DamageAnimation = ({ damage }: { damage: BattleDamage }) => {
    const getDamageStyle = (type: DamageType): string => {
        switch (type) {
            case DamageType.Bloodsucking:
                return 'bloodsucking';
            case DamageType.Critical:
                return 'critical critical-damage';
            case DamageType.Common:
            default:
                return '';
        }
    }
    if (!damage) {
        return null;
    }
    return (
        <div className="damage-transition">
            <span className={getDamageStyle(damage.type)}>{damage.value}</span>
        </div>
    );
}

export default DamageAnimation;
