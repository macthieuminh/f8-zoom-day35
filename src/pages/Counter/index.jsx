import { useState } from "react"
import styles from "./Counter.module.scss"
export default function Counter() {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount((prev) => prev + 1)
    }
    const decreaseCount = () => {
        setCount((prev) => prev - 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    const status = count > 0 ? "Dương" : count < 0 ? "Âm" : "Bằng không"
    return (
        <section>
            <div className={styles.counter}>
                <div className={styles.counter}>
                    <h1 className={styles.h1}>Counter</h1>
                    <div
                        className={
                            count > 0
                                ? styles.positive
                                : count < 0
                                ? styles.negative
                                : styles.zero
                        }>
                        {count}
                    </div>
                    <div className={styles["buttons-wrapper"]}>
                        <button className={styles.button} onClick={increaseCount}>
                            Tăng (+1)
                        </button>
                        <button className={styles.button} onClick={decreaseCount}>
                            Giảm (-1)
                        </button>
                        <button className={styles.button} onClick={resetCount}>
                            Reset (0)
                        </button>
                    </div>
                    <div className={styles.status}>{status}</div>
                </div>
            </div>
        </section>
    )
}

