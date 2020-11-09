export const judge = (percent: number): boolean => {
  if (percent <= 0) {
    return false;
  }
  if (percent >= 1) {
    return true;
  }
  const upper = 100 * percent;
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber > upper ? false : true;
}

export const getWaveNumber = (orgin: number, waveRate: number): number => {
  const wave = Math.floor(orgin * waveRate);
  const randomNumber = Math.round(Math.random() * wave);
  return randomNumber;
}

export const getDifficultyWaveNumber = (orgin: number, waveRate: number, difficulty: number): number => {
  const wave = Math.floor(orgin * waveRate * difficulty);
  const randomNumber = Math.round(Math.random() * wave);
  return randomNumber;
}
