import AppBar from '../../components/AppBar/AppBar'
import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import Marquee from '../../components/AppBar/Marquee/Marquee'
import Banner from '../../components/AppBar/Banner_Header/Banner'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import BannerLeft from '../../assets/banner_left.gif'
import BannerRight from '../../assets/banner_right.gif'
import { useEffect, useState } from 'react'
import { apiGetADS } from '../../services/adsService'
import { Button, Chip } from '@mui/material'
import '../../index.css'
function Public() {
  const [ads, setAds] = useState('')
  const location = useLocation()
  console.log(location)
  const apiGetAllADS = async() => {
    const response = await apiGetADS()
    if(response?.success) {
      const filter = response?.ads?.filter(f => f?.root_domain === "sovo.link")?.map(el => {
        return el
      })
      setAds(filter)
    }
  }
  useEffect(() => {
    apiGetAllADS()
  }, [])
  console.log(ads)
  return (
   <>
     {ads && <Container disableGutters maxWidth={false}>
    <Box sx={{ position : 'sticky', top : 0, zIndex : 2 }}>
      <AppBar/>
      <Marquee/>
    </Box>
    <Container disableGutters fixed sx={{ display : 'flex', alignItems : 'center', gap : 1, py : 1}}>
       <Link style={{ textDecoration : 'none' }}>
          <Button className='button_info' sx={{ color : 'white', borderRadius : '5px', fontWeight : 600, width : {md : '120px', xs : '80px'}, height: {md : '40px', xs : '25px'}, fontSize : '10px' }} > Đặt Cược </Button>
        </Link>
        <Link style={{ textDecoration : 'none' }}>
        <Button  className='button_info' sx={{ color : 'white', borderRadius : '5px', fontWeight : 600, width : {md : '120px', xs : '80px'}, height: {md : '40px', xs : '25px'}, fontSize : '10px',  }} > Đặt Cược </Button>
        </Link>
        <Link style={{ textDecoration : 'none' }}>
        <Button  className='button_info' sx={{ color : 'white', borderRadius : '5px', fontWeight : 600, width : {md : '120px', xs : '80px'}, height: {md : '40px', xs : '25px'}, fontSize : '10px',  }} > Đặt Cược </Button>
        </Link>
    </Container>
    {location.pathname?.slice(0, 6) === "/video" ? '' : <Banner data={ads} />}
   <Box sx={{ display : 'flex' , m : 0 }}>
    <Box sx={{ flexDirection : 'column', display : { md : 'flex', sm : 'none', xs : 'none'}, height : '100%' }}>
      <img src={BannerLeft} alt=""style={{ position : 'fixed', left : '5%', top : '15%', height : '40%' }}/>
      <img src={BannerLeft} alt=""style={{ position : 'fixed', left : '5%', bottom :  '5%' , height : '40%'}}/>
    </Box>
    <Outlet/>
    <Box sx={{ flexDirection : 'column', display : { md : 'flex', sm : 'none', xs : 'none'}, height : '100%' }}>
        <img src={BannerRight} alt=""style={{ position : 'fixed', right : '5%', top : '15%', height : '40%' }}/>
        <img src={BannerRight} alt=""style={{ position : 'fixed', right : '5%', bottom :  '5%' , height : '40%'}}/>
    </Box>
   </Box>
    <Box sx={{ height : (theme) => theme.football.FOOTER_BANNER_HEIGHT}}>
      <Footer data={ads} />
    </Box>
  </Container>}
   </>
  )
}

export default Public