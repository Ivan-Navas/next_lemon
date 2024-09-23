import React from 'react'
import { BiSearch } from 'react-icons/bi'

function Search() {
  return (
    <form className='w-100 flex'>
      <input placeholder='Buscar' type="text" className='w-100 h-37 bg-lBackMain rounded-l-16 px-13 text-12 text-title font-medium border-none outline-none placeholder:text-title dark:bg-title dark:text-lFontMain dark:placeholder:text-white' autoComplete='off' />
      <button type='submit' aria-label='submit'>
        <BiSearch className='w-37 h-37 text-white bg-lBackMain rounded-r-16 dark:text-back dark:bg-title'/>
      </button>
    </form>
  )
}

export default Search