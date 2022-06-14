import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            <Route path="/" element={<Home />} />
            <Route exact path="/all-posts" element={<AllPosts />} />
            <Route exact path="/create" element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ModalContext.Provider>
    </>
  );
};

export default App;
