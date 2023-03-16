import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";
// import { Switch } from "@mui/material";
// import { Router } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Layout/Header';
import Navigation from "./Layout/Navigation";
import Listing from './Listing';
import SinglePost from './SinglePost';
import Forme from './Forme';
import EditPost from './EditPost';
// import { useParams } from "react-router-dom";
class Routee extends React.Component{
    constructor(){
        super();
        this.state={
                // userId:'',
                // id : '',
                // title :'',
                // body :''
                posts:[]
        };
    }   
    componentDidMount(){
        this.getPost();
        // console.log(this.state.posts);

    };
    getPost=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
             this.setState({posts:res.data});
            //  console.log(res.data);      

            })
    }
    deletePost=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            if(res.status===200){
                const posts=[...this.state.posts];
                let result=posts.filter(post=>(post.id!==id));
                this.setState({posts:result});
                 console.log(id);
            }
        })
    }
    createPost=(post)=>{
        axios.post(`https://jsonplaceholder.typicode.com/posts`,{post})
        .then(res=>{
            if(res.status===201){
                Swal.fire(
                    'Post Create',
                    'It is created successfully',
                    'success'
                )
                let postId={id:res.data.id};
                const newpost=Object.assign({},res.data.post,postId);
                this.setState(prevState=>({
                    posts:[...prevState.posts,newpost]
                }))
            }
        })
    }
    editPost=(postUpdate)=>{
        const {id}=postUpdate;
        axios.put(`https://jsonplaceholder/typicode.com/posts/${id}`,{postUpdate})
        .then(res=>{
            if(res.status===200)
            {
            Swal.fire(
                'Post updated',
                'The changes were done correctly',
                'success'
            )
            let postId={id:res.data.id};
            const posts=[...this.state.posts];
            const postEdit=posts.findIndex(post=>(postId===post.id))
            posts[postEdit]=postUpdate;
            this.setState({ posts})
            }
        })
    }
//     single=(props)=>{
//         let postId= props.location.pathname.replace("/post/","");       
//         console.log("nddk"+postId);
//         const posts=this.state.posts;
//         let filter=posts.filter(post=>(post.id===Number(postId)));
//          console.log(filter[0]);
//         return(
//             filter[0]
//         );
// }
edit=()=>{
     let postId=this.props.location.pathname.replace("/edit/","")
    // let postId=3
    const posts=this.state.posts;
    // console.log(posts)
    let filter=posts.filter(post=>(post.id===Number(postId)))
    // console.log("hjh"+filter[0]);
    return(
        filter[0]
    );
}
    render(){
        
        return(
            <BrowserRouter>
            <div className="container">
                <Header/>
                <div className="row justify-content-center">
                    <Navigation/>
                       <Routes>
                        <Route exact path="/" element={ <Listing posts={this.state.posts} deletePost={this.deletePost}/>}/>
                        <Route exact path="/post/:postId" element= {<SinglePost posts={this.state.posts}/>}/>
                        <Route exact path="/create" element={ <Forme createPost={this.createPost}/>}/>
                        <Route exact path="/edit/:postId" element={<EditPost post={this.edit} editPost={this.editPost}/>}/>
                      </Routes>
                </div>
            </div>
            </BrowserRouter>
        );
    }
}
export default Routee;