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
export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {navItems.map((item, index) => (
                    <li className={styles.nav__item} key={index}>
                        <NavLink className={styles.nav__item__link} to={item.to}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
