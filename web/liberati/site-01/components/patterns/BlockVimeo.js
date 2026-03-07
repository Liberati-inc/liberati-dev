import Link from "next/link";
import ProjectCard from "@/components/patterns/ProjectCard";
import BlockOverlay from "@/components/patterns/BlockOverlay";
import BlockOverlayCopy from "@/components/patterns/BlockOverlayCopy";
import { BLOCK_CONTENT_PAD, BLOCK_CONTENT_PAD_Y, getAspectStyle, OVERLAY_BOTTOM } from "./blockUtils";

export const toolkitExclude = false;
export const toolkitOrder = 2.1;

export default function BlockVimeo({ block, fill }) {
  const { vimeoId, header, subtext, slug, href } = block;
  const variant = block.variant ?? "user";
  const overlayStyle = block.overlay ?? "featured";
  const aspectStyle = getAspectStyle(block);
  const projectHref = href ?? (slug ? `/project/${slug}` : undefined);

  if (variant === "thumb") {
    return (
      <div className={`max-w-7xl mx-auto ${BLOCK_CONTENT_PAD}`}>
        <ProjectCard
          playMode="thumb"
          vimeoId={vimeoId}
          title={header}
          meta={subtext}
        />
      </div>
    );
  }

  if (variant === "preview") {
    const overlayOpacity = block.overlayOpacity ?? 0.4;
    const featuredClickable = overlayStyle === "featured" && projectHref;
    const Wrapper = featuredClickable ? Link : "section";
    const wrapperProps = featuredClickable ? { href: projectHref } : {};
    return (
      <Wrapper
        {...wrapperProps}
        className={`group relative overflow-hidden bg-black block ${fill ? "h-full w-full" : "w-full"} ${featuredClickable ? "cursor-pointer" : "cursor-default"}`}
        style={fill ? undefined : aspectStyle}
      >
        <BlockOverlay opacity={overlayOpacity} />
        <ProjectCard
          playMode="preview"
          overlay={overlayStyle}
          href={projectHref}
          showOverlayCta={!featuredClickable}
          fill
          vimeoId={vimeoId}
          title={header}
          meta={subtext}
          overlayPadding={
            block.overlayPaddingBottom
              ? `px-4 sm:px-6 lg:px-10 ${block.overlayPaddingBottom}`
              : `px-4 sm:px-6 lg:px-10 ${OVERLAY_BOTTOM}`
          }
          contentFadeOnHover
          overlayPosition={block.overlayPosition}
          cover={fill}
        />
      </Wrapper>
    );
  }

  // user: embed. Overlay only when overlayStyle is "featured"; link when slug or href.
  const overlayOpacity = block.overlayOpacity ?? 0.4;
  const showOverlay = overlayStyle === "featured" && (header || subtext || projectHref);
  const position = block.overlayPosition ?? "bottom-left";

  return (
    <section className={`group relative overflow-hidden bg-black cursor-default ${fill ? "h-full w-full" : `w-full ${BLOCK_CONTENT_PAD_Y}`}`}>
      <div className={`relative ${fill ? "h-full w-full" : "w-full"}`} style={fill ? undefined : aspectStyle}>
        <div className="absolute inset-0">
          <ProjectCard playMode="user" fill vimeoId={vimeoId} overlay="none" />
        </div>
        <BlockOverlay opacity={overlayOpacity} />
        {showOverlay && (
          <BlockOverlayCopy
            header={header}
            subtext={subtext}
            href={projectHref}
            position={position}
            overlay
          />
        )}
      </div>
    </section>
  );
}
