import React from 'react';
import { Layout } from 'antd';
import './Footer.css'
const { Footer } = Layout;

const AppFooter = () => (
    <Footer className="app-footer" style={{ textAlign: 'center' }}>
        Powerd by Matt Xu ©2019
    </Footer>
);

export default AppFooter;

