import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import HomePage from "./pages/home-page/HomePage";
import GamePage from "./pages/gamePage/GamePage";
import OrderPage from "./pages/orderPage/OrderPage";
import Header from "./components/header/Header";
import {store} from './components/redux'
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" 
          element={<HomePage />} />
          <Route exact path="/app/:title" 
          element={<GamePage />} />
           <Route exact path="/order" 
          element={<OrderPage />} />
        </Routes>
        
      </div>
    </Router>
    </Provider>
  );
}

export default App;
