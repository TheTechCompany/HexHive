export const getExpiresAt = (seconds: number) => {
  const d = new Date()
  d.setSeconds(d.getSeconds() + seconds)
  return d
}
