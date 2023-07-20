import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import MenuRestourant from "./pages/MenuRestourant";
import OurHistory from "./pages/OurHistory";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu-restourant" element={<MenuRestourant />}></Route>
        <Route path="/our-history" element={<OurHistory />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
