import { AppProps } from "next/app"

import HtmlHead from "../shared/components/html-head"
import Layout from "../shared/components/layout"

import AppContextProvider from "../shared/context/app-context-provider"

import "../shared/styles/globals.css"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <AppContextProvider>
    <HtmlHead />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppContextProvider>
)

export default MyApp
