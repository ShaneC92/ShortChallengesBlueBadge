import { useState } from 'react';

const Form = () => {
   const [fName, setFName] = useState('');
   const [lName, setLName] = useState('');

   const handleSubmit = () => {
      console.log(fName + ' ' + lName);
   };

   return (
      <div>
         <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFName(e.target.value)}        
         />
         <input 
            type='text'
            placeholder='Last Name'
            onChange={(e) => setLName(e.target.value)}
         />
         <button onClick={handleSubmit}>Click to console log the names!</button>
      </div>
   )
}

export default Form;