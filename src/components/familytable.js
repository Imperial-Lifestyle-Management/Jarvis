import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import './ftable.css';

const Familytable = () => {
        // Extract the names of all children from the JSON data
        const children = useMemo(() => {}, []);
      
      
        // Define the columns for the table
        const columns = useMemo(
          () => [
            {
              Header: 'Children',
              accessor: 'name',
            },
          ],
          []
        );
      
        // Define the table data
        const tableData = useMemo(() => children.map((name) => ({ name })), [children]);
      
        // Use the useTable hook to create the table instance
        const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
          columns,
          data: tableData,
        });
      
        return (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      }
      
export default Familytable;

