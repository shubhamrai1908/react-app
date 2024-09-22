import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function HelloWorld() {
    // useEffect(()=>{
    //    axios.get("http://localhost:8080/api").then(response=>{console.log(response)}).catch(error=>{
    //     console.log(error)
    //    })
    // })
    const [message, setMessage] = useState("");

    useEffect(() => {
      // Call the Spring Boot API using Axios
      axios
        .get("https://demo-1-production.up.railway.app/api")
        .then((response) => {
          // Handle success
          setMessage(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Ther was an error fetching the data!", error);
        });
    }, []);
  return (
    <div>
      Hello Shubham,{message}
      <div>
      <label>Username</label>
      <input type='text'></input>
      </div>
      <button>Submit</button>
    </div>
  )
}
