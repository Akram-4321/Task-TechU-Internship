import styles from "./InputFieldAndLabel.module.css";

const InputFieldAndLabel = () => {
  return (
    <div className={styles.inputFieldAndLabel}>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/group-48095961.svg"
        />
        <div className={styles.inputtextStyle1}>
          <div className={styles.inputLabel}>Input Label</div>
          <div className={styles.copyrightMessage}>
            <div className={styles.icon}>
              <img
                className={styles.iconoutlinesearch}
                alt=""
                src="/iconoutlinesearch.svg"
              />
            </div>
            <div className={styles.enterEmailTo}>Type to search</div>
          </div>
        </div>
      </div>
      <img
        className={styles.inputFieldAndLabelChild}
        alt=""
        src="/ellipse-38@2x.png"
      />
    </div>
  );
};

export default InputFieldAndLabel;
