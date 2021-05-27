import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBlogComponent } from './change-blog.component';

describe('ChangeBlogComponent', () => {
  let component: ChangeBlogComponent;
  let fixture: ComponentFixture<ChangeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBlogComponent ]
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
