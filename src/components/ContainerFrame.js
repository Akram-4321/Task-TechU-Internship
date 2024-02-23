import InputField from "./InputField";
import styles from "./ContainerFrame.module.css";

const ContainerFrame = () => {
  return (
    <section className={styles.containerFrame}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headingAndSupportingText}>
              <div className={styles.formFields}>
                <div className={styles.joinUsToday}>Join Us Today</div>
                <h1 className={styles.yourJourneyTo}>
                  Your Journey to Love Starts Here
                </h1>
              </div>
              <div className={styles.youCanReach}>
                Unlock the Door to Love: Register Now for a Journey of
                Connections and Compatibility.
              </div>
            </div>
            <div className={styles.caretDownFill}>
              <div className={styles.form}>
                <div className={styles.formFields1}>
                  <div className={styles.inputFieldParent}>
                    <div className={styles.inputField}>
                      <div className={styles.inputFieldBase}>
                        <div className={styles.inputWithLabel}>
                          <div className={styles.label}>Profile</div>
                          <div className={styles.input}>
                            <div className={styles.content1}>
                              <img
                                className={styles.mailIcon}
                                alt=""
                                src="/mail.svg"
                              />
                              <div className={styles.text}>Raghav</div>
                            </div>
                            <img
                              className={styles.helpIcon}
                              alt=""
                              src="/help-icon.svg"
                            />
                            <img
                              className={styles.caretDownFillIcon}
                              alt=""
                              src="/caretdownfill-4.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.hintText}>
                          This is a hint text to help user.
                        </div>
                      </div>
                    </div>
                    <InputField label="Gender" />
                  </div>
                  <div className={styles.inputFieldGroup}>
                    <InputField label="First Name" />
                    <InputField label="Second Name" />
                  </div>
                  <div className={styles.inputField1}>
                    <div className={styles.inputFieldBase1}>
                      <div className={styles.inputWithLabel1}>
                        <div className={styles.label1}>Phone number</div>
                        <div className={styles.input1}>
                          <div className={styles.dropdown}>
                            <div className={styles.dropdownText}>IN</div>
                            <img
                              className={styles.chevronDownIcon}
                              alt=""
                              src="/chevrondown-3.svg"
                            />
                          </div>
                          <div className={styles.textInput}>
                            <div className={styles.text1}>+91 - 74659123</div>
                            <img
                              className={styles.helpIcon1}
                              alt=""
                              src="/help-icon.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.hintText1}>
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.button}>
                    <div className={styles.buttonBase}>
                      <div className={styles.text2}>Get started</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerFrame;
