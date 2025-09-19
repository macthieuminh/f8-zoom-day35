import { useEffect, useState, useCallback } from "react"
import styles from "./ProductList.module.scss"

export default function ProductList() {
    const [list, setList] = useState(null)
    const [view, setView] = useState("grid")
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((data) => setList(data))
            .catch(console.error)
    }, [])

    useEffect(() => {
        if (selected) {
            const prev = document.body.style.overflow
            document.body.style.overflow = "hidden"
            return () => {
                document.body.style.overflow = prev
            }
        }
    }, [selected])

    const openModal = useCallback((post) => setSelected(post), [])
    const closeModal = useCallback(() => setSelected(null), [])

    useEffect(() => {
        if (!selected) return
        const onKey = (e) => {
            if (e.key === "Escape") closeModal()
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [selected, closeModal])

    if (!list) return <p className={styles.loading}>Đang tải…</p>

    return (
        <section className={styles.wrapper}>
            <header className={styles.toolbar}>
                <div
                    className={styles.viewToggle}
                    role="group"
                    aria-label="Chế độ hiển thị">
                    <button
                        className={`${styles.toggleBtn} ${
                            view === "grid" ? styles.active : ""
                        }`}
                        onClick={() => setView("grid")}
                        aria-pressed={view === "grid"}>
                        Grid
                    </button>
                    <button
                        className={`${styles.toggleBtn} ${
                            view === "list" ? styles.active : ""
                        }`}
                        onClick={() => setView("list")}
                        aria-pressed={view === "list"}>
                        List
                    </button>
                </div>
            </header>
            <h1 className={styles.heading}>Danh sách bài viết</h1>

            <div className={view === "grid" ? styles.grid : styles.list}>
                {list.map((item) => (
                    <article key={item.id} className={styles.card}>
                        <div className={styles.row}>
                            <span className={styles.label}>ID</span>
                            <span className={styles.value}>{item.id}</span>
                        </div>

                        <h2 className={styles.title} title={item.title}>
                            {item.title}
                        </h2>

                        <p className={styles.body} title={item.body}>
                            {truncate(item.body, 100)}
                        </p>

                        <div className={styles.actions}>
                            <button
                                className={styles.btn}
                                onClick={() => openModal(item)}>
                                Xem chi tiết
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {selected && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="post-title"
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.modalClose}
                            onClick={closeModal}
                            aria-label="Đóng">
                            ×
                        </button>
                        <div className={styles.modalHeader}>
                            <span className={styles.badge}>ID {selected.id}</span>
                            <h3 id="post-title" className={styles.modalTitle}>
                                {capitalizeWords(selected.title)}
                            </h3>
                        </div>
                        <div className={styles.modalBody}>
                            <p className={styles.modalText}>{selected.body}</p>
                        </div>
                        <div className={styles.modalFooter}>
                            <button className={styles.btn} onClick={closeModal}>
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

function truncate(str, max = 100) {
    if (!str) return ""
    if (str.length <= max) return capitalizeWords(str)
    return capitalizeWords(str.slice(0, max).trim()) + "…"
}
function capitalizeWords(str) {
    return str.replace(/\b\w/g, (c) => c.toUpperCase())
}
