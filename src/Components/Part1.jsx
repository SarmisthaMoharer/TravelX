
import beachVid from '../assets/beachVid.mp4'
import {BiSearch} from 'react-icons/bi'

const Part1 = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={beachVid} autoPlay loop  muted></video>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% Locations Worldwide</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
            <input type="text"className='w-[88%] h-10 bg-gray-100/90 text-gray-500 rounded-md outline-none' placeholder='Search Destinations' />
            <button className='w-[12%]'><BiSearch size={20} className='icon' style={{color: '#ffffff'}}/></button>
        </form>
      </div>
    </div>
  )
}

export default Part1
