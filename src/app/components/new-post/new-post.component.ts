import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  blog: Blog;

  blogId: number = 0;

  postTitle: string = '';
  postContent: string = '';

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = +params.get('id');  
    })
  }

  onSubmit(postsForm): void {
    this.postTitle = postsForm.value.title;
    this.postContent = postsForm.value.content;

    if (this.postTitle !== '') {
      let newPost: Post = {
        id: 0,
        title: this.postTitle,
        content: this.postContent,
        created: new Date(),
        modified: new Date(),
        blogId: this.blogId,
        blog: this.blog,
        comments: []
      }

      this.postService.createPost(newPost).subscribe(() => {
        this.router.navigate([`blog/${this.blogId}`]);
      });
    } 
  }
}