import { Status } from '../definitions'
import { getWaveNumber, getDifficultyWaveNumber, judge } from './percentage'
import config from '../config'

export const getDamage = (status: Status): number => {
  const attack = status.Attack
  const waveNumber = getWaveNumber(attack, config.damageWave)
  return judge(0.5) ? attack + waveNumber : attack - waveNumber
}

export const getMonsterDamage = (status: Status): number => {
  const attack = status.Attack
  const waveNumber = getDifficultyWaveNumber(attack, config.damageWave, config.difficulty)
  return judge(0.5) ? attack + waveNumber : attack - waveNumber
}
