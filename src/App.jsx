
import './App.css'
import LoginForm from './componants/users/adduser'
import ColorSchemesExample from './componants/navbar/navbar.jsx';
import LogoutForm from './componants/users/userlogout.jsx';
// import Users from './componants/users/users';
// import TodoList from './componants/addtodo.jsx'
import { BrowserRouter ,Routes ,Route, createBrowserRouter, RouterProvider} from "react-router-dom"
import AboutUS from './componants/aboutus/aboutus.jsx';
import Home from './componants/Home/home.jsx';
import Notfound from './componants/notfound/notfound';
import Product from './componants/proudct/proudact';
import AddProduct from './componants/proudct/addproduct';
import UpdateProduct from './componants/proudct/updateproduct';
import ProductDetails from './componants/proudct/productdetails';
import Applayout from './Applayout/Applayout';
import ListProducts ,{loader as productloader} from './componants/proudct/listproduct';
import Favorite from './favorit/favorit';
import { Provider } from 'react-redux';
import store from './store/store';
import TMoives from './componants/trinding/trindigmov';





const router=createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    children:[
      {path:'/home',element:<Home/>},
      {path: '/aboutus',element:<AboutUS/>},
      {path: '/trinding',element:<TMoives/>},
      {path: '/login',element:<LoginForm/>},
      {path: '/logout',element:<LogoutForm/>},

      // {path: '/Favorite',element:<Favorite/>},
      {path: '/Favorite',element:<Favorite/>},

      {path: '/product',element:<Product/>,
    children:[{
      path:'list',element:<ListProducts />,loader:productloader,
    },{
      path:'add',element:<AddProduct />
    }]
    
    
    },
      {path: '/productdetails',element:<ProductDetails/>},
      {path: '/productdetails/:id',element:<ProductDetails/>},
      
      {path: '*',element:<Notfound/>},
    ]
  }
])

function App() {

  return (

    <Provider store={store}>

    < RouterProvider router={router} />
    </Provider>


  )
}
{/*     
     <BrowserRouter>
     <ColorSchemesExample />
     <Routes>
     <Route index element={<Home />} />
     <Route path="/aboutus" element={<AboutUS />} />
     <Route path="/login" element={<LoginForm />} />
     <Route path="/logout" element={<LogoutForm />} />
     <Route path="/productdetails" element={<ProductDetails />} />
     <Route path="/productdetails/:id" element={<ProductDetails />} />

     <Route path="/product" element={<Product />} >

     <Route index element={<AddProduct />} />
     <Route path="update" element={<UpdateProduct />} />

      </Route> 


     <Route path="*" element={<Notfound />} />
     </Routes>
     </BrowserRouter> */}

export default App