import React from 'react'
import ChatUser from './ChatUser'
import Message from './Message'
import Type from './Type'

export default function Right() {
  return (
    <div className="w-[70%] bg-slate-950 text-white flex flex-col h-screen">
      
      {/* Header */}
      <ChatUser />

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4">
        <Message />
      </div>

      {/* Input bar */}
      <div className="border-t border-gray-800">
        <Type />
      </div>
    </div>
  )
}
