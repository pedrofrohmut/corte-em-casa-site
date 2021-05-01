import { AppProps } from "next/app"
import { ReactElement } from "react"

import HtmlHead from "../shared/components/html-head"
import Layout from "../shared/components/layout"
import AppContextProvider from "../shared/context/provider"

import "../shared/styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <AppContextProvider>
    <HtmlHead />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppContextProvider>
)

export default MyApp
