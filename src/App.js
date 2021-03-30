// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename
import { useState } from 'react';

// A component import
import Navbar from './components/Navbar';
import Home from './components/home/home';
import Names from './components/names';
import Grades from './components/grades';
import Form from './components/form';
import Films from './components/film';


// Defining our <App /> component the function name matches the file name
function App() {
   const links = ['https://www.google.com', 'https://www.github.com', 'https://www.youtube.com']

   const [students, setStudents] = useState([
         {  
            name: 'Andy',
            grade: 11
         },
         {
            name: 'Amy',
            grade: 12
         }
   ])
   
   

  // All functional components need to return jsx with one parent element
  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar links={links} />
      <Home name='Shane' />
      <Names students={students}/>
      <Grades students={students}/>
      <Form />
      <Films />
    </div>
  );
}

// Makes our Component available for import
export default App;