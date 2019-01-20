import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  myPosts:any[]=[];
  newPost={
    title:"",
    body:""
  }
  edit=false;
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(){

      this.postService._getPosts()
                      .subscribe((posts: any[])=>{
                                this.myPosts=posts;
                        });
  }

  createPosts(){
    this.postService._createPost(this.newPost)
                    .subscribe(post=>{
                      this.myPosts.unshift(post)
                      this.newPost={
                        title:"",
                        body:""
                      }
                    });
  }
  editPost(post) {
    this.newPost = post;
    this.edit=true;
  }
  putPosts(){
    this.postService._putPost(this.newPost)
                    .subscribe(post=>{
                      this.edit=false;
                      this.newPost={
                        title:"",
                        body:""
                      }
                    });
  }
  deletePosts(index,id){
    this.postService._deletePost(id)
                    .subscribe(post => this.myPosts.splice(index, 1))
  }
}
