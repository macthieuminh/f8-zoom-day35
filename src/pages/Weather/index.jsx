import { useState } from "react"
import Styles from "./Weather.module.scss"

function Weather() {
    const weatherData = {
        hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng ☀️ ", humidity: 65 },
        hcm: { city: "Sài Gòn", temp: 32, weather: "Có mây 🌤️ ", humidity: 78 },
        danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ 🌧️", humidity: 82 },
    }

    const [location, setLocation] = useState("")
    const [weather, setWeather] = useState(weatherData)

    const refreshWeather = () => {
        const newData = Object.fromEntries(
            Object.entries(weather).map(([key, data]) => {
                const randomTemp = data.temp + (Math.floor(Math.random() * 11) - 5)
                const randomHumidity =
                    data.humidity + (Math.floor(Math.random() * 11) - 5)

                return [
                    key,
                    {
                        ...data,
                        temp: Math.max(0, randomTemp),
                        humidity: Math.min(100, Math.max(0, randomHumidity)),
                    },
                ]
            })
        )
        setWeather(newData)
    }

    return (
        <section className={Styles.section}>
            <h1 className={Styles.h1}>Weather</h1>
            {location && (
                <article className={Styles.article}>
                    <h2 className={Styles.h2}>
                        {" "}
                        Tên thành phố: {weather[location].city}
                    </h2>
                    <p className={Styles.p}>Nhiệt độ: {weather[location].temp} (°C)</p>
                    <p className={Styles.p}>
                        Tình trạng thời tiết: {weather[location].weather}
                    </p>
                    <p>Độ ẩm {weather[location].humidity} (%)</p>
                </article>
            )}

            <select
                className={Styles.select}
                name=""
                id=""
                onChange={(e) => {
                    setLocation(e.target.value)
                }}>
                <option value="">-- Chọn thành phố --</option>
                {Object.entries(weather).map(([key, data]) => (
                    <option key={key} value={key}>
                        {data.city}
                    </option>
                ))}
            </select>
            <button className={Styles.btn} onClick={refreshWeather}>
                Làm mới
            </button>
        </section>
    )
}

export default Weather
