import "../styles/globals.css";
import Storage from "../contexts/Storage";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Storage>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Storage>
	);
}

export default MyApp;
