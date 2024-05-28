import { Link } from 'react-router-dom';
import bannerLeft from '../../../assets/banner_header_left.gif'
import bannerRight from '../../../assets/banner_header_right.gif'
import Container from '@mui/material/Container';


function Banner() {
  return (
   <Container disableGutters maxWidth='lg' fixed sx={{ height :  { xs : '0px', md : '90px' }, width : { xs : '0px', md : '70%'}}}>
        <Link> 
            <img src={bannerLeft} alt="logo" style={{ objectFit : 'contain', width : '50%', height : '100%' }} />  
        </Link> 
        <Link>
            <img src={bannerRight} alt="logo"  style={{ objectFit : 'contain', width : '50%', height : '100%' }} />
        </Link> 
   </Container>
  )
}

export default Banner
