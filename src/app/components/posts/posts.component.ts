import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faPlus, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  blog: Blog;
  posts: Post[];
  
  blogId: number = 0;

  faPlus = faPlus;
  faEdit = faEdit;
  faTimes = faTimes;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = +params.get('id');         
      })

    this.postService.showPosts(this.blogId).subscribe((data) => {
      this.blog = data;
      this.posts = data.posts.reverse();
    })
  }

  newPost(blogId: number) {
    this.router.navigate([`blog/${blogId}/new-post`]);
  }

  changePost(postId: number) {
    this.router.navigate([`blog/${this.blogId}/post/${postId}`]);
  }

  removePost(postId: number) { 
    this.postService.removePost(postId).subscribe(() => {
      this.postService.showPosts(this.blogId).subscribe((data) => {
        this.blog = data;
        this.posts = data.posts.reverse();
      })
    })
  }

  navigateToComments(postId: number) {
    this.router.navigate([`blog/${this.blogId}/post/${postId}/comments`]);
  }
}