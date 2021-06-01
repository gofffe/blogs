import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ChangePostComponent } from './change-post.component';
import { PostService } from 'src/app/services/post/post.service';

describe('ChangePostComponent', () => {
  let component: ChangePostComponent;
  let fixture: ComponentFixture<ChangePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePostComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [{ provide: PostService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
