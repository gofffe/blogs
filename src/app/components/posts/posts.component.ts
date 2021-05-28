import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faPlus, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog/blog.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  paramsBlogId: number = 0;

  blog: Blog;
  posts: Post[];

  faPlus = faPlus;
  faEdit = faEdit;
  faTimes = faTimes;

  constructor(private route: ActivatedRoute, private postService: PostService, private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.paramsBlogId = +params.get('id');         
      })

    this.postService.showPosts(this.paramsBlogId).subscribe((data) => {
      this.blog = data;
      this.posts = data.posts.reverse();
    })     
  }

  newPost(blogId: number) {
    this.router.navigate([`blog/${blogId}/new-post`]);
  }

  changePost(postId: number) {
    this.router.navigate([`blog/${this.paramsBlogId}/post/${postId}`]);
  }

  removePost(postId: number) { 
    this.postService.removePost(postId).subscribe(() => {
      this.blogService.getBlogs();
    })
    this.router.navigate([`/blog/${this.paramsBlogId}`]); //laddar inte om med rätt data
  }

  navigateToComments(postId: number) {
    this.router.navigate([`blog/${this.paramsBlogId}/post/${postId}/comments`]);
  }

}
