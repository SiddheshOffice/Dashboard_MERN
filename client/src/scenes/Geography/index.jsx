import { Box, useTheme } from '@mui/material'
import Header from 'components/Header'
import React from 'react'
import { useGetGeographyQuery } from 'state/api'

const Geography = () => {
    const theme = useTheme()
    const {data} = useGetGeographyQuery();
    console.log(data);
  return (
    <Box m={"1.5rem 2.5rem"}>
        <Header title={"GEOGRAPHY"} subtitle={"Find where your users are located"}/>
        
    </Box>
  )
}

export default Geography
