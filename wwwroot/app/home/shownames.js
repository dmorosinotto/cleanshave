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
var ShowNames = (function () {
    function ShowNames() {
    }
    __decorate([
        ng.Input(), 
        __metadata('design:type', Array)
    ], ShowNames.prototype, "names");
    ShowNames = __decorate([
        ng.Component({
            selector: 'shownames'
        }),
        ng.View({
            template: "<ul>\n        \t\t\t<li *ng-for=\"#name of names; #i=index\">{{i + '. Hi ' + name}}</li>\n    \t\t\t</ul>",
            directives: [ng.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], ShowNames);
    return ShowNames;
})();
exports.ShowNames = ShowNames;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3Nob3duYW1lcy50cyJdLCJuYW1lcyI6WyJTaG93TmFtZXMiLCJTaG93TmFtZXMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxFQUFFLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUV4QztJQVdDQTtJQUVBQyxDQUFDQTtJQUhGRDtRQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQTs7T0FBQ0EsNEJBQUtBLEVBQVdBO0lBVjVCQTtRQUFDQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNiQSxRQUFRQSxFQUFFQSxXQUFXQTtTQUNyQkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDUkEsUUFBUUEsRUFBR0EsMkdBRUNBO1lBQ1pBLFVBQVVBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBO1NBQ3RCQSxDQUFDQTs7a0JBTURBO0lBQURBLGdCQUFDQTtBQUFEQSxDQWRBLEFBY0NBLElBQUE7QUFMWSxpQkFBUyxZQUtyQixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL3Nob3duYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5nIGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQG5nLkNvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc2hvd25hbWVzJ1xufSlcbkBuZy5WaWV3KHtcdFxuXHR0ZW1wbGF0ZTogXHRgPHVsPlxuICAgICAgICBcdFx0XHQ8bGkgKm5nLWZvcj1cIiNuYW1lIG9mIG5hbWVzOyAjaT1pbmRleFwiPnt7aSArICcuIEhpICcgKyBuYW1lfX08L2xpPlxuICAgIFx0XHRcdDwvdWw+YCxcblx0ZGlyZWN0aXZlczogW25nLk5nRm9yXVxufSlcbmV4cG9ydCBjbGFzcyBTaG93TmFtZXN7XG5AbmcuSW5wdXQoKSBuYW1lczogc3RyaW5nW107XG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
