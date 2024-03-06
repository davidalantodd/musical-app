# Musical App
A full-stack app to track musical theatre productions using:
- C#/.NET
- Angular/TypeScript/SCSS
- PostgreSQL

## Installation

Install the following:
- Visual Studio Code
- [C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) for VS Code
- [.NET SDK](https://dotnet.microsoft.com/download/dotnet/7.0) - latest version
- [Angular CLI](https://angular.io/guide/setup-local) - use `npm install -g @angular/cli`

You may also install the following VS Code extensions:
- [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)
- [.NET MAUI](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-maui)
- [Unity](https://marketplace.visualstudio.com/items?itemName=visualstudiotoolsforunity.vstuc)

## Run Locally

Clone the project

```bash
  git clone https://github.com/davidalantodd/musical-app
```

Go to the project directory

```bash
  cd musical-app
```

Read the [client](/client) and [server](/server/) docs for any additional setup.

Install dependencies

```bash
  npm install
```

Start both servers using [`npm-run-all`](https://www.npmjs.com/package/npm-run-all) script

```bash
  npm start
```

## Testing

View front-end dev server using:
- [http://localhost:4200/](http://localhost:4200/)

Test the back-end endpoints by:
- visting the https URL generated in the terminal with `/swagger` appended (e.g. https://localhost:7234/swagger)
- using Postman (https://localhost:7234)