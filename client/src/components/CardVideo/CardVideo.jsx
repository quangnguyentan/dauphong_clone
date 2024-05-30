import ReactPlayer from 'react-player'
import  Box from '@mui/material/Box'
import CustomGrid from '../CustomGrid/CustomGrid'
import BannerBottomVideo from '../../assets/banner_video.gif'
import BannerVideoFooter from '../../assets/bannerVideoFooter.gif'
import { Player, BigPlayButton, ControlBar , LoadingSpinner, ReplayControl} from 'video-react';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import '../../index.css'
import { useEffect, useState } from 'react'
const sources = {
 
  sintelTrailer: 'https://sovotv.live/uploads/resources/videos/introlivesovo.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
};

function CardVideo({ ChatBox  }) {
  let interval = 6
  let timeArrow = 31
  const [changeSource, setChangeSource] = useState(sources.sintelTrailer)
  const [time, setTime] = useState(null)
  const [timeNext, setTimeNext] = useState(null)
  const changeTime = () => {
    interval--
    if(interval < 0) return
    return interval
  }
  const changeArrowTime = () => {
    timeArrow--
    if(timeArrow < 0) {
      setChangeSource(sources.bunnyTrailer )
      return
    }
    return timeArrow
  }
  useEffect(() => {
     const timeInterVal = setInterval(() => { 
        const newTime = changeTime()
        setTime(newTime)
      }, 1000)
      return (() => {
        clearInterval(timeInterVal)
      })
  }, [])
  useEffect(() => {
    const timeNextArrow = setInterval(() => { 
       const newTimeArrow = changeArrowTime()
       setTimeNext(newTimeArrow)
     }, 1000)
     return (() => {
       clearInterval(timeNextArrow)
     })
 }, [])
  return (
     <Box sx={{ py : { md : 1, xs : 0}}} >
      <Box sx={{ display : { md : 'flex' }, gap : 2 }}>
        <Box sx={{ width : {md : '70%', xs : '100%'}, height : '100%'}} >
       <Box sx={{ position : 'absolute ', display : 'flex', width : {md : '43%', xs : '100%'}, justifyContent : 'space-between'}}> 
       {/* {changeSource !== sources.bunnyTrailer && <Button variant="contained" style={{ position : 'absolute', zIndex : 1, 
        color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'default',
        right : { md : '68%'}, width : 'fit-cotent', margin : '10px',  height: '30px', backgroundColor : 'black' }}>Video sẽ tự động bỏ qua sau {timeNext}</Button>} */}
        {changeSource !== sources.bunnyTrailer ? time === 0 || time === undefined ? <Button endIcon={<SkipNextIcon/>} onClick={() => setChangeSource(sources.bunnyTrailer)} variant="contained" style={{ position : 'absolute', zIndex : 1, 
        color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'pointer', right : 20, width : 'fit-content', margin : '10px',  height: '30px', backgroundColor : 'black' }}>Bỏ qua </Button> : <Button endIcon={<SkipNextIcon/>} variant="contained" style={{ position : 'absolute', zIndex : 1, 
        color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'default', right : 20, width : 'fit-content', margin : '10px',  height: '30px', backgroundColor : 'black' }}>Có thể bỏ qua {time}</Button> : ''}</Box>
        <Player width='100%' height='100%' src={changeSource} autoPlay className='customIcon' poster={changeSource === sources.bunnyTrailer ? 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' : '' } >
          <ControlBar autoHide={false} disableDefaultControls > 
            <ReplayControl seconds={10} order={2.2}  />
          </ControlBar>
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player>
        {/* <ReactPlayer width='100%'
            height='100%' playIcon volume={1} controls={true} url={
          [
            'https://sovotv.live/uploads/resources/videos/introlivesovo.mp4',
            'https://www.youtube.com/watch?v=jNgP6d9HraI',
            'https://www.youtube.com/watch?v=ZPHVFo3C3QU'
          ]
        }/> */}
        {/* <ReactPlayer width='100%'
            style={{ objectFit : 'cover' }}
            className='viewport-header'
            height='100%' playing playIcon={<PlayArrowIcon/>} controls  url={
          [
            'https://sovotv.live/uploads/resources/videos/introlivesovo.mp4',
          ]
        }/> */}
        
         <img className='react-player1' src={BannerVideoFooter} style={{width : '100%', objectFit : 'contain'}} alt="" /> 
        </Box>
        {ChatBox ? 
        <Box sx={{   width : { md : "30%", xs : "100%"}, height : { md : "470px", xs : "350px"}  }}>
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