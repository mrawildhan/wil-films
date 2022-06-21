import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Trending from './components/Trending'
import Superhero from './components/Superhero'
import './style/landingPage.css'


function App() {
  return (
    <div>
      {/* Intro Section Start */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* Intro Section End */}

      {/* Trending Section Start */}
      <div className='trending'>
        <Trending />
      </div>
      {/* Trending Section End */}

      {/* Superhero Section Start */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* Superhero Section End */}
    </div>
  )
}

export default App
