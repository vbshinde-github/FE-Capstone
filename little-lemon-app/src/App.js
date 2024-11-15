import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Booking, Home } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
