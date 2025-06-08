import Header from "@/components/header"; 
import Projects from "@/components/projects";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Suspense fallback={<div className="text-center py-10">Anurag&apos;s Portfolio is loading...</div>}>
          {/* <Navbar /> */}
          <Header />
          <Projects />
          {/* <Bar/> */}
          {/* <About /> */}
          {/* <Contact /> */}
          {/* <Footer />  */}
      </Suspense>
    </div>
  );
}
