import  { useState } from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DrawRight from '../Drawer/Drawer';
const HEADER_TEXT = [
    {
      id : 1,
      name : 'TRANG CHỦ',
      link : '/'
    },
    {
      id : 2,
      name : 'VIDEO HIGHTLIGHT',
      link : '/video_hightlight'
    },{
      id : 3,
      name : 'TIN TỨC',
      link : '/tintuc'
    },{
      id : 4,
      name : 'SOI KÈO',
      link : '/soikeo'
    },
]
    
   
function Menu() {
  const [active, setActive] = useState(1)
  return (
    <>
    <Box
      sx={{
        display : { xs : 'none', md : 'flex'},
        gap : 1,
      }}
     >
      {HEADER_TEXT?.map((el) => (
        <Link key={el?.id} onClick={() => setActive(el?.id)} href='#'  sx={{
            color: 'white',
            px : 2,
            py : 1,
            alignContent : 'center',
            fontWeight : 600,
            fontSize : 15,
            borderRadius : '0px',
            textDecoration : 'none',
            background:  active ===  el?.id ? 'rgb(254 179 7)' : '' }}>
            {el?.name}     
        </Link>

      ))}
    </Box>
    <Box
      sx={{
        display : { md  : 'none', xs : 'flex'},
        gap : 1,
      }}
     >
      <DrawRight/>
    </Box>
    </>
  )
}

export default Menu
