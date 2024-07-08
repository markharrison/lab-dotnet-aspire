---
sidebar_label: 'Task 3 - App Host'
slug: /apphost
---

# Task 3 - App Host

## Intro

 Microservices, with their loosely coupled nature, increase the flexibility of your deployed app but can complicate configuration.

.NET Aspire provides orchestration functionality to:

- Define .NET projects, containers, executables, and cloud resources that make up the application.
- Enable service discovery by injecting endpoints and connection strings into the microservices.
- A .NET Aspire solution includes a special project called 'App Host'. This project is responsible for starting all the components that make up the application and injecting any necessary configurations and dependencies into those components.

## AppHost project

We first need to include a special project called 'AppHost'.  This project is responsible for starting all the components that make up the application and injecting any necessary configurations and dependencies into those components.

- Select the Solution, Right Click and [Add Project]

![alt text](.\images\task3apphost1.png)

- Filter the options by entering 'Aspire'.  Select the '.NET Aspire App Host' project.

![alt text](.\images\task3apphost2.png)

- Enter a project name :  ColorsAppHost
- All other options should take the defaults.  Select [Next] &  [Create].

The fourth project will now be created and visible in the Solution Explorer.

![alt text](.\images\task3apphost3.png)

## Explore the code

In the AppHost project, the file 'Program.cs' contains the functionality to provide orchestration. Currently, it won't be doing anything .

So, let's add functionality to define the projects that need to be started.

## Add code to application

Add the code to define what projects are to be started.

- Amend the 'Program.cs' file to:

```C#
using Projects;

var builder = DistributedApplication.CreateBuilder(args);

var colorsapi = builder.AddProject<ColorsAPI>("colorsapi");

var colorsweb = builder.AddProject<ColorsWeb>("colorsweb")
    .WithReference(colorsapi)
    .WithExternalHttpEndpoints();

builder.Build().Run();
```

![alt text](.\images\task3apphost4.png)

Things to note:

- the API application is created before the Web application.
- using `WithReference()` a reference to the the API application is injected into the Web application.  This is used for service discovery - so the Web application can find the API application - and we no longer need to specify the address in configuration.
- using `WithExternalHttpEndpoints()` specifies that the Web application must have external endpoints.  This is needed later when we deploy to an Azure Container Apps environment.

We need to do another tweak to enable the service discovery to work.

- In the Web application, change the variable storing the API URL as follows

```c#
var colorsAPIUrl = "https+http://colorsapi/colors/random";  
```

![alt text](.\images\task3apphost5.png)

Things to note:

- the 'https+http' means first try https protocol, if that doesn't work, then fall back to http.
- the 'colorsapi' domain name is the same identifier that was used in the AppHost Orchestration.

## Test service discovery

Amend the solution startup so that the ColorsAppHost is the startup project.

![alt text](.\images\task3apphost6.png)

- Run the solution - and notice this time things are different.  What we see is the .NET Aspire Developer Dashboard.

![alt text](.\images\task3apphost7.png)

The first screen on the Developer Dashboard shows the Solution resources - namely the Projects colorsweb and colorsapi, along with their endpoints.

- Click on the endpoint for colorweb.
- Check the application still works and the API is being called successfully.  This confirms our service discovery is working correctly.

## Observability with the Developer Dashboard

In the previous section we enabled Observability using OpenTelemetry.  By default, the telemetry is being routed to the Developer Dashboard.

- Explore the Developer Dashboard.   Look at the logs, traces and metrics.

![alt text](.\images\task3apphost8.png)

![alt text](.\images\task3apphost9.png)

![alt text](.\images\task3apphost10.png)

![alt text](.\images\task3apphost11.png)

![alt text](.\images\task3apphost12.png)

## Summary

In this section we have added Orchestration and Service Discovery into our application.

We also showed the Developer Dashboard and the observability that we implemented in the previous section.
