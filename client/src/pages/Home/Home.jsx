import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import CardVideo from '../../components/CardVideo/CardVideo'
import CustomGrid from '../../components/CustomGrid/CustomGrid'
import TranHotBanner from '../../assets/tran_hot.png'
import btnMore from '../../assets/btnMore.webp'
import BannerBottomVideo from '../../assets/banner_video.gif'
import Footer from '../../assets/fotter.png'

import Typography from '@mui/material/Typography'
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
        <Box sx={{  pb: 1, width : '100%', px : 4 }}>
          <Box sx={{ py : 4,justifyContent : 'center'}}>
            <Typography sx={{ color : '#21FF65', fontWeight : 600, display : 'flex', justifyContent : 'center' }} variant='h4'>
              Video Highlight
            </Typography>
          </Box>
          <CustomCard />
        </Box>
        <Box sx={{  pb: 1, width : '100%', px : 4 }}>
          <Box sx={{ py : 4,justifyContent : 'center'}}>
            <Typography sx={{ color : '#21FF65', fontWeight : 600, display : 'flex', justifyContent : 'center' }} variant='h4'>
              Soi Kèo Bóng Đá
            </Typography>
          </Box>
          <CustomCard />
          <Box sx={{ height : '60px' }}/>
          <Box sx={{ width : '100%'}}>
            <img src={BannerBottomVideo} style={{ height : '70px', width : '49%' }} alt="" /> 
            <img src={BannerBottomVideo} style={{ height : '70px', width : '49%' }} alt="" />
          </Box>
        </Box>

        <Box sx={{ p : 2, width : '100%',bgcolor : '#000000',  borderRadius : '15px 15px 0 0 ' }}>
          <Typography variant='span' sx={{ color : 'white', fontWeight : 600, display : 'flex', justifyContent : 'center' }}>
            LỜI GIỚI THIỆU
          </Typography>
          
          <Box sx={{ display : 'flex', gap : 2}}>
            <Typography variant='span' sx={{ width : { md : '30%', xs : '40%' }, color : 'white', display : 'flex',  flexDirection : 'column' }}>
            <span style={{ fontSize : '14px' }}>Giới thiệu về Dauphong TV</span>
            <span style={{ fontSize : '14px', color : '#21FF65' }}>Mục tiêu phát triển của Dauphong TV</span>
            <span style={{ fontSize : '14px' }}>DauphongTV – Xem trực tuyến bóng đá tốc độ cao cùng các BLV bóng đá hàng đầu</span>
            <span style={{ fontSize : '14px' }}>
            Điểm khác biệt để cạnh tranh của Dauphong TV
            </span>
            <span style={{ fontSize : '14px' }}>
            Ưu điểm của tructiepbongda Dauphongtv
            </span>
            <span style={{ fontSize : '14px' }}>
            Những câu hỏi thường gặp khi xem trực tiếp bóng đá tại Dauphong
            </span>
            <span style={{ fontSize : '14px' }}>
            Checklist top 10 website cung cấp các trận đấu bóng đá trực tuyến hiện nay
            </span>
            <span style={{ fontSize : '14px' }}>
              Đậu Phộng TV – Xem trực tiếp bóng đá trực tuyến và làm chủ công nghệ
              Dauphong TV sẽ dẫn chiếm vị thế và thay thế các kênh thể thao truyền thống?
            </span>
            <span style={{ fontSize : '14px' }}>
              Lý do khiến người dùng lựa chọn Dauphong TV
            </span>
            <span style={{ fontSize : '14px' }}>
              Kết luận
            </span>
            </Typography>
            <Typography variant='span' sx={{ height : '840px', overflowY : 'auto',  width : { md : '70%', xs : '60%' }, color : 'white', display : 'flex',  flexDirection : 'column' }}>
            <span style={{ fontSize : '14px' }}>Với sự phát triển của internet, ngày càng nhiều người lựa chọn xem trực tiếp bóng đá trên web, thay vì truyền hình như trước kia. Để đáp ứng nhu cầu khổng lồ đó, một lượng lớn website phát sóng trực tuyến bóng đá ra đời. Và một trong những nền tảng thành công nhất hiện nay chính là trang xem trực tuyến bóng đá DauphongTV.</span>
            <span style={{ fontSize : '14px', color : '#21FF65' }}>Giới thiệu về Dauphong TV</span>
            <span style={{ fontSize : '14px' }}>Nếu bạn là một fan hâm mộ bóng đá đích thực và muốn xem trực tiếp các trận đấu hot nhất, thì Đậu Phộng TV chính là lựa chọn số một đấy! Đúng rồi, chúng tôi không chỉ đơn thuần là một trang web xem bóng đá trực tuyến mà còn là điểm đến của cộng đồng fan hâm mộ đông đảo nhất Việt Nam!</span>
            <span style={{ fontSize : '14px' }}>
            Ở đây, bạn có thể tận hưởng vô vàn những trận đấu sống động, chất lượng cao cùng với những bình luận tiếng Việt sôi động, hoàn toàn miễn phí! Không chỉ dừng lại ở đó, còn cung cấp rất nhiều thông tin về trận đấu và các sự kiện bóng đá đá mỗi ngày đấy!
            </span>
           <Box sx={{ width : '100%', height : '100%'  }}>
            <img src={Footer} alt="footer" width='100%' height='100%' style={{ objectFit : 'cover' }}  />
           </Box>
            <span style={{ fontSize : '14px' }}>
            Trang xem bóng đá trực tiếp DauphongTV
            </span>
            <span style={{ fontSize : '14px' }}>
            Thương hiệu Đậu Phộng TV đã quá nổi tiếng đến mức mà hầu như ai xem bóng đá online cũng đều biết đến. Chúng tôi sóng tất cả các giải đấu lớn nhỏ trên thế giới cũng như ở Việt Nam. Điều đặc biệt là bạn có thể thoải mái xem trực tiếp mọi trận đấu mình yêu thích mà không phải trả bất kỳ khoản phí nào.
            </span>
            <span style={{ fontSize : '14px' }}>
            Chúng tôi đã đầu tư một khoản tiền lớn để sở hữu công nghệ tiên tiến nhất trong việc trực tiếp bóng đá. Điều này đảm bảo mọi trận đấu mà chúng tôi phát sóng đều có chất lượng tốt nhất, không gặp tình trạng giật lag, mang đến cho người xem cảm giác như đang xem trực tiếp tại sân vận động.
            </span>
            <span style={{ fontSize : '14px' }}>
            Đội ngũ Bình luận viên Dauphong vô cùng chuyên nghiệp. Để tuyển dụng và huấn luyện được đội ngũ bình luận viên chất lượng cao như vậy, chúng tôi đã phải bỏ ra rất nhiều thời gian. Với kiến thức uyên thâm trong lĩnh vực bóng đá, cùng với khiếu hài hước, các bình luận viên chắc chắn sẽ mang đến cho bạn giây phút thư giãn với bóng đá tuyệt vời nhất..
            </span>
            <span style={{ fontSize : '14px' }}>
            Nói đến quảng cáo, bạn sẽ rất ít khi gặp phải chúng khi xem bóng đá trực tiếp tại Dauphong. Vì chúng tôi luôn muốn đảm bảo trải nghiệm của người xem là tốt nhất, không bị gián đoạn khi đang tận hưởng trận đấu mà mình yêu thích.
            </span>
            <span style={{ fontSize : '14px' }}>
            Mục tiêu phát triển của Dauphong TV
            </span>
            <span style={{ fontSize : '14px' }}>
            Với hơn 10 năm xây dựng hệ thống trực tiếp bóng đá, tôi có thể khẳng định rằng DauphongTV chính là một trong những website có chất lượng phát sóng hàng đầu Việt Nam. Với mục tiêu mang đến cho người hâm mộ những trải nghiệm tuyệt vời nhất, chúng tôi đã đầu tư rất nhiều
            </span>
            <span style={{ fontSize : '14px' }}>
            DauphongTV – Xem trực tuyến bóng đá tốc độ cao cùng các BLV bóng đá hàng đầu
            </span>
            <span style={{ fontSize : '14px' }}>
            Hiện tại thì Dauphong là trang web xem bóng đá trực tiếp hot nhất. Chẳng những là có đầy đủ trận đấu bóng đá với chất lượng tốt mà Dauphong TV còn có nhiều tính năng hữu ích khác nữa. Ví dụ như:
            </span>
            <span style={{ fontSize : '14px' }}>
            Hiện tại thì Dauphong là trang web xem bóng đá trực tiếp hot nhất. Chẳng những là có đầy đủ trận đấu bóng đá với chất lượng tốt mà Dauphong TV còn có nhiều tính năng hữu ích khác nữa. Ví dụ như:
            </span>
            
          
            </Typography>
          </Box>
        
          <Box sx={{ width : '100%'}}>
            
          </Box>
        </Box>
      </Container>

  )
}

export default Home
