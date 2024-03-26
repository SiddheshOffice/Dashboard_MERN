import { Box, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { useGetTransactionsQuery } from 'state/api';

const Transactions = () => {
    const theme = useTheme();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
    const {data, isLoading} = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    })
    console.log(data)
  return (
   <Box></Box>
  )
}

export default Transactions
