import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';

import { User } from '../models';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) {

  }  
  loginUser (user : String) : Observable<string>
  {
    const headers1 = new HttpHeaders({"Content-Type": "application/json"});
   
    const headers = headers1;
    const username = user;

    return this.http.post(
      environment.pusher.login_url,
      JSON.stringify({username}),
      {
        headers,
        reportProgress : true,
        responseType:'text'}
    )
   
  }
}
