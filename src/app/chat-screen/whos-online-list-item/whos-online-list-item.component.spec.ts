import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosOnlineListItemComponent } from './whos-online-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WhosOnlineListItemComponent', () => {
  let component: WhosOnlineListItemComponent;
  let fixture: ComponentFixture<WhosOnlineListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ WhosOnlineListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosOnlineListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
