import styles from '../styles/Home.module.css'

export default function Home() {
    
    function myFunction(x) {
        x.currentTarget.classList.toggle(styles.change);
        console.log("TOgllign");
    }
    return (
        <div className={styles.container}>
            <div className={styles.hamburger} onClick={myFunction}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>

            <main className={styles.pages}>
                <section>
                    <h2>Section 1</h2>
                </section>
                <section>
                    <h2>Section 20</h2>
                </section>
                <section>
                    <h2>Section 3</h2>
                </section>
                <section>
                    <h2>Section 4</h2>
                </section>
            </main>
        </div>
    )
}

