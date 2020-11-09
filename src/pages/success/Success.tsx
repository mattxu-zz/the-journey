import React from 'react';
import AppLayout from '../../layout';
import './Success.css';
import StatisticsCenter from '../../infrastructure/statistics';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Success = () => {
    const stats = StatisticsCenter.getStats();
    return (
        <AppLayout>
            <div className="success">
                <h1 className="success-title">游戏通关</h1>
                <p>总伤害：{stats.Damage}</p>
                <p>总承受伤害：{stats.TakeDamage}</p>
                <p>最大伤害：{stats.HighestDamage}</p>
                <p>击杀怪物：{stats.MonsterKilled}</p>
                <p>获取物品数：{stats.ItemAmount}</p>
                <p>获取装备数：{stats.EquipmentAmount}</p>
                <Link to="/">
                    <Button title="返回首页" type="primary">返回首页</Button>
                </Link>
            </div>
        </AppLayout>
    )
}

export default Success;
