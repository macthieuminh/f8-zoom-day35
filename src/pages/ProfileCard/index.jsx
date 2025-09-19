import { useEffect, useState } from "react"
import styles from "./ProfileCard.module.scss"
export default function ProfileCard() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch(console.error)
    }, [])

    if (!user) return <p>Đang tải…</p>
    return (
        <section className={styles.wrapper}>
            <article className={styles.card}>
                <h2 className={styles.name} title={user.name}>
                    {user.name}
                </h2>

                <div className={styles.row}>
                    <span className={styles.label}>Username</span>
                    <span className={styles.value}>{user.username}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Email</span>
                    <a
                        className={styles[("value", "link")]}
                        href={`mailto:${user.email}`}>
                        {user.email}
                    </a>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Phone</span>
                    <span className={styles.phone}>{user.phone}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Address</span>
                    <span className={styles.value}>
                        {user.address?.street}, {user.address?.city}
                    </span>
                </div>
            </article>
        </section>
    )
}