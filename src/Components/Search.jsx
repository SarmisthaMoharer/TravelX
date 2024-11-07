
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div  className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h1>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
                <p className='py-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex itaque nemo adipisci aperiam fugit dolor ipsum dignissimos corrupti veritatis mollitia perspiciatis, modi eaque, incidunt sapiente, quibusdam commodi. Ratione sint natus voluptates corrupti recusandae voluptatibus veniam fuga expedita ut dolor voluptate maxime culpa illo saepe, aut distinctio exercitationem quod dolorem earum amet voluptatum doloribus! Molestiae similique in eligendi. Est voluptatibus illo magnam error unde possimus quaerat sed similique magni, reprehenderit, fuga ratione pariatur. Corporis itaque nemo totam atque officia qui laboriosaml!Consectetur adipisicing elit. Dolores, numquam dolorem? Exercitationem ex fugiat ratione magni vero iure ipsa animi nobis harum assumenda facere nesciunt quos ducimus quasi distinctio, perspiciatis doloremque aliquid pariatur? Possimus eveniet, ut dolore itaque odit voluptatum.</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-9 py-4'>
              
              <div className='flex flex-col lg:flex-row items-center text-center'>
                  <button><RiCustomerService2Fill size={50} className='icon ' style={{color: '#ffffff'}}/></button>
                  <div className=' flex flex-col '>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                  </div>
              </div>
              <div className='flex flex-col lg:flex-row items-center text-center'>
                  <button><MdOutlineTravelExplore size={50} className='icon 'style={{color: '#ffffff'}}/></button>
                  <div className=' flex flex-col '>
                    <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                  </div>
              </div>
            </div>
        </div>
        <div>
          <div className=' border text-center py-4'>
            <h4 className='pt-2'>GET AN ADDITIONAL 10% OFF</h4>
            <h4 className='py-3'>12 HOURS LEFT</h4>
            <p className='bg-red-800 text-gray-100 mx-4 py-2'>BOOK NOW AND SAVE</p>
          </div>
            <form className='w-full text-left'>
              <div className='flex flex-col '>
            
                <label className='p-1'>Destination</label>
                <select  className='p-3 rounded-md border border-gray-400' name="" id="">
                  
                  <option>Borabora</option>
                  <option>Grande Antigua</option>
                  <option>Key West</option>
                  <option>Maldives</option>
                  <option>Cozumel</option>
                </select>
              </div>
              <div className='flex flex-col my-2'>
                <label className='p-1'>Check-In</label>
                <input className='p-3 rounded-md border border-gray-400' type="date"  />
              </div>
              <div className='flex flex-col my-2'>
                <label className='p-1'>Check-Out</label>
                <input className='p-3 rounded-md border border-gray-400' type="date"  />
              </div>
              <button className='w-full my-4 mx-2'>Rates & Availabilities</button>
            </form>
            
        </div>
        
    </div>
  )
}

export default Search
