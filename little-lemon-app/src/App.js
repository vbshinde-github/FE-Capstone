import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";

import "./App.css";
import { Booking, Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
