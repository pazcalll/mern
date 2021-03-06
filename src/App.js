import logo from './logo.svg';
import './App.css';
import Routes from './config/Router';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './config/redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
