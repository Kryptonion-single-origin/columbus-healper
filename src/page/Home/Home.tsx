import React, { useEffect } from "react";
import { Button, Container, FormControl, Navbar } from "react-bootstrap";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const itemData = [
  {
    img: 'https://lh3.googleusercontent.com/OYvE-daPlxRCqry6lJY2SaXKodbD1-2jTucE7l2iEb50no017kXDuu9uYVt44To6930sL3xtSrm3XpSedtpXbcIydIv-xK0WLIxx=s120',
    title: 'DeGods',
    link: "https://opensea.io/collection/degods"
  },
  {
    img: 'https://lh3.googleusercontent.com/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ=s60',
    title: 'ENS: Ethereum Name Service',
    link: "https://opensea.io/collection/ens"
  },
  {
    img: 'https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s120',
    title: 'otherdeed',
    link: "https://opensea.io/collection/otherdeed"
  },
  {
    img: 'https://openseauserdata.com/files/c3a312c53514642e8041c65e10b40a52.gif',
    title: 'women-ape-yacht-club',
    link: "https://opensea.io/collection/women-ape-yacht-club"
  },
  {
    img: 'https://lh3.googleusercontent.com/FIVTOXvq6laXQrp0B60K6iEW3cNRD-q9FRmpI0bMe7EZ7_spGs6ZlA0gqEnTRkc7xbJhP6lzZQ6l0B0u_QD_GOp4DBF-oQdwPr7P3g=s120',
    title: 'tykes',
    link: "https://opensea.io/collection/tykes"
  },
  {
    img: 'https://openseauserdata.com/files/7b0c87d3326e91e267fbb190d3fd1d7f.gif',
    title: 'clonexforging',
    link: "https://opensea.io/collection/clonexforging"
  },


];
interface IOpenseaTop10Collection {
  address: string
  image_url: string
}
// const sdk = require('api')('@opensea/v1.0#mxj1ql5k6c0il');
// import sdk from "@opensea/opensea";
// sdk.retrievingCollections({offset: '0', limit: '10'})
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
const Home = () => {
  useEffect(() => {
    // const mainLoad = async () => {
    //   const options = { method: 'GET', headers: { Accept: 'application/json' } };

    //   const res = await fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=10', options)
    //   alert(res.json())
    //   // .then(response => response.json())
    //   // .then(response => console.log(response))
    //   // .catch(err => console.error(err));
    // }
    // mainLoad()

  }, []);
  return (<>
    {/* <Navbar bg="primary" className="px-3" expand="lg" variant="dark">
      <Navbar.Brand>Our Mo Extension</Navbar.Brand>
    </Navbar> */}

    {/* <Container className="w-100 h-100 p-3"> */}
    <h1>⭐️ FEED ⭐️</h1>
      <h2>OPENSEA TOP RANK</h2>
      <Box sx={{ width: 350, height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={4} gap={2}>
          {itemData.map((item) => (
            <a target='_blank' href={item.link}>
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
            </a>
          ))}
        </ImageList>
      </Box>
    {/* </Container> */}
  </>)
};
export default Home;