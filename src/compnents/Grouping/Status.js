import React from 'react';
import Card from '../Card';
import './Status.css';

export default function Status({ filterr, tickets, users }) {
  let newSortedTickets;
  let tempSortTickets = [...tickets];

  if (filterr?.ordering === 'priority') {
    newSortedTickets = tempSortTickets.sort((a, b) => b.priority - a.priority);
  } else if (filterr?.ordering === 'title') {
    newSortedTickets = tempSortTickets.sort((a, b) => a.title.localeCompare(b.title));
  }

  const backlog = newSortedTickets?.filter(obj => obj.status === 'Backlog');
  const todo = newSortedTickets?.filter(obj => obj.status === 'Todo');
  const inprogress = newSortedTickets?.filter(obj => obj.status === 'In progress');
  const done = newSortedTickets?.filter(obj => obj.status === 'Done');
  const canceled = newSortedTickets?.filter(obj => obj.status === 'Canceled');

  return (
    <>
      <div className="grid-col">
        <div className="grid-col-head">
          <div>
            <i style={{ color: '#ff5f56' }} className="bx bxs-error-circle"></i>
            <span className="status-title">Backlog</span>
            <span>{backlog?.length}</span>
          </div>
          <div className="action-icons">
            <i className="bx bx-plus bx-rotate-90 curp"></i>
            <i className="bx bx-dots-vertical-rounded bx-rotate-90 curp"></i>
          </div>
        </div>
        {backlog?.length !== 0 ? (
          backlog?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />)
        ) : (
          <span className="empty-state">Nothing is in backlog</span>
        )}
      </div>

      <div className="grid-col">
        <div className="grid-col-head">
          <div>
            <i style={{ color: '#e2e2e2' }} className="bx bx-circle"></i>
            <span className="status-title">Todo</span>
            <span>{todo?.length}</span>
          </div>
          <div className="action-icons">
            <i className="bx bx-plus bx-rotate-90 curp"></i>
            <i className="bx bx-dots-vertical-rounded bx-rotate-90 curp"></i>
          </div>
        </div>
        {todo?.length !== 0 ? (
          todo?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />)
        ) : (
          <span className="empty-state">Nothing todo</span>
        )}
      </div>

      <div className="grid-col">
        <div className="grid-col-head">
          <div>
            <i style={{ color: '#f1ca4b' }} className="bx bx-loader-circle"></i>
            <span className="status-title">In Progress</span>
            <span>{inprogress?.length}</span>
          </div>
          <div className="action-icons">
            <i className="bx bx-plus bx-rotate-90 curp"></i>
            <i className="bx bx-dots-vertical-rounded bx-rotate-90 curp"></i>
          </div>
        </div>
        {inprogress?.length !== 0 ? (
          inprogress?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />)
        ) : (
          <span className="empty-state">Nothing is in progress</span>
        )}
      </div>

      <div className="grid-col">
        <div className="grid-col-head">
          <div>
            <i style={{ color: '#5e6ad2' }} className="bx bxs-check-circle"></i>
            <span className="status-title">Done</span>
            <span>{done?.length}</span>
          </div>
          <div className="action-icons">
            <i className="bx bx-plus bx-rotate-90 curp"></i>
            <i className="bx bx-dots-vertical-rounded bx-rotate-90 curp"></i>
          </div>
        </div>
        {done?.length !== 0 ? (
          done?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />)
        ) : (
          <span className="empty-state">Nothing is done</span>
        )}
      </div>

      <div className="grid-col">
        <div className="grid-col-head">
          <div>
            <i style={{ color: '#94a2b3' }} className="bx bxs-x-circle"></i>
            <span className="status-title">Canceled</span>
            <span>{canceled?.length}</span>
          </div>
          <div className="action-icons">
            <i className="bx bx-plus bx-rotate-90 curp"></i>
            <i className="bx bx-dots-vertical-rounded bx-rotate-90 curp"></i>
          </div>
        </div>
        {canceled?.length !== 0 ? (
          canceled?.map((ele, i) => <Card key={i} filterr={filterr} obj={ele} user={users} />)
        ) : (
          <span className="empty-state">Nothing is canceled</span>
        )}
      </div>
    </>
  );
}
