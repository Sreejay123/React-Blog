import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Post.css';
// import SinglePost from './SinglePost';
// import moment from 'moment';
import {Paper} from '@mui/material';
import { Divider } from '@mui/material';
class Post extends React.Component{
    confirmDeletion=(props)=>{
        const {id}=this.props.info;
        Swal.fire({
            title:'Delete this one?',
            text:'This action cannot be cancelled',
            type:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete',
            cancelButtonText: 'No, Cancel'
        }).then((result)=>{
            if(result.value){
                this.props.deletePost(id);
                Swal.fire(
                    'Press OK to back',
                    'The Post haas been deleted',
                    'success'
                )
            }
        })
    }
    render(){
        const {id, title, body} = this.props.info;
        return(
            <Paper className="post">
                <p className='post_title' cols='10'>
                  <b><span className='post_preview'>
                        { title.length>25?`${title.substr(0,25)}...`:title }
                    </span></b>
                </p>
                <Divider light />
                <p className="post_body">
                    <span className='post-preview'>
                        {body.length > 300 ? `${body.substr(0, 300)}...` : body}
                    </span>
                </p>
                <Divider light />                
                    <div className="post_button">
                        <ul className="buttons">
                            <li><Link to={`/post/${id}`} className="btn btn-primary"> Show </Link></li>
                            {/* <li><button onClick={<SinglePost post={this.single}/>}>Show</button></li> */}
                            <li><Link to={`/edit/${id}`} className="btn btn-warning"> Edit </Link></li>
                            <li><Link onClick={this.confirmDeletion} className="btn btn-danger">Delete</Link></li>
                        </ul>
                    </div>                   
            </Paper>
        );
    }
}
export default Post;