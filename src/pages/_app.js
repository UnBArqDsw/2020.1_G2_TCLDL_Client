import '../styles/globals.css';
import store from '../store';
import { Provider } from 'react-redux';
import AppBar from '../components/AppBar'
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <AppBar {...pageProps} />
      <Component {...pageProps} />;
    </Provider>
  )
}

export default MyApp;
