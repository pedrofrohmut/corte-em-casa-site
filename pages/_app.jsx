import HtmlHead from "../shared/components/html-head"
import Layout from "../shared/components/layout"

import "../shared/styles/globals.css"

const MyApp = ({ Component, pageProps }) => (
  <>
    <HtmlHead />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default MyApp
