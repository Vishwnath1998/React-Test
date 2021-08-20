import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Main from './Component/Main/Main';
import Menu from './Component/Menu/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Counter from './Component/Counter/Counter';
import User from './Component/User/User';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Post from './Component/Context/Post';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Footer/>
      <Main/>
       <Menu/>
      <Counter/> */}
      {/* <User/> */}
 
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/counter" component={Counter}/>
        <Route exact path="/user" component={User}/>
        <Route exact path ="/post" component={Post}/>
        <Route exact path ="/main" component={Main}/>
      </Switch>
      </BrowserRouter>
    

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
