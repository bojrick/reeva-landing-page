import Hero from '@/components/Hero';
import PropertyDetails from '@/components/PropertyDetails';
import Gallery from '@/components/Gallery';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <PropertyDetails />
        <Gallery />
        <Amenities />
        <Location />
        <RegistrationForm />
        <Footer />
      </main>
    </div>
  );
}