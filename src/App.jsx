
import PlayerList from './components/PlayerList/PlayerList'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='my-4'>Players List</h1>
    
    <PlayerList/>
    </div>
  )
}

export default App