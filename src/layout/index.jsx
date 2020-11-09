import React from 'react';
import { Layout, Card } from 'antd';
import AppHeader from './header/Header';
import AppFooter from './footer/Footer';
import { CharacterStatusDrawer } from '../components';
import './index.css'

const { Content } = Layout;

const AppLayout = ({ children, statusDrawerEnable = false }) => {
  return (
    <Layout>
      <AppHeader statusDrawerEnable={statusDrawerEnable} />
      <Content className="app-content">
        <Card className="container">
          {children}
        </Card>
      </Content>
      <AppFooter />
      <CharacterStatusDrawer />
    </Layout>
  );
}

export default AppLayout;
