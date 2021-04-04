import React from "react";
import { useEffect, useState } from "react";
import Friends from "../Friends/Friends";

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="App">
      <h1>Friends: {friends.length}</h1>
      {friends.map((friend) => (
        <Friends friend={friend} key={friend.id}></Friends>
      ))}
    </div>
  );
};

export default Home;
