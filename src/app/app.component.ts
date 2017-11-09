import { ScoreService } from './score.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username;
  score;

  constructor(private _ScoreService: ScoreService) { }

  onSubmit() {
  	this._ScoreService.getUserInfo(this.username)
  		.subscribe(
  			(response) => { 
  				this.score = response.json().public_repos + response.json().followers;
  				console.log(this.score);
  			},
  			(error) => { 
  				console.log(error);
  			}
  		)
  	this.username = undefined;
  }
}
