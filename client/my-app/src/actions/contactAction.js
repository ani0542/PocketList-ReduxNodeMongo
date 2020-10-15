import {UPDATE_INPUT,FETCH_POSTS,SUBMIT_POSTS,DELETE_POSTS} from './types';

export const handleInput=(input)=>{
    return{
        type: UPDATE_INPUT,
        payload:input
    }
}






export const fetchPosts = () => dispatch => {

    fetch('/data')
    .then((res)=>{
      return(res.json())
    })
    .then((data)=>{
      console.log(data)
      dispatch({
                  type: FETCH_POSTS,
                  payload: data
                })
    })

}



export const  handleSubmit = (e)=> dispatch =>{
    e.preventDefault();
    
    // const url = "http://localhost:5000/sent";
     var data = new URLSearchParams();
      for(const pair of new FormData(e.target)){
        data.append(pair[0],pair[1])
      }
      //localhost:5000/sent
     fetch('/sent',{
         method:"POST",
         body:data,
        
     }).then(res=>res.json())
     .then(res2 => {
       console.log(res2)
       dispatch({
        type: SUBMIT_POSTS,
        payload: res2
      })
      
     }); 
}




export const  handleDelete = (id)=> dispatch =>{

    fetch('/remove/'+id,{
        method:"delete"
      })
      .then(res=>res.json())
      .then((res2)=>{
        console.log(res2)
       
        dispatch({
            type: DELETE_POSTS,
            payload: res2
          })
      })

}