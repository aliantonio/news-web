import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalloneComponent } from './pallone.component';

describe('PalloneComponent', () => {
  let component: PalloneComponent;
  let fixture: ComponentFixture<PalloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
