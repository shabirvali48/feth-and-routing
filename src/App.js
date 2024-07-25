import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import BlogDetails from './components/BlogDetails';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/blogs" element={ <Blogs/> }/>
      <Route exact path="/blog/:id" element={ <BlogDetails /> }/>
      <Route exact path="/about" element={ <About/> }/>
      <Route exact path="/contact" element={ <Contact/> }/>

    </Routes>
   
      
    </>
  );
}

export default App;