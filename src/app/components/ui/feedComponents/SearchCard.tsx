'use client'
import React from 'react'
import Search from '../../Search'
import PublicArea from '../../PublicArea'

function SearchCard() {
  return (
    <div className='w-65% h-192 bg-white rounded-16 px-18 py-16 dark:bg-back'>
      <Search />
      <PublicArea />
    </div>
  )
}

export default SearchCard