import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-change-post',
  templateUrl: './change-post.component.html',
  styleUrls: ['./change-post.component.scss']
})
export class ChangePostComponent implements OnInit {
  blog: Blog;
  posts: Post[];

  blogId: number = 0;
  postId: number = 0;

  newPostTitle: string = '';
  newPostContent: string = '';

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {    
    this.route.paramMap.subscribe((params) => {
      this.blogId = +params.get('id');
      this.postId = +params.get('nr');
    })

    this.postService.showPosts(this.blogId).subscribe((data) => {
      this.blog = data;
      this.posts = data.posts;
    })   
  }
 
  onChangePost(post: Post, changePostForm) {    
    this.newPostTitle = changePostForm.value.title;
    this.newPostContent = changePostForm.value.content;

    if (this.newPostTitle !== '' && this.newPostContent !== '') {
      let updatedPost: Post = {
        id: post.id,
        title: this.newPostTitle,
        content: this.newPostContent,
        created: post.created,
        modified: new Date(),
        blogId: post.blogId,
        blog: post.blog,
        comments: post.comments
      }

      this.postService.changePost(updatedPost).subscribe(() => {
        this.router.navigate([`blog/${this.blogId}`]);
      });
    }
  }
}