const calculateRewardPoints = (cost) => {
  let rewardPoints = 0;
  const OVER_100_BONUS = 2;
  const OVER_50_BONUS = 1;

  switch (true) {
    case cost > 100:
      rewardPoints += OVER_100_BONUS * (cost - 100);
      rewardPoints += 50;
      return rewardPoints

    case cost <= 100 && cost > 50:
      rewardPoints += OVER_50_BONUS * (cost - 50);
      return rewardPoints

    default:
      return rewardPoints
  }
}

export default calculateRewardPoints