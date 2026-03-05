import SvgIcon from "@/components/atoms/SvgIcon";
import PageContainer from "@/components/atoms/PageContainer";
import TextNavButton from "@/components/atoms/TextNavButton";
import SvgButton from "@/components/atoms/SvgButton";
import { footerCopy, footerLinkGroups } from "@/content/footer";
import { footerSocial } from "@/content/nav";
import { typeRole, typeServices } from "@/content/typography";

export default function Footer() {
  return (
    <footer
      className="bg-black border-t border-white/10 py-24"
      data-purpose="main-footer"
    >
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <SvgIcon
                variant="wing"
                sizeClass="h-5 w-auto"
                colorClass="text-liberatiRed"
              />
              <a href="/#top" className="inline-flex items-center" aria-label="Liberati home">
                <SvgIcon
                  variant="wordmark"
                  sizeClass="h-4 w-auto"
                  colorClass="text-white"
                />
              </a>
            </div>
            <p className={`${typeServices.body} max-w-sm`}>
              {footerCopy.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {footerSocial.map((social) => (
                <SvgButton
                  key={social.id}
                  href={social.href}
                  materialIcon={social.icon}
                  label={social.icon}
                  kind="footer"
                />
              ))}
            </div>
          </div>
          {footerLinkGroups.map((group) => (
            <div key={group.id}>
              <h6 className={`${typeRole.footerTitle} mb-6`}>
                {group.title}
              </h6>
              <ul className={`${typeRole.footerLink}`}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <TextNavButton href={link.href ?? "#"}>
                      {link.label}
                    </TextNavButton>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={typeRole.footerMeta}>
            {footerCopy.copyright}
          </p>
          <p className={typeRole.footerMetaUpper}>
            {footerCopy.locationMeta}
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}

