import BreakingNews from "@/components/BreakingNews";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <BreakingNews />
      <Footer/>
    </main>
  );
}
