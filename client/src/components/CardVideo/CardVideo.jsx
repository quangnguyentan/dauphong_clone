import ReactPlayer from 'react-player'
import  Box from '@mui/material/Box'
function CardVideo() {
  return (
    <Box>
      <ReactPlayer playIcon controls={true} url='https://www.youtube.com/watch?v=vUERF4RF-5A&list=RDvUERF4RF-5A&index=1' />
    </Box>
  )
}

export default CardVideo