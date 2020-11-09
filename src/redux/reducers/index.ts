import { combineReducers } from 'redux';
import { battle } from './battle';
import { game } from './game';

export default combineReducers({
    battle,
    game
})