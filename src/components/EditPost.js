import React from "react";
// import Post from './Post';

class EditPost extends React.Component {
    userId = React.createRef();
      title = React.createRef();
     content = React.createRef();
     id = React.createRef();
  editPost = (e) => {
         e.preventDefault();
        const post = {
            userId: this.userId.current.value,
            title: this.title.current.value,
            body: this.content.current.value,
            id: this.props.post.id 
        }
        this.props.editPost(post);
    }
   loadForm = (props) => {
        if (!this.props.post) return null;
        const {userId,title, body} = this.props.post;
 
        return (    
            <form onSubmit={this.editPost} className="col-md-10">
                <legend className="text-center">Edit Post</legend>
 
                <div className="form-group">
                    <label>Title for the Post:</label>
                    <input type="text" ref={this.title} className="form-control" defaultValue={title} />
                </div>
 
                <div className="form-group">
                    <label>UserId:</label>
                    <input type="text" ref={this.userId} className="form-control" defaultValue={userId} />
                </div>
 
                <div className="form-group">
                    <label>Content:</label>
                    <textarea className="form-control" rows="7"cols="25" ref={this.content} defaultValue={body}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" >Save changes</button>
            </form>
        );
    }
 
    render() {
        return ( 
            <React.Fragment>
                {this.loadForm()}
            </React.Fragment>            
         );
    }
}
export default EditPost;