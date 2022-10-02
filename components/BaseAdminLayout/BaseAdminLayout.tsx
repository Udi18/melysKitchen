import { Container, SxProps, Theme } from "@mui/material";
import Head from "next/head";
import AppBar from "../AppBar";

interface BaseAdminLayoutProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  metaContent: string;
  appBarTitle?: string;
  sxOverride?: SxProps<Theme>;
}

export default function BaseAdminLayout({
  children,
  title,
  appBarTitle,
  metaContent,
  sxOverride,
}: BaseAdminLayoutProps) {
  return (
    <Container
      sx={
        sxOverride || {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          maxWidth: "xl",
        }
      }
      disableGutters
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaContent} />
      </Head>
      <AppBar title={appBarTitle || title} />
      {children}
    </Container>
  );
}
