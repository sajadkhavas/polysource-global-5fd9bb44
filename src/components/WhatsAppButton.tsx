import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";
import { cn } from "@/lib/utils";
import { companyConfig } from '@/config/company';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  const phoneNumber = companyConfig.whatsappNumber;
  const message = encodeURIComponent(t("common.whatsAppMessage"));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("common.whatsAppAriaLabel")}
      className={cn(
        "fixed bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 md:h-12 md:w-12",
        isRTL ? "left-6" : "right-6"
      )}
    >
      <MessageCircle className="h-7 w-7 md:h-6 md:w-6" />
    </a>
  );
};

export default WhatsAppButton;
