import { IconChat } from "~/components/icons/iconify"
import { ButtonAnchor } from "~/components/ui/button-anchor"
import { configSite } from "~/configs/site"

export function SiteFloatingButton() {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex p-2">
      <ButtonAnchor
        variant="contact"
        display="with-icon"
        href={configSite.links.telegramContact}
      >
        <IconChat /> Free Consultation
      </ButtonAnchor>
    </div>
  )
}
