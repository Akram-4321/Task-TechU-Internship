import FrameComponent4 from "./FrameComponent4";
import styles from "./HeroSection.module.css";

const Copyright = () => {
  return (
    <section className={styles.copyright}>
      <div className={styles.frame} />
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h1 className={styles.heading}>
              Maangalyam: Where Love Finds its Forever
            </h1>
            <h1 className={styles.heading1}>
              Discover Endless Possibilities in Your Matrimony Journey
            </h1>
          </div>
          <div className={styles.textGroup}>
            <div className={styles.startYourJourney}>Start Your Journey</div>
          </div>
        </div>
      </div>
      
      
      <div className={styles.rectangle}>
        <img
          className={styles.textIcon}
          loading="eager"
          alt=""
          src="/frame-48096494@2x.png"
        />
        <img
          className={styles.textIcon1}
          loading="eager"
          alt=""
          src="/frame-48096490@2x.png"
        />
        <div className={styles.starIcon}>
          <div className={styles.line}>
            <img
              className={styles.thurIcon}
              loading="eager"
              alt=""
              src="/frame-48096490@2x.png"
            />
            <form className={styles.image}>
              <div className={styles.tue}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group@2x.png"
                />
              </div>
              <img
                className={styles.frameThreeFrames}
                loading="eager"
                alt=""
                src="/frame-48096485@2x.png"
              />
              <div className={styles.buttonBase}>
                <img
                  className={styles.orangetagsIcon}
                  loading="eager"
                  alt=""
                  src="/frame-48096488@2x.png"
                />
                <img
                  className={styles.satIcon}
                  loading="eager"
                  alt=""
                  src="/frame-48096494@2x.png"
                />
                <img
                  className={styles.textInputIcon}
                  loading="eager"
                  alt=""
                  src="/frame-48096490@2x.png"
                />
                <div className={styles.paragraphParent}>
                  <div className={styles.paragraph}>Main Heading</div>
                  <FrameComponent4
                    lookingFor="Looking for"
                    frame="Male or Female"
                    age="Age"
                    joinUsSection="Select Age"
                  />
                  <FrameComponent4
                    lookingFor="Religion"
                    frame="Select Religion"
                    age="Mother Tongue"
                    joinUsSection="Choose Mother Tounge"
                  />
                  <div className={styles.searchCtaWrapper}>
                    <div className={styles.searchCta}>Search (CTA)</div>
                  </div>
                </div>
               </div>
            </form>
          </div>
          <div className={styles.inputDropdown}>
            <img
              className={styles.frameregulartagsIcon}
              loading="eager"
              alt=""
              src="/frame-48096485@2x.png"
            />
            <img
              className={styles.frameemptyIcon}
              loading="eager"
              alt=""
              src="/frame-48096485@2x.png"
            />
            <img
              className={styles.inputDropdownChild}
              loading="eager"
              alt=""
              src="/frame-48096494@2x.png"
            />
          </div>
        </div>
      </div>
  </section>
  );
};

export default Copyright;
