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
    <div style={{ maxHeight: "calc(92vh)" }} className="overflow-y-auto">
      {testUsers.map((u) => (
        <User key={u._id} user={u} />
      ))}
    </div>
  );
}

export default Users;
