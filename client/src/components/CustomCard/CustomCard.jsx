import '../../index.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
function CustomCard({ title, titleCard, thumbnail, description, titleMore }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#34495e' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    height : 'fit-cotent'
  }))
  return (
    <Box sx={{  pb: 1, width : '100%', px : 4 }}>
        <Box sx={{ py : 4,justifyContent : 'center'}}>
          <Typography sx={{ color : '#21FF65', fontWeight : 600, display : 'flex', justifyContent : 'center' }} variant='h4'>
             { title }
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 2, sm: 8, md: 12 }}>
            {Array.from(Array(1)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
              <Item sx={{ boxShadow : 'none', bgcolor : '#000000', gap : 2, display : 'flex', borderColor : 'rgb(254 179 7)', border : 'none', px : 0, flexDirection : 'column', height: 'fit-content', cursor : 'pointer' }}>
                <img src={thumbnail} alt="" height='100%' width='100%' style={{ borderRadius: '20px', p : 0 }} />
                <Box sx={{ flexDirection : 'column', gap : 2, display : 'flex',}}>
                  <Typography sx={{ color : '#21FF65' }}>
                   {titleCard}
                  </Typography>
                  <Typography sx={{  
                      color : 'white',
                    }}>
                    {titleMore}
                  </Typography>
                  <Typography sx={{ color : 'gray',  
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical', }}>
                    {description}
                  </Typography>
                </Box>
              </Item>
              </Grid>
            ))}
          </Grid>
      </Box>
    </Box>
  
  )
}

export default CustomCard