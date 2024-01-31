import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesAndPosts } from './themes-and-posts.component';

describe('ThemesAndPosts', () => {
  let component: ThemesAndPosts;
  let fixture: ComponentFixture<ThemesAndPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesAndPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesAndPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
