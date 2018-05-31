import { TestBed, inject } from '@angular/core/testing';

import { ConnectService } from './connect.service';
import { Store } from  '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from '../store/reducers';

describe('ConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectService],
      imports: [
        StoreModule.forRoot(ROOT_REDUCER)
      ]
    });
  });

  it('should be created', inject([ConnectService], (service: ConnectService) => {
    expect(service).toBeTruthy();
  }));

});
