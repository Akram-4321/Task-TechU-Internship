import FrameComponent3 from "./FrameComponent3";
import AboutFeatures from "./AboutFeatures";
import HelpMenuFrame from "./HelpMenuFrame";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.component23Parent}>
      <form className={styles.component23}>
        <div className={styles.advanceSearchWrapper}>
          <div className={styles.advanceSearch}>Advance Search</div>
        </div>
        <div className={styles.component23Inner}>
          <div className={styles.frameParent}>
            <div className={styles.basicDetailsParent}>
              <div className={styles.basicDetails}>Basic Details</div>
              <div className={styles.component24Parent}>
                <div className={styles.component24}>
                  <div className={styles.parent}>
                    <div className={styles.div}>18-22</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/chevrondown-1.svg"
                    />
                  </div>
                </div>
                <FrameComponent3 height="Height" prop="4’7” - 5’2”" />
              </div>
            </div>
            <div className={styles.casteReligionDetailsParent}>
              <div
                className={styles.casteReligion}
              >{`Caste & Religion Details`}</div>
              <div className={styles.frameGroup}>
                <FrameComponent3 height="Religion" prop="Christian" />
                <FrameComponent3 height="Caste" prop="Caste" />
                <FrameComponent3 height="Sub-Caste" prop="Sub-Caste" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.childInputFields}>
          <div className={styles.starRatedInput}>
            <div className={styles.viewMore}>View more</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="/chevrondown-2.svg"
            />
          </div>
        </div>
      </form>
      <div className={styles.formSection}>
        <div className={styles.headingParent}>
          <div className={styles.heading}>Based on your prefference</div>
          <div className={styles.buttonPrimary}>
            <div className={styles.frameContainer}>
              <div className={styles.aboutFeaturesWrapper}>
                <AboutFeatures frame106="/frame-106@2x.png" />
              </div>
              <AboutFeatures
                frame106="/frame-106-1@2x.png"
                propBorderRadius="8px"
                propBackgroundColor="#fff"
                propBorder="1px solid var(--foundation-neutrals-n40)"
                propOverflow="hidden"
                propPadding="28px 20px"
                propMinWidth="23.688rem"
              />
            </div>
            <HelpMenuFrame
              frame106="/frame-106-2@2x.png"
              frame1061="/frame-106-3@2x.png"
            />
          </div>
        </div>
        <div className={styles.headingGroup}>
          <div className={styles.heading1}>Based on your prefference</div>
          <HelpMenuFrame
            frame106="/frame-106-4@2x.png"
            frame1061="/frame-106-5@2x.png"
            propGap="0rem 2rem"
            propMinWidth="23.375rem"
            propMinWidth1="23.375rem"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
