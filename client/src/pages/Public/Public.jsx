import AppBar from '../../components/AppBar/AppBar'
import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import Marquee from '../../components/AppBar/Marquee/Marquee'
import Banner from '../../components/AppBar/Banner_Header/Banner'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import BannerLeft from '../../assets/banner_left.gif'
import BannerRight from '../../assets/banner_right.gif'

function Public() {
  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ position : 'sticky', top : 0, zIndex : 1 }}>
        <AppBar/>
        <Marquee/>
      </Box>
      <Banner/>

     <Box sx={{ display : 'flex' }}>
      <Box sx={{ display : { md : 'inline-block', sm : 'none', xs : 'none'} }}>
        <img src={BannerLeft} alt=""  style={{ position : 'fixed', left : '5%'}}/>
      </Box>
      <Outlet/>
      <Box sx={{ display : { md : 'flex', sm : 'none', xs : 'none'} }}>
        <img src={BannerRight} alt=""  style={{ position : 'fixed', right : '5%'}}/> 
      </Box>
     </Box>
      <Box sx={{ height : (theme) => theme.football.FOOTER_BANNER_HEIGHT}}>
        <Footer/>
      </Box>
    </Container>
  )
}

export default Public