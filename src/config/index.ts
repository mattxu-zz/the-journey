import { RoleType } from "../definitions";

const config = {
  damageWave: 0.1,
  defendWave: 0.1,
  /**
   * 0.easy
   * 1.normal
   * 2.hard
   * above: nightmare!!
   * @static
   * @memberof Global
   */
  difficulty: 0,

  /**
   * Experience needs for level 1 to level up
   * @static
   * @memberof Global
   */
  experienceRate: 100,
  /**
   * Experience demands times this rate when level up
   * @static
   * @memberof Global
   */
  levelUpExperienceRate: 1.2,

  levelUpStatusImproveNumber: {
    [RoleType.Assasin]: {
      HP: 100,
      MP: 10,
      Attack: 20,
      Defend: 10
    },
    [RoleType.Knight]: {
      HP: 150,
      MP: 20,
      Attack: 15,
      Defend: 30
    },
    [RoleType.Warrior]: {
      HP: 120,
      MP: 0,
      Attack: 20,
      Defend: 20
    }
  },

  statusPointPerLevel: 5,

  statusPointConversionRate: {
    HP: 20,
    MP: 10,
    Attack: 5,
    Defend: 5
  },

  initCriticalDamage: 1.5,

  sellGoodsDiscount: 0.2,

  messageDuration: 3,
}

export default config;