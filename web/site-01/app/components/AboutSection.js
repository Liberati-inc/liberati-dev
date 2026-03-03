import styles from './AboutSection.module.css';

const imgSocialShare = "/assets/svg/52b91385793ff1ffb2e64ea17b8819c8c1323ab6.svg";
const imgSocialBehance = "/assets/svg/0f13616fef358c640e3b09f62b7a107093dbd62e.svg";
const imgSocialVimeo = "/assets/svg/ed4cfc329a0c931acc5cb6dea52e39b25871839c.svg";

export default function AboutSection() {
  return (
    <section className={styles.section} data-node-id="5587:4528">
      <div className={styles.container} data-node-id="5587:4529">
        {/* Left: heading */}
        <div className={styles.heading} data-node-id="5587:4530">
          <div className={styles.eyebrow} data-node-id="5587:4531">
            <span className={styles.eyebrowLine} data-node-id="5587:4532" />
            <span className={styles.eyebrowLabel} data-node-id="5587:4534">What We Do</span>
          </div>
          <h2 className={styles.title} data-node-id="5587:4535">
            We partner with brands &amp; beyond
          </h2>
        </div>

        {/* Right: bio + social */}
        <div className={styles.body} data-node-id="5587:4537">
          <p className={styles.bio} data-node-id="5587:4539">
            Liberati is a remote studio crafting motion and interactive experiences, led by
            award-winning director and designer Ming Hsiung. He brings ideas to life with a focus
            on craft, curiosity, and clarity—approaching every project with the same energy he
            brings to his own.
          </p>
          <div className={styles.socialLinks} data-node-id="5587:4540">
            <a href="#" className={styles.socialLink} aria-label="Social" data-node-id="5587:4541">
              <img src={imgSocialShare} alt="" className={styles.socialIcon} data-node-id="5587:4542" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Social" data-node-id="5587:4544">
              <img src={imgSocialBehance} alt="" className={styles.socialIcon} data-node-id="5587:4545" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Social" data-node-id="5587:4547">
              <img src={imgSocialVimeo} alt="" className={styles.socialIcon} data-node-id="5587:4548" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
