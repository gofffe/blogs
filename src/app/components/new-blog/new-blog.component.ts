import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {
  blogs: Blog[] = [];

  blogTitle: string = '';

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(blogForm): void {
    this.blogTitle = blogForm.value.title;

    let input = document.querySelector('input');

    if (this.blogTitle !== '') {
      let newBlog: Blog = {
        id: 0,
        title: this.blogTitle,
        created: new Date(),
        userId: 900410,
        posts: []
      }      

      this.blogService.createBlog(newBlog).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      input.classList.add('warning');
    }
  }
}