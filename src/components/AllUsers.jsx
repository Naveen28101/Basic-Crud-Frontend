import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllusers, deleteUser } from "../service/api.js";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./update-userl.jsx";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [user_id, setUserId] = useState("");

  const history = useNavigate();

  async function fetchAllUsers() {
    console.log("func call");
    await getAllusers()
      .then((res) => {
        setAllUsers(res.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function deleteHandler(userId, id) {
    await deleteUser(userId);
    await fetchAllUsers();
  }
  function updateHandler(userId, id) {
    console.log("updated with ", id);
    setUserId(userId);
    console.log("user_id", user_id);
    setClicked((clicked) => !clicked);
  }
  useEffect(
    function () {
      fetchAllUsers();
    },
    [clicked]
  );

  return (
    <>
      {clicked === false ? (
        <div className="section">
          <h1>Users Data</h1>
          <div className="inner-wrapper">
            <>
              {allUsers.length > 0 ? (
                allUsers.map((user, index) => {
                  return (
                    <Card
                      name={user.name}
                      userName={user.username}
                      email={user.email}
                      phone={user.phone}
                      key={index}
                      id={index}
                      userId={user._id}
                      deleteHandler={deleteHandler}
                      updateHandler={updateHandler}
                    />
                  );
                })
              ) : (
                <p>No users</p>
              )}
            </>
          </div>
        </div>
      ) : (
        <UpdateUser id={user_id} clicked={clicked} setClicked={setClicked} />
      )}
    </>
  );
};
export default AllUsers;
