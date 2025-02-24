"use strict";(self.webpackChunklab_dotnet_aspire=self.webpackChunklab_dotnet_aspire||[]).push([[123],{159:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults6-cc8f183e6dd5bdf97322c183e1ad82b4.png"},2128:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults1-133365463e4326d9587adbfb9010a626.png"},3034:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=i(4848),s=i(8453);const a={sidebar_label:"Task 2 - Service Defaults",slug:"/servicedefaults"},l="Task 2 - Service Defaults",c={id:"servicedefaults",title:"Task 2 - Service Defaults",description:"Intro",source:"@site/docs/05-servicedefaults.md",sourceDirName:".",slug:"/servicedefaults",permalink:"/lab-dotnet-aspire/servicedefaults",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Task 2 - Service Defaults",slug:"/servicedefaults"},sidebar:"tutorialSidebar",previous:{title:"Task 1 - Getting Started",permalink:"/lab-dotnet-aspire/getstarted"},next:{title:"Task 3 - App Host",permalink:"/lab-dotnet-aspire/apphost"}},r={},d=[{value:"Intro",id:"intro",level:2},{value:"ServiceDefaults project",id:"servicedefaults-project",level:2},{value:"Explore the code",id:"explore-the-code",level:2},{value:"Add code to application",id:"add-code-to-application",level:2},{value:"Test resiliency",id:"test-resiliency",level:2},{value:"Test health checks",id:"test-health-checks",level:2},{value:"Summary",id:"summary",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"task-2---service-defaults",children:"Task 2 - Service Defaults"})}),"\n",(0,n.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsx)(t.p,{children:".NET Aspire helps with the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Observability: Monitor and analyze telemetry to understand the health and performance of an application and its components. It uses ",(0,n.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"}),", a cross-platform, open standard for collecting and emitting telemetry data."]}),"\n",(0,n.jsx)(t.li,{children:"Resiliency: Ensure the ability of an app to recover from transient failures and continue functioning."}),"\n",(0,n.jsx)(t.li,{children:"Health Checks: Probe an application to determine if its components are live and healthy.  They are useful for catching anomalies and problems early, helping to ensure application stability."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Let's add this to our code."}),"\n",(0,n.jsx)(t.h2,{id:"servicedefaults-project",children:"ServiceDefaults project"}),"\n",(0,n.jsx)(t.p,{children:"We first need to include a special project called 'ServiceDefaults'. This project contains code that implements the 'Smart Defaults' functionality and can be shared across various components of the application."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Select the Solution, Right Click and [Add Project]"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(2128).A+"",width:"1706",height:"1077"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Filter the options by entering 'Aspire'.  Select the '.NET Aspire Service Defaults' project."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(9691).A+"",width:"1706",height:"1077"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Enter a project name :  ColorsServiceDefaults"}),"\n",(0,n.jsx)(t.li,{children:"All other options should take the defaults.  Select [Next] &  [Create]."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The third project will now be created and visible in the Solution Explorer."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(8146).A+"",width:"1706",height:"1077"})}),"\n",(0,n.jsx)(t.h2,{id:"explore-the-code",children:"Explore the code"}),"\n",(0,n.jsx)(t.p,{children:"In the ServiceDefaults project, the file 'Extensions.cs' contains the functionality to add Observability, Resiliency and Health Checks.  It includes Smart Defaults options which can be expanded / amended if required."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Inspect and understand the code provided in 'Extensions.cs' ."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Note that .NET Aspire is just using standard .NET functionality but it just makes it easier to get started"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The Observability functionality uses .NET functionality - AddOpenTelemetry()"}),"\n",(0,n.jsx)(t.li,{children:"The Resiliency functionality uses the .NET functionality - AddStandardResilienceHandler()"}),"\n",(0,n.jsx)(t.li,{children:"The Health Checks functionality uses the .NET functionality - AddHealthChecks()"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(8125).A+"",width:"1706",height:"1349"})}),"\n",(0,n.jsx)(t.p,{children:"The file 'Extensions.cs' includes two functions called:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"AddServiceDefaults()"}),"\n",(0,n.jsx)(t.li,{children:"MapDefaultEndpoints();"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We can pull this functionality into our applications by using these two functions."}),"\n",(0,n.jsx)(t.h2,{id:"add-code-to-application",children:"Add code to application"}),"\n",(0,n.jsx)(t.p,{children:"So lets add Observability / Resiliency / Health Checks to our application."}),"\n",(0,n.jsx)(t.p,{children:"In the Web application add the following lines of code in 'program.cs'."}),"\n",(0,n.jsxs)(t.p,{children:["Add ",(0,n.jsx)(t.code,{children:"builder.AddServiceDefaults();"})," immediately after ",(0,n.jsx)(t.code,{children:"var builder = WebApplication.CreateBuilder(args);"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Add ",(0,n.jsx)(t.code,{children:"app.MapDefaultEndpoints();"})," immediately before ",(0,n.jsx)(t.code,{children:"app.MapRazorPages();"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(4884).A+"",width:"1706",height:"1107"})}),"\n",(0,n.jsx)(t.p,{children:"In the API application add the following lines of code in 'program.cs'."}),"\n",(0,n.jsxs)(t.p,{children:["Add ",(0,n.jsx)(t.code,{children:"builder.AddServiceDefaults();"})," immediately after ",(0,n.jsx)(t.code,{children:"var builder = WebApplication.CreateBuilder(args);"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Add ",(0,n.jsx)(t.code,{children:"app.MapDefaultEndpoints();"})," immediatley before the first ",(0,n.jsx)(t.code,{children:"app.MapGet();"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"We want to test resiliency.  The code includes some logic to throw an Exception if the color Orange is to be returned.\nSimplify the list of colors and include Orange:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c#",children:'new ColorsItem { Name = "Orange", Hexcode = "#FFAF00" }\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(159).A+"",width:"1706",height:"1392"})}),"\n",(0,n.jsx)(t.h2,{id:"test-resiliency",children:"Test resiliency"}),"\n",(0,n.jsx)(t.p,{children:"Lets now test the application and see what happens when Orange causes the API application to throw an Exception and fail to respond to the Web application with a color."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Run the Application"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Click the button in the Web Application and see the circle light up with the returned color.  Keep clicking and see that no errors occur."}),"\n",(0,n.jsx)(t.p,{children:'Notice on the Log that occasionally the Exception is thrown with the message "We do not like orange".  But also notice that the web application doesn\'t break - transparently to the user, it retries again to call the API to get the color to display.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(6358).A+"",width:"1280",height:"495"})}),"\n",(0,n.jsx)(t.h2,{id:"test-health-checks",children:"Test health checks"}),"\n",(0,n.jsx)(t.p,{children:"Lets now test the application and check the health checks are working."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For both the Web Application and API application browse to the URL ",(0,n.jsx)(t.code,{children:"http://[address]/health"})," or ",(0,n.jsx)(t.code,{children:"http://[address]/alive"}),".  Should see the 'Healthy' response message."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(5137).A+"",width:"1280",height:"304"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(3096).A+"",width:"1280",height:"304"})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"In this section have added Observability, Resiliency and Health Checks into our application."}),"\n",(0,n.jsx)(t.p,{children:"Observability using OpenTelemetry will be shown later in the lab - using both the .NET Aspire dashboard and Azure Monitor /Application Insights."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},3096:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults9-7eae545cba8e5d943af9e0e2bb1c5de1.png"},4884:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults5-81c9d52c9f263c08b9f89599129cb705.png"},5137:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults8-f1a3e27a65a7f8e12a5c097fe7e226a3.png"},6358:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults7-935d7f022a143fec1a8d74026b9dba17.png"},8125:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults4-f87c49effcc0e2bf640fefd718c2b2cb.png"},8146:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults3-74ec6df67029efbffab426711f87d023.png"},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>c});var n=i(6540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}},9691:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/task2servicedefaults2-5f42bee22759ee4491a398324d95376c.png"}}]);