import styles from './ServicesSection.module.css';

const imgIconDirection = "/assets/svg/5457f55cc200129fcb0d0a8b7d291f3845626bd6.svg";
const imgIconMotion = "/assets/svg/06af7800ccd015124d1757bb454af75df23879f9.svg";
const imgIconInteractive = "/assets/svg/326f566e6d8535d626ff26f44f170c265def75a5.svg";

const services = [
  {
    nodeId: "5587:4553",
    icon: imgIconDirection,
    iconNodeId: "5587:4555",
    title: "Direction",
    description:
      "Creative strategy and conceptual development that defines the soul of your project.",
    items: ["Art Direction", "Brand Narrative", "Visual Strategy"],
  },
  {
    nodeId: "5587:4568",
    icon: imgIconMotion,
    iconNodeId: "5587:4570",
    title: "Motion",
    description:
      "High-end 3D animation and cinematic sequences that bring static ideas to life.",
    items: ["3D Animation", "Title Sequences", "VFX Mastery"],
  },
  {
    nodeId: "5587:4583",
    icon: imgIconInteractive,
    iconNodeId: "5587:4585",
    title: "Interactive",
    description:
      "Bespoke web experiences and UI/UX motion designed for deep engagement.",
    items: ["Web Experiences", "Experimental Tech", "UI Motion"],
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} data-node-id="5587:4550">
      <div className={styles.container} data-node-id="5587:4551">
        {/* Services grid */}
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.title} className={styles.service} data-node-id={service.nodeId}>
              <div className={styles.serviceHeader} data-node-id={service.iconNodeId}>
                <img
                  src={service.icon}
                  alt=""
                  className={styles.serviceIcon}
                />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              <p className={styles.serviceDesc}>{service.description}</p>
              <ul className={styles.serviceList}>
                {service.items.map((item) => (
                  <li key={item} className={styles.serviceListItem}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className={styles.footer} data-node-id="5587:4598">
          <button className={styles.ctaButton} data-node-id="5587:4599">
            Schedule a Call
          </button>
          <span className={styles.footnote} data-node-id="5587:4602">
            * Maybe say something relevant here.
          </span>
        </div>
      </div>
    </section>
  );
}
