import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DataGridCustomToolbar from 'components/DataGridCustomToolbar';
import Header from 'components/Header';
import React, { useState } from 'react'
import { useGetTransactionsQuery } from 'state/api';


const Transactions = () => {
  const theme = useTheme();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20
  })
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("")
  const { isLoading, ...data } = useGetTransactionsQuery({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sort: JSON.stringify(sort),
    search
  })

  console.log(data)

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1
    },
    {
      field: "products",
      headerName: "# of products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`
    }
  ]

  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title={"TRANSACTIONS"} subtitle={"Entire list of transactions"} />
      <Box height={"80vh"}
        sx={{
          "&: .MuiDataGrid-root": {
            border: "none"
          },

          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .MuiDatagrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none"
          },
          "& .MuiDatagrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
            overflowX: 'hidden'
          },
          "& .MuiDatagrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderYop: "none"
          },
          "& .MuiDatagrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`
          }
        }}
      >
        {/* <DataGrid
        loading={isLoading || !data}
        getRowId={(row)=> row._id}
        rows={(data && data.transactions)||[]}
        columns={columns}
        rowCount={(data && data.total) || 0}
        pageSizeOptions={[20, 50, 100]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode = "server"
        sortingMode='server'
        onSortModelChange={(newSortModel) => setSort(...newSortModel)}
        slots={{toolbar: DataGridCustomToolbar}}
        slotProps={{
          toolbar: {searchInput, setSearchInput, setSearch}
        }}
        /> */}
        <DataGrid

        rows={(data && data.transactions)||[]}
        {...data}
        loading={isLoading || !data}
        rowCount={(data && data.total) || 0}
        pageSizeOptions={[20, 50, 100]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode = "server"
        sortingMode='server'
        onSortModelChange={(newSortModel) => setSort(...newSortModel)}
        slots={{toolbar: DataGridCustomToolbar}}
        slotProps={{
          toolbar: {searchInput, setSearchInput, setSearch}
        }}
        />
      </Box>
    </Box>
  )
}

export default Transactions
