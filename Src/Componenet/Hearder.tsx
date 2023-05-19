import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import DomainSharpIcon from '@mui/icons-material/DomainSharp';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function App() {
  return (
    <div>
      <h1></h1>
      <Box>
        <AppBar>
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: 'green' }} varant />
          <AddIcCallIcon />
          <DomainSharpIcon />
          <LocalShippingTwoToneIcon />
          
        </IconButton>
        <AppBar />
      </Box>
    </div>
  );
}
