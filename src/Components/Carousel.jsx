import {useState} from 'react';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D' 
    },
    {
        url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJlYWNofGVufDB8fDB8fHww'
    },
    
];

const Carousel = () => {
    const [slide,setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === length-1 ? 0 : setSlide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length-1 : setSlide - 1)
    }

    return (
     <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
         <BsArrowLeftSquareFill 
         onClick={prevSlide} 
         className='absolute top-[50%] text-3xl text-black cursor-pointer left-8'/>
         <BsArrowRightSquareFill 
         onClick={nextSlide} 
         className='absolute top-[50%] text-3xl text-black cursor-pointer right-8'/>
         {sliderData.map((item,index) => (
             <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'} >
                {index === slide && 
                    (<img className='w-full rounded-md' src={item.url} alt="/" />
                )}
             </div>
         ))}
     </div>
    );
};

export default Carousel;
