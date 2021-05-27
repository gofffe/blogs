import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './components/blogs/blogs.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { ChangeBlogComponent } from './components/change-blog/change-blog.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ChangePostComponent } from './components/change-post/change-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'blog/new', component: NewBlogComponent },
  { path: 'blog/:id/change', component: ChangeBlogComponent },
  { path: 'blog/:id/new-post', component: NewPostComponent },
  { path: 'blog/:id/post/:nr/comments', component: CommentsComponent },
  { path: 'blog/:id/post/:nr', component: ChangePostComponent },
  { path: 'blog/:id', component: PostsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
