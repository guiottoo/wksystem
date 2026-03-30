import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modulos from './components/Modulos';
import Stack from './components/Stack';
import Seguranca from './components/Seguranca';
import Custos from './components/Custos';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navbar />
      <Hero />
      <Modulos />
      <Stack />
      <Seguranca />
      <Custos />
      <Footer />
    </div>
  );
}
