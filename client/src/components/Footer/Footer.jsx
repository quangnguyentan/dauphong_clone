import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import bannerFooterRight from '../../assets/banner_footer_right.gif'
import bannerFooterLeft from '../../assets/banner_footer.gif'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
      <Container disableGutters fixed maxWidth='lg' sx={{ display : 'flex', maxWidth : { md : 'md', xl : 'lg', xs : 'sm'} }}>
        <Box sx={{  display : { md : 'flex', xs : 'none'} }}>
          <img src={bannerFooterLeft} alt="" style={{ position: "fixed", bottom : 0, height : '80px', width : '600px' }} />
        </Box>
        <Box sx={{  display : { md : 'flex', xs : 'none'} }}>
          <img src={bannerFooterRight} alt="" style={{ position: "fixed", bottom : 0, height : '80px', width : '600px', left : '50%' }} />
        </Box>

      </Container>
  )
}

export default Footer