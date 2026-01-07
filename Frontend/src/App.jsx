import Longin from "./pages/auth/longin";
import Register from "./pages/auth/register";
import Desboard from "./pages/dashboard";
import Footer from "./pages/footer";
import Header from "./pages/header";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col 
      bg-[linear-gradient(50deg,#cde0f0_0%,#cde0f0_30%,#ffffff_55%,#ebceea_100%)]"
      >
        {/* <Header /> */}
        <Desboard />
        {/* <Register /> */}
        {/* <Longin /> */}
        {/* <LandingPage /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
