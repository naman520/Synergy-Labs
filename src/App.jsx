import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Read from './Pages/Read'
import Create from './Pages/Create'
import Update from './Pages/Update'
import Delete from './Pages/Delete'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/read' element={<Read/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
