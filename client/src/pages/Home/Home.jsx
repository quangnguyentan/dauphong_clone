import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import CardVideo from '../../components/CardVideo/CardVideo'
import CustomGrid from '../../components/CustomGrid/CustomGrid'
import TranHotBanner from '../../assets/tran_hot.png'
import btnMore from '../../assets/btnMore.webp'
import BannerBottomVideo from '../../assets/banner_video.gif'
import CustomCard from '../../components/CustomCard/CustomCard'

function Home() { 
  
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
        <CustomCard title='VIDEO HIGHLIGHT' titleCard='VIDEO HIGHLIGHT' description='11/1/2024 Highlights | Real Madrid vs Atletico Madrid | Rượt đuổi tỷ số hấp dẫn – Real ngược dòng không tưởng'
        thumbnail='https://i.ytimg.com/vi/vsb3bbBjIS8/maxresdefault.jpg'

        />
        <CustomCard title='SOI KÈO BÓNG ĐÁ' titleCard='Soi kèo bóng đá' titleMore='Arsenal vs Bayern Munich 02h00 ngày 10/4: Pháo thủ trong thế “kẻ thách thức”'
            description='Đêm thứ Ba tới đây, sân Emirates sẽ sôi động với màn đọ sức giữa Arsenal và Bayern Munich ở lượt đi vòng tứ kết Champions League.
            Bức ảnh Thomas Muller đăng trên Instagram trước thềm trận đấu phần nào cho thấy sự trái ngược về phong độ của hai đội. Đây là cơ hội để nhà vô địch châu Âu năm 2020 “phả hơi nóng” lên mọi người khi họ đang đứng trước nguy cơ mất chức vô địch Bundesliga.
            Thất bại nội địa đáng tiếc của Bayern trước Leverkusen ở vòng đấu vừa qua càng khiến cuộc đua ngôi vương nước Đức trở nên hấp dẫn.'
            thumbnail='https://tructiep2.dauphong2.live/wp-content/uploads/2024/04/Arsenal-BayernMunich.jpg'

        />
      </Container>

  )
}

export default Home
