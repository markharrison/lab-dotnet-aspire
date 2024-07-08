"use strict";(self.webpackChunklab_dotnet_aspire=self.webpackChunklab_dotnet_aspire||[]).push([[875],{2167:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=s(4848),i=s(8453);const o={sidebar_label:"Task 3 - App Host",slug:"/apphost"},a="Task 3 - App Host",r={id:"apphost",title:"Task 3 - App Host",description:"Intro",source:"@site/docs/06-apphost.md",sourceDirName:".",slug:"/apphost",permalink:"/lab-dotnet-aspire/apphost",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Task 3 - App Host",slug:"/apphost"},sidebar:"tutorialSidebar",previous:{title:"Task 2 - Service Defaults",permalink:"/lab-dotnet-aspire/servicedefaults"},next:{title:"Task 4 - Components",permalink:"/lab-dotnet-aspire/components"}},l={},c=[{value:"Intro",id:"intro",level:2},{value:"AppHost project",id:"apphost-project",level:2},{value:"Explore the code",id:"explore-the-code",level:2},{value:"Add code to application",id:"add-code-to-application",level:2},{value:"Test service discovery",id:"test-service-discovery",level:2},{value:"Observability with the Developer Dashboard",id:"observability-with-the-developer-dashboard",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"task-3---app-host",children:"Task 3 - App Host"}),"\n",(0,n.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsx)(t.p,{children:"Microservices, with their loosely coupled nature, increase the flexibility of your deployed app but can complicate configuration."}),"\n",(0,n.jsx)(t.p,{children:".NET Aspire provides orchestration functionality to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Define .NET projects, containers, executables, and cloud resources that make up the application."}),"\n",(0,n.jsx)(t.li,{children:"Enable service discovery by injecting endpoints and connection strings into the microservices."}),"\n",(0,n.jsx)(t.li,{children:"A .NET Aspire solution includes a special project called 'App Host'. This project is responsible for starting all the components that make up the application and injecting any necessary configurations and dependencies into those components."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"apphost-project",children:"AppHost project"}),"\n",(0,n.jsx)(t.p,{children:"We first need to include a special project called 'AppHost'.  This project is responsible for starting all the components that make up the application and injecting any necessary configurations and dependencies into those components."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Select the Solution, Right Click and [Add Project]"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(9949).A+"",width:"1706",height:"1035"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Filter the options by entering 'Aspire'.  Select the '.NET Aspire App Host' project."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(6182).A+"",width:"1706",height:"1035"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Enter a project name :  ColorsAppHost"}),"\n",(0,n.jsx)(t.li,{children:"All other options should take the defaults.  Select [Next] &  [Create]."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The fourth project will now be created and visible in the Solution Explorer."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(1279).A+"",width:"1706",height:"1035"})}),"\n",(0,n.jsx)(t.h2,{id:"explore-the-code",children:"Explore the code"}),"\n",(0,n.jsx)(t.p,{children:"In the AppHost project, the file 'Program.cs' contains the functionality to provide orchestration. Currently, it won't be doing anything ."}),"\n",(0,n.jsx)(t.p,{children:"So, let's add functionality to define the projects that need to be started."}),"\n",(0,n.jsx)(t.h2,{id:"add-code-to-application",children:"Add code to application"}),"\n",(0,n.jsx)(t.p,{children:"Add the code to define what projects are to be started."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Amend the 'Program.cs' file to:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C#",children:'using Projects;\n\nvar builder = DistributedApplication.CreateBuilder(args);\n\nvar colorsapi = builder.AddProject<ColorsAPI>("colorsapi");\n\nvar colorsweb = builder.AddProject<ColorsWeb>("colorsweb")\n    .WithReference(colorsapi)\n    .WithExternalHttpEndpoints();\n\nbuilder.Build().Run();\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(9056).A+"",width:"1706",height:"651"})}),"\n",(0,n.jsx)(t.p,{children:"Things to note:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the API application is created before the Web application."}),"\n",(0,n.jsxs)(t.li,{children:["using ",(0,n.jsx)(t.code,{children:"WithReference()"})," a reference to the the API application is injected into the Web application.  This is used for service discovery - so the Web application can find the API application - and we no longer need to specify the address in configuration."]}),"\n",(0,n.jsxs)(t.li,{children:["using ",(0,n.jsx)(t.code,{children:"WithExternalHttpEndpoints()"})," specifies that the Web application must have external endpoints.  This is needed later when we deploy to an Azure Container Apps environment."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We need to do another tweak to enable the service discovery to work."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"In the Web application, change the variable storing the API URL as follows"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'var colorsAPIUrl = "https+http://colorsapi/colors/random";  \n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(1161).A+"",width:"1706",height:"651"})}),"\n",(0,n.jsx)(t.p,{children:"Things to note:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the 'https+http' means first try https protocol, if that doesn't work, then fall back to http."}),"\n",(0,n.jsx)(t.li,{children:"the 'colorsapi' domain name is the same identifier that was used in the AppHost Orchestration."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"test-service-discovery",children:"Test service discovery"}),"\n",(0,n.jsx)(t.p,{children:"Amend the solution startup so that the ColorsAppHost is the startup project."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(7154).A+"",width:"1706",height:"937"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Run the solution - and notice this time things are different.  What we see is the .NET Aspire Developer Dashboard."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(4459).A+"",width:"1877",height:"711"})}),"\n",(0,n.jsx)(t.p,{children:"The first screen on the Developer Dashboard shows the Solution resources - namely the Projects colorsweb and colorsapi, along with their endpoints."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Click on the endpoint for colorweb."}),"\n",(0,n.jsx)(t.li,{children:"Check the application still works and the API is being called successfully.  This confirms our service discovery is working correctly."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"observability-with-the-developer-dashboard",children:"Observability with the Developer Dashboard"}),"\n",(0,n.jsx)(t.p,{children:"In the previous section we enabled Observability using OpenTelemetry.  By default, the telemetry is being routed to the Developer Dashboard."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Explore the Developer Dashboard.   Look at the logs, traces and metrics."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(4156).A+"",width:"1877",height:"754"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(8021).A+"",width:"1877",height:"754"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(3641).A+"",width:"1877",height:"754"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(9440).A+"",width:"1877",height:"754"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(651).A+"",width:"1877",height:"754"})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"In this section we have added Orchestration and Service Discovery into our application."}),"\n",(0,n.jsx)(t.p,{children:"We also showed the Developer Dashboard and the observability that we implemented in the previous section."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9949:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost1-af6e592423808675417d394e2246f373.png"},3641:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost10-a2ee42243751848000b5ab44c33461ec.png"},9440:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost11-53d99a75d7281a9eee8bcbc120d7ec95.png"},651:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost12-fee903ee107ed0ac719f3f6ac02f5fb2.png"},6182:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost2-415701918f9b23eec1a41d8fce622cb8.png"},1279:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost3-98109743d8c681d3e231010da026f7f4.png"},9056:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost4-30972bd1f00be94cb816407da8ef62c1.png"},1161:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost5-30a88b870db8d29678e094a02acee09e.png"},7154:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost6-7602c2e80e5b0af7e3d96d31117c9e95.png"},4459:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost7-d2d748bdbdbd3000a44504ecb0a25a5b.png"},4156:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost8-3b88ca97e1d56a31f2cf081fe2a39bcf.png"},8021:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/task3apphost9-398b1bb681df56abbca7587d57872eee.png"},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(6540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);