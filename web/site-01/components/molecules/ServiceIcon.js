import { typeServices } from "@/content/typography";

export default function ServiceIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 text-liberatiRed">{icon}</div>
      <span className={typeServices.meta}>{label}</span>
    </div>
  );
}
