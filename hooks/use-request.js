import axios from 'axios';
import {useState} from 'react';



export default ({url,method,body,onSuccess}) =>{
  const[errors,setErrors] = useState(null);

  const doRequest = async() =>{
  try{
        setErrors(null);
        const response = await axios[method](url,body);
         if(onSuccess){
             onSuccess(response.data);
         }
         console.log(response.data);
        return response.data;
      }catch(error){
        console.log(error.response.data.message)
        setErrors(
          <div class="ui negative message">
          <h4>Ooops....</h4>
          <div class="header">
               {error.response.data.message}
          </div>
          </div>
        );
      }
  };

  return {doRequest,errors};
};