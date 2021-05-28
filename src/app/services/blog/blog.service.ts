import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Blog } from 'src/app/models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  myBlogsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Blogs/user/900410/';
  blogsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Blogs/';

  private allBlogs = new Subject<Blog[]>();
  allBlogs$ = this.allBlogs.asObservable();

  constructor(private http: HttpClient) { }

  //HTTP requests for blogs
  getBlogs(): void {
    this.http.get<Blog[]>(this.myBlogsUrl).subscribe((blogs: Blog[]) => {
      this.allBlogs.next(blogs);      
    })
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.blogsUrl, blog);
  }

  changeBlog(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(this.blogsUrl + blog.id, blog);
  }

  removeBlog(blogId: number): Observable<Blog> {
    return this.http.delete<Blog>(this.blogsUrl + blogId);
  }
}