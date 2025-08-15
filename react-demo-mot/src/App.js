import React, { useState } from "react";
import UserInfo from "./components/UserInfo";

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Người mới học React");

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Ứng dụng đếm số đơn giản </h1>{" "}
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Nhập tên của bạn"
      />
      <button onClick={handleIncrease}> Tăng count </button> {}{" "}
      <UserInfo count={count} userName={userName} />{" "}
    </div>
  );
}

export default App;
