const formatTime = (time) => {
  if (time === null) return '00:00'

  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')

  return `${formattedMinutes}:${formattedSeconds}`
}

const formatWatch = (time) => {
  if (time === null) return '00:00:00'

  const minutes = Math.floor(time / 60000)
  const seconds = Math.floor((time % 60000) / 1000)
  const milliseconds = time % 1000

  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')
  const formattedMilliseconds = String(milliseconds)
    .padStart(3, '0')
    .slice(0, 2)

  return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`
}

export { formatTime, formatWatch }
