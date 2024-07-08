---
sidebar_label: 'Task 5 - Deployment'
slug: /deployment
---

# Task 5 - Deployment

## Intro

Currently, .NET Aspire only supports deployment to Azure Container Apps.  This is what we will use in this section.

## Deploy to Azure Container Apps

To deploy our application to Azure Container Apps we shall use the [Azure Developer CLI](<https://learn.microsoft.com/azure/developer/azure-developer-cli/overview>) which is an open-source tool that makes it easy to get an application from a local development environment to Azure. If AZD is not installed, use WinGet as follows:

```powershell
winget install Microsoft.Azd
```

### Logon to Azure

Enter the following. This will fire up a browser instance to authenticate with Azure credentials.

```powershell
azd auth login 
```

![alt text](.\images\task5deployment2.png)

### Intialize the application

Enter the following. AZD will scan the application and detect that it is a .NET Aspire application.  It will ask for an environment name that will be used for the Resource Group in Azure.

```powershell
azd init
```

![alt text](.\images\task5deployment3.png)

Check out the files generated: 'azure.yaml' and 'next-steps.md'.  The first is used by AZD and the second is some documentation on how to use AZD.

### Provision the infrastructure

- Enter the following.  This will create various Azure resources including Azure Container Apps environment.

```powershell
azd provision
```

![alt text](.\images\task5deployment4.png)

- Confirm the resources are created by checking in the Azure Management Portal.

![alt text](.\images\task5deployment5.png)

### Deploy the application

- Enter the following.  This will build containers in the Azure Container Registry and deploy the containers to the Azure Container Apps environment.

```powershell
azd deploy
```

![alt text](.\images\task5deployment6.png)

We can confirm the additional resources were created by checking in the Azure Management Portal.

![alt text](.\images\task5deployment7.png)

### Run the application

Access the Web application endpoint using the information returned from AZD.  In the above screenshot - it is at [https://colorsweb.graymoss-1a2bc377.westeurope.azurecontainerapps.io/](<https://colorsweb.graymoss-1a2bc377.westeurope.azurecontainerapps.io/>)

- Confirm that the application still works and the API is being called successfully.

![alt text](.\images\task5deployment8.png)

- Confirm the Developer Dashboard is available - it will need authentication to access.

- A link to the Developer Dashboard is on the Overview screen of the Azure Container Apps Environment.

![alt text](.\images\task5deployment9.png)

![alt text](.\images\task5deployment10.png)

The Developer Dashboard is not intended for production use; let's now switch to something more suitable, namely Azure Monitor / Application Insights.

## Use Azure Monitor / Application Insights

### Create Application Insights Instance

- Create an Application Insights instance.

![alt text](.\images\task5deployment11.png)

Use the existing Log Analytics Workspace that was created.

![alt text](.\images\task5deployment12.png)

![alt text](.\images\task5deployment13.png)

- Get the Application Insights 'connection string' from the overview page

![alt text](.\images\task5deployment14.png)

### Update Orchestration

We need to inject the Application Insights 'connection string' into the configuration.

- Amend the 'program.cs' in ColorsAppHost to the following and make sure the 'connection string' is assigned to variable `appinsights`:

```c#
using Projects;

var appinsights = "***insert connection string here***";

var builder = DistributedApplication.CreateBuilder(args);

var outputcache = builder.AddRedis("outputcache");

var colorsapi = builder.AddProject<ColorsAPI>("colorsapi")
    .WithEnvironment("APPLICATIONINSIGHTS_CONNECTION_STRING", appinsights)
    .WithReference(outputcache);

var colorsweb = builder.AddProject<ColorsWeb>("colorsweb")
    .WithEnvironment("APPLICATIONINSIGHTS_CONNECTION_STRING", appinsights)
    .WithReference(colorsapi)
    .WithExternalHttpEndpoints();

builder.Build().Run();

```

![alt text](.\images\task5deployment15.png)

### Update Service Defaults telemetry

- In the ServiceDefaults project - find the `AddOpenTelemetryExporters` function.

- Uncomment the lines that enable the Azure Monitor exporter

```c#
    if (!string.IsNullOrEmpty(builder.Configuration["APPLICATIONINSIGHTS_CONNECTION_STRING"]))
    {
        builder.Services.AddOpenTelemetry()
            .UseAzureMonitor();
    }
```

![alt text](.\images\task5deployment16.png)

Need to add the Nuget package 'Azure.Monitor.OpenTelemetry.AspNetCore'.

- Right click on the ColorsServiceDefaults project and select [Manage Nuget Packages]

![alt text](.\images\task5deployment17.png)

- Select 'Azure.Monitor.OpenTelemetry.AspNetCore', select [Install] and accept the subsequent dialog boxes.

![alt text](.\images\task5deployment18.png)

Our application has now been updated to use Application Insights

Ensure Orange is listed as a color in the API's list of colors - we want to be able to see Exceptions logged to Application Insights.

```c#
    new ColorsItem { Name = "Orange", Hexcode = "#FFAF00" }
```

### Redeploy the application

- Redeploy the application, enter the following

```powershell
azd deploy
```

![alt text](.\images\task5deployment19.png)

### Rerun the application

- Run the application, browse to the Web Application endpoint.

- Click the button a few times to generate data being sent to Application Insights.

- Keep clicking until an Exception occurs - we can see that in the log.

![alt text](.\images\task5deployment20.png)

### Examine Application Insights

- Browse around the Application Insight to see the telemetry generated:

![alt text](.\images\task5deployment21.png)

Application Map:

![alt text](.\images\task5deployment22.png)

Look at failures - the Exception that occurs when Orange is generated:

![alt text](.\images\task5deployment23.png)

Transaction search:

![alt text](.\images\task5deployment24.png)

End to End transaction details:

![alt text](.\images\task5deployment25.png)

## Deployment Manifest

What about targeting production environments other than Azure Container Apps?

.NET Aspire can generate a manifest that empowers tool builders to create deployment tooling.  Support for other deployment environments will expand progressively over time.

Manifest generation is achieved by running dotnet build with a special target:

- Run the following:

```powershell
 dotnet run --project ColorsAppHost\ColorsAppHost.csproj `
    --publisher manifest `
    --output-path ../aspire-manifest.json
```

![alt text](.\images\task5deployment26.png)

![alt text](.\images\task5deployment27.png)

## Summary

In this section we deployed our Application to Azure and set up the telemetry to be sent to Application Insights.

That concludes the lab.
