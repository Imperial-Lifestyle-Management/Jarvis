import { BsFillPersonLinesFill } from 'react-icons/bs';

// This file contains the columns for the table
export const FCOLUMNS = [
    {
      Header: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsFillPersonLinesFill style={{ marginRight: '5px' }} />
          <div>Family Members</div>
        </div>
      ),
      accessor: "name"
  
    }
  ];