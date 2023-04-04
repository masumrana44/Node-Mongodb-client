import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import Update from './Components/Update/Update';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
     path:'/usersadd',
     element:<AddUser/>
    },
    {
      path:'/update/:id',
      // element:<Update/>,
      // loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
