import React from 'react'

function User() {
  return (
    <div className="flex items-center space-x-4 px-6 py-4 hover:bg-slate-700 duration-300 cursor-pointer">
      {/* Avatar with online badge */}
      <div className="avatar">
        <div className="w-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            alt="User avatar"
          />
        </div>
      </div>

      {/* User info */}
      <div>
        <h1 className="font-bold">Susmita Chakrabarty</h1>
        <span className="text-sm text-gray-400">susmitachy@gmail.com</span>
      </div>
    </div>
  )
}

export default User
