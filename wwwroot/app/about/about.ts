import * as ng from 'angular2/angular2';

@ng.Component({
	selector: 'about'
})
@ng.View({
	templateUrl: './app/about/about.html',
	directives: [ng.NgFor]
})
export class About{
	topics;
	constructor() {
		this.topics = ["ASP.NET5 Static file + MVC6 webapi", "NG2 Universal* App (*=Server rendering with)", "Microsoft.AspNet.NodeServices.Angular"]
	}
}