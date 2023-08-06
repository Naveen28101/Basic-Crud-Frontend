import React from "react";

const Card = ({
  name,
  userName,
  email,
  phone,
  id,
  userId,
  deleteHandler,
  updateHandler,
}) => {
  return (
    <div className="outer-div">
      <div className="container inner">
        <div className="container wrapper">
          <div className="key-value-section">
            <div className="key">Name</div>
            <div className="value">{name}</div>
          </div>

          <div className="key-value-section">
            <div className="key">UserName</div>
            <div className="value">{userName}</div>
          </div>

          <div className="key-value-section">
            <div className="key">Email</div>
            <div className="value">{email}</div>
          </div>

          <div className="key-value-section">
            <div className="key">Phone</div>
            <div className="value">{phone}</div>
          </div>
        </div>
        <div className="button-section container">
          <button className="btn" onClick={() => updateHandler(userId, id)}>
            Update
          </button>
          <button className="btn" onClick={() => deleteHandler(userId, id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
