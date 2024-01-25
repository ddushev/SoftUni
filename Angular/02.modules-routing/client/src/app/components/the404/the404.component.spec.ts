import { ComponentFixture, TestBed } from '@angular/core/testing';

import { The404Component } from './the404.component';

describe('The404Component', () => {
  let component: The404Component;
  let fixture: ComponentFixture<The404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [The404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(The404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
