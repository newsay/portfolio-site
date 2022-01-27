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
          <h2 id="home"> Shoshana Yaswen </h2> <h3> Software Developer </h3>{" "}
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
              Mauris accumsan pulvinar neque non cursus. Cras accumsan commodo ipsum 
              sed lacinia. Praesent eu ultricies mauris. Vestibulum accumsan ornare 
              sem eu aliquam. Proin blandit porta purus sed commodo. Class aptent 
              taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
              himenaeos. Duis nibh nisi, hendrerit sed nunc at, maximus scelerisque 
              nibh. Maecenas finibus, velit eu convallis vulputate, arcu erat volutpat 
              arcu, eu posuere justo odio a arcu. Phasellus finibus cursus convallis. 
              Aliquam tempus volutpat hendrerit. 
              </text>
              </div>
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
          <button className={styles.submit}>Submit</button>
          <h3>Thanks for visiting!</h3>
          <a className={styles.copyright}> <h2>© SHOSHANA YASWEN 2022</h2></a>
        </section>
      </main>
    </div>
  );
}
