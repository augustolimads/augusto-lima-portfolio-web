import '../styles/globals.css'
import Storage from '../contexts/Storage';

function MyApp({ Component, pageProps }) {
  return (
    <Storage>
      <Component {...pageProps} />
    </Storage>
  )
}

export default MyApp
