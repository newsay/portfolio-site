import styles from "../styles/Home.module.css";

export default function Home() {
  function myFunction(x) {
    x.currentTarget.parentNode.classList.toggle(styles.show);
    x.currentTarget.classList.toggle(styles.change);
  }

  return (
    <div className={styles.container}>
      <title>Shoshana Yaswen | Work in progress</title>


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
          <div className={styles.namebox}>
          <div className={styles.name}><text id="home">SHOSHANA YASWEN</text></div>
          <div className={styles.tagline}><text><i> Software Developer in Washington, D.C.</i></text></div>
          </div>
        </section>{" "}
        <section className={styles.work}>
          <div className={styles.workbox}>
            <text>Phasellus finibus cursus convallis. 
              Aliquam tempus volutpat hendrerit. 
              </text>
              <div className={styles.langs}>
              <img className={styles.lang} src="java.png"/>
              <img className={styles.lang} src="html.png"/>
              <img className={styles.lang} src="css.png"/>
              <img className={styles.lang} src="js.png"/>
              <img className={styles.lang} src="js.png"/>
              <img className={styles.lang} src="js.png"/>
              <img className={styles.lang} src="js.png"/>
              <img className={styles.lang} src="js.png"/>
              <img className={styles.lang} src="aws.png"/>
              <img className={styles.lang} src="oracle.png"/>
            </div>

              </div>
              <div className={styles.workbox}>
              <h2 id="work"> WORK </h2>
              <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec placerat metus nec eros pulvinar consectetur. Pellentesque
              at libero velit. Pellentesque placerat augue quis tincidunt vulputate.
              Donec feugiat ligula suscipit dui mattis, a porttitor orci aliquet.
              Ut ullamcorper arcu a erat sollicitudin, quis maximus odio sollicitudin.
              Sed arcu enim, congue sed lectus pulvinar, varius ullamcorper ipsum. 
              Quisque auctor mauris et ipsum lobortis, sed accumsan lacus tristique.
              </text>
              </div>
        </section>
        <section className={styles.about}>
          <h2 id="about"> ABOUT </h2>{" "}
        </section>{" "}
        <section className={styles.contact}>

          <h2 id="contact"> CONTACT </h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  {/* You still need to add the hidden input with the form name to your JSX form */}
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>
      Email: <input type="text" name="name" />
    </label>
  </p>
  <p>
    <label>
      Message: <textarea name="message"></textarea>
    </label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
          <a className={styles.copyright}> <h2>© SHOSHANA YASWEN 2022</h2></a>
        </section>
      </main>
    </div>
  );
}
