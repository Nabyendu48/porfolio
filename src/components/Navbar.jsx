import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">Nabyendu Saha</h1>
      <ul className="flex gap-6">
        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
          <li key={item}>
            <a href={#${item.toLowerCase()}} className="hover:text-indigo-500 font-medium">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
