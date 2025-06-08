import About from "@/components/about";
import StatsBar from "@/components/bar";
import Footer from "@/components/footer";
import Header from "@/components/header"; 
import Projects from "@/components/projects";
import ShowCaseAfterContent from "@/components/showcase";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#0f0f0f]">
      <Suspense fallback={<div className="text-center py-10">Anurag&apos;s Portfolio is loading...</div>}>
          {/* <Navbar /> */}
          <Header />
          <ShowCaseAfterContent />
          <StatsBar/>
          <Projects />
          <About />
          {/* <Contact /> */}
          <Footer /> 
      </Suspense>
    </div>
  );
}
