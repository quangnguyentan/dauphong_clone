import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Mar from 'react-fast-marquee'
function Marquee() {
  return (
    <Box sx={{ height : (theme) => theme.football.marqueeHeight, bgcolor : '#34495e', color : '#6cc24f', alignContent : 'center', py : 1}}>
       <Mar speed={120}>
          <Typography sx={{ fontWeight : 400, fontSize : 20 }}>
              DauphongTV - Link Xem Trực Tiếp Bóng Đá Hôm Nay Có BLV
          </Typography>
        </Mar>
    </Box>
  )
}

export default Marquee
