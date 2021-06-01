import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ChangeBlogComponent } from './change-blog.component';
import { BlogService } from 'src/app/services/blog/blog.service';

describe('ChangeBlogComponent', () => {
  let component: ChangeBlogComponent;
  let fixture: ComponentFixture<ChangeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBlogComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [{ provide: BlogService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
