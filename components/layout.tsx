import { NextraThemeLayoutProps } from "nextra";
import Head from "next/head";
import Link from "next/link";

export default function Layout({
  children,
  pageOpts,
  pageProps,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { title, frontMatter, headings, pageMap } = pageOpts;

  console.log(pageOpts);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      <div
        style={{
          display: "flex",
          gap: "16px",
          maxWidth: 1196,
          margin: "0 auto",
        }}
      >
        <div style={{ width: "256px" }}>
          <ul>
            {pageMap.map((item) => {
              if (item.kind === "MdxPage") {
                return (
                  <li key={item.name}>
                    <Link href={item.route}>{item.name}</Link>
                  </li>
                );
              } else if (item.kind === "Folder") {
                return (
                  <ul>
                    {item.children.map((child) => {
                      if (child.kind === "MdxPage") {
                        return (
                          <li key={child.name}>
                            <Link href={child.route}>{child.name}</Link>
                          </li>
                        );
                      }

                      return null;
                    })}
                  </ul>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div style={{ width: "100%" }}>
          <h1>My Theme</h1>
          <div style={{ border: "1px solid" }}>{children}</div>
        </div>
        <div style={{ width: "256px" }}>
          Table of Contents:
          <ul>
            {headings.map((heading) => (
              <li key={heading.value}>{heading.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
