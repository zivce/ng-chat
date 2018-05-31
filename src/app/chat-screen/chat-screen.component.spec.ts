import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from  '@ngrx/store';
import { StoreModule } from '@ngrx/store';

import { ChatScreenComponent } from './chat-screen.component';
import { WhosOnlineListComponent } from './whos-online-list/whos-online-list.component';
import { WhosOnlineListItemComponent } from './whos-online-list-item/whos-online-list-item.component';
import { ROOT_REDUCER } from '../store/reducers';

describe('ChatScreenComponent', () => {
  let component: ChatScreenComponent;
  let fixture: ComponentFixture<ChatScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatScreenComponent,WhosOnlineListComponent,WhosOnlineListItemComponent ],
      imports : [
        StoreModule.forRoot(ROOT_REDUCER)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
