import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog;

  faEdit = faEdit;
  faTimes = faTimes;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {  }

  changeBlog(blogId: number): void {
    this.router.navigate([`blog/${blogId}/change`]);
  }

  removeBlog(blogId: number) {
    this.blogService.removeBlog(blogId).subscribe(() => {
      this.blogService.getBlogs();
    })
  }

  navigateToPosts(blogId: number): void {
    this.router.navigate(['blog', blogId]);
  }
}