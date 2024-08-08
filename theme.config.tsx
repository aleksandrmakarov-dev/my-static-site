import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>NETCODE.SPACE</span>,
  project: {
    link: "https://github.com/aleksandrmakarov-dev/my-static-site",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase:
    "https://github.com/aleksandrmakarov-dev/my-static-site/tree/main",
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  footer: {
    text: "MIT 2024 © NETCODE.SPACE",
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s :: NETCODE.SPACE",
    };
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "ru-RU", text: "Русский" },
  ],
};

export default config;
