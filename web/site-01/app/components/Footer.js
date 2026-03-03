import styles from './Footer.module.css';

const imgCopyrightMark = "/assets/svg/49c0ac830d8ec3be279e7604302cb6aaf409ec4d.svg";

export default function Footer() {
  return (
    <footer className={styles.footer} data-node-id="5587:4630">
      <div className={styles.container} data-node-id="5587:4631">
        <div className={styles.copyright} data-node-id="5587:4632">
          <img src={imgCopyrightMark} alt="" className={styles.copyrightIcon} data-node-id="5587:4633" />
          <span className={styles.copyrightText} data-node-id="5587:4636">© 2026 Liberati, Inc.</span>
        </div>
        <nav className={styles.links} data-node-id="5587:4637">
          <a href="#" className={styles.link} data-node-id="5587:4638">Privacy</a>
          <a href="#" className={styles.link} data-node-id="5587:4640">Terms</a>
          <a href="#" className={styles.link} data-node-id="5587:4642">Career</a>
        </nav>
      </div>
    </footer>
  );
}
