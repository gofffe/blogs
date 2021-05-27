import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  paramsBlogId: number = 0;
  blog: Blog;

  postTitle: string = '';
  postContent: string = '';

  posts: Post[] = [];

  constructor(private service: BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.paramsBlogId = +params.get('id');  
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
        blogId: this.paramsBlogId,
        blog: this.blog,
        comments: []
      }

      this.service.createPost(newPost).subscribe((post) => this.posts.push(post));

      this.service.getBlogs(); 
    } 
    this.router.navigate([`blog/${this.paramsBlogId}`]); //laddar inte om med rätt data
  }

}
