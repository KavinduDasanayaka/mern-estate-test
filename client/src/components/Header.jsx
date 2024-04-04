import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>Header
        <form
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>

        <Link to = '/'>
            <p>GoToHome</p>

        </Link>
        <Link to = '/about'>
            <p>GoToAbout</p>

        </Link>
        <Link to = '/sign-in'>
            <p>GoToSignIn</p>

        </Link>
    </div>
    
  )
}
