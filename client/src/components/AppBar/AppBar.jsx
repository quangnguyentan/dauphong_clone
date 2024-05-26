import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Menu from './Menus/Menu'; 
import logo from '../../assets/logo.png'
import '../index.css';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
function AppBar() {


  return (
    <Box sx={{  height : (theme) =>theme.football.appBarHeight, width: '100%', overflowY : 'hidden', overflowX: 'auto', '&::webkit-scrollbar-track' : {
      m : 4
    }, backgroundColor : '#000000' , p : 4, display : 'flex', alignItems : 'center', justifyContent : 'space-between'  }} >
          <Link href='/' sx={{ textDecoration : 'none',  color : 'white' }}>
            <img src={logo} alt="logo" width={200} height={70}  />
          </Link>
          <Menu/>
          <Box className='header_info'  sx={{maxWidth : '270px', minWidth : '270px', p : 2 , color : 'white', display: {md : 'flex', xs : 'none'}}}>
           <Link href='#' sx={{ display : 'flex', alignItems : 'center', gap : 1, textDecoration : 'none',  color : 'white' }}>
            <PhoneIcon fontSize='large'/>
            <Box sx={{   }}>
              <Typography sx={{ fontSize : 16, fontWeight : 500 }}>
                Liên hệ quảng cáo
              </Typography>
              <Typography sx={{ fontSize : 12, fontWeight : 500 }}>
                Liên hệ Telegram: @Viral_media88
              </Typography>
           </Box>

           </Link>
           
          </Box>
    </Box>

  )
}

export default AppBar
