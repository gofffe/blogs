import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { ChangeBlogComponent } from './components/change-blog/change-blog.component';
import { PostsComponent } from './components/posts/posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ChangePostComponent } from './components/change-post/change-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    BlogComponent,
    NewBlogComponent,
    ChangeBlogComponent,
    PostsComponent,
    NewPostComponent,
    ChangePostComponent,
    CommentsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
