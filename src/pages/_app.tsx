import { AppProps } from "next/app"

import HtmlHead from "../shared/components/html-head"
import Layout from "../shared/components/layout"
import AppContextProvider from "../shared/context"

import "../shared/styles/globals.css"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <HtmlHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}

export default MyApp
