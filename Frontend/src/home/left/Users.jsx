import React from "react";
import User from "./User";

function Users() {
  // temporary mock data so screen isn't empty
  const testUsers = [
    { _id: 1, name: "Susmita Chakrabarty", email: "susmitachy@gmail.com" },
    { _id: 2, name: "Soumit Chakrabarty", email: "soumit@gmail.com" },
    { _id: 3, name: "Priya Sharma", email: "priya@gmail.com" },
  ];

  return (
    <div className="overflow-y-auto" style={{ maxHeight: "calc(92vh - 60px)" }}>
      {testUsers.map((u) => (
        <User key={u._id} user={u} />
      ))}
    </div>
  );
}

export default Users;
