import { Statistics } from "./definition";

const StatisticsCenter = {
    getStats() {
        const rawStats = localStorage.getItem('stats');
        let stats = rawStats ? JSON.parse(rawStats): null;
        if (!stats) {
            stats = {
                Damage: 0,
                TakeDamage: 0,
                MonsterKilled: 0,
                ItemAmount: 0,
                EquipmentAmount: 0,
                HighestDamage: 0,
            }
        }

        return stats;
    },
   
    setStats(stats: Statistics) {
        localStorage.setItem('stats', JSON.stringify(stats));
    },

    clear() {
        const stats = {
            Damage: 0,
            TakeDamage: 0,
            MonsterKilled: 0,
            ItemAmount: 0,
            EquipmentAmount: 0,
            HighestDamage: 0,
        }
        localStorage.setItem('stats', JSON.stringify(stats));
    },

    accountDamage(damage: number) {
        let tmpStat = StatisticsCenter.getStats();
        tmpStat.Damage += damage;
        if (damage > tmpStat.HighestDamage) {
            tmpStat.HighestDamage = damage;
        }
        StatisticsCenter.setStats(tmpStat);
    },

    accountTakeDamage(takeDamage: number) {
        let tmpStat = StatisticsCenter.getStats();
        tmpStat.TakeDamage += takeDamage;
        StatisticsCenter.setStats(tmpStat);
    },

    killMonster() {
        let tmpStat = StatisticsCenter.getStats();
        tmpStat.MonsterKilled ++;
        StatisticsCenter.setStats(tmpStat);
    },

    dropItem() {
        let tmpStat = StatisticsCenter.getStats();
        tmpStat.ItemAmount ++;
        StatisticsCenter.setStats(tmpStat);
    },

    dropEquipement() {
        let tmpStat = StatisticsCenter.getStats();
        tmpStat.EquipmentAmount ++;
        StatisticsCenter.setStats(tmpStat);
    },
}

export default StatisticsCenter;
