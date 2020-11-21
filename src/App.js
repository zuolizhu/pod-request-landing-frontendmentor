import './App.scss';
import PageTitle from './components/PageTitle';
import logo from './assets/desktop/logo.svg';
import Platforms from './components/Platforms';
import RequestForm from './components/RequestForm';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="site logo"/>
      </div>
      <div className="content-container">
        <PageTitle />
        <p className="t-body page-body">Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
        <Platforms />
        <RequestForm />
      </div>

      <p>

      Request access
      </p>
    </div>
  );
}

export default App;
