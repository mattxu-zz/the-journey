import { BattleActionType, GameActionType } from '../../redux/definition';

const useBattleDispatch = (dispatch) => {
	return {
		onAttack: () => {
			dispatch({ type: BattleActionType.LOCK });
			dispatch({ type: BattleActionType.CHARACTER_ATTACK });
			setTimeout(() => {
				dispatch({ type: BattleActionType.MONSTER_ATTACK })
			}, 500);
		},
		onGameOver: () => {
			dispatch({ type: GameActionType.GAME_OVER })
		},
		onPassMapItem: (mapItemId) => {
			dispatch({ type: GameActionType.PASS_MAP_ITEM, mapItemId: mapItemId });
			dispatch({ type: GameActionType.UNLOCK_MAP });
		},
		onGainExp: (exp) => {
			dispatch({ type: GameActionType.GAIN_EXP, exp: exp });
		},
		onDropItem: (monsterType) => {
			dispatch({ type: GameActionType.DROP_ITEM, monsterType: monsterType});
		},
		onSetStatus: (status) => {
			dispatch({ type: GameActionType.SET_CHARACTER_STATUS, status: status});
		},
		onGainMoney: (money) => {
			dispatch({ type: GameActionType.GAIN_MONEY, money })
		},
		onUseSkill: (skill, skillMap) => {
			dispatch({ type: BattleActionType.LOCK });
			dispatch({ type: BattleActionType.CHARACTER_USE_SKILL, skill, skillMap });
			setTimeout(() => {
				dispatch({ type: BattleActionType.MONSTER_ATTACK })
			}, 500);
		}
	}
}

export default useBattleDispatch;
