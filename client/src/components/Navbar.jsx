import React, { useState} from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropdownOutlined, IconButton, InputBase, Toolbar } from "@mui/icons-material";
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { AppBar, useTheme } from "@mui/material";
import download from "assets/download.jpg"

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  return <AppBar
  sx={{
    position: "static",
    background: "none",
    boxShadow: "none"
  }}
  >
    <Toolbar sx={{justifyContent: "space-between"}} >
      {/* LEFT SIDE */}
      <FlexBetween>
        <IconButton onclick={()=> console.log("Open/ Close sidebar")}>
          <MenuIcon/>
        </IconButton>
        <FlexBetween backgroundColor={theme.palette.background.alt}
        borderRadius="9px"
        gap="3rem"
        p="0.1rem 1.5rem">
          <InputBase placeholder="search..."/>
          <IconButton>
            <Search/>
          </IconButton>
        </FlexBetween>
      </FlexBetween>
    </Toolbar>
  </AppBar>
}

export default Navbar
