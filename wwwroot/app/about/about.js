var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ng = require('angular2/angular2');
var About = (function () {
    function About() {
        this.topics = ["ASP.NET5 Static file + MVC6 webapi", "NG2 Universal* App (*=Server rendering with)", "Microsoft.AspNet.NodeServices.Angular"];
    }
    About = __decorate([
        ng.Component({
            selector: 'about'
        }),
        ng.View({
            template: "\n   <div>\n   \t<h1>About Page</h1>\n   \t<p>This application use:</p>\n   \t<ul>\n   \t\t<li *ng-for=\"#t of topics\">{{t}}</li>\n   \t</ul>\n   </div>\n\t",
            directives: [ng.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
})();
exports.About = About;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC50cyJdLCJuYW1lcyI6WyJBYm91dCIsIkFib3V0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQVksRUFBRSxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFFeEM7SUFpQkNBO1FBQ0NDLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLG9DQUFvQ0EsRUFBRUEsOENBQThDQSxFQUFFQSx1Q0FBdUNBLENBQUNBLENBQUFBO0lBQzlJQSxDQUFDQTtJQW5CRkQ7UUFBQ0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDYkEsUUFBUUEsRUFBRUEsT0FBT0E7U0FDakJBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBO1lBQ1JBLFFBQVFBLEVBQUVBLCtKQVFUQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQTtTQUN0QkEsQ0FBQ0E7O2NBTURBO0lBQURBLFlBQUNBO0FBQURBLENBcEJBLEFBb0JDQSxJQUFBO0FBTFksYUFBSyxRQUtqQixDQUFBIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5nIGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQG5nLkNvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWJvdXQnXG59KVxuQG5nLlZpZXcoe1xuXHR0ZW1wbGF0ZTogYFxuICAgPGRpdj5cbiAgIFx0PGgxPkFib3V0IFBhZ2U8L2gxPlxuICAgXHQ8cD5UaGlzIGFwcGxpY2F0aW9uIHVzZTo8L3A+XG4gICBcdDx1bD5cbiAgIFx0XHQ8bGkgKm5nLWZvcj1cIiN0IG9mIHRvcGljc1wiPnt7dH19PC9saT5cbiAgIFx0PC91bD5cbiAgIDwvZGl2PlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbbmcuTmdGb3JdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0e1xuXHR0b3BpY3M7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudG9waWNzID0gW1wiQVNQLk5FVDUgU3RhdGljIGZpbGUgKyBNVkM2IHdlYmFwaVwiLCBcIk5HMiBVbml2ZXJzYWwqIEFwcCAoKj1TZXJ2ZXIgcmVuZGVyaW5nIHdpdGgpXCIsIFwiTWljcm9zb2Z0LkFzcE5ldC5Ob2RlU2VydmljZXMuQW5ndWxhclwiXVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
