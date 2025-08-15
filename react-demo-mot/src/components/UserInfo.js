import React from "react";

function UserInfo({ count, userName }) {
  return (
    <div>
      <h2> Xin chào, {userName}! </h2>{" "}
      <p>
        {" "}
        Bạn đã nhấn nút {count}
        lần{" "}
      </p>{" "}
    </div>
  );
}

export default UserInfo;
