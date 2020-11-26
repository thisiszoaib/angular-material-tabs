import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoComponent } from './section-two.component';

describe('SectionTwoComponent', () => {
  let component: SectionTwoComponent;
  let fixture: ComponentFixture<SectionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
