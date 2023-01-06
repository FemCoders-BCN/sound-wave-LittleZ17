import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Discover from './Discover/Discover'
import Join from './Join/Join'
import '../src/App.css'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {

    return (
      <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='discover' element={<Discover />} />
            <Route path='join' element={<Join />} />
          </Routes>
      </>

    )
  }

export default App
