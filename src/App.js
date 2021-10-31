import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/Authprovider';
import AddTours from './Components/Pages/DashBoard/AddTours/AddTours';
import ManageAllOrders from './Components/Pages/DashBoard/ManageAllOrders/ManageAllOrders';
import MyOrders from './Components/Pages/DashBoard/MyOrders/MyOrders';
import Footer from './Components/Pages/Footer/Footer';
import Home from './Components/Pages/Home/Home/Home';
import OrderDetails from './Components/Pages/Home/OrderDetails/OrderDetails';
import Login from './Components/Pages/Login/Login/Login';
import Menubar from './Components/Pages/Menubar/Menubar';
import NotFound from './Components/Pages/NotFound/NotFound';
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       <Menubar></Menubar>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
           
          </Route>

          <Route  path='/home'>
            <Home></Home>
          </Route>
          
          <Route  path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/orderDetails/:tourId'>
            <OrderDetails></OrderDetails>

          </PrivateRoute>
          <PrivateRoute path='/myOrders'>
            <MyOrders></MyOrders>

          </PrivateRoute>
          <PrivateRoute path='/manageOrders'>
            <ManageAllOrders></ManageAllOrders>

          </PrivateRoute>
          <PrivateRoute path='/addTours'>
            <AddTours></AddTours>

          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>


        </Switch>
       <Footer></Footer>


      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
