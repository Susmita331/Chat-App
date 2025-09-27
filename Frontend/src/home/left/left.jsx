import React from 'react'
import Search from './search'
import User from './User' 
import Users from './Users'
export default function Left(){
    return (
        <div className="w-[30%] bg-black text-white flex flex-col h-screen">
            <h1 className="font-bold text-3xl p-2 px-11">Chats</h1>
            <Search />
            <hr />

            {/* Scrollable users list */}
            <div className="flex-1 overflow-y-auto">
                <Users />
            </div>
        </div>
    )
}