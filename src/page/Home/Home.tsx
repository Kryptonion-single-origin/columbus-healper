import React, { useEffect } from "react";
import { Button, Container, FormControl, Navbar } from "react-bootstrap";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ITokenMonitor, KEY_TOKEN_MONITOR } from "../../types/ITokenMonitor";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

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
interface ITokenPrice {
  name: string
  price: string
}
// const sdk = require('api')('@opensea/v1.0#mxj1ql5k6c0il');
// import sdk from "@opensea/opensea";
// sdk.retrievingCollections({offset: '0', limit: '10'})
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
const Home = () => {
  const [tokensMonitor, setTokensMonitor] = React.useState<ITokenPrice[]>([]);
  useEffect(() => {
    const mainLoad = async () => {

      let stored = localStorage.getItem(KEY_TOKEN_MONITOR);
      let tokenPricce: ITokenPrice[] = [];
      if (stored) {
        const tokens: ITokenMonitor[] = JSON.parse(stored);
        tokens.map(async (token) => {
          const web3 = new Web3("https://bsc-dataseed1.binance.org/")
          const getPairAbi: AbiItem[] = [{
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          }];
          const pancakeRouter = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
          const contractFactoryPancake = new web3.eth.Contract(getPairAbi, pancakeRouter)
          const lpAddr = await contractFactoryPancake.methods.getPair(token.tokenAddress, token.stableCoinAddress).call()
          const getReservesAbi: AbiItem[] = [{
            "constant": true,
            "inputs": [],
            "name": "getReserves",
            "outputs": [
              {
                "internalType": "uint112",
                "name": "_reserve0",
                "type": "uint112"
              },
              {
                "internalType": "uint112",
                "name": "_reserve1",
                "type": "uint112"
              },
              {
                "internalType": "uint32",
                "name": "_blockTimestampLast",
                "type": "uint32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          }]
          const pairContract = new web3.eth.Contract(getReservesAbi, lpAddr)
          const resPair = await pairContract.methods.getReserves().call()
          const price = resPair._reserve1 / resPair._reserve0
          tokenPricce.push({
            name: token.name,
            price: (+resPair._reserve1 / +resPair._reserve0).toFixed(3),
          })

        })
        setTokensMonitor(tokenPricce);
      }
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
    }
    mainLoad()

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
    <br />
    {tokensMonitor.map((token, index) => {
      return <div key={index}>
        <h2>{token.name} : {token.price}
        </h2>
      </div>
    })}
    {/* </Container> */}
  </>)
};
export default Home;