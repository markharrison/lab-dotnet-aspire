---
sidebar_label: 'Task 1 - Getting Started'
slug: /getstarted
---

# Task 1 - Getting Started

## Prerequisites

.NET Aspire requires .NET 9.0, and the lab screenshots show the use of Visual Studio 2022. The tooling is also available for Visual Studio Code, and you should be able to achieve similar results using this alternative editor/development environment.

Some of the later lab functionality uses containers, and for those parts, Docker Desktop or similar needs to be installed.

To deploy our application, an Azure subscription is required, and the Azure Developer CLI will need to be installed.

To install the .NET Aspire workload, execute the following command:

```powershell
dotnet workload update
dotnet workload install aspire
dotnet workload list
```

![alt text](.\images\task1workload.png)

## Download the Lab Starter Solution

- Download the following GitHub repo from [https://github.com/markharrison/AspireColorsLab](<https://github.com/markharrison/AspireColorsLab>).

```powershell
git clone https://github.com/markharrison/AspireColorsLab
cd AspireColorsLab/AspireColorsSolution1
dir
```

![alt text](.\images\task1gitclone.png)

This repository includes a number of solutions - one for each stage in the lab. The lab starter solution is in the folder AspireColorsSolution1. If you follow the lab, you shouldn't need the other solutions, but they may be useful to refer to.

## Open the Lab Starter Solution

- Open the solution file - it contains two projects:

  - ColorsAPI ... API application for managing colors.
  - ColorsWeb ... Web application for displaying a random color.

- Right-click on a project and select the menu option [Configure Startup Projects]. Set both projects to 'Start'.

![alt text](.\images\task1vs1.png)

Inspect the code to see how the application works. Thanks to GitHub Copilot, the application was easy to create and took about 30 minutes to develop.

## Run the Lab Starter Solution

### API Application

The API application contains three operations :

- Get all colors.
- Insert a new color.
- Get a random color.

It also provides a Swagger UI which documents the API operations and allows a user to test them out.

- Use the Swagger UI explore the API functionality.

![alt text](.\images\task1api.png)

### Web Application

The Web application displays a colored circle and a button - the click handler on the button will call the API application to get a random color which is then used to light up the circle with the assigned color.

![alt text](.\images\task1web1.png)

For the Web App to connect to the API App - we need to amend the configuration in appsettings.json (for the Web App).

- Using the Swagger UI, Get the URL of the API operation for 'Get a Random Color' ... in the example screenshot above - the URL is [https://localhost:7167/colors/random](<https://localhost:7167/colors/random>).
- Amend the `ColorsAPIUrl` item in the appsettings.json file to point to the correct URL.

![alt text](.\images\task1vs2.png)

Clicking the button will now call the API and display the returned color.

![alt text](.\images\task1web2.png)

## Summary

In this section we have set up our core Web/API applicaton ... lets now make it better using .NET Aspire.
