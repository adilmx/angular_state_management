import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoriesComponent } from './add-stories.component';

describe('AddStoriesComponent', () => {
  let component: AddStoriesComponent;
  let fixture: ComponentFixture<AddStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
