import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  // For acess dynamic route paramaters
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    //Now Fatch data from Json PlaseHolder using Dynamic friendId
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  return (
    <div>
      <h3>This is Friend Detail Component:{friendId}</h3>
      <h2>Name: {friend.name}</h2>
      <p>Email: {friend.email}</p>
      <p>Contact: {friend.phone}</p>
      <p>Website: {friend.website}</p>
    </div>
  );
};

export default FriendDetail;
