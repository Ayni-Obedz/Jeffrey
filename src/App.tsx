import Layout from "./component/Layout";
import NetworkHero from "./component/NetworkHero";
import Hero from "./component/Hero";
import About from "./component/About";
import Work from "./component/Work";
import CompanyMarquee from "./component/CompanyMarquee";
import Analytics from "./component/Analytics";
import Career from "./component/Career";
import Services from "./component/Services";
import Company from "./component/Company";
import ContactSection from "./component/ContactSection";
import Reveal from "./component/Reveal";
import { tools } from "./data/content";

export default function App() {
  return (
    <Layout>
      <NetworkHero />
      <Reveal><Hero /></Reveal>
      <Reveal><About /></Reveal>
      <Services />
      <Reveal><Work /></Reveal>
      <Reveal>
        <section className="border-y border-white/10 py-12">
          <p className="mb-6 text-center text-sm text-white/50">Tools i know how to use</p>
          <CompanyMarquee companies={tools} />
        </section>
      </Reveal>
      <Reveal><Career /></Reveal>
      <Reveal><Company /></Reveal>
      <Reveal><Analytics /></Reveal>
      <Reveal><ContactSection /></Reveal>
    </Layout>
  );
}