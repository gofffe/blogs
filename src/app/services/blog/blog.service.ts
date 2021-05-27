import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Blog } from 'src/app/models/Blog';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  myBlogsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Blogs/user/900410/';
  blogsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Blogs/';
  postsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Posts/';
  commentsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Comments/';

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

  //HTTP requests for posts
  showPosts(blogId: number): Observable<Blog> {
    return this.http.get<Blog>(this.blogsUrl + blogId);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post);
  }

  changePost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.postsUrl + post.id, post);
  }

  removePost(postId: number): Observable<Post> {
    return this.http.delete<Post>(this.postsUrl + postId);
  }

  //HTTP requests for comments
  showComments(postId: number): Observable<Post> {
    return this.http.get<Post>(this.postsUrl + postId);
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment);
  }
}