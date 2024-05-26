
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Public from "./pages/Public/Public";
import path from "./utils/path";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
   <Container disableGutters maxWidth={false} sx={{ bgcolor : '#34495e' }}>
     <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
    <Routes>
      <Route path={path.PUBLIC} element={<Public />}>
        <Route path={path.HOME} element={<Home />} />
      </Route>
    </Routes>
   </Container>
  )
}

export default App
