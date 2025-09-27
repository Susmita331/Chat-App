import React from 'react'
import { IoMdSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-3">
          <label className="input">
            <input type="search" required placeholder="Search" />
          </label>
          <button>
            <IoMdSearch />
          </button>
        </div>
      </form>
    </div>
  );
}
