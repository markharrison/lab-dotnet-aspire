---
sidebar_label: 'Task 2 - Service Defaults'
slug: /servicedefaults
---

# Task 2 - Service Defaults

## Intro

.NET Aspire helps with the following:

- Observability: Monitor and analyze telemetry to understand the health and performance of an application and its components. It uses [OpenTelemetry](<https://opentelemetry.io/>), a cross-platform, open standard for collecting and emitting telemetry data.
- Resiliency: Ensure the ability of an app to recover from transient failures and continue functioning.
- Health Checks: Probe an application to determine if its components are live and healthy.  They are useful for catching anomalies and problems early, helping to ensure application stability.

Let's add this to our code.

## ServiceDefaults project

We first need to include a special project called 'ServiceDefaults'. This project contains code that implements the 'Smart Defaults' functionality and can be shared across various components of the application.

- Select the Solution, Right Click and [Add Project]

![alt text](.\images\task2servicedefaults1.png)

- Filter the options by entering 'Aspire'.  Select the '.NET Aspire Service Defaults' project.

![alt text](.\images\task2servicedefaults2.png)

- Enter a project name :  ColorsServiceDefaults
- All other options should take the defaults.  Select [Next] &  [Create].

The third project will now be created and visible in the Solution Explorer.

![alt text](.\images\task2servicedefaults3.png)

## Explore the code

In the ServiceDefaults project, the file 'Extensions.cs' contains the functionality to add Observability, Resiliency and Health Checks.  It includes Smart Defaults options which can be expanded / amended if required.

- Inspect and understand the code provided in 'Extensions.cs' .

- Note that .NET Aspire is just using standard .NET functionality but it just makes it easier to get started
  - The Observability functionality uses .NET functionality - AddOpenTelemetry()
  - The Resiliency functionality uses the .NET functionality - AddStandardResilienceHandler()
  - The Health Checks functionality uses the .NET functionality - AddHealthChecks()

![alt text](.\images\task2servicedefaults4.png)

The file 'Extensions.cs' includes two functions called:

- AddServiceDefaults()
- MapDefaultEndpoints();

We can pull this functionality into our applications by using these two functions.

## Add code to application

So lets add Observability / Resiliency / Health Checks to our application.

In the Web application add the following lines of code in 'program.cs'.

Add `builder.AddServiceDefaults();` immediately after `var builder = WebApplication.CreateBuilder(args);`.

Add `app.MapDefaultEndpoints();` immediately before `app.MapRazorPages();`.

![alt text](.\images\task2servicedefaults5.png)

In the Web application add the following lines of code in 'program.cs'.

Add `builder.AddServiceDefaults();` immediately after `var builder = WebApplication.CreateBuilder(args);`.

Add `app.MapDefaultEndpoints();` immediatley before the first `app.MapGet();`.

We want to test resiliency.  The code includes some logic to throw an Exception if the color Orange is to be returned.
Simplify the list of colors and include Orange:

```c#
new ColorsItem { Name = "Orange", Hexcode = "#FFAF00" }
```

![alt text](.\images\task2servicedefaults6.png)

## Test resiliency

Lets now test the application and see what happens when Orange causes the API application to throw an Exception and fail to respond to the Web application with a color.

- Run the Application

Click the button in the Web Application and see the circle light up with the returned color.  Keep clicking and see that no errors occur.

Notice on the Log that occasionally the Exception is thrown with the message "We do not like orange".  But also notice that the web application doesn't break - transparently to the user, it retries again to call the API to get the color to display.

![alt text](.\images\task2servicedefaults7.png)

## Test health checks

Lets now test the application and check the health checks are working.  

- For both the Web Application and API application browse to the URL `http://[address]/health` or `http://[address]/alive`.  Should see the 'Healthy' response message.

![alt text](.\images\task2servicedefaults8.png)

![alt text](.\images\task2servicedefaults9.png)

## Summary

In this section have added Observability, Resiliency and Health Checks into our application.

Observability using OpenTelemetry will be shown later in the lab - using both the .NET Aspire dashboard and Azure Monitor /Application Insights.
