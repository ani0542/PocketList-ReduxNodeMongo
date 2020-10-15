import React, { Component } from 'react'
import { connect } from 'react-redux';
import {handleInput} from '../actions/contactAction';
import {handleSubmit} from '../actions/contactAction';
import { handleDelete} from '../actions/contactAction';
import { fetchPosts } from '../actions/contactAction';
export class Home extends Component {
   

    //getting or fetching all items
    componentDidMount=()=>{
      this.props.fetchPosts()
      // console.log(this.props)
    }

    



   

   
    
   
    render() {
          
          const list = this.props.mywishes.map(item=>{
            return <a className="collection-item" key={item._id}  style={{cursor:'pointer'}} onClick={()=>this.props.handleDelete(item._id)}>{item.wish}</a>
          })
        return (
            <div>
                                   <form onSubmit={this.props.handleSubmit}>
                                            <input 
                                            type="text"
                                            name="item"
                                            onChange={(e)=>this.props.handleInput(e.target.value)}
                                            value={this.props.text}
                                            />
                                             <button type="submit" className="waves-effect  waves-light btn">Add</button> 
                                    </form>
                                    <div className="collection">
                                                {
                                                            list
                                                }
                                     </div>

            </div>
        )
    }
}


const mapStateToProps = state => ({
  

  text:state.contactd.text,
  mywishes:state.contactd.mywishes
});




const mapDispatchToProps = {
      handleInput:handleInput,
      handleSubmit:handleSubmit,
      handleDelete:handleDelete
}


export default connect(mapStateToProps, {handleInput,fetchPosts,handleSubmit, handleDelete})(Home);

