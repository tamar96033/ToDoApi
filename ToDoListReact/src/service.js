import axios from 'axios';

console.log(process.env);
console.log(process.env.REACT_APP_API_URL)
// const apiUrl = process.env.REACT_APP_API_URL
// console.log(apiUrl);
const apiUrl = process.env.REACT_APP_API_URL;
//const apiUrl = "https://todoapiserver-7pc6.onrender.com"
axios.defaults.baseURL = apiUrl; 
console.log("API Base URL:", apiUrl);

const service = {
  getTasks: async () => {
    try{
    const result = await axios.get(`${apiUrl}`)    
    return result.data;}
    catch(error){
      console.error(error.message);
      
    }
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    
    const result = await axios.post(`${apiUrl}/items`, {name})
    return result;
    //return {}
  },

  setCompleted: async(id,name, isComplete)=>{
    console.log('setCompleted', {id,name, isComplete})
    //TODO
    const result = await axios.put(`${apiUrl}/items/${id}`, {id, name, isComplete})
    //return {}
    return {result};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`${apiUrl}/items/${id}`, {id})
    return result
  }
};

export default service

