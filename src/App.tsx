import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Screens/HomePage'
import RestaurantsPage from './Screens/RestaurantsPage'
import LoginPage from './Screens/LoginPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/restaurants' element={<RestaurantsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
