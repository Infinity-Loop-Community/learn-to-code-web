type AttemptResultResponse = {
  pass: boolean
  questionCorrectRatio: number
  timeTakenMins: number
  comparedToTimeAveragePercentage: number
  comparedToCorrectRatioLastTryPercentage: number
}

export default AttemptResultResponse
