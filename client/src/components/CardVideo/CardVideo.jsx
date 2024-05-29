import ReactPlayer from 'react-player'
import  Box from '@mui/material/Box'
import CustomGrid from '../CustomGrid/CustomGrid'
import BannerBottomVideo from '../../assets/banner_video.gif'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import BannerVideoFooter from '../../assets/bannerVideoFooter.gif'
import '../../index.css'
function CardVideo({ ChatBox  }) {
  return (
     <Box sx={{ py : { md : 1, xs : 0}}} >
      <Box sx={{ display : { md : 'flex' }, gap : 2 }}>
        <Box sx={{ width : {md : '70%', xs : '100%'}, height : 'fit-content'}} className='video-header' >
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
            className='viewport-header'
            height='100%' playing playIcon={<PlayArrowIcon/>} controls  url={
          [
            'https://sovotv.live/uploads/resources/videos/introlivesovo.mp4',
          ]
        }/>
         <img className='react-player1' src={BannerVideoFooter} style={{width : '100%', objectFit : 'contain'}} alt="" /> 
        </Box>
        {ChatBox ? 
        <Box sx={{   width : { md : "30%", xs : "100%"}, height : { md : "550px", xs : "350px"}  }}>
        <iframe src="https://www5.cbox.ws/box/?boxid=949782&boxtag=pXQtQ5" width="100%" height="100%" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>	
        </Box>
        : <CustomGrid size={12} flexDirectionStyle headerBox />}

      </Box>
      <Box sx={{ width : '100%', py :  { md :  1, xs : 0} }}>
          <img src={BannerBottomVideo} style={{ width : '50%', objectFit : 'contain' }} alt="" /> 
          <img src={BannerBottomVideo} style={{ width : '50%', objectFit : 'contain' }} alt="" />
      </Box>
     </Box>
  )
}

export default CardVideo