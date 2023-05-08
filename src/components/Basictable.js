import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import clients from '../data/clients';
import { COLUMNS } from '../data/columns';
import './table.css';
import { MdMonetizationOn } from 'react-icons/md';
import { BsPersonVcardFill } from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';
import FileList from  './file/filelist';
import { AiFillFile } from 'react-icons/ai';
import  Familytable  from './familytable';

const Basictable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => clients, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const [selectedClient, setSelectedClient] = useState(null);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const files = [
    { id: 1, name: 'file1.txt' },
    { id: 2, name: 'file2.pdf' },
    { id: 3, name: 'file3.jpg' },
  ];

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        <div className="tbody-container">
            {rows.map((row) => {
              prepareRow(row);
              const client = row.original;
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => handleClientClick(client)}
                  className={selectedClient === client ? 'selected' : ''}
                >
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
      {selectedClient && (
        <div className="profile-container">
                   
                 {/* <Familytable style={{ marginRight: '5px' }} />*/} 
                   
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '30px', fontWeight: 'bold', paddingRight:'20px', paddingTop:'20px' }}>
                <IoPersonCircleSharp style={{ marginRight: '5px' }} />
              Client Profile:
              </div>
              <div style={{ display: 'flex', alignItems: 'center',  marginTop:'5px' }}>
                <BsPersonVcardFill style={{ marginRight: '5px' }} />
              Personal Information:
              </div>
          <h3 style={{ display: 'flex', alignItems: 'center',  marginTop:'8px' }} 
          >{selectedClient.name}</h3>
          <p>Age: {selectedClient.age}</p>
          <p>Gender: {selectedClient.gender}</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop:'10px' }}>
                <MdMonetizationOn style={{ marginRight: '5px' }} />
              Financial Information:
              </div>
          {/* NEED MORE FIELDS HERE */}
          <div>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '25px', fontWeight: 'bold', marginTop:'10px' }}>
                <AiFillFile style={{ marginRight: '5px' }} />
              Submitted Files:
              </div>
      <FileList files={files} />
      </div>
        </div>
         
      )}
    </div>
    
  );
};

export default Basictable;
