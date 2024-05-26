import  Container from '@mui/material/Container'
import CardVideo from '../../components/CardVideo/CardVideo'
function Home() {
  return (
    <>
      <Container fixed disableGutters maxWidth='lg' sx={{ height : (theme) => theme.football.cardVideoHeight}}>
       <CardVideo/>
      </Container>
     
     
    </>
  )
}

export default Home
