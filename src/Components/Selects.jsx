import React from 'react'
import Borabora from '../assets/borabora.jpg'
import Borabora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives2.jpg'
import Maldives2 from '../assets/maldives3.jpg'
import Jamaica from '../assets/jamaica.jpg'
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard bg={Borabora} text='Borabora'/>
      <SelectsCard bg={Borabora2} text='Maldives'/>
      <SelectsCard bg={Keywest} text='Keywest'/>
      <SelectsCard bg={Maldives} text='Cozumel'/>
      <SelectsCard bg={Maldives2} text='Grande Antigua'/>
      <SelectsCard bg={Jamaica} text='Jamaica'/>
    </div>
  )
}

export default Selects
