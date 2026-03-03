import styles from './Header.module.css';

const imgLogoMark = "/assets/svg/74609a30fbdd4d001e23d57556c0aedf4fd13916.svg";
const imgLiberatiLogo = "/assets/svg/22e32e712cb644471eb5dcd8991052d6a1be44b8.svg";

export default function Header() {
  return (
    <header className={styles.header} data-node-id="5587:4644">
      <div className={styles.brand} data-node-id="5587:4645">
        <img src={imgLogoMark} alt="" className={styles.logoMark} data-node-id="5587:4646" />
        <img src={imgLiberatiLogo} alt="Liberati" className={styles.logoText} data-node-id="I5587:4661;4258:2416" />
      </div>

      <nav className={styles.nav} data-node-id="5587:4650">
        <a href="#" className={styles.navLink} data-node-id="5587:4651">Brands</a>
        <a href="#" className={styles.navLink} data-node-id="5587:4653">Series &amp; Film</a>
        <a href="#" className={styles.navLink} data-node-id="5587:4655">Interactive</a>
      </nav>

      <div className={styles.ctaWrap} data-node-id="5587:4657">
        <button className={styles.ctaButton} data-node-id="5587:4658">
          Schedule a Call
        </button>
      </div>
    </header>
  );
}
