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
var router = require('angular2/router');
var home_1 = require('./home/home');
var about_1 = require('./about/about');
var App = (function () {
    function App() {
    }
    App = __decorate([
        ng.Component({
            selector: 'app'
        }),
        ng.View({
            template: "\n      <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n          <div class=\"container\">\n              <div class=\"navbar-header\">\n                  <a class=\"navbar-brand\" [router-link]=\"['/Home']\">CloseShave</a>\n              </div>\n              <div class=\"collapse navbar-collapse\">\n                  <ul class=\"nav navbar-nav\">\n                      <li><a [router-link]=\"['/Home']\">Home</a></li>\n                      <li><a [router-link]=\"['/About']\">About</a></li>\n                  </ul>\n              </div>\n          </div>\n      </nav>\n      <div class=\"container body-content\">\n          <router-outlet></router-outlet>\n      </div>\n    ",
            styles: ["\n\n    "],
            directives: [router.ROUTER_DIRECTIVES, ng.NgFor]
        }),
        router.RouteConfig([
            { path: '/', component: home_1.Home, as: 'Home' },
            { path: '/About', component: about_1.About, as: 'About' },
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQXBwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQVksRUFBRSxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFDeEMsSUFBWSxNQUFNLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUMxQyxxQkFBcUIsYUFBYSxDQUFDLENBQUE7QUFDbkMsc0JBQXNCLGVBQWUsQ0FBQyxDQUFBO0FBR3RDO0lBZ0NJQTtJQUFjQyxDQUFDQTtJQWhDbkJEO1FBQUNBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO1NBQ2xCQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNMQSxRQUFRQSxFQUFFQSx1ckJBaUJUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUVSQSxDQUFDQTtZQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxpQkFBaUJBLEVBQUVBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBO1NBQ25EQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtZQUNoQkEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDMUNBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1NBQ3BEQSxDQUFDQTs7WUFHREE7SUFBREEsVUFBQ0E7QUFBREEsQ0FqQ0EsQUFpQ0NBLElBQUE7QUFGWSxXQUFHLE1BRWYsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbmcgZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnLi9ob21lL2hvbWUnO1xuaW1wb3J0IHsgQWJvdXQgfSBmcm9tICcuL2Fib3V0L2Fib3V0JztcblxuXG5AbmcuQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCdcbn0pXG5AbmcuVmlldyh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgW3JvdXRlci1saW5rXT1cIlsnL0hvbWUnXVwiPkNsb3NlU2hhdmU8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyLWxpbmtdPVwiWycvSG9tZSddXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyLWxpbmtdPVwiWycvQWJvdXQnXVwiPkFib3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBib2R5LWNvbnRlbnRcIj5cbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcblxuICAgIGBdLFxuICAgIGRpcmVjdGl2ZXM6IFtyb3V0ZXIuUk9VVEVSX0RJUkVDVElWRVMsIG5nLk5nRm9yXVxufSlcbkByb3V0ZXIuUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWUsIGFzOiAnSG9tZScgfSxcbiAgICB7IHBhdGg6ICcvQWJvdXQnLCBjb21wb25lbnQ6IEFib3V0LCBhczogJ0Fib3V0JyB9LFxuXSlcbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCl7fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
