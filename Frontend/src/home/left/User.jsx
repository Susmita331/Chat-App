import React from "react";
import useConversation from "../../statemanage/useConversation";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      onClick={() => setSelectedConversation(user)}
      className={`flex items-center space-x-4 px-6 py-4 cursor-pointer duration-300
        hover:bg-slate-700 
        ${isSelected ? "bg-slate-800" : ""}`}
    >
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
