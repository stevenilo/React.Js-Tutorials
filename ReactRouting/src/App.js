import logo from './logo.svg';
import './App.css';

//importing other components for react routing (navbar, home, service, contactus)
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Contactus from './Contactus';

//importing react routing after installing react routing on the project folder(src). (npm install react-router-dom)
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>

      {/*using browserRouter to add all component and route them*/}
      <BrowserRouter>

        <Navbar />
        {/*Setting Route to component using <Routes> <Route> </Routes> */}
        <Routes>
          {/*setting component to route or render  when clicked from navbar <link>, using <Route path='' component={} exact*/}
          <Route path='/Home' Component={Home} exact />
          <Route path='/Services' Component={Services} exact />
          <Route path='/Contactus' Component={Contactus} exact />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
