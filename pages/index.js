import styles from "../styles/Home.module.css";

export default function Home() {
  function myFunction(x) {
    x.currentTarget.parentNode.classList.toggle(styles.show);
    x.currentTarget.classList.toggle(styles.change);
  }

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div className={styles.hamburger} onClick={myFunction}>
          <div className={styles.bar1}> </div>{" "}
          <div className={styles.bar2}> </div>{" "}
          <div className={styles.bar3}> </div>{" "}
        </div>{" "}
        <div className={styles.dropdown__content}>
          <div>
            <a> HOME </a>{" "}
          </div>{" "}
          <div>
            <a> WORK </a>{" "}
          </div>{" "}
          <div>
            <a> ABOUT </a>{" "}
          </div>{" "}
          <div>
            <a> CONTACT </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <main className={styles.pages}>
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Dongle&display=swap);{" "}
          @import
          url(https://fonts.googleapis.com/css2?family=Dongle&family=Lexend:wght@500&display=swap);
        </style>{" "}
        <section className={styles.section__1}>
          <h2> Shoshana Yaswen </h2> <h3> Software Developer </h3>{" "}
        </section>{" "}
        <section className={styles.section__2}>
          <h2> WORK </h2>{" "}
        </section>{" "}
        <section className={styles.section__3}>
          <h2> ABOUT </h2>{" "}
        </section>{" "}
        <section className={styles.section__4}>
            <h2> CONTACT </h2>
            <label htmlFor="fname">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
            ></input>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter email"
            ></input>
                <label htmlFor="email">Message</label>
                <input
                type="text"
                id="message"
                name="message"
                placeholder="Enter message"
            ></input>
        </section>
        <section className={styles.section__5}>
          <h2> LAST SECTION </h2>{" "}
        </section>{" "}
      </main>{" "}
    </div>
  );
}
