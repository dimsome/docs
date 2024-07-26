/* eslint-disable react-hooks/rules-of-hooks */

import { clsx } from "clsx";
import { DocsThemeConfig } from "nextra-theme-docs";

import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { SidebarTitleComponent } from "@/components/SidebarTitleComponent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Toc } from "@/components/Toc";
import { InkLogo } from "@/icons/InkLogo";
import { URLS } from "@/utils/urls";

const config: DocsThemeConfig = {
  logo: InkLogo,
  // We are actually using the dark mode, but enabling it in here creates a ugly component in the sidebar, which can not be customized
  darkMode: false,
  project: {
    link: URLS.githubOrgUrl,
  },
  chat: {
    link: "https://test.com",
  },
  docsRepositoryBase: URLS.repositoryUrl,
  head: Head,
  components: {
    a(props) {
      return (
        <a
          {...props}
          className="text-magic-purple transition-all hover:underline"
        />
      );
    },
    code(props) {
      return (
        <code
          {...props}
          className={clsx(
            "bg-magic-semi-deep-purple/15 text-magic-purple dark:text-magic-white text-sm rounded-md px-2 py-0.5"
          )}
        />
      );
    },
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    titleComponent: SidebarTitleComponent,
  },
  navbar: {
    extraContent: ThemeToggle,
  },
  footer: {
    component: Footer,
  },
  toc: {
    backToTop: true,
    component: Toc,
  },
  banner: {
    key: "2.4-release",
    text: (
      <a
        className="!text-magic-white dark:!text-magic-white"
        href="/builders/notices/fp-changes"
        target="_self"
        rel="noopener noreferrer"
        aria-label="Preparing for Fault Proof Breaking Changes"
      >
        📌 UPDATE: Ink will launch and it will be awesome
      </a>
    ),
  },
  //   useNextSeoProps() {
  //     const { asPath } = useRouter()
  //     if (asPath !== '/') {
  //       return {
  //         titleTemplate: '%s | Ink Docs'
  //       }
  //     }
  //   },
};

export default config;
