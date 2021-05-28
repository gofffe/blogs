import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.allBlogs$.subscribe((data: Blog[]) => {
      this.blogs = data;
    })
    this.blogService.getBlogs();
  }
}
