import About from "@/components/about"; 
import Footer from "@/components/footer";
import Header from "@/components/header";  
import ShowCaseAfterContent from "@/components/showcase";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#0f0f0f]">
      <Suspense fallback={<div className="text-center py-10">Anurag&apos;s Portfolio is loading...</div>}>
          <Header />
          <ShowCaseAfterContent />
          <About />
          <Footer /> 
      </Suspense>
    </div>
  );
}
