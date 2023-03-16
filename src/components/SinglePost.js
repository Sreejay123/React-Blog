import React from "react";
// import moment from 'moment';
import { Divider } from "@mui/material";
import {Paper} from "@mui/material";
import { useLocation } from "react-router-dom";
// import renderHTML from "react-render-html";
const SinglePost=(props)=>{
        const location=useLocation();
        const post1=location.pathname.replace("/post/","");
        const posts=props.posts;
        console.log(post1-1);
        if(!post1) return null;
        let filter=posts[post1-1];
        console.log(filter);
        const {userId,title,body}=filter;
        // console.log(title);
        return(
            <React.Fragment>
                <Paper className="single_post">
                    <h4>UserId : {userId}</h4>
                    <Divider light/>
                    <p><b>Title : </b>{title}</p>
                    <Divider light/>
                    <p><b>Content : </b>{body}</p>
                    <Divider light/>
                    {/* <div style={{width:"60px"}}>{renderHTML(body)}</div> */}
                </Paper>
            </React.Fragment>
        );
    // render(){
    //     return(
    //         <div className="col-md-10">
    //             {this.showPost()}
    //         </div>
    //     );
    // }
}
export default SinglePost;