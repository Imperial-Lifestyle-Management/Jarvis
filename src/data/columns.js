import { BsFillPersonLinesFill } from 'react-icons/bs';

// This file contains the columns for the table
export const COLUMNS = [
    {
      Header: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsFillPersonLinesFill style={{ marginRight: '5px' }} />
          <div>Client Name</div>
        </div>
      ),
      accessor: 'name'
    }
  ];