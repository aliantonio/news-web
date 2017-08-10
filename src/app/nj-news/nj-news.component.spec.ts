import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NjNewsComponent } from './nj-news.component';

describe('NjNewsComponent', () => {
  let component: NjNewsComponent;
  let fixture: ComponentFixture<NjNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NjNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NjNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
