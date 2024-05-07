

import './App.css'
import Carousel from './Components/Carousel'
import Destinations from './Components/Destinations'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Part1 from './Components/Part1'
import Search from './Components/Search'
import Selects from './Components/Selects'


function App () {
  return (
    <>
   <Navbar/>
   <Part1/>
   <Destinations />
   <Search />
   <Selects />
   <Carousel />
   <Footer />
    </>
  )
}

export default App
