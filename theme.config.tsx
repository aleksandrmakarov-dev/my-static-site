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
};

export default config;
