"use strict";(self.webpackChunklab_dotnet_aspire=self.webpackChunklab_dotnet_aspire||[]).push([[175],{1045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(4848),s=t(8453);const a={sidebar_label:"Task 5 - Deployment",slug:"/deployment"},l="Task 5 - Deployment",r={id:"deployment",title:"Task 5 - Deployment",description:"Intro",source:"@site/docs/08-deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/lab-dotnet-aspire/deployment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Task 5 - Deployment",slug:"/deployment"},sidebar:"tutorialSidebar",previous:{title:"Task 4 - Components",permalink:"/lab-dotnet-aspire/components"},next:{title:"Links",permalink:"/lab-dotnet-aspire/Links"}},o={},c=[{value:"Intro",id:"intro",level:2},{value:"Deploy to Azure Container Apps",id:"deploy-to-azure-container-apps",level:2},{value:"Logon to Azure",id:"logon-to-azure",level:3},{value:"Intialize the application",id:"intialize-the-application",level:3},{value:"Provision the infrastructure",id:"provision-the-infrastructure",level:3},{value:"Deploy the application",id:"deploy-the-application",level:3},{value:"Run the application",id:"run-the-application",level:3},{value:"Use Azure Monitor / Application Insights",id:"use-azure-monitor--application-insights",level:2},{value:"Create Application Insights Instance",id:"create-application-insights-instance",level:3},{value:"Update Orchestration",id:"update-orchestration",level:3},{value:"Update Service Defaults telemetry",id:"update-service-defaults-telemetry",level:3},{value:"Redeploy the application",id:"redeploy-the-application",level:3},{value:"Rerun the application",id:"rerun-the-application",level:3},{value:"Examine Application Insights",id:"examine-application-insights",level:3},{value:"Deployment Manifest",id:"deployment-manifest",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"task-5---deployment",children:"Task 5 - Deployment"}),"\n",(0,i.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,i.jsx)(n.p,{children:"Currently, .NET Aspire only supports deployment to Azure Container Apps.  This is what we will use in this section."}),"\n",(0,i.jsx)(n.h2,{id:"deploy-to-azure-container-apps",children:"Deploy to Azure Container Apps"}),"\n",(0,i.jsxs)(n.p,{children:["To deploy our application to Azure Container Apps we shall use the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/developer/azure-developer-cli/overview",children:"Azure Developer CLI"})," which is an open-source tool that makes it easy to get an application from a local development environment to Azure. If AZD is not installed, use WinGet as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"winget install Microsoft.Azd\n"})}),"\n",(0,i.jsx)(n.h3,{id:"logon-to-azure",children:"Logon to Azure"}),"\n",(0,i.jsx)(n.p,{children:"Enter the following. This will fire up a browser instance to authenticate with Azure credentials."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"azd auth login \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(7546).A+"",width:"1280",height:"210"})}),"\n",(0,i.jsx)(n.h3,{id:"intialize-the-application",children:"Intialize the application"}),"\n",(0,i.jsx)(n.p,{children:"Enter the following. AZD will scan the application and detect that it is a .NET Aspire application.  It will ask for an environment name that will be used for the Resource Group in Azure."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"azd init\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(9123).A+"",width:"1115",height:"628"})}),"\n",(0,i.jsx)(n.p,{children:"Check out the files generated: 'azure.yaml' and 'next-steps.md'.  The first is used by AZD and the second is some documentation on how to use AZD."}),"\n",(0,i.jsx)(n.h3,{id:"provision-the-infrastructure",children:"Provision the infrastructure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter the following.  This will create various Azure resources including Azure Container Apps environment."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"azd provision\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(8956).A+"",width:"1115",height:"628"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm the resources are created by checking in the Azure Management Portal."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(1845).A+"",width:"1280",height:"903"})}),"\n",(0,i.jsx)(n.h3,{id:"deploy-the-application",children:"Deploy the application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter the following.  This will build containers in the Azure Container Registry and deploy the containers to the Azure Container Apps environment."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"azd deploy\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(9742).A+"",width:"1115",height:"438"})}),"\n",(0,i.jsx)(n.p,{children:"We can confirm the additional resources were created by checking in the Azure Management Portal."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(7431).A+"",width:"1280",height:"957"})}),"\n",(0,i.jsx)(n.h3,{id:"run-the-application",children:"Run the application"}),"\n",(0,i.jsxs)(n.p,{children:["Access the Web application endpoint using the information returned from AZD.  In the above screenshot - it is at ",(0,i.jsx)(n.a,{href:"https://colorsweb.graymoss-1a2bc377.westeurope.azurecontainerapps.io/",children:"https://colorsweb.graymoss-1a2bc377.westeurope.azurecontainerapps.io/"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm that the application still works and the API is being called successfully."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(3808).A+"",width:"1280",height:"521"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Confirm the Developer Dashboard is available - it will need authentication to access."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A link to the Developer Dashboard is on the Overview screen of the Azure Container Apps Environment."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(4985).A+"",width:"1706",height:"795"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(6757).A+"",width:"1706",height:"517"})}),"\n",(0,i.jsx)(n.p,{children:"The Developer Dashboard is not intended for production use; let's now switch to something more suitable, namely Azure Monitor / Application Insights."}),"\n",(0,i.jsx)(n.h2,{id:"use-azure-monitor--application-insights",children:"Use Azure Monitor / Application Insights"}),"\n",(0,i.jsx)(n.h3,{id:"create-application-insights-instance",children:"Create Application Insights Instance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create an Application Insights instance."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(220).A+"",width:"1706",height:"815"})}),"\n",(0,i.jsx)(n.p,{children:"Use the existing Log Analytics Workspace that was created."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(1975).A+"",width:"1706",height:"815"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(2750).A+"",width:"1706",height:"815"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get the Application Insights 'connection string' from the overview page"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(465).A+"",width:"1706",height:"815"})}),"\n",(0,i.jsx)(n.h3,{id:"update-orchestration",children:"Update Orchestration"}),"\n",(0,i.jsx)(n.p,{children:"We need to inject the Application Insights 'connection string' into the configuration."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Amend the 'program.cs' in ColorsAppHost to the following and make sure the 'connection string' is assigned to variable ",(0,i.jsx)(n.code,{children:"appinsights"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c#",children:'using Projects;\n\nvar appinsights = "***insert connection string here***";\n\nvar builder = DistributedApplication.CreateBuilder(args);\n\nvar outputcache = builder.AddRedis("outputcache");\n\nvar colorsapi = builder.AddProject<ColorsAPI>("colorsapi")\n    .WithEnvironment("APPLICATIONINSIGHTS_CONNECTION_STRING", appinsights)\n    .WithReference(outputcache);\n\nvar colorsweb = builder.AddProject<ColorsWeb>("colorsweb")\n    .WithEnvironment("APPLICATIONINSIGHTS_CONNECTION_STRING", appinsights)\n    .WithReference(colorsapi)\n    .WithExternalHttpEndpoints();\n\nbuilder.Build().Run();\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(9336).A+"",width:"1706",height:"995"})}),"\n",(0,i.jsx)(n.h3,{id:"update-service-defaults-telemetry",children:"Update Service Defaults telemetry"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ServiceDefaults project - find the ",(0,i.jsx)(n.code,{children:"AddOpenTelemetryExporters"})," function."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Uncomment the lines that enable the Azure Monitor exporter"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c#",children:'    if (!string.IsNullOrEmpty(builder.Configuration["APPLICATIONINSIGHTS_CONNECTION_STRING"]))\n    {\n        builder.Services.AddOpenTelemetry()\n            .UseAzureMonitor();\n    }\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(5091).A+"",width:"1706",height:"995"})}),"\n",(0,i.jsx)(n.p,{children:"Need to add the Nuget package 'Azure.Monitor.OpenTelemetry.AspNetCore'."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Right click on the ColorsServiceDefaults project and select [Manage Nuget Packages]"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(9882).A+"",width:"1706",height:"995"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Select 'Azure.Monitor.OpenTelemetry.AspNetCore', select [Install] and accept the subsequent dialog boxes."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(6477).A+"",width:"1706",height:"995"})}),"\n",(0,i.jsx)(n.p,{children:"Our application has now been updated to use Application Insights"}),"\n",(0,i.jsx)(n.p,{children:"Ensure Orange is listed as a color in the API's list of colors - we want to be able to see Exceptions logged to Application Insights."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c#",children:'    new ColorsItem { Name = "Orange", Hexcode = "#FFAF00" }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"redeploy-the-application",children:"Redeploy the application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Redeploy the application, enter the following"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"azd deploy\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(9796).A+"",width:"1267",height:"476"})}),"\n",(0,i.jsx)(n.h3,{id:"rerun-the-application",children:"Rerun the application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the application, browse to the Web Application endpoint."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the button a few times to generate data being sent to Application Insights."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Keep clicking until an Exception occurs - we can see that in the log."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(8096).A+"",width:"1706",height:"742"})}),"\n",(0,i.jsx)(n.h3,{id:"examine-application-insights",children:"Examine Application Insights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Browse around the Application Insight to see the telemetry generated:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(2921).A+"",width:"1706",height:"824"})}),"\n",(0,i.jsx)(n.p,{children:"Application Map:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(7778).A+"",width:"1706",height:"948"})}),"\n",(0,i.jsx)(n.p,{children:"Look at failures - the Exception that occurs when Orange is generated:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(6779).A+"",width:"1706",height:"948"})}),"\n",(0,i.jsx)(n.p,{children:"Transaction search:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(6836).A+"",width:"1706",height:"948"})}),"\n",(0,i.jsx)(n.p,{children:"End to End transaction details:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(9341).A+"",width:"1706",height:"948"})}),"\n",(0,i.jsx)(n.h2,{id:"deployment-manifest",children:"Deployment Manifest"}),"\n",(0,i.jsx)(n.p,{children:"What about targeting production environments other than Azure Container Apps?"}),"\n",(0,i.jsx)(n.p,{children:".NET Aspire can generate a manifest that empowers tool builders to create deployment tooling.  Support for other deployment environments will expand progressively over time."}),"\n",(0,i.jsx)(n.p,{children:"Manifest generation is achieved by running dotnet build with a special target:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Run the following:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:" dotnet run --project ColorsAppHost\\ColorsAppHost.csproj `\n    --publisher manifest `\n    --output-path ../aspire-manifest.json\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(8662).A+"",width:"1115",height:"438"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(6751).A+"",width:"1280",height:"1322"})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"In this section we deployed our Application to Azure and set up the telemetry to be sent to Application Insights."}),"\n",(0,i.jsx)(n.p,{children:"That concludes the lab."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6757:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment10-4c3dec7585ae7f1ce26738e9db0177e7.png"},220:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment11-afc43de894a37453e4c49d2d27883146.png"},1975:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment12-4742aa6e65dcdd99568a1ed58c54020c.png"},2750:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment13-a1818d3971c0503582f6c08c5fe351a4.png"},465:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment14-3439d3a5506e49ae724c216fd29de778.png"},9336:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment15-238d615c19f812511d5339464c2066e1.png"},5091:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment16-693fee114cc8814871eb8a5f6df4ebc8.png"},9882:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment17-e5f69e62f6eeb9022ddacdbc4a03d49e.png"},6477:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment18-cfb4970ee9020f13d0416672c8b1e79b.png"},9796:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment19-2cf507945df3c965c1be8a4070c678c2.png"},7546:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment2-86bcc0658d39f6d9a5466aef7513b1e8.png"},8096:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment20-af5c647c01102329d151da14f1e31543.png"},2921:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment21-7990bb48a800959ce3df488df28df83e.png"},7778:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment22-f700a69fb198734ccd3007f70a814d61.png"},6779:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment23-4fc8306e852ebfbac4485e9cc20688d5.png"},6836:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment24-ff1fb331eaede2f34bc9e2dc5f9cb927.png"},9341:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment25-927d219e7b02338a9992c7773c03c227.png"},8662:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment26-16a8792533c4b3b8afe2373cfbc1481e.png"},6751:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment27-744e2acce47ba2d9c9802bf5ce914556.png"},9123:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment3-7af88e82e2f9881db79b2683245f8305.png"},8956:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment4-6d95d2b4dd909c7ba97c4e19587c7a09.png"},1845:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment5-d1396790a6f7911189ca5d6a3db1e603.png"},9742:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment6-3437b9b075bc366623363235f9743ee3.png"},7431:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment7-0515b37c28096a1d554a1cabf21c6748.png"},3808:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment8-f04cde5df3af0851c56ea6dce8fdbc5a.png"},4985:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/task5deployment9-6d766671e2ae79e8f5ff735004a25938.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);