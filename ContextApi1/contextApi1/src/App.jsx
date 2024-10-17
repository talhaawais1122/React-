import UserContextProvider from './context/userContextProvider';
import './App.css';
import Login from './Components/UserData/Login';
import UserData from './Components/UserData/UserData';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <UserData />
    </UserContextProvider>
  );
}

export default App;
