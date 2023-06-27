import React from 'react'
import FilmsComponent from '@/app/Components/FilmComponent'

function page({ params }) {
  console.log(params.query)
  return <FilmsComponent query={params.query}/>
}

export default page
