import * as ng from 'angular2/angular2';
import { Http } from 'angular2/http';
import {ShowNames} from "./shownames";

@ng.Component({
	selector: 'home'
})
@ng.View({
	templateUrl: './app/home/home.html',
    directives: [ShowNames]
})
export class Home{
    public list;
    constructor(private http: Http ){
        this.http.get("api/names").subscribe(r => this.list = r.json())
            //.map( r => (<any>r).json())
            //.subscribe( n => this.list = n );
    }
}