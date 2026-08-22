import BackgroundVideo from "./BackgroundVideo";
import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  return (
    <main className="relative bg-black h-screen w-screen flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0">
      <BackgroundVideo />
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
