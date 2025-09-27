import React from "react";

function User({ user }) {
  return (
    <div className="flex items-center space-x-4 px-6 py-4 hover:bg-slate-700 duration-300 cursor-pointer">
      <div className="avatar">
        <div className="w-14 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
          <img
            src={user.avatar}
            alt={`${user.name} avatar`}
          />
        </div>
      </div>

      <div>
        <h1 className="font-bold">{user.name}</h1>
        <span className="text-sm text-gray-400">{user.email}</span>
      </div>
    </div>
  );
}

export default User;
