import { useTranslation } from "react-i18next";

import { LocalizedMarkdown, LocalizedString } from "../data/interfaces";

const t2 = (str: LocalizedString | LocalizedMarkdown | undefined) => {
  if (str === undefined) return "";

  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (lang in str) return str[lang];

  return str["en"];
};

export default t2;
