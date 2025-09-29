import React from "react";
import User from "./User";

import useGetAllUsers from "../../context/useGetAllUsers";
function Users() {
  const [allUsers, loading] = useGetAllUsers();

  if (loading) return <p className="text-white px-6 py-4">Loading users...</p>;

  return (
    <div className="overflow-y-auto" style={{ maxHeight: "calc(92vh - 60px)" }}>
      {allUsers.map((u) => (
        <User key={u._id} user={u} />
      ))}
    </div>
  );
}

export default Users;
