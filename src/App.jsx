import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modulos from './components/Modulos';
import Seguranca from './components/Seguranca';
import Stack from './components/Stack';
import Custos from './components/Custos';
import CustosDev from './components/CustosDev';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] bg-grid">
      <Navbar />
      <Hero />
      <Modulos />
      <Seguranca />
      <Stack />
      <Custos />
      <CustosDev />
      <Footer />
    </div>
  );
}
