import { Link } from 'react-router-dom';
import bannerLeft from '../../../assets/banner_header_left.gif'
import bannerRight from '../../../assets/banner_header_right.gif'
import Box from '@mui/material/Box';

function Banner() {
  return (
   <Box sx={{ display : { md : 'inline-block' , xs : 'none'}, width : { xs : '100%', md : '100%' }, height : (theme) => theme.football.bannerHeight}}>
        <Link>
            <img src={bannerLeft} alt="logo" style={{ objectFit : 'cover', width : '50%', height : '90px' }} />  
        </Link> 
        <Link>
            <img src={bannerRight} alt="logo"  style={{ objectFit : 'cover', width : '50%', height : '90px' }} />
        </Link> 
   </Box>
  )
}

export default Banner
