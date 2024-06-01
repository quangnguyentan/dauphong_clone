
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Public from "./pages/Public/Public";
import path from "./utils/path";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import WatchSetBit from "./pages/WatchSetBit/WatchSetBit";
import LiveStream from "./pages/LiveStream/LiveStream";
import CustomCardById from "./pages/WatchSetBit/_id";
import React, { useEffect } from "react";
import Top from "./pages/Top/Top";

function App() {
  const [open, setOpen] = React.useState(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000) // Mở modal khi trang được tải
  }, []); // [] là mảng dependencies rỗng, nghĩa là sẽ chỉ gọi hàm useEffect này một lần sau khi component được mount

  const handleClose = () => {
    setOpen(false);
  };
  return (
   <Container  disableGutters maxWidth={false} sx={{ height : 'fit-content', bgcolor : '#1B1C21' }}>
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src='https://tructiep2.dauphong2.live/wp-content/uploads/2024/05/Nbet_500x500.gif'/>
        </Box>
      </Modal>
    </div>
    <Routes>
      <Route path={path.PUBLIC} element={<Public />}>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.TOP_NHA_CAI} element={<Top />} />
        <Route path={path.SOI_KEO} element={<WatchSetBit />} />
        <Route path={path.POST} element={< CustomCardById/>} />
        <Route path={path.VIDEO} element={< LiveStream/>} />
      </Route>
    </Routes>
   </Container>
  )
}

export default App
