import React from "react";
import { createRef } from "react";
class Forme extends React.Component{
    userId=createRef();
    title=createRef();
    content=createRef();
    createPost=(e)=>{
      e.preventDefault();
      const post={
        userId :this.userId.current.value,
        title : this.title.current.value,
        body :this.content.current.value,
      
    }
    this.props.createPost(post);
    }
    render(){
        return(
            <>
            <form onSubmit={this.createPost} className="col-md-10">
                <legend className="text-center">Create New Post</legend>
                <div className="form-group">
                    <label>Title for new post :</label>
                    <input type="text" ref={this.title} className="form-control" placeholder="Title.."/>
                </div>
                <div className="form-group">
                    <label>UserId :</label>
                    <input type="text" ref={this.userId} className="form-control" placeholder="Tag your Name.."/>
                </div>
                <div className="form-group">
                    <label>Content :</label>
                    <textarea className="form-control" ref={this.content} rows="7" cols="25" placeholder="Write your content"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" >Create</button>
            </form>
            </>
        );
    }
}
export default Forme;