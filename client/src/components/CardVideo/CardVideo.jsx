import ReactPlayer from 'react-player'
import  Box from '@mui/material/Box'
import CustomGrid from '../CustomGrid/CustomGrid'
import BannerBottomVideo from '../../assets/banner_video.gif'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
function CardVideo() {
  return (
     <Box sx={{ py : { md : 1, xs : 0}}} >
      <Box sx={{ display : { md : 'flex' } }}>
        <Box sx={{ width : {md : '70%', xs : '100%'}, height : '430px'}} >
        {/* <ReactPlayer width='100%'
            height='100%' playIcon volume={1} controls={true} url={
          [
            'https://sovotv.live/uploads/resources/videos/introlivesovo.mp4',
            'https://www.youtube.com/watch?v=jNgP6d9HraI',
            'https://www.youtube.com/watch?v=ZPHVFo3C3QU'
          ]
        }/> */}
        <ReactPlayer width='100%'
          style={{ objectFit : 'cover' }}
            height='100%' playing playIcon={<PlayArrowIcon/>} url={
          [
            'https://www.youtube.com/watch?v=ZPHVFo3C3QU',
            'https://www.youtube.com/watch?v=ZPHVFo3C3QU',
            'https://sovotv.live/uploads/resources/videos/introlivesovo.mp4',

          ]
        }/>
        </Box>
        <CustomGrid size={10} flexDirectionStyle headerBox />
      </Box>
     <Box sx={{ width : '100%', py :  { md :  1, xs : 0} }}>
     <img src={BannerBottomVideo} style={{ height : '70px', width : '49%' }} alt="" /> 
     <img src={BannerBottomVideo} style={{ height : '70px', width : '49%' }} alt="" />
     </Box>
     </Box>
  )
}

export default CardVideo