import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DeezerService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeezerService {
public deezerApi : string;

  constructor(public http: Http) {
    console.log('Hello DeezerService Provider');
    // this.deezerApi = "https://api.deezer.com/";
    this.deezerApi = "/deezerApi/";
  }

  getprofilesid() {
    this.http.get('https://api.myjson.com/bins/6wjyz')
      .map(res => res.json())
      .subscribe(users => {
        console.log(users)

        users.map(userid => {

          this.getuserdetails(userid);

        });
      });
  }

  getuserdetails(userid) {
    this.http.get(this.deezerApi+"user/"+ userid)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data)
      });


  }


}
