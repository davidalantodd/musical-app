# Musical App
Back-end API to track musical productions using .NET Core and C#

## Installation

Install the following:
- Visual Studio Code
- [C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) for VS Code
- [.NET SDK](https://dotnet.microsoft.com/download/dotnet/7.0) - latest version

You may also install the following VS Code extensions:
- [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)
- [.NET MAUI](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-maui)
- [Unity](https://marketplace.visualstudio.com/items?itemName=visualstudiotoolsforunity.vstuc)


## Run Back-en Locally

Trust HTTP certificate

```bash
  dotnet dev-certs https --trust
```

Create the database connection string in a `secrets.json` file. Enable the secret manager tool

```bash
  dotnet user-secrets init
```

Start the server

```bash
  dotnet run --launch-profile https
```

## Testing

Test the API endpoints by:
- visting the https URL generated in the terminal with /swagger appended (e.g. https://localhost:7234/swagger)
- using Postman (https://localhost:7234)
