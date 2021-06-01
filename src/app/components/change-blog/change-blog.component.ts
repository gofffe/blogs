import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-change-blog',
  templateUrl: './change-blog.component.html',
  styleUrls: ['./change-blog.component.scss']
})
export class ChangeBlogComponent implements OnInit {
  blogs: Blog[] = [];

  blogId: number = 0;
  
  newBlogTitle: string = '';

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = +params.get('id');
    })

    this.blogService.allBlogs$.subscribe((data: Blog[]) => {
      this.blogs = data;
    })
    this.blogService.getBlogs();
  }

  onChangeBlog(blog: Blog, changeBlogForm): void {
    this.newBlogTitle = changeBlogForm.value.title;
    let input = document.querySelector('input');

    if (this.newBlogTitle !== '') {
      let updatedBlog: Blog = {
        id: blog.id,
        title: this.newBlogTitle,
        created: blog.created,
        userId: blog.userId,
        posts: blog.posts
      }

      this.blogService.changeBlog(updatedBlog).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      input.classList.add('warning');
    }
  }
}