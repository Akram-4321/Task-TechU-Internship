import DropdownParent from "./DropdownParent";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.formParentWrapper}>
      <div className={styles.formParent}>
        <div className={styles.containerParent}>
          <div className={styles.happyMaangalaaymUsers}>
            394+ Happy Maangalaaym Users
          </div>
          <h1 className={styles.dontJustTake}>Don’t just take our words</h1>
        </div>
        <div className={styles.buttonPrimaryParent}>
          <DropdownParent actionsFrame="/frame-48096520@2x.png" />
          <DropdownParent
            actionsFrame="/frame-48096523@2x.png"
            propGap="0rem 0.375rem"
            propPadding="0rem var(--padding-11xs) 0rem 0rem"
          />
        </div>
        <div className={styles.sectionFrame}>
          <img
            className={styles.sectionFrameChild}
            loading="eager"
            alt=""
            src="/group-48095941.svg"
          />
          <img
            className={styles.sectionFrameItem}
            alt=""
            src="/group-48095943.svg"
          />
          <img
            className={styles.sectionFrameInner}
            loading="eager"
            alt=""
            src="/group-48095942.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
