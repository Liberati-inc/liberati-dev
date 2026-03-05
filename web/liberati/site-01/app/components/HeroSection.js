import styles from './HeroSection.module.css';

const imgFuturisticCinematicVehicle = "/assets/img/493a14ddc2cfdeb67dbb3d4899c5b8c63116c54b.png";

export default function HeroSection() {
  return (
    <section className={styles.hero} data-node-id="5587:4603">
      {/* Background image + gradient */}
      <div className={styles.bgWrap} data-node-id="5587:4604">
        <img
          src={imgFuturisticCinematicVehicle}
          alt=""
          className={styles.bgImage}
          data-node-id="5587:4605"
        />
        <div className={styles.bgGradient} data-node-id="5587:4606" />
      </div>

      {/* Heading */}
      <div className={styles.content} data-node-id="5587:4607">
        <h1 className={styles.heading} data-node-id="5587:4608">
          <span className={styles.headingLine} data-node-id="5587:4609">Liberating Ideas</span>
          <span className={styles.headingLine} data-node-id="5587:4610">
            Through <em className={styles.accent}>Motion</em> &amp;
          </span>
          <span className={styles.headingLine}>Interactive Design</span>
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} data-node-id="5587:4611">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
