import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
	private username:string;
	private client_id:string="a46a5a2f9aabf02c5412";
	private client_secret:string="6ae0d4d754513b1ec3e3051d8206a0d4d13d0578";

  constructor(private _http:Http) {
  this.username="praveenojha33";
  console.log("Github Service ready...");
   }
   getUser(){
   	return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
   }
   getRepo(){
   		return this._http.get('http://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
   }
   updateUser(username:string){
   		this.username=username;
}
}