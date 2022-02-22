
import './App.css';
import Header from './pages/Header/Header';
import Login from './pages/LogIn/Login';
import ExtraSection from './pages/ExtraSection/ExtraSection';
import Footer from './pages/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='header'>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Login></Login>
            </Route>

          </Switch>

          <ExtraSection></ExtraSection>
          <Footer></Footer>
        </Router>



      </div>
    </div>
  );
}

export default App;
