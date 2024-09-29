import locationIcon from "../assets/icons/location.svg";
import minIcon from "../assets/icons/min-phone-icon.svg";
import emailIcon from "../assets/icons/email.svg";
import telegramIcon from "../assets/icons/telegram.svg";

const addressItem = [
  {
    id: 1,
    icon: locationIcon,
    title: "Ташкент, Юнусабадский район, проспект Амира Темура, 129Б",
    href: "https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor",
  },
  {
    id: 2,
    icon: minIcon,
    title: "+998 33 66 00 999",
    href: "tel:+998336600999",
  },
  {
    id: 3,
    icon: emailIcon,
    title: "azizbek.b@udevs.io",
    href: "mailto:azizbek.b@udevs.io",
  },
  {
    id: 4,
    icon: telegramIcon,
    title: "t.me/azizbekbakhodirov",
    href: "https://t.me/azizbekbakhodirov",
  },
];

export default addressItem;