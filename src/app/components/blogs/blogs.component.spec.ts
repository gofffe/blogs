import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { BlogsComponent } from './blogs.component';
import { BlogService } from 'src/app/services/blog/blog.service';
import { MockBlogService } from 'src/app/services/blog/MockBlogService';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsComponent ],
      imports: [ HttpClientModule ],
      providers: [{ provide: BlogService, useClass: MockBlogService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have array of blogs', () => {
    expect(component.blogs.length).toBe(3);
    expect(component.blogs[2].title).toBe('dagar');
  });
});
