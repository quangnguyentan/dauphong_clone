import '../../index.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
function CustomCard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#34495e' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    height : 'fit-cotent'
  }))
  return (
    <Box sx={{ flexGrow: 1}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
        <Item sx={{ boxShadow : 'none', bgcolor : '#34495e', gap : 2, display : 'flex', borderColor : 'rgb(254 179 7)', border : 'none', px : 0, flexDirection : 'column', height: 'fit-content', cursor : 'pointer' }}>
          <img src="https://i.ytimg.com/vi/vsb3bbBjIS8/maxresdefault.jpg" alt="" height='100%' width='100%' style={{ borderRadius: '20px', p : 0 }} />
          <Box sx={{ flexDirection : 'column', gap : 2, display : 'flex',}}>
            <Typography sx={{ color : '#21FF65' }}>
              Video Highlight
            </Typography>
            <Typography sx={{  
                overflow: 'hidden',
                color : 'white',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
              }}>
             11/1/2024 Highlights | Real Madrid vs Atletico Madrid | Rượt đuổi tỷ số hấp dẫn – Real ngược dòng không tưởng
            </Typography>
          </Box>
        </Item>
        </Grid>
      ))}
    </Grid>
  </Box>
  )
}

export default CustomCard