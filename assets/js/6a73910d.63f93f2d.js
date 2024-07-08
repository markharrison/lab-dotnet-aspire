"use strict";(self.webpackChunklab_dotnet_aspire=self.webpackChunklab_dotnet_aspire||[]).push([[156],{1223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);const o={sidebar_label:"Task 1 - Getting Started",slug:"/getstarted"},a="Task 1 - Getting Started",l={id:"getstarted",title:"Task 1 - Getting Started",description:"Prerequisites",source:"@site/docs/04-getstarted.md",sourceDirName:".",slug:"/getstarted",permalink:"/lab-dotnet-aspire/getstarted",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Task 1 - Getting Started",slug:"/getstarted"},sidebar:"tutorialSidebar",previous:{title:"What is .NET Aspire?",permalink:"/lab-dotnet-aspire/what"},next:{title:"Task 2 - Service Defaults",permalink:"/lab-dotnet-aspire/servicedefaults"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download the Lab Starter Solution",id:"download-the-lab-starter-solution",level:2},{value:"Open the Lab Starter Solution",id:"open-the-lab-starter-solution",level:2},{value:"Run the Lab Starter Solution",id:"run-the-lab-starter-solution",level:2},{value:"API Application",id:"api-application",level:3},{value:"Web Application",id:"web-application",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"task-1---getting-started",children:"Task 1 - Getting Started"}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:".NET Aspire requires .NET 8.0, and the lab screenshots show the use of Visual Studio 2022. The tooling is also available for Visual Studio Code, and you should be able to achieve similar results using this alternative editor/development environment."}),"\n",(0,s.jsx)(t.p,{children:"Some of the later lab functionality uses containers, and for those parts, Docker Desktop or similar needs to be installed."}),"\n",(0,s.jsx)(t.p,{children:"To deploy our application, an Azure subscription is required, and the Azure Developer CLI will need to be installed."}),"\n",(0,s.jsx)(t.p,{children:"To install the .NET Aspire workload, execute the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-powershell",children:"dotnet workload update\ndotnet workload install aspire\ndotnet workload list\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(9784).A+"",width:"1707",height:"723"})}),"\n",(0,s.jsx)(t.h2,{id:"download-the-lab-starter-solution",children:"Download the Lab Starter Solution"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Download the following GitHub repo from ",(0,s.jsx)(t.a,{href:"https://github.com/markharrison/AspireColorsLab",children:"https://github.com/markharrison/AspireColorsLab"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-powershell",children:"git clone https://github.com/markharrison/AspireColorsLab\ncd AspireColorsLab/AspireColorsSolution1\ndir\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(5948).A+"",width:"1280",height:"666"})}),"\n",(0,s.jsx)(t.p,{children:"This repository includes a number of solutions - one for each stage in the lab. The lab starter solution is in the folder AspireColorsSolution1. If you follow the lab, you shouldn't need the other solutions, but they may be useful to refer to."}),"\n",(0,s.jsx)(t.h2,{id:"open-the-lab-starter-solution",children:"Open the Lab Starter Solution"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Open the solution file - it contains two projects:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"ColorsAPI ... API application for managing colors."}),"\n",(0,s.jsx)(t.li,{children:"ColorsWeb ... Web application for displaying a random color."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Right-click on a project and select the menu option [Configure Startup Projects]. Set both projects to 'Start'."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(9201).A+"",width:"1706",height:"820"})}),"\n",(0,s.jsx)(t.p,{children:"Inspect the code to see how the application works. Thanks to GitHub Copilot, the application was easy to create and took about 30 minutes to develop."}),"\n",(0,s.jsx)(t.h2,{id:"run-the-lab-starter-solution",children:"Run the Lab Starter Solution"}),"\n",(0,s.jsx)(t.h3,{id:"api-application",children:"API Application"}),"\n",(0,s.jsx)(t.p,{children:"The API application contains three operations :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Get all colors."}),"\n",(0,s.jsx)(t.li,{children:"Insert a new color."}),"\n",(0,s.jsx)(t.li,{children:"Get a random color."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"It also provides a Swagger UI which documents the API operations and allows a user to test them out."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Use the Swagger UI explore the API functionality."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(2379).A+"",width:"1707",height:"1374"})}),"\n",(0,s.jsx)(t.h3,{id:"web-application",children:"Web Application"}),"\n",(0,s.jsx)(t.p,{children:"The Web application displays a colored circle and a button - the click handler on the button will call the API application to get a random color which is then used to light up the circle with the assigned color."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(8612).A+"",width:"1707",height:"558"})}),"\n",(0,s.jsx)(t.p,{children:"For the Web App to connect to the API App - we need to amend the configuration in appsettings.json (for the Web App)."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Using the Swagger UI, Get the URL of the API operation for 'Get a Random Color' ... in the example screenshot above - the URL is ",(0,s.jsx)(t.a,{href:"https://localhost:7167/colors/random",children:"https://localhost:7167/colors/random"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Amend the ",(0,s.jsx)(t.code,{children:"ColorsAPIUrl"})," item in the appsettings.json file to point to the correct URL."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(8122).A+"",width:"1706",height:"702"})}),"\n",(0,s.jsx)(t.p,{children:"Clicking the button will now call the API and display the returned color."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(3103).A+"",width:"1707",height:"558"})}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"In this section we have set up our core Web/API applicaton ... lets now make it better using .NET Aspire."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2379:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/task1api-389eebc9d3ef71917d313eef8cce3260.png"},5948:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/task1gitclone-85acd56647e3b62bbbe8cb7720b3b2ae.png"},9201:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/task1vs1-18177bf13d470c692c4f8a5d418999fe.png"},8122:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/task1vs2-c9a21ddc43388a663b6e795b8c83dccd.png"},8612:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/task1web1-82ae26bdca195edd0bf4cae4bbf0fa5b.png"},3103:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/task1web2-ef1e5e0aa7073b32732131ff57f760fc.png"},9784:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/task1workload-e5c40c2baaa2436334b5029c5c77730c.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);