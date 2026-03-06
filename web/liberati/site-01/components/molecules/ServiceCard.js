import SvgIcon from "@/components/atoms/SvgIcon";
import { typeServices, typeRole } from "@/content/typography";

export default function ServiceCard({ iconVariant, title, description, items = [] }) {
  return (
    <div className="group">
      <div className="mb-6 flex items-center gap-3">
        <SvgIcon variant={iconVariant} />
        <h4 className={typeServices.title}>{title}</h4>
      </div>
      <p className={`${typeRole.body} mb-6`}>
        {description}
      </p>
      <ul className={`${typeServices.meta} space-y-2`}>
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

