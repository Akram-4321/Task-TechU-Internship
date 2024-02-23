import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  return (
    <section className={styles.navbarWrapper}>
      <header className={styles.navbar}>
        <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
        <div className={styles.weekdayframes}>
          <div className={styles.buttonsContainer}>
            <div className={styles.button}>
              <div className={styles.button1}>Home</div>
            </div>
            <div className={styles.textButton}>Plans</div>
            <div className={styles.content}>
              <div className={styles.textButton1}>Help</div>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
          <div className={styles.button2}>
            <div className={styles.line}>Login</div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent5;
