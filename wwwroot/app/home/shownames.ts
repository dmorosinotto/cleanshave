import * as ng from 'angular2/angular2';

@ng.Component({
	selector: 'shownames'
})
@ng.View({	
	template: 	`<ul>
        			<li *ng-for="#name of names; #i=index">{{i + '. Hi ' + name}}</li>
    			</ul>`,
	directives: [ng.NgFor]
})
export class ShowNames{
@ng.Input() names: string[];
	constructor() {

	}
}