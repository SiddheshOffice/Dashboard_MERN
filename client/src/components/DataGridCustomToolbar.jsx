import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid'
import React from 'react'
import FlexBetween from './FlexBetween'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

const DataGridCustomToolbar = () => {
  return (
    <GridToolbarContainer>
        <FlexBetween>
            <FlexBetween>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector/>
                <GridToolbarExport/>
            </FlexBetween>
            <TextField label="Search..." 
            sx={{mb: "0.5rem", width: "15rem"}}
            // onChange={(e) => setSearchInput(e.target.value)}
            // value={searchInput}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={() => {}}>
                            <Search/>
                        </IconButton>
                    </InputAdornment>
                )
            }}
            />
            </FlexBetween>
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar
