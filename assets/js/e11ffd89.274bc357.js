"use strict";(self.webpackChunklab_dotnet_aspire=self.webpackChunklab_dotnet_aspire||[]).push([[503],{1560:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp7-d1da34b7f06a40042ee238afd111ab38.png"},1846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(4848),i=t(8453);const a={sidebar_label:"Task 4 - Integrations",slug:"/integrations"},c="Task 4 - Integrations",r={id:"integrations",title:"Task 4 - Integrations",description:"Intro",source:"@site/docs/07-integrations.md",sourceDirName:".",slug:"/integrations",permalink:"/lab-dotnet-aspire/integrations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Task 4 - Integrations",slug:"/integrations"},sidebar:"tutorialSidebar",previous:{title:"Task 3 - App Host",permalink:"/lab-dotnet-aspire/apphost"},next:{title:"Task 5 - Deployment",permalink:"/lab-dotnet-aspire/deployment"}},o={},d=[{value:"Intro",id:"intro",level:2},{value:"Redis Integration",id:"redis-integration",level:2},{value:"Add code to application",id:"add-code-to-application",level:2},{value:"Test output caching",id:"test-output-caching",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"task-4---integrations",children:"Task 4 - Integrations"})}),"\n",(0,s.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,s.jsx)(n.p,{children:"Microservices commonly require backing services to underpin their functionality.  Examples include:"}),"\n",(0,s.jsx)(n.p,{children:"Data storage: To persist data in structured or semi-structured stores.\nCaching: To maximize performance by storing data in a cache, allowing subsequent similar requests to be satisfied more quickly.\nMessaging: To ensure reliable communication under high network traffic or challenging conditions by persisting and distributing messages via data queues."}),"\n",(0,s.jsxs)(n.p,{children:["In this section we shall use ",(0,s.jsx)(n.a,{href:"https://redis.io/",children:"Redis"})," for Output Caching.   Redis is an open-source in-memory database used for caching enabling faster access to data."]}),"\n",(0,s.jsx)(n.p,{children:"The Redis functionality is deployed in a Container and so Docker Desktop needs to be installed."}),"\n",(0,s.jsx)(n.h2,{id:"redis-integration",children:"Redis Integration"}),"\n",(0,s.jsx)(n.p,{children:"To use .NET Aspire integrations, two Nuget packages need to be added to our solution.  The first is for orchestration and the second is to integrate with the functionality."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Right click on the ColorsAppHost project, to Add .NET Aspire package."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(4766).A+"",width:"1706",height:"922"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Select 'Aspire.Hosting.Redis' , select [Install] and accept the subsequent dialog boxes."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(2117).A+"",width:"1706",height:"922"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Right click on the ColorsAPI project, to Add .NET Aspire package."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(3020).A+"",width:"1706",height:"922"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Select 'Aspire.StackExchange.Redis.OutputCaching', select [Install] and accept the subsequent dialog boxes."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(3187).A+"",width:"1706",height:"922"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check both Nuget packages are now in the dependencies."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(5610).A+"",width:"1706",height:"922"})}),"\n",(0,s.jsx)(n.h2,{id:"add-code-to-application",children:"Add code to application"}),"\n",(0,s.jsx)(n.p,{children:"Let's add the code to include Redis in the orchestration and to inject a reference to Redis into the API application."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Amend the 'Program.cs' file to the following:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C#",children:'using Projects;\n\nvar builder = DistributedApplication.CreateBuilder(args);\n\nvar outputcache = builder.AddRedis("outputcache");\n\nvar colorsapi = builder.AddProject<ColorsAPI>("colorsapi")\n    .WithReference(outputcache);\n\nvar colorsweb = builder.AddProject<ColorsWeb>("colorsweb")\n    .WithReference(colorsapi)\n    .WithExternalHttpEndpoints();\n\nbuilder.Build().Run();\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(5777).A+"",width:"1706",height:"922"})}),"\n",(0,s.jsx)(n.p,{children:"Next amend the API application to use output caching."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["After ",(0,s.jsx)(n.code,{children:"builder.AddServiceDefaults"})," add:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:'builder.AddRedisOutputCache("outputcache");\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Before ",(0,s.jsx)(n.code,{children:"app.MapDefaultEndpoints();"})," add:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:"app.UseOutputCache();\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Append after ",(0,s.jsx)(n.code,{children:"app.MapGet"})," for the Random Color route to include:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c#",children:".CacheOutput(policy =>\n        {\n            policy.Expire(TimeSpan.FromSeconds(10));\n        }\n    );\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(1560).A+"",width:"1706",height:"1392"})}),"\n",(0,s.jsx)(n.h2,{id:"test-output-caching",children:"Test output caching"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run the solution (make sure Docker Desktop is running)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We can see the Developer Dashboard now includes the outputcache Container in the list of resources"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(3823).A+"",width:"1530",height:"815"})}),"\n",(0,s.jsx)(n.p,{children:"Also can see the outputcache is running in Docker Desktop."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(3846).A+"",width:"1270",height:"720"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click on the Web application endpoint"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the button to call  the API"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Notice that the color doesn't change for at least 10 seconds due to the caching."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Always a chance that the next random color is the same as the previous color."}),"\n",(0,s.jsx)(n.li,{children:"There is a clock in the bottom left hand corner of the web page to help gauge 10 seconds."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"In this section have added output caching using the Redis backing service for our application."}),"\n",(0,s.jsx)(n.p,{children:"Our application is now complete and ready to deploy."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2117:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp2-488dd0651e0f8cfa3d88f93478e1b0c9.png"},3020:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp3-cebffd974940d542cb25a435f4731af5.png"},3187:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp4-c396e68451ccb05499832cc1ba6fe9cd.png"},3823:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp8-0bcb5ba044c41872986ecb43f5d35ea9.png"},3846:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp9-fa798f8d5165f0c6c94829c20154fab6.png"},4766:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp1-e4ead6d04803029a9c840fbba82de0f4.png"},5610:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp5-f6c098a0db28cf24da4525aaf6be1f9d.png"},5777:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/task4comp6-79d1d73d30b55e56e05a1dbea3e5cbb4.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(6540);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);