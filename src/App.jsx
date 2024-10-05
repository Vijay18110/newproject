import { useContext, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { context } from './Context/Store';
import { Route, Routes } from 'react-router-dom';
import Public from './routes/Public';
import Home from './pages/home';
function App() {
  const [count, setCount] = useState(0)
  const ctx = useContext(context);
  return (

    <Routes>
      <Route path='/' element={<Public elements={<Home />} />} />
    </Routes>
  )
}
export default App