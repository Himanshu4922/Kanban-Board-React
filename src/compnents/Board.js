import React, { useReducer } from "react";
import Status from "./Grouping/Status";
import Priority from "./Grouping/Priority";
import Users from "./Grouping/Users";
import "./Board.css";

export default function Board({ filter, tickets, users }) {
  const user_s = {};
  const tick = tickets;
  users.forEach((element, index) => {
    user_s[element.id] = element;
  });

  return (
    <div className="main-board">
      {filter?.grouping === "status" && (
        <Status filterr={filter} tickets={tick} users={user_s} />
      )}
      {filter?.grouping === "priority" && (
        <Priority filterr={filter} tickets={tick} users={user_s} />
      )}
      {filter?.grouping === "user" && (
        <Users filterr={filter} tickets={tick} users={user_s} />
      )}
    </div>
  );
}
