
import './css/App.css';
import './css/props.css';

import Header from './screens/header';
import Sidebar from './screens/sidebar';


function App() {
  return (
    <div className="App flex">
      <Sidebar/>
      <Header/>
    </div>
  );
}

export default App;
