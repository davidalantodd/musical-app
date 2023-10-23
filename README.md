# Musical App
An app to track musical theatre productions using .NET Core and C#

## Installation

Install the following:
- Visual Studio Code
- [C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) for VS Code
- [.NET SDK](https://dotnet.microsoft.com/download/dotnet/7.0) - latest version

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

Trust HTTP certificate

```bash
  dotnet dev-certs https --trust
```

Start the server

```bash
  dotnet run --launch-profile https
```

## Testing

Test the API endpoints by:
- visting the https URL with /swagger appended. (e.g. https://localhost:1234/swagger)
- using Postman (https://localhost:1234)
