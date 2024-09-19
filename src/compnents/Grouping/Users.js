import React from 'react';
import Card from '../Card';
import ProfileImage from '../ProfileImage';
import './Users.css'

export default function Users({ filterr, tickets, users }) {
  let newSortedTickets;
  let tempSortTickets = [...tickets];

  if (filterr.ordering === 'priority') {
    newSortedTickets = tempSortTickets.sort((a, b) => b.priority - a.priority);
  } else if (filterr.ordering === 'title') {
    newSortedTickets = tempSortTickets.sort((a, b) => a.title.localeCompare(b.title));
  }

  const user_s = Object.values(users);
  const mapping = {};
  user_s?.forEach(ele => {
    const temp = newSortedTickets.filter(ticket => ticket.userId === ele.id);
    mapping[ele.id] = temp;
  });

  return (
    <>
      {user_s?.map((ele, i) => (
        <div key={i} className="grid-col">
          <div className="grid-col-head">
            <div >
              <ProfileImage name={ele.name} available={true} />
              <span className="status-title">{ele.name}</span>
              <span>{mapping[ele.id]?.length}</span>
            </div>
            <div className="action-icons ">
              <span className="icon-plus curp"></span>
              <span className="icon-dots curp"></span>
            </div>
          </div>
          {mapping[ele.id]?.map((ticket, ii) => (
            <Card key={ii} filterr={filterr} obj={ticket} user={users} />
          ))}
        </div>
      ))}
    </>
  );
}
