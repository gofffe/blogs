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

  paramsBlogId: number = 0;
  
  newBlogTitle: string = '';

  constructor(private service: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.paramsBlogId = +params.get('id');
    })

    this.service.allBlogs$.subscribe((data: Blog[]) => {
      this.blogs = data;
    })
    this.service.getBlogs();
  }

  onChangeBlog(blog: Blog, changeBlogForm): void {
    this.newBlogTitle = changeBlogForm.value.title;

    if (this.newBlogTitle !== '') {
      let updatedBlog: Blog = {
        id: blog.id,
        title: this.newBlogTitle,
        created: blog.created,
        userId: blog.userId,
        posts: blog.posts
      }

      this.service.changeBlog(updatedBlog).subscribe(() => {
        this.service.getBlogs();
      });
    }
    this.router.navigate(['/']);
  }

}
