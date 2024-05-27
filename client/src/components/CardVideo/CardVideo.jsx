import ReactPlayer from 'react-player'
import  Box from '@mui/material/Box'
import CustomGrid from '../CustomGrid/CustomGrid'
import BannerBottomVideo from '../../assets/banner_video.gif'

function CardVideo() {
  
  return (
     <Box sx={{ py : 1 }} >
      <Box sx={{ display : { md : 'flex' }, gap : 2 }}>
        <Box sx={{ pb: 1, width : {md : '70%', xs : '100%'}, height : '430px'}} >
        <ReactPlayer width='100%'
            height='100%' playIcon volume={1} controls={true} url={
          [
            'https://www.youtube.com/watch?v=oUFJJNQGwhk',
            'https://www.youtube.com/watch?v=jNgP6d9HraI',
            'https://www.youtube.com/watch?v=ZPHVFo3C3QU'
          ]
        }/>
      
      </Box>
      <CustomGrid size={10} flexDirectionStyle headerBox />
      </Box>
     <Box sx={{ width : '100%'}}>
     <img src={BannerBottomVideo} style={{ height : '70px', width : '49%' }} alt="" /> 
     <img src={BannerBottomVideo} style={{ height : '70px', width : '49%' }} alt="" />
     </Box>
     </Box>
  )
}

export default CardVideo