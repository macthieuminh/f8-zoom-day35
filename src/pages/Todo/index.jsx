import { useState } from "react"
import styles from "./Todo-List.module.scss"
let uniqId = 0

export default function Todo() {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState([])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            setTodos([...todos, { id: uniqId++, text: inputValue, completed: false }])
            setInputValue("")
        }
    }

    const deleteTask = (e) => {
        const id = +e.target.closest("[data-id]").dataset.id
        setTodos((prev) => prev.filter((t) => t.id !== id))
    }
    function RenderTodos() {
        if (todos.length <= 0) {
            return "Chưa có task nào. Hãy thêm task đầu tiên!"
        } else {
            return (
                <div className={styles.list}>
                    {todos.length === 0 ? (
                        <p className={styles.empty}>
                            Chưa có task nào. Hãy thêm task đầu tiên!
                        </p>
                    ) : (
                        todos.map((todo) => (
                            <div
                                data-id={todo.id}
                                className={styles.todoWrapper}
                                key={todo.id}>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleCompleted(todo.id)}
                                    aria-label="Đánh dấu hoàn thành"
                                />
                                <h3 className={todo.completed ? styles.completed : ""}>
                                    {todo.text}
                                </h3>
                                <button
                                    onClick={deleteTask}
                                    className={styles.deleteBtn}
                                    aria-label={`Xoá task ${todo.text}`}>
                                    Xoá
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )
        }
    }

    const toggleCompleted = (id) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        )
    }

    return (
        <section>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Nhập task mới..."
                        className={styles.input}
                    />
                    <button type="submit" className={styles.addBtn}>
                        Thêm
                    </button>
                </form>
                <RenderTodos />
            </div>
        </section>
    )
}
