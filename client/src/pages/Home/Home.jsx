import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import CardVideo from '../../components/CardVideo/CardVideo'
import CustomGrid from '../../components/CustomGrid/CustomGrid'
import TranHotBanner from '../../assets/tran_hot.png'
import btnMore from '../../assets/btnMore.webp'
import BannerBottomVideo from '../../assets/banner_video.gif'
import CustomCard from '../../components/CustomCard/CustomCard'
import { useEffect, useState } from 'react'
import { apiGetPosts } from '../../services/postService'
import CustomSkeleton from '../../components/CustomSkeleton/CustomSkeleton'

function Home() { 
  const [posts, setPosts] = useState('')
  const apiGetPost = async () => {
    const response = await apiGetPosts()
    if(response.success) setPosts(response?.post)
  }
  console.log(posts)
  useEffect(() => {
    window.scrollTo(0, 0)
    apiGetPost()
  }, [])
  return (
      <Container fixed disableGutters sx={{ height : (theme) => theme.football.cardVideoHeight, width : { md : '70%', xs : '100%'} }}>
        <Box sx={{ p : { md : 0, xs : 0}, m : { md : 0, xs : 0} }}>
        <CardVideo/>
        </Box>
        <Box sx={{ width : '100%',bgcolor : '#000000', px : 4, borderRadius : '15px 15px 0 0 ' }}>
          <Box sx={{ py : 2,justifyContent : 'center'}}>
            <img src={TranHotBanner} alt="" style={{  display : { md : 'flex', xs : 'none' }, objectFit : 'contain' }}   />
          </Box>
          <CustomGrid size={2} />
          <Box sx={{ py : 2,justifyContent : 'center', display : 'flex'}}>
            <img src={btnMore}  alt="" style={{  display : { md : 'flex', xs : 'none' }, objectFit : 'contain' }} />
          </Box>
          <Box sx={{ width : '100%'}}>
            <img src={BannerBottomVideo} style={{ height : '70px', width : '49%' }} alt="" /> 
            <img src={BannerBottomVideo} style={{ height : '70px', width : '49%' }} alt="" />
          </Box>
        </Box>
       
        {posts ? <CustomCard data={posts} title={'Soi kèo bóng đá'}/> : <CustomSkeleton/>}

      </Container>

  )
}

export default Home
