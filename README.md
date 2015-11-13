# Aspnet5Ng2
An Angular 2 application with ASP.NET 5

## [VIDEO](https://channel9.msdn.com/Events/ASPNET-Events/ASPNET-Fall-Sessions/ASPNET--Spa)

### GETTING STARTED
* Requirements: The application is built on beta8 of ASP.NET 5, refer to http://docs.asp.net to install (1.0.0 beta 8)
	* `> curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.sh | DNX_BRANCH=dev sh && source ~/.dnx/dnvm/dnvm.sh`
	* `> brew update`
	* `> brew install icu4c`
	* `> dnvm update -r coreclr`
	* `> npm i -g nodemon`

1. Fork and clone the repo

1. Run `npm install`

1. Run `dnu restore` 

1. Open a terminal window and execute `npm run tsc`, this starts the TypeScript compiler

1. Open a second terminal window and execute `npm start`.  This command runs the `gulp build` task, then starts [nodemon](http://nodemon.io) for `dnx web`. The `nodemon` process will watch for any changes to the C# code and/or JavaScript files (transpiled from `tsc`) and restart then **kestrel** server.

1. Open http://localhost:5000
