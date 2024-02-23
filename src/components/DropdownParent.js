import { useMemo } from "react";
import styles from "./DropdownParent.module.css";

const DropdownParent = ({ actionsFrame, propGap, propPadding }) => {
  const hELPMENUFrameStyle = useMemo(() => {
    return {
      gap: propGap,
      padding: propPadding,
    };
  }, [propGap, propPadding]);

  return (
    <div className={styles.dropdownParent}>
      <img
        className={styles.actionsFrameIcon}
        loading="eager"
        alt=""
        src={actionsFrame}
      />
      <div className={styles.lineParent}>
        <div className={styles.hELPMENUFrame} style={hELPMENUFrameStyle}>
          <img
            className={styles.star1Icon}
            loading="eager"
            alt=""
            src="/star-1.svg"
          />
          <img
            className={styles.star2Icon}
            loading="eager"
            alt=""
            src="/star-2.svg"
          />
          <img
            className={styles.star3Icon}
            loading="eager"
            alt=""
            src="/star-3.svg"
          />
          <img className={styles.star4Icon} alt="" src="/star-4.svg" />
          <img className={styles.star5Icon} alt="" src="/star-5.svg" />
        </div>
        <div className={styles.weLoveLandingfolio}>
          "We love Landingfolio! Our designers were using it for their projects,
          so we already knew what kind of design they want."
        </div>
        <div className={styles.raghuShwetha}>{`Raghu & Shwetha`}</div>
      </div>
    </div>
  );
};

export default DropdownParent;
