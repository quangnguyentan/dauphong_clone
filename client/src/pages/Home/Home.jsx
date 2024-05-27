import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import CardVideo from '../../components/CardVideo/CardVideo'
import CustomGrid from '../../components/CustomGrid/CustomGrid'
import TranHotBanner from '../../assets/tran_hot.png'
function Home() { 
  return (
      <Container fixed disableGutters maxWidth='lg' sx={{ height : (theme) => theme.football.cardVideoHeight }}>
       <CardVideo/>
        <Box sx={{  pb: 1, width : '100%',bgcolor : '#000000', px : 8, borderRadius : '15px' }}>
          <Box sx={{ py : 2,justifyContent : 'center'}}>
            <img src={TranHotBanner} alt="" width='300px'  height={70} style={{  display : { md : 'flex', xs : 'none' }, objectFit : 'contain' }}   />
          </Box>
          <CustomGrid size={2} />
        </Box>
      </Container>

  )
}

export default Home
