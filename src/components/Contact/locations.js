import { getLineByStation, getStationByName } from "@/pages/JSON_data/moscow-metro"

const balloonMeta = {
  address: "ул. Гостиничная, д. 3",
  phone: "ежедневно с 10:00 до 19:00",
  hours: "+7 (495) 646-85-92",
}

const stations = [
  ["Вернадского", "Проспект Вернадского"],
  ["Багратионовская", "Багратионовская"],
  ["Измайловская", "Измайловская"],
  ["Октябрьское поле", "Октябрьское поле"],
  ["Рязанский проспект", "Рязанский проспект"],
  ["Сокол", "Сокол"],
  ["Орехово", "Орехово"],
  ["Аннино", "Аннино"],
  ["Перово", "Перово"],
  ["Братиславская", "Братиславская"],
  ["Строгино", "Строгино"],
  ["Владыкино", "Владыкино"],
  ["Беляево", "Беляево"],
]

export default stations.map(([title, station_name], idx) => {
  const line = getLineByStation(station_name)
  return {
    id: idx,
    name: `ЕГЭ-Центр ${title}`,
    line,

    station: {
      ...getStationByName(station_name),
      ...{
        title: `ЕГЭ-Центр ${title}`,
        hex_color: line.hex_color,
        meta: balloonMeta,
      },
    },
  }
})
