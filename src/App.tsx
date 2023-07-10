import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Screens/HomePage'
import RestaurantsPage from './Screens/RestaurantsPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/restaurants' element={<RestaurantsPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
