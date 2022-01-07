
import './css/App.css';
import './css/props.css';

import Header from './screens/header';
import Sidebar from './screens/sidebar';
import HomePage from './screens/home';


function App() {
  return (
    <div className="App flex">
      <Sidebar/>

      <div className='app-content'>

      <HomePage/>

      </div>
      

    </div>
  );
}

export default App;
