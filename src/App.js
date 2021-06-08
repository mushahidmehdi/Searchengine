import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import SearchPage from './SearchPage'

function App() {
  return (
  <din className='app'>
    <Router>
      <Switch>
        <Route path='/search'>
          <SearchPage />
        </Route>
        <Route path='/'>
            <Home/>
        </Route>
      </Switch>
    </Router>   
  </din>
  )
}

export default App;
