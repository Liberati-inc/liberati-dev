import { typeRole, typeServices } from "@/content/typography";

export default function BriefCard({ title, children }) {
  return (
    <div>
      <h6 className={`${typeRole.disclaimer} mb-4`}>{title}</h6>
      <p className={typeRole.body}>{children}</p>
    </div>
  );
}

