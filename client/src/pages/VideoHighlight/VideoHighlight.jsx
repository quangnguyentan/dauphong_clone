import Container from '@mui/material/Container'
import CustomCard from '../../components/CustomCard/CustomCard'
import Box from '@mui/material/Box'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
function VideoHighlight() {
  return (
    <Container disableGutters fixed >
        <Box sx={{ px : 4, pt: 2 }}>
            <BreadCrumbs />
        </Box>
        <CustomCard title='VIDEO HIGHLIGHT' titleCard='VIDEO HIGHLIGHT' description='11/1/2024 Highlights | Real Madrid vs Atletico Madrid | Rượt đuổi tỷ số hấp dẫn – Real ngược dòng không tưởng'
        thumbnail='https://i.ytimg.com/vi/vsb3bbBjIS8/maxresdefault.jpg'

        />
    </Container>
  )
}

export default VideoHighlight