import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListItmComponent } from './message-list-itm.component';

describe('MessageListItmComponent', () => {
  let component: MessageListItmComponent;
  let fixture: ComponentFixture<MessageListItmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListItmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
