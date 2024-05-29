
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Public from "./pages/Public/Public";
import path from "./utils/path";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import VideoHighlight from "./pages/VideoHighlight/VideoHighlight";
import Info from "./pages/Information/Info";
import WatchSetBit from "./pages/WatchSetBit/WatchSetBit";
import LiveStream from "./pages/LiveStream/LiveStream";

function App() {
  
  return (
   <Container disableGutters maxWidth={false} sx={{ height : 'fit-content', bgcolor : '#000000' }}>
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
        <Route path={path.VIDEO_HIGHLIGHT} element={<VideoHighlight />} />
        <Route path={path.TIN_TUC} element={<Info />} />
        <Route path={path.SOI_KEO} element={<WatchSetBit />} />
        <Route path={path.ID} element={<LiveStream />} />
      </Route>
    </Routes>
   </Container>
  )
}

export default App
