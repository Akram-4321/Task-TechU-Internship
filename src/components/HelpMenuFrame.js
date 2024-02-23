import { useMemo } from "react";
import styles from "./HelpMenuFrame.module.css";

const HelpMenuFrame = ({
  frame106,
  frame1061,
  propGap,
  propMinWidth,
  propMinWidth1,
}) => {
  const helpMenuFrameStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.helpMenuFrame} style={helpMenuFrameStyle}>
      <div className={styles.frameParent} style={frameDivStyle}>
        <img className={styles.frameChild} alt="" src={frame106} />
        <div className={styles.headingContainer}>
          <div className={styles.sravaniReddykonda}>Sravani Reddykonda</div>
          <div className={styles.yrs5ft}>26 yrs | 5ft 6in</div>
          <div className={styles.phn912177}>Phn - 912177</div>
          <div className={styles.mailSravanigmailcom}>
            Mail - sravani@gmail.com
          </div>
          <div className={styles.caste}>Caste</div>
          <div className={styles.occupation}>Occupation</div>
        </div>
      </div>
      <div className={styles.frameGroup} style={frameDiv1Style}>
        <img className={styles.frameItem} alt="" src={frame1061} />
        <div className={styles.sravaniReddykondaParent}>
          <div className={styles.sravaniReddykonda1}>Sravani Reddykonda</div>
          <div className={styles.yrs5ft1}>26 yrs | 5ft 6in</div>
          <div className={styles.phn9121771}>Phn - 912177</div>
          <div className={styles.mailSravanigmailcom1}>
            Mail - sravani@gmail.com
          </div>
          <div className={styles.caste1}>Caste</div>
          <div className={styles.occupation1}>Occupation</div>
        </div>
      </div>
    </div>
  );
};

export default HelpMenuFrame;
