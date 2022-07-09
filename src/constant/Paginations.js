import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Paginations({ objectPerPage, info, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(info / objectPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      
      <Stack spacing={2}>
        <Pagination
          style={{ display: 'flex', justifyContent: 'center' }}
          onChange={(_, num) => paginate(num)}
          count={Math.ceil(info / objectPerPage)}
        />
      </Stack>
    </div>
  );
}

export default Paginations;
