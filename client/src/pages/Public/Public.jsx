import AppBar from '../../components/AppBar/AppBar'
import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import Marquee from '../../components/AppBar/Marquee/Marquee'
import Banner from '../../components/AppBar/Banner_Header/Banner'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
function Public() {
  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ position : 'sticky', top : 0, }}>
        <AppBar/>
        <Marquee/>
        <Banner/>
      </Box>
      <Outlet/>
      <Box sx={{ height : (theme) => theme.football.FOOTER_BANNER_HEIGHT, display : { md : 'flex', xs : 'none'}}}>
        <Footer/>
      </Box>
    </Container>
  )
}

export default Public