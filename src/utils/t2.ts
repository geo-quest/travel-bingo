import { useTranslation } from "react-i18next";

import { LocalizedMarkdown, LocalizedString } from "../data/interfaces";

const t2 = (str: LocalizedString | LocalizedMarkdown | undefined) => {
  if (str === undefined) return "";

  const { i18n } = useTranslation();
  if (i18n.language in str) return str[i18n.language];

  return str["en"];
};

export default t2;
