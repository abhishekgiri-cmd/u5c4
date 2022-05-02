import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { NewOrder } from './components/NewOrder';
import { Orders } from './components/Orders';

function App() {
  return (
    <div className="App">
     <Home/>
     <Login/>
     <Logout/>
     <NewOrder/>
     <Orders/>
    </div>
  );
}

export default App;
