// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Cart, Game, Home, Library, Login } from "./pages";
// import { Layout } from "./components";
import { Layout } from "./components";
import { AuthProvider } from "./providers";
import { Routes } from "./routes/index";

function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    // <BrowserRouter>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/game/:id" element={<Game />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/library" element={<Library />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </Layout>
    // </BrowserRouter>
  );
}

export default App;
