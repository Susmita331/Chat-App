import React from 'react'
import ChatUser from './ChatUser'
import Message from './Message' 
export default function Right(){
    return (
        <>
        <div className='w-[70%] bg-slate-950 text-white'>
            
            <ChatUser></ChatUser>
            <Message></Message>
        </div>
        </>
    )
}