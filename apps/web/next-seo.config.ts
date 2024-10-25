import { DefaultSeoProps } from "next-seo";

const NEXT_SEO_DEFAULT: DefaultSeoProps = {
    title: "Austin Vu | Portfolio",
    titleTemplate: "%s | Austin Vu",
    defaultTitle: "Austin Vu Portfolio",
    description:
        "Welcome to the portfolio of Austin Vu, showcasing projects, skills, and achievements.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.austinvu.tech",
        siteName: "Austin Vu Portfolio",
        images: [
            {
                url: "https://www.austinvu.tech/logo.png",
                width: 1200,
                height: 630,
                alt: "Austin Vu Portfolio Logo",
            },
        ],
    },
    twitter: {
        handle: "@austinvu",
        site: "@austinvu",
        cardType: "summary_large_image",
    },
};

export default NEXT_SEO_DEFAULT;
