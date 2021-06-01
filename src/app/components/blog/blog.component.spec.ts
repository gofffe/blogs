import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Blog } from 'src/app/models/Blog';
import { BlogComponent } from './blog.component';
import { BlogService } from 'src/app/services/blog/blog.service';


describe('BlogComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogComponent, TestHostComponent ],
      imports: [ HttpClientModule, RouterTestingModule, FontAwesomeModule ],
      providers: [{ provide: BlogService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display blog title', () => {
    let p: HTMLHeadingElement = fixture.nativeElement.querySelector('p');
    let expectedTitle = component.blogToSend.title;

    expect(p.innerText).toBe(expectedTitle.toLowerCase());
  });
});

@Component({
  template: `<app-blog [blog]="blogToSend"></app-blog>`
})

class TestHostComponent {
  blogToSend: Blog = { id: 1, title: 'Matbloggen', created: new Date, userId: 900410, posts: [] };
}