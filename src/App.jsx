import {Routes, Route} from 'reac-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element='<Home />'/>
        <Route path='discover' element='<Discover />'/>
        <Route path='join' element='<Join />'/>
      </Routes>
    </>
  )
}

export default App
