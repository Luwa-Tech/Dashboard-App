import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table'
import { userData } from '../data';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Users = () => {
    const columns = useMemo(
        () => [
          {
            accessorKey: 'name.firstName',
            header: 'First Name',
            size: 150,
          },
          {
            accessorKey: 'name.lastName',
            header: 'Last Name',
            size: 150,
          },
          {
            accessorKey: 'address',
            header: 'Address',
            size: 200,
          },
          {
            accessorKey: 'city',
            header: 'City',
            size: 150,
          },
          {
            accessorKey: 'state',
            header: 'State',
            size: 150,
          },
        ],
        [],
      );

      const theme = useMemo ( () => (
        createTheme({
            palette: {
                mode: "light"
            }
        })
      ))
    
      return (
        <main className="user-table_container">
          <div className="user-table">
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={userData} />
            </ThemeProvider>
            </div>
        </main>
      );
}

export default Users




