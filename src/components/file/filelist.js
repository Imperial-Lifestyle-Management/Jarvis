import React, { useState } from 'react';

function FileList({ files }) {
  const [approvalStatus, setApprovalStatus] = useState({});
  const [approvedFiles, setApprovedFiles] = useState([]);

  const handleApprove = id => {
    setApprovalStatus({ ...approvalStatus, [id]: 'Approved' });
    const approvedFile = files.find(file => file.id === id);
    setApprovedFiles([...approvedFiles, approvedFile]);
  };

  const handleDisapprove = id => {
    setApprovalStatus({ ...approvalStatus, [id]: 'Disapproved' });
  };

  return (
    <div>
      {files.map(file => (
        <div key={file.id} style={{ margin: '10px 0' }}>
          <p>{file.name}</p>
          {!approvalStatus[file.id] && (
            <div>
              <button onClick={() => handleApprove(file.id)}>Approve</button>
              <button onClick={() => handleDisapprove(file.id)}>Disapprove</button>
            </div>
          )}
          {approvalStatus[file.id] && <p>{approvalStatus[file.id]}</p>}
        </div>
      ))}
      <h2>Approved Files</h2>
      {approvedFiles.map(file => (
        <div key={file.id} style={{ margin: '10px 0' }}>
          <p>{file.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FileList;
