import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import Login from './pages/LogIn/Login';
import ExtraSection from './pages/ExtraSection/ExtraSection';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header></Header>
        <Login></Login>
        <ExtraSection></ExtraSection>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
