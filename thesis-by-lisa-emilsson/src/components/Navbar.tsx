import React, { useEffect, useRef, useState } from 'react'
import { Collapse } from "flowbite";

function Navbar() {

  return (  
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center">
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Lisa.</span>
      </a>
    </div>
  </nav>
  )
}

export default Navbar
