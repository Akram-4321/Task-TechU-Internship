import styles from "./HeroSectionLine.module.css";

const CopyrightLine = () => {
  return (
    <footer className={styles.copyrightLine}>
      <div className={styles.frameContainer}>
        <div className={styles.parentLayer}>
          <div className={styles.layer1Parent}>
            <img className={styles.layer1Icon} alt="" src="/layer-1-1.svg" />
            <div className={styles.clarityGivesYou}>
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </div>
          </div>
          <div className={styles.helpMenuSectionParent}>
            <div className={styles.helpMenuSection}>
              <div className={styles.helpMenu}>Company</div>
              <div className={styles.aboutFeaturesWorksContainer}>
                <p className={styles.about}>{`About          `}</p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.features}>{`Features          `}</p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.contactUs}>{`Contact Us          `}</p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.career}>{`Career  `}</p>
              </div>
            </div>
            <div className={styles.helpMenuSection1}>
              <div className={styles.helpMenu1}>Help</div>
              <div className={styles.aboutFeaturesWorksContainer1}>
                <p className={styles.customerSupport}>Customer Support</p>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p className={styles.deliveryDetails}>Delivery Details</p>
                <p className={styles.blankLine4}>&nbsp;</p>
                <p className={styles.termsConditions}>{`Terms & Conditions`}</p>
                <p className={styles.blankLine5}>&nbsp;</p>
                <p className={styles.privacyPolicy}>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.helpMenuParent}>
          <div className={styles.helpMenu2}>Newsletter</div>
          <div className={styles.contentParent}>
            <div className={styles.content}>
              <div className={styles.bg} />
              <div className={styles.enterYourEmail}>
                Enter your email address
              </div>
            </div>
            <div className={styles.buttonprimarywithIcon}>
              <div className={styles.buttonNameParent}>
                <div className={styles.buttonName}>Subscribe Now</div>
                <div className={styles.icon}>
                  <img
                    className={styles.iconoutlinearrowRight}
                    alt=""
                    src="/iconoutlinearrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyright1} />
        <div className={styles.copyright2}>
          © Copyright 2022, All Rights Reserved by ClarityUI
        </div>
      </div>
    </footer>
  );
};

export default CopyrightLine;
