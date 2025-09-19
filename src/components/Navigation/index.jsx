import { NavLink } from "react-router"
import styles from "./Navigation.module.scss"

const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/counter",
        title: "Counter App",
    },
    {
        to: "/todo",
        title: "Todo List",
    },
    {
        to: "/profilecard",
        title: "Profile Card",
    },
    {
        to: "/productlist",
        title: "Product List",
    },

    {
        to: "/comment",
        title: "Comment App",
    },
    {
        to: "/weather",
        title: "Weather App",
    },
    {
        to: "/buttons",
        title: "Buttons",
    },
]
function Navigation() {
    return (
        <nav className={styles.wrapper}>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) => {
                                isActive ? styles.active : ""
                            }}
                            to={item.to}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
