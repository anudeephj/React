import logo from './logo.svg';
import './App.css';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import FragementDemo from './Components/FragementDemo'
import Table from './Components/Table'
import PortalDemo from './Components/PortalDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PortalDemo />
      </header>
    </div>
  );
}

export default App;
