import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { NewBlogComponent } from './new-blog.component';
import { BlogService } from 'src/app/services/blog/blog.service';

describe('NewBlogComponent', () => {
  let component: NewBlogComponent;
  let fixture: ComponentFixture<NewBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBlogComponent ],
      imports: [ HttpClientModule, RouterTestingModule, FormsModule ],
      providers: [{ provide: BlogService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
