import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CustomCard from '../../components/CustomCard/CustomCard'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { useEffect, useState } from 'react'
import { apiGetPosts } from '../../services/postService'
function WatchSetBit() {
  const [posts, setPosts] = useState('')
  const apiGetPost = async () => {
    const response = await apiGetPosts()
    if(response.success) setPosts(response?.post)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    apiGetPost()
  }, [])
  console.log(posts)
  
  return (
    <Container disableGutters fixed >
        <Box sx={{ px : 4, pt: 2 }}>
            <BreadCrumbs />
        </Box>
        {posts && posts?.map(el => 
            <CustomCard title='SOI KÈO BÓNG ĐÁ' titleCard='Soi kèo bóng đá' titleMore='Arsenal vs Bayern Munich 02h00 ngày 10/4: Pháo thủ trong thế “kẻ thách thức”'
            description='Đêm thứ Ba tới đây, sân Emirates sẽ sôi động với màn đọ sức giữa Arsenal và Bayern Munich ở lượt đi vòng tứ kết Champions League.
            Bức ảnh Thomas Muller đăng trên Instagram trước thềm trận đấu phần nào cho thấy sự trái ngược về phong độ của hai đội. Đây là cơ hội để nhà vô địch châu Âu năm 2020 “phả hơi nóng” lên mọi người khi họ đang đứng trước nguy cơ mất chức vô địch Bundesliga.
            Thất bại nội địa đáng tiếc của Bayern trước Leverkusen ở vòng đấu vừa qua càng khiến cuộc đua ngôi vương nước Đức trở nên hấp dẫn.'
            thumbnail={el?.thumbnail_url}/>
        )}
    </Container>
  )
}

export default WatchSetBit