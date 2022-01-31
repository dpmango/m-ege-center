import dayjs from "dayjs"
import "dayjs/locale/ru"
import utc from "dayjs/plugin/utc"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.locale("ru")
dayjs.extend(utc)
dayjs.extend(relativeTime)

export const djs = (x) => {
  return dayjs(x)
}

export const minutesToTimestamp = (m) => {
  const hours = Math.floor(m / 60)
  const minutes = m % 60
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
}

export const generateTimeSlots = (fromMinutes, toMinutes, interval) => {
  const diff = Math.floor((toMinutes + interval - fromMinutes) / interval)

  const indexes = [...Array(diff).keys()]

  return indexes.map((i) => ({
    label: minutesToTimestamp(fromMinutes + i * interval),
    available: 1,
  }))
}
