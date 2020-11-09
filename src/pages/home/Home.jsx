import React from 'react';
import './Home.css';
import { Row, Col, Button, Popconfirm } from 'antd';
import MessageService from '../../utils/message';
import { useDispatch } from 'redux-react-hook';
import { useHistory } from 'react-router-dom';
import { BattleActionType, GameActionType } from '../../redux/definition';
import StatisticsCenter from '../../infrastructure/statistics';
import AppLayout from '../../layout';

const Home = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const startNewGame = () => {
		dispatch({ type: GameActionType.START_NEW_GAME });
		dispatch({ type: BattleActionType.CLEAR_BATTLE });
		StatisticsCenter.clear();
	}
	const startJourny = () => {
		startNewGame();
		history.push('/character/create');
	}
	const loadJourny = () => {
		const state = localStorage.getItem('state');
		if (!state || !JSON.parse(state).game.character) {
			MessageService.error("暂无存档！");
			return;
		}
		history.push('/map');
	}
	return (
		<AppLayout>
			<div className="home">
				<Row gutter={16}>
					<Col className="text-center" span={8}>
						<Popconfirm
							title="开始新游戏后将会清空记录，确定继续？"
							onConfirm={startJourny}
							okText="是"
							cancelText="否"
						>
							<Button title="开始旅程" className="entrance-btn" type="primary">开始旅程</Button>
						</Popconfirm>
					</Col>
					<Col className="text-center" span={8}>
						<Button title="加载旅途" onClick={loadJourny} className="entrance-btn" type="primary">加载旅途</Button>
					</Col>
					<Col className="text-center" span={8}>
						<Button title="旅途设置" className="entrance-btn" type="primary">旅途设置</Button>
					</Col>
				</Row>
			</div>
		</AppLayout>
	)
}

export default Home;
