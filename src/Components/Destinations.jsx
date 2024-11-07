
import Borabora from '../assets/borabora.jpg'
import Borabora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives2.jpg'
import Maldives2 from '../assets/maldives3.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p>On the Caribbeans Best Resorts</p>
      <div className="grid grid-cols-none md:grid-rows-5 py-4 gap-2 md:gap-4">
        <img className='w-full h-full object-cover row-span-2 md:row-span-3 col-span-2' src={Borabora} alt="" />
        <img className='w-full h-full object-cover' src={Borabora2} alt="" />
        <img className='w-full h-full object-cover' src={Keywest} alt="" />
        <img className='w-full h-full object-cover' src={Maldives} alt="" />
        <img className='w-full h-full object-cover' src={Maldives2} alt="" />
      </div>
    </div>
  )
}

export default Destinations
