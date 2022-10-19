import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Berita from './pages/berita';

function App() {
  const tokenData = localStorage.getItem('token');
  console.log(tokenData)
  return (
    <>
      {
        tokenData !== null ? (
          <Router>
            <Switch>
              <Route path="/" component={Berita} />
              <Route path="/Berita" component={Berita} />
              <Route component={Berita} />
            </Switch>
          </Router >
        ) : (
          <Router>
            <Switch>
              <Route path="/" component={Login} />
              <Route component={Login} />
            </Switch>
          </Router >
        )
      }
    </>
  );
}

export default App;
