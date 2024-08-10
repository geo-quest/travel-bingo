import TimeAgo from "javascript-time-ago";
<<<<<<< HEAD
=======
import en from "javascript-time-ago/locale/en.json";
>>>>>>> main
import { useTranslation } from "react-i18next";

interface Props {
  date: string | undefined;
}

const RelativeDate = ({ date }: Props) => {
  const { i18n } = useTranslation();
<<<<<<< HEAD

=======
  if (i18n.language.startsWith("en")) TimeAgo.addDefaultLocale(en);
>>>>>>> main
  return (
    <span>{new TimeAgo(i18n.language).format(Date.parse(date || ""))}</span>
  );
};

export default RelativeDate;
