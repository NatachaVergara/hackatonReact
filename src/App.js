
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MoviesContextProvider from './Context/MoviesContextProvider';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <MoviesContextProvider>
    <BrowserRouter>     
    <div className="App">
      <AppRoutes/>
    </div>
      </BrowserRouter>
    </MoviesContextProvider>
  );
}

export default App;
