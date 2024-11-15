"use strict";(self.webpackChunklab_dotnet_aspire=self.webpackChunklab_dotnet_aspire||[]).push([[448],{1807:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(4848),s=i(8453);const r={sidebar_label:"What is .NET Aspire?",slug:"/what"},a="What is .NET Aspire ?",o={id:"what",title:"What is .NET Aspire ?",description:".NET Aspire is designed to enhance the development of .NET cloud-native apps. It offers a consistent and opinionated set of tools and patterns to streamline the building and running of distributed applications.",source:"@site/docs/03-what.md",sourceDirName:".",slug:"/what",permalink:"/lab-dotnet-aspire/what",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"What is .NET Aspire?",slug:"/what"},sidebar:"tutorialSidebar",previous:{title:"Why .NET Aspire?",permalink:"/lab-dotnet-aspire/why"},next:{title:"Task 1 - Getting Started",permalink:"/lab-dotnet-aspire/getstarted"}},l={},c=[{value:"Smart Defaults",id:"smart-defaults",level:2},{value:"Developer Dashboard",id:"developer-dashboard",level:2},{value:"Orchestration",id:"orchestration",level:2},{value:"Service Discovery",id:"service-discovery",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Tooling",id:"tooling",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"what-is-net-aspire-",children:"What is .NET Aspire ?"})}),"\n",(0,t.jsx)(n.p,{children:".NET Aspire is designed to enhance the development of .NET cloud-native apps. It offers a consistent and opinionated set of tools and patterns to streamline the building and running of distributed applications."}),"\n",(0,t.jsx)(n.p,{children:".NET Aspire aims to assist with the following:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"dotnet-aspire",src:i(8050).A+"",width:"1220",height:"538"})}),"\n",(0,t.jsx)(n.h2,{id:"smart-defaults",children:"Smart Defaults"}),"\n",(0,t.jsx)(n.p,{children:".NET Aspire helps with the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Observability: Monitor and analyze telemetry to understand the health and performance of an application and its components. It uses ",(0,t.jsx)(n.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"}),", a cross-platform, open standard for collecting and emitting telemetry data."]}),"\n",(0,t.jsx)(n.li,{children:"Resiliency: Ensure the ability of an app to recover from transient failures and continue functioning."}),"\n",(0,t.jsx)(n.li,{children:"Health Checks: Probe an application to determine if its components are live and healthy.  They are useful for catching anomalies and problems early, helping to ensure application stability."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A .NET Aspire solution includes a special project called 'ServiceDefaults'. This project contains code that implements the required functionality and can be shared across various components of the application."}),"\n",(0,t.jsx)(n.h2,{id:"developer-dashboard",children:"Developer Dashboard"}),"\n",(0,t.jsx)(n.p,{children:".NET Aspire provides an open-source OpenTelemetry dashboard for deep insights into applications on your local development machine. It enables close tracking of various aspects, including logs, traces, and environment configurations, in real-time. Purpose-built to enhance the local development experience, it offers an insightful overview of your app's state and structure."}),"\n",(0,t.jsxs)(n.p,{children:["The dashboard is part of the .NET Aspire runtime and is also available as a Docker image: ",(0,t.jsx)(n.a,{href:"https://aspiredashboard.com/",children:"https://aspiredashboard.com/"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"orchestration",children:"Orchestration"}),"\n",(0,t.jsx)(n.p,{children:"Microservices, with their loosely coupled nature, increase the flexibility of your deployed app but can complicate configuration."}),"\n",(0,t.jsx)(n.p,{children:".NET Aspire provides orchestration functionality to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Define .NET projects, containers, executables, and cloud resources that make up the application."}),"\n",(0,t.jsx)(n.li,{children:"Enable service discovery by injecting endpoints and connection strings into the microservices."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A .NET Aspire solution includes a special project called 'App Host'. This project is responsible for starting all the components that make up the application and injecting any necessary configurations and dependencies into those components."}),"\n",(0,t.jsx)(n.h2,{id:"service-discovery",children:"Service Discovery"}),"\n",(0,t.jsx)(n.p,{children:"In a microservices architecture, loosely coupled services need to find each other in order to communicate. Typically, this is managed through configuration files or environment variables, but maintaining these can be challenging. It becomes even trickier in production systems where factors like auto-scaling, service upgrades, and failures can cause component instances to be dynamic and move around. Service discovery is a mechanism that enables components to find each other by tracking their instances and locations."}),"\n",(0,t.jsx)(n.h2,{id:"integrations",children:"Integrations"}),"\n",(0,t.jsx)(n.p,{children:"Microservices commonly require backing services to underpin their functionality. Examples include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data storage: To persist data in structured or semi-structured stores."}),"\n",(0,t.jsx)(n.li,{children:"Caching: To maximize performance by storing data in a cache, allowing subsequent similar requests to be satisfied more quickly."}),"\n",(0,t.jsx)(n.li,{children:"Messaging: To ensure reliable communication under high network traffic or challenging conditions by persisting and distributing messages via data queues."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:".NET Aspire integrattions simplify the utilization of these backend services. Each integrattion is a NuGet package designed for orchestration and service discovery, ensuring smooth integration of the service functionality within the application"}),"\n",(0,t.jsx)(n.p,{children:"Out-of-the-box, .NET Aspire integrations include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data storage: PostgreSQL, SQL Database, Azure Cosmos DB, and MongoDB."}),"\n",(0,t.jsx)(n.li,{children:"Caching: Redis."}),"\n",(0,t.jsx)(n.li,{children:"Messaging: RabbitMQ and Azure Service Bus."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note the term 'components' used in .NET Aspire 8.0 was renamed 'integrations' for .NET Aspire 9.0."}),"\n",(0,t.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsx)(n.p,{children:".NET Aspire focuses on development rather than production environments."}),"\n",(0,t.jsx)(n.p,{children:"It generates a manifest that empowers tool builders to create deployment tooling for diverse platforms."}),"\n",(0,t.jsx)(n.p,{children:"Currently, .NET Aspire supports deployment to Azure Container Apps via the Azure Developer CLI."}),"\n",(0,t.jsx)(n.p,{children:"Support for additional deployment environments will expand progressively over time."}),"\n",(0,t.jsx)(n.p,{children:"The telemetry should be switched to target something more robust than the developer dashboard,  such as Application Insights in Azure Monitor."}),"\n",(0,t.jsx)(n.h2,{id:"tooling",children:"Tooling"}),"\n",(0,t.jsx)(n.p,{children:".NET Aspire enhances developer tooling in Visual Studio 2022 / Visual Studio Code."}),"\n",(0,t.jsx)(n.p,{children:"New project templates allow quick creation of .NET Aspire solutions through a wizard. Additional menu items enable easy integration of .NET Aspire components, project registration for .NET Aspire orchestrator support, and other essential tasks"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8050:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/dotnet-aspire-dc6a10a9c7c6475423e7976eaaa2ffb0.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);