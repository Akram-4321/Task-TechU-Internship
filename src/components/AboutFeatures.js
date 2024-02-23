import { useMemo } from "react";
import styles from "./AboutFeatures.module.css";

const AboutFeatures = ({
  frame106,
  propBorderRadius,
  propBackgroundColor,
  propBorder,
  propOverflow,
  propPadding,
  propMinWidth,
}) => {
  const aboutFeaturesStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      overflow: propOverflow,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [
    propBorderRadius,
    propBackgroundColor,
    propBorder,
    propOverflow,
    propPadding,
    propMinWidth,
  ]);

  return (
    <div className={styles.aboutFeatures} style={aboutFeaturesStyle}>
      <img
        className={styles.aboutFeaturesChild}
        loading="eager"
        alt=""
        src={frame106}
      />
      <div className={styles.sravaniReddykondaParent}>
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
  );
};

export default AboutFeatures;
