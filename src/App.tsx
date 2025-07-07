import About from './components/About';
import Center from './components/Centers';
import FAQ from './components/FAQ';
import Feature from './components/Feature';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Price from './components/Price';
import Review from './components/Review';

function App() {
	return (
		<>
			<Header />
			<Home />
			<About />
			<Feature />
			<Price />
			<Review />
			<Center />
			<FAQ />
			<Footer />
		</>
	);
}

export default App;
