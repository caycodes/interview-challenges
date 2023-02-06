import '../styles/global.css'
import { AssetsWrapper } from '../context/assetsContext'

export default function App({ Component, pageProps }) {
  return <AssetsWrapper>
    <Component {...pageProps} />
  </AssetsWrapper>
}