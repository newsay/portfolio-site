import styles from "../styles/Home.module.css";

export default function Home() {
  function myFunction(x) {
    x.currentTarget.parentNode.classList.toggle(styles.show);
    x.currentTarget.classList.toggle(styles.change);
  }

  return (
    <div className={styles.container}>
              <title>Work in progress</title>


      <main className={styles.pages}>
        <section className={styles.links}>
          <div>
            <a href="https://github.com/newsay/"><img className={styles.icon} src="github.png" /></a>
            <a href="http://www.linkedin.com/in/newsay/"><img className={styles.icon} src="linkedin.png" /></a>
            <a href="mailto:syaswen@gmail.com"><img className={styles.icon} src="mail.png" /></a>
            <a href="https://twitter.com/y_swen/"><img className={styles.icon} src="twitter.png" /></a>
          
          <div className={styles.dropdown}>
        <div className={styles.hamburger} onClick={myFunction}>
          <div className={styles.bar1}> </div>{" "}
          <div className={styles.bar2}> </div>{" "}
          <div className={styles.bar3}> </div>{" "}
        </div>{" "}
        <div className={styles.dropdown__content}>
          <div>
            <a href="#home"> HOME </a>{" "}
          </div>{" "}
          <div>
            <a href="#work"> WORK </a>{" "}
          </div>{" "}
          <div>
            <a href="#about"> ABOUT </a>{" "}
          </div>{" "}
          <div>
            <a href="#contact"> CONTACT </a>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </div>
        </section>
        <section className={styles.home}>
          <img className={styles.cat} src="cat.jpg" />
          <h2 id="home"> Shoshana Yaswen </h2> <h3> Software Developer </h3>{" "}
        </section>{" "}
      <section className={styles.work}>
          <h2 id="work"> WORK </h2>
        </section>
        <section className={styles.about}>
          <h2 id="about"> ABOUT </h2>{" "}
        </section>{" "}
        <section className={styles.contact}>
          <h2 id="contact"> CONTACT </h2>
          <label htmlFor="name">Name</label>
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
          <textarea>
            Enter message
          </textarea>
          <a className={styles.copyright}> <h2>© SHOSHANA YASWEN 2022</h2></a>
        </section>
      </main>
    </div>
  );
}
