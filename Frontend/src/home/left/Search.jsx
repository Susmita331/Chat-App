import React from 'react'
import { IoMdSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-3">
          <label className="input border-[1px] border-gray-790 rounded-lg flex items-center gap-2 w-[80%]">
            <input type="search" className='grow outline-none bg-slate-900' placeholder="Search" />
          </label>
          <button>
            <IoMdSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300'></IoMdSearch>
          </button>
        </div>
      </form>
    </div>
  );
}
