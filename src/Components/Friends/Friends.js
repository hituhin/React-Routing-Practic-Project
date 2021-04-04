import React from "react";
import "../Friends/Friends.css";
import { Link, useHistory } from "react-router-dom";
const Friends = (props) => {
  const history = useHistory();
  function haldleClick(friendId) {
    const url = `friend/${friendId}`;
    history.push(url);
  }
  const { name, email, id } = props.friend;
  return (
    <div className="friend-blocks">
      <h2>Name:{name}</h2>
      <p>Email:{email}</p>
      <p>
        <button onClick={() => haldleClick(id)}>Click Me</button>
      </p>
    </div>
  );
};

export default Friends;
