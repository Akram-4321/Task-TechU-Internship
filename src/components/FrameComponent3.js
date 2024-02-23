import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ height, prop }) => {
  return (
    <div className={styles.heightParent}>
      <div className={styles.height}>{height}</div>
      <div className={styles.wrapper}>
        <div className={styles.div}>{prop}</div>
      </div>
    </div>
  );
};

export default FrameComponent3;
