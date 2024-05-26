import bannerLeft from '../../../assets/banner_header_left.gif'
import bannerRight from '../../../assets/banner_header_right.gif'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Banner() {
  return (
   <Box sx={{ maxWidth : { xs : '100%', md : '100%' }, height : (theme) => theme.football.bannerHeight, p : '15px 0 '}}>
        <Link href='/' sx={{ textDecoration : 'none',  color : 'white' }}>
            <img src={bannerLeft} alt="logo" width='50%'  height={70} />
            
        </Link> 
        <Link href='/' sx={{ textDecoration : 'none',  color : 'white' }}>
            <img src={bannerRight} alt="logo" width='50%' height={70} />
        </Link> 
   </Box>
  )
}

export default Banner
