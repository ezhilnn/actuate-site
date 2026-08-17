import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FlowContrast from "@/components/FlowContrast";
import WhySection from "@/components/WhySection";
import IdeaTable from "@/components/IdeaTable";
import Architecture from "@/components/Architecture";
import LibraryConsole from "@/components/LibraryConsole";
import QuickStart from "@/components/QuickStart";
import ConsoleScreens from "@/components/ConsoleScreens";
import VsLangGraph from "@/components/VsLangGraph";
import ModelsAndTools from "@/components/ModelsAndTools";
import RepoAndContributing from "@/components/RepoAndContributing";
import About from "@/components/About";
import StarFork from "@/components/StarFork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FlowContrast />
        <WhySection />
        <IdeaTable />
        <Architecture />
        <LibraryConsole />
        <QuickStart />
        <ConsoleScreens />
        <VsLangGraph />
        <ModelsAndTools />
        <RepoAndContributing />
        <About />
        <StarFork />
      </main>
      <Footer />
    </>
  );
}
