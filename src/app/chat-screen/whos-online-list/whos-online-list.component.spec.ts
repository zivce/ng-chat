import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosOnlineListComponent } from './whos-online-list.component';

describe('WhosOnlineListComponent', () => {
  let component: WhosOnlineListComponent;
  let fixture: ComponentFixture<WhosOnlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhosOnlineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosOnlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
