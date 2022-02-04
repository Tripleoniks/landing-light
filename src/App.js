
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PaymentPage from './Pages/PaymentPage/payment';
import Header from './componet/Header/header';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header/>
        <Switch>
              <Route exact path="/" component={PaymentPage} />
              {/* <Route exact path="*" component={ErrorPage} /> */}
        </Switch>
        </div>
  </BrowserRouter>
  );
}

export default App;
