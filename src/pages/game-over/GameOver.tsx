import React from 'react';
import AppLayout from '../../layout';
import './GameOver.css';
import StatisticsCenter from '../../infrastructure/statistics';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const GameOver = () => {
    const stats = StatisticsCenter.getStats();
    return (
        <AppLayout>
            <div className="game-over">
                <h1 className="game-over-title">游戏结束</h1>
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

export default GameOver;
