import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import UserLogin from './Components/UserLogin.jsx/UserLogin'
import Profile from './Components/UserLogin.jsx/Profile'

function App() {


  return (
    <UserContextProvider>
   <h1>Hi This is Talha Awais </h1>
   <UserLogin/>
   <Profile/>
    </UserContextProvider>
  )
}

export default App
