import FrameComponent5 from "../components/FrameComponent5";
import Copyright from "../components/HeroSection";
import InputFieldAndLabel from "../components/InputFieldAndLabel";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ContainerFrame from "../components/ContainerFrame";
import CopyrightLine from "../components/HeroSectionLine";
import styles from "./May.module.css";

const May = () => {
  return (
    <div className={styles.may}>
      <img className={styles.mayChild} alt="" src="/frame-48096488@2x.png" />
      <FrameComponent5 />
      <Copyright />
      <section className={styles.sectionFrame}>
        <div className={styles.frameWithHelpMenu}>
          <h1 className={styles.heading}>
            Discover Your Perfect Match with Our Powerful Features
          </h1>
          <div className={styles.unlockAWorld}>
            Unlock a world of possibilities with our cutting-edge features
            designed to make your journey to finding love seamless and
            enjoyable. From advanced search options to privacy controls, explore
            the tools that set us apart and maximize your chances of meeting
            your ideal life partner.
          </div>
        </div>
        <InputFieldAndLabel />
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <ContainerFrame />
      <CopyrightLine />
    </div>
  );
};

export default May;
