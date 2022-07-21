// import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import AddTodo from "./MyComponents/AddTodo";
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Home from './MyComponents/Home';
import NoPage from './MyComponents/NoPage';
import ReactPractice from './MyComponents/ReactPractice';
import Sidebar from './MyComponents/Sidebar';
import Blogs from './MyComponents/Blogs';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
       <Header title="Todo[Redux]" searchBar={false} />
       <Routes>
       <Route path="/home" element={ <>
        <Home/>
        <AddTodo />
        <Todos />
        
       </> } />
        <Route path="/todo" element={<>
      <AddTodo />
      <Todos />
      </> } />
        <Route path="reactpage" element={ 
        <>
            {/* <ReactPractice/>  */}
        <Sidebar/>
        </>
    
      
      
      } />
        <Route path="blogs" element={ <Blogs/> } />
        <Route path="*" element={<NoPage />} />
      
      </Routes>
   
      <Footer/>
    </div>
  );
}

export default connect(state => ({ todos: state }))(App);
