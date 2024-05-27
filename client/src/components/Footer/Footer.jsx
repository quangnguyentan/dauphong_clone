import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import bannerFooterRight from '../../assets/banner_footer_right.gif'
import bannerFooterLeft from '../../assets/banner_footer.gif'

function Footer() {
  return (
      <Container disableGutters fixed sx={{ display : 'flex' }}>
      <Box>
      <img src={bannerFooterLeft} alt="" style={{ position: "fixed", bottom : 0, height : '80px', width : '600px' }} />
      </Box>
      <Box>
      <img src={bannerFooterRight} alt="" style={{ position: "fixed", bottom : 0, height : '80px', width : '600px', left : '50%' }} />
      </Box>
      </Container>
  )
}

export default Footer