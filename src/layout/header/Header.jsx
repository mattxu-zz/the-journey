import React from 'react';
import { Layout } from 'antd';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { GameActionType } from '../../redux/definition';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
 
const AppHeader = ({ statusDrawerEnable }) => {
	const { character } = useMappedState((state) => ({
		character: state.game.character,
	}));
	const dispatch = useDispatch();
	const onOpen = () => {
		dispatch({ type: GameActionType.OPEN_CHARACTER_STATUS_DRAWER });
	}

	return (
		<Header>
			<div style={{ width: '100%', textAlign: 'right' }}>
				{character && statusDrawerEnable && (
					<UserOutlined onClick={onOpen} style={{ color: 'white', fontSize: 30 }} />
				)}
			</div>
		</Header>
	);
}

export default AppHeader;

