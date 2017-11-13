import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtleMessageComponent } from './subtle-message.component';

describe('SubtleMessageComponent', () => {
  let component: SubtleMessageComponent;
  let fixture: ComponentFixture<SubtleMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtleMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
