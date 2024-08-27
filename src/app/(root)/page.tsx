import {
  Advanced,
  CTA,
  Essentials,
  Footer,
  Header,
  Navbar,
  Services,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Essentials />
      <Advanced />
      <Services />
      <CTA />
      <Footer />
    </>
  );
}
