import Header from '../components/Header';
import Banner from '../components/Banner';
import TwoColumnSection from '../components/TwoColumnSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <div>
        <Header />
          <Banner />
          <TwoColumnSection />
        <Footer />
      </div>
  );
}
