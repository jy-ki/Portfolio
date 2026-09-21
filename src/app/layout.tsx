import type { Metadata } from "next";
import Script from "next/script";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { THEME_INIT_SCRIPT } from "@/hooks/useTheme";

export const metadata: Metadata = {
  title: "김지영 포트폴리오",
  description:
    "취향을 읽고, 참여하고 싶은 브랜드 경험으로 만드는 마케터 김지영의 포트폴리오.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
