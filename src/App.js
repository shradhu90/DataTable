import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
let [data, setData] =useState([]);
  const fetchProducts = async () => {
    const response = await 
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json());
    
    setData(response)
  
  }
  console.log("data",data);
useEffect(()=>{
  fetchProducts();
},[])

  useEffect(() => {
    setTimeout(function(){ 
      window.jQuery(document).ready(function() {
       window.jQuery('#example').DataTable({"iDisplayLength": 50});

      }); 
    }, 1000);
  }, []);

  const renderList = data.map((data1) => {
    
    const { id, name, email, body } = data1;
  
  return (
    
<tr> 
<td>{id}</td>
<td>{name}</td>
<td>{email}</td>
<td>{body}</td>

</tr>  );
});

  return (
    <div className="App">
      <div className="m-5">
      <table id="example" className="table table-striped table-bordered" >
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Comments</th>
                
            </tr>
        </thead>
        <tbody>
          
            {renderList}
            </tbody>
        
    </table>
    </div>
    </div>
    
  );
}

export default App;
