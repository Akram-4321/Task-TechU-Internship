import styles from "./InputField.module.css";

const InputField = ({ label }) => {
  return (
    <div className={styles.inputField}>
      <div className={styles.inputFieldBase}>
        <div className={styles.inputWithLabel}>
          <div className={styles.label}>{label}</div>
          <div className={styles.input}>
            <div className={styles.content}>
              <img className={styles.mailIcon} alt="" src="/mail.svg" />
              <div className={styles.text}>Your name</div>
            </div>
            <img className={styles.helpIcon} alt="" src="/help-icon.svg" />
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
      </div>
    </div>
  );
};

export default InputField;
