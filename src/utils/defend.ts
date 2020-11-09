import { Status } from '../definitions'
import { getWaveNumber, getDifficultyWaveNumber, judge } from './percentage'
import config from '../config'

export const getDefend = (status: Status): number => {
  const defend = status.Defend
  const waveNumber = getWaveNumber(defend, config.defendWave)
  return judge(0.5) ? defend + waveNumber : defend - waveNumber
}

export const getMonsterDefend = (status: Status): number => {
  const defend = status.Defend
  const waveNumber = getDifficultyWaveNumber(defend, config.defendWave, config.difficulty)
  return judge(0.5) ? defend + waveNumber : defend - waveNumber
}

export const calculateDefendPercent = (defend: number): number => {
  return 1 - (0.005 * defend) / (1 + 0.005 * Math.abs(defend));
}