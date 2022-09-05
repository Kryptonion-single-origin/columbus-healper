import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

interface IChainConfig {
  name: string;
  url: string;
}
const CHAIN_CONFIGS: IChainConfig[] =
  [
    { name: "Ethereum", url: "https://etherscan.io/" },
    { name: "Binance Smart Chain", url: "https://bscscan.com/" },
    { name: "Polygon", url: "https://polygonscan.com/" },
    { name: "Fantom", url: "https://ftmscan.com/" },
    { name: "Avalanche", url: "https://cchain.explorer.avax.network/" },
    { name: "Harmony", url: "https://explorer.harmony.one/" },
    { name: "xDai", url: "https://blockscout.com/xdai/mainnet/" },
    { name: "Matic", url: "https://explorer-mainnet.maticvigil.com/" },
    { name: "Arbitrum", url: "https://explorer.arbitrum.io/" },
    { name: "Celo", url: "https://explorer.celo.org/" },
    { name: "Klaytn", url: "https://scope.klaytn.com/" },
    { name: "OKExChain", url: "https://www.oklink.com/okexchain/" },
    { name: "Huobi ECO Chain", url: "https://hecoinfo.com/" },
    { name: "Binance Chain", url: "https://explorer.binance.org/" },
    { name: "Tron", url: "https://tronscan.org/#/" },
    { name: "EOS", url: "https://bloks.io/" },
    { name: "Tezos", url: "https://tzkt.io/" },
    { name: "Solana", url: "https://explorer.solana.com/" },
    { name: "Algorand", url: "https://algoexplorer.io/" },
    { name: "NEO", url: "https://neoscan.io/" },
    { name: "Ontology", url: "https://explorer.ont.io/" },
    { name: "Cosmos", url: "https://www.mintscan.io/" },
    { name: "Kusama", url: "https://polkascan.io/kusama/" },
    { name: "Polkadot", url: "https://polkascan.io/polkadot/" },
    { name: "Aion", url: "https://mainnet.aion.network/" },
    { name: "IoTeX", url: "https://iotexscan.io/" },
    { name: "Wanchain", url: "https://www.wanscan.org/" },
    { name: "ICON", url: "https://tracker.icon.foundation/" },
    { name: "Theta", url: "https://explorer.thetatoken.org/" },
    { name: "Nervos", url: "https://explorer.nervos.org/" },
    { name: "Zilliqa", url: "https://viewblock.io/zilliqa/" },
    { name: "Ripple", url: "https://bithomp.com/" },
    { name: "Stellar", url: "https://stellar.expert/explorer/public/" },
    { name: "Aeternity", url: "https://mainnet.aeternity.io/" },
    { name: "NEAR", url: "https://explorer.near.org/" },
    { name: "Elrond", url: "https://elrond.com/" },
    { name: "Filecoin", url: "https://filscan.io/" },
    { name: "Flow", url: "https://flowscan.org/" },
    { name: "Hedera Hashgraph", url: "https://explorer.hedera.com/" },
    { name: "Secret", url: "https://scrtscan.com/" },
    { name: "Casper", url: "https://cspr.live/" },
    { name: "Kadena", url: "https://explorer.chainweb.com/" },
    { name: "Avalanche C-Chain", url: "https://cchain.explorer.avax.network/" },
    { name: "Avalanche Fuji C-Chain", url: "https://cchain.explorer.avax-test.network/" },
    { name: "Avalanche P-Chain", url: "https://explorer.avax.network/" },
    { name: "Avalanche Fuji P-Chain", url: "https://explorer.avax-test.network/" },
    { name: "Avalanche X-Chain", url: "https://explorer.avax.network/" },
    { name: "Avalanche Fuji X-Chain", url: "https://explorer.avax-test.network/" },
    { name: "Avalanche E-Chain", url: "https://explorer.avax.network/" },
    { name: "Avalanche Fuji E-Chain", url: "https://explorer.avax-test.network/" },
    { name: "Avalanche C-Chain", url: "https://cchain.explorer.avax.network/" },
    { name: "Avalanche Fuji C-Chain", url: "https://cchain.explorer.avax-test.network/" },
    { name: "Avalanche P-Chain", url: "https://explorer.avax.network/" },
    { name: "Avalanche Fuji P-Chain", url: "https://explorer.avax-test.network/" },
  ]
export default function ApeBoard() {
  const [hash, setHash] = React.useState('');

  const handleHashChange = (event: { target: { value: string } }) => {
    setHash(event.target.value);
  };
  const search = () => {
    let urlCaller = "https://apeboard.finance/dashboard/"+hash;
  chrome.tabs.create({ url: urlCaller });
  }
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Hash</InputLabel>
        <BootstrapInput
          id="demo-customized-textbox"
          value={hash}
          onChange={handleHashChange}
        />
      </FormControl>
 
      {/* <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Chain</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={url}
          onChange={handleUrlChange}
          input={<BootstrapInput />}
        >
          {CHAIN_CONFIGS.map((chain) => (
            <option value={chain.url}>{chain.name}</option>
          ))}
        </NativeSelect>
      </FormControl> */}
      {/* //endIcon={<SendIcon />}> */}
      <br />
      <Button onClick={search} variant="contained" >
        Dashboard
      </Button>
    </div>
  );
}
