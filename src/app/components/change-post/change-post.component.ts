import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-change-post',
  templateUrl: './change-post.component.html',
  styleUrls: ['./change-post.component.scss']
})
export class ChangePostComponent implements OnInit {
  blog: Blog;
  posts: Post[];

  paramsBlogId: number = 0;
  paramsPostId: number = 0;

  newPostTitle: string = '';
  newPostContent: string = '';

  constructor(private service: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {    
    this.route.paramMap.subscribe((params) => {
      this.paramsBlogId = +params.get('id');
      this.paramsPostId = +params.get('nr');
    })

    this.service.showPosts(this.paramsBlogId).subscribe((data) => {
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

      this.service.changePost(updatedPost).subscribe(() => {
        this.service.getBlogs();
      });
    }
    this.router.navigate([`blog/${this.paramsBlogId}`]);
  }

}
