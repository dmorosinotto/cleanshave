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
var http_1 = require('angular2/http');
var shownames_1 = require("./shownames");
var Home = (function () {
    function Home(http) {
        var _this = this;
        this.http = http;
        this.http.get("api/names").subscribe(function (r) { return _this.list = r.json(); });
        //.map( r => (<any>r).json())
        //.subscribe( n => this.list = n );
    }
    Home = __decorate([
        ng.Component({
            selector: 'home'
        }),
        ng.View({
            template: "\n   <div>\n   \t<h1>Home Page</h1>\n   \t<shownames [names]=\"list\"></shownames>\n   </div>\n\n   <footer><hr>Total: {{list?.length}} names returned by <a href=\"api/names\">api/names</a></footer>\n\t",
            directives: [shownames_1.ShowNames]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUudHMiXSwibmFtZXMiOlsiSG9tZSIsIkhvbWUuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxFQUFFLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUN4QyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFDckMsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBRXRDO0lBZ0JJQSxjQUFvQkEsSUFBVUE7UUFoQmxDQyxpQkFxQkNBO1FBTHVCQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsQ0FBQ0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBcEJBLENBQW9CQSxDQUFDQSxDQUFBQTtRQUMzREEsNkJBQTZCQTtRQUM3QkEsbUNBQW1DQTtJQUMzQ0EsQ0FBQ0E7SUFwQkxEO1FBQUNBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO1lBQ2JBLFFBQVFBLEVBQUVBLE1BQU1BO1NBQ2hCQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNSQSxRQUFRQSxFQUFFQSw0TUFPVEE7WUFDRUEsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVNBLENBQUNBO1NBQzFCQSxDQUFDQTs7YUFRREE7SUFBREEsV0FBQ0E7QUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7QUFQWSxZQUFJLE9BT2hCLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5nIGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7U2hvd05hbWVzfSBmcm9tIFwiLi9zaG93bmFtZXNcIjtcblxuQG5nLkNvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaG9tZSdcbn0pXG5AbmcuVmlldyh7XG5cdHRlbXBsYXRlOiBgXG4gICA8ZGl2PlxuICAgXHQ8aDE+SG9tZSBQYWdlPC9oMT5cbiAgIFx0PHNob3duYW1lcyBbbmFtZXNdPVwibGlzdFwiPjwvc2hvd25hbWVzPlxuICAgPC9kaXY+XG5cbiAgIDxmb290ZXI+PGhyPlRvdGFsOiB7e2xpc3Q/Lmxlbmd0aH19IG5hbWVzIHJldHVybmVkIGJ5IDxhIGhyZWY9XCJhcGkvbmFtZXNcIj5hcGkvbmFtZXM8L2E+PC9mb290ZXI+XG5cdGAsXG4gICAgZGlyZWN0aXZlczogW1Nob3dOYW1lc11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZXtcbiAgICBwdWJsaWMgbGlzdDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAgKXtcbiAgICAgICAgdGhpcy5odHRwLmdldChcImFwaS9uYW1lc1wiKS5zdWJzY3JpYmUociA9PiB0aGlzLmxpc3QgPSByLmpzb24oKSlcbiAgICAgICAgICAgIC8vLm1hcCggciA9PiAoPGFueT5yKS5qc29uKCkpXG4gICAgICAgICAgICAvLy5zdWJzY3JpYmUoIG4gPT4gdGhpcy5saXN0ID0gbiApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
