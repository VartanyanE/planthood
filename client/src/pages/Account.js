import React from "react";

function Account() {
  const userName = localStorage.getItem("userName");
  const email = localStorage.getItem("user");

  return (
    <div>
      <p style={{ marginTop: "100px" }}> Username : {JSON.parse(userName)}</p>
      <p style={{ marginTop: "100px" }}> Email : {JSON.parse(email)}</p>
    </div>
  );
}

export default Account;
