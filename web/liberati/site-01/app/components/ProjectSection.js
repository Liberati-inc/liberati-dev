import styles from './ProjectSection.module.css';

const imgParallels03 = "/assets/img/5c8198fb776a77021a12d8258b3930f4dfb7e474.png";
const imgArrowRight = "/assets/svg/5c10469cc8325b4cc747929f9daa0b09b8aaa894.svg";

export default function ProjectSection() {
  return (
    <section className={styles.section} data-node-id="5587:4613">
      <div className={styles.container} data-node-id="5587:4614">
        {/* Section intro */}
        <div className={styles.intro} data-node-id="5587:4615">
          <h2 className={styles.sectionTitle} data-node-id="5587:4617">Brands in Motion</h2>
          <p className={styles.sectionDesc} data-node-id="5587:4619">
            We help brands tell their story through advanced motion design and cinematic
            world-building. Here is a look at our latest project.
          </p>
        </div>

        {/* Featured work card */}
        <div className={styles.featuredWork} data-node-id="5587:4620">
          <img
            src={imgParallels03}
            alt="Parallels 03"
            className={styles.featuredImage}
            data-node-id="5587:4621"
          />
          <div className={styles.featuredGradient} data-node-id="5587:4622" />
          <div className={styles.featuredInfo} data-node-id="5587:4623">
            <span className={styles.featuredLabel} data-node-id="5587:4624">Featured Work</span>
            <h3 className={styles.featuredTitle} data-node-id="5587:4625">Parallels 03</h3>
            <button className={styles.viewProject} data-node-id="5587:4626">
              <span className={styles.viewProjectLabel} data-node-id="5587:4627">View Project</span>
              <img src={imgArrowRight} alt="" className={styles.viewProjectIcon} data-node-id="5587:4628" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
