import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import ModalContext from "./context/ModelContext";
import GlobalStyle from "./GlobalStyle";
import AllPosts from "./pages/AllPosts";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route exact path="/all-posts" element={<AllPosts />} />
            <Route exact path="/create" element={<CreatePost />} />
          </Routes>
          {isOpen && <Auth />}
        </BrowserRouter>
      </ModalContext.Provider>
      <Footer />
    </>
  );
};

export default App;
