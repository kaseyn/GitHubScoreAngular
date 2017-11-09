import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {

	private username;

  constructor(private _http: Http) { }


  // getUserInfo(username, callback){
  // 	this._http.get('https://api.github.com/users/${username}').subscribe(
  // 		(response) => { callback(response.json()); },
  // 		(error) => { console.log(error); } 
  // 		);
  // };

  getUserInfo(username) {
  	return this._http.get(`https://api.github.com/users/${username}`);
  };
}
