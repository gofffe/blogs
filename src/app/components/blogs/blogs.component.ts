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

  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.service.allBlogs$.subscribe((data: Blog[]) => {
      this.blogs = data;
    })
    this.service.getBlogs();
  }
}
