import Button from "../../components/Buttons"
import styles from "./Button.module.scss"

export default function App() {
    return (
        <>
            <section className={styles.section}>
                <Button>Click me</Button>
                <Button primary>Primary Button</Button>
                <Button href="https://google.com" target="_blank">
                    Go to Google
                </Button>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
                <Button bordered>Bordered</Button>
                <Button rounded>Rounded</Button>
                <Button primary rounded>
                    Primary Rounded
                </Button>
                <Button onClick={() => alert("Clicked!")}>Click Alert</Button>
                <Button disabled onClick={() => alert("Should not show")}>
                    Disabled Button
                </Button>
                <Button loading onClick={() => console.log("Should not log")}>
                    Loading Button
                </Button>
                <Button className={styles.customBtn} primary>
                    Custom Styled
                </Button>
                <Button primary>
                    <span>📧</span> Send Email
                </Button>
            </section>
        </>
    )
}
