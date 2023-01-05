import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Discover from './Discover/Discover'
import Join from './Join/Join'
import '../src/App.css'

// import { ThemeProvider } from '@mui/styles'
// import theme from './theme'

function App() {

    return (
      <>
        {/* <ThemeProvider them={theme}> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='discover' element={<Discover />} />
            <Route path='join' element={<Join />} />
          </Routes>
        {/* </ThemeProvider> */}
      </>

    )
  }

export default App
