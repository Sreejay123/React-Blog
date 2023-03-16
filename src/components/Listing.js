import React from "react";
import Post from './Post';
import './Post.css';
class Listing extends React.Component{
    showPosts=(props)=>{
        const posts=this.props.posts;
        if(posts.length===0) return null;
        return(
            <div className="post_list_item">
                <React.Fragment>
                    {Object.keys(posts).map(post=>(
                      <Post key={post} info={this.props.posts[post]} deletePost={this.props.deletePost}/>
                    ))}
                </React.Fragment>
            </div>
        );
    }
    render(){
        return(
            <div className="post_list">
                 <legend className="text-center">Post Listing Page</legend>
                {this.showPosts()}
            </div>
        );
    }
}
export default Listing;