
import {FaFacebook,FaInstagram,FaPinterest,FaYoutube,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
            <h1 className=''>TravelX.</h1>
            <div className='flex justify-between w-full my-4 sm:max-w-[280px]'>
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
            </div>
        </div>
        <div className='flex justify-between'>
            <ul className='lg:flex'>
                <li>About</li>
                <li>Partnerships</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Advertising</li>
            </ul>
            <ul className='text-right lg:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
