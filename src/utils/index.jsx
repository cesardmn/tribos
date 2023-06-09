const formatTime = (time) => {
  if (time === null) return '00:00'

  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')

  return `${formattedMinutes}:${formattedSeconds}`
}

export { formatTime }
