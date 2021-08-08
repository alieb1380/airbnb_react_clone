import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import Router from "next/router";
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  size: 4,
  color: "FE59SE",
  delay: 100,
  className:"z-50",
});

Router.events.on("routerChangeStart", progress.start);
Router.events.on("routerChangeComplete", progress.finish);
Router.events.on("routerChangeError", progress.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
