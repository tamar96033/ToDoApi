import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URL}/items`

const service= {
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
    
    const result = await axios.post(`${apiUrl}/`, {name})
    return result;
    //return {}
  },

  setCompleted: async(id,name, isComplete)=>{
    console.log('setCompleted', {id,name, isComplete})
    //TODO
    const result = await axios.put(`${apiUrl}/${id}`, {id, name, isComplete})
    //return {}
    return {result};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`${apiUrl}/${id}`, {id})
    return result
  }
};

export default service
