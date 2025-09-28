import React from 'react'
import { MdLogout } from "react-icons/md";
export default function Logout(){
    return (
        
        <div className='w-[5%] bg-slate-950 text-white flex flex-col justify-end'>
            <div className="p-3">
                  <form action="">
                    <div className="flex space-x-3">
                      <button>
                        <MdLogout className='text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300'></MdLogout>
                      </button>
                    </div>
                  </form>
                </div>
        </div>
        
    )
}