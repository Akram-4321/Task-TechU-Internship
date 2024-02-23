import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ lookingFor, frame, age, joinUsSection }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.lookingForParent}>
        <div className={styles.lookingFor}>{lookingFor}</div>
        <div className={styles.frameGroupOrange}>
          <div className={styles.frame}>{frame}</div>
          <img
            className={styles.caretDownFillIcon}
            alt=""
            src="/caretdownfill.svg"
          />
        </div>
      </div>
      <div className={styles.headingText}>
        <div className={styles.age}>{age}</div>
        <div className={styles.joinUsSectionParent}>
          <div className={styles.joinUsSection}>{joinUsSection}</div>
          <img
            className={styles.caretDownFillIcon1}
            alt=""
            src="/caretdownfill.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
