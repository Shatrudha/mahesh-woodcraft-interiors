import { MessageCircle } from "lucide-react";
import { CONTACT } from "../../config/contact";

const WhatsAppButton = () => {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Chat with Mahesh WoodCraft Interiors on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;