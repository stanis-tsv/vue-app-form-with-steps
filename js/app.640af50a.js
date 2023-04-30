(function(){"use strict";var e={719:function(e,a,n){var t=n(963),l=n(252);function o(e,a,n,t,o,s){const i=(0,l.up)("Page");return(0,l.wg)(),(0,l.j4)(i)}const s=e=>((0,l.dD)("data-v-19a03329"),e=e(),(0,l.Cn)(),e),i={class:"pageContainer"},r={class:"header"},c=s((()=>(0,l._)("h1",null,[(0,l.Uk)("Invite User "),(0,l._)("span",{class:"close"})],-1))),u={class:"stepper"};function p(e,a,n,t,o,s){const p=(0,l.up)("Stepper"),d=(0,l.up)("Step1"),m=(0,l.up)("Step2"),v=(0,l.up)("Step3");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("header",r,[c,(0,l._)("div",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.steps,(e=>((0,l.wg)(),(0,l.j4)(p,{key:e.title,steps:e},null,8,["steps"])))),128))])]),((0,l.wg)(),(0,l.j4)(l.Ob,null,[1===e.$store.state.step?((0,l.wg)(),(0,l.j4)(d,{key:0})):(0,l.kq)("",!0)],1024)),((0,l.wg)(),(0,l.j4)(l.Ob,null,[2===e.$store.state.step?((0,l.wg)(),(0,l.j4)(m,{key:0})):(0,l.kq)("",!0)],1024)),((0,l.wg)(),(0,l.j4)(l.Ob,null,[3===e.$store.state.step?((0,l.wg)(),(0,l.j4)(v,{key:0,onDisable:t.disable},null,8,["onDisable"])):(0,l.kq)("",!0)],1024))])}var d=n(577);const m={class:"steps"},v={key:0,class:"stepDone"},_={key:1,class:"stepNumber"};function b(e,a,n,t,o,s){return(0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",{class:(0,d.C_)(["step",{active:e.$store.state.step===n.steps.id}]),onClick:a[0]||(a[0]=e=>t.disableClick(n.steps.id))},[t.ifStep1Done(n.steps.id)||t.ifStep2Done(n.steps.id)||e.$store.state.step3Done?((0,l.wg)(),(0,l.iD)("span",v)):((0,l.wg)(),(0,l.iD)("span",_,(0,d.zw)(n.steps.id),1)),(0,l._)("h4",null,(0,d.zw)(n.steps.title),1)],2)])}var y=n(907),f={props:["steps"],setup(){const e=(0,y.oR)(),a=a=>{e.state.step3Done||e.commit("changeStep",a)};return{disableClick:a,ifStep1Done:a=>1===a&&e.state.step1Done,ifStep2Done:a=>2===a&&e.state.step2Done}}},h=n(744);const w=(0,h.Z)(f,[["render",b],["__scopeId","data-v-07306013"]]);var k=w;const g=e=>((0,l.dD)("data-v-50d9e0d4"),e=e(),(0,l.Cn)(),e),x={class:"container"},U={class:"form-control"},q=g((()=>(0,l._)("label",{for:"name"},"First Name",-1))),A={class:"form-control"},V=g((()=>(0,l._)("label",{for:"surname"},"Last Name",-1))),D={class:"form-control"},R=g((()=>(0,l._)("label",{for:"email"},"Email Address",-1))),S={class:"form-control"},L=g((()=>(0,l._)("label",{for:"phone"},"Phone Number",-1))),P={class:"form-control"},O=g((()=>(0,l._)("label",{for:"position"},"Position",-1))),C={class:"form-control"},I=g((()=>(0,l._)("label",{for:"companies"},"Avaliable in company",-1))),H=g((()=>(0,l._)("option",{value:"Precoro"},"Precoro",-1))),M=g((()=>(0,l._)("option",{value:"Google"},"Google",-1))),j=g((()=>(0,l._)("option",{value:"Microsoft"},"Microsoft",-1))),E=[H,M,j],B={class:"footer"},$={class:"form-control"},N=g((()=>(0,l._)("label",{for:"activeInAllCompanies"},[(0,l.Uk)("Active in all companies "),(0,l._)("span",{class:"info"})],-1))),F={class:"btn"},W={key:0,class:"danger"},Z=g((()=>(0,l._)("button",{type:"submit",class:"next"},null,-1)));function T(e,a,n,o,s,i){return(0,l.wg)(),(0,l.iD)("form",{id:"step1",onSubmit:a[7]||(a[7]=(0,t.iM)(((...e)=>o.next&&o.next(...e)),["prevent"]))},[(0,l._)("div",x,[(0,l._)("div",U,[q,(0,l.wy)((0,l._)("input",{type:"text",id:"name",name:"First Name","onUpdate:modelValue":a[0]||(a[0]=e=>o.name=e)},null,512),[[t.nr,o.name]])]),(0,l._)("div",A,[V,(0,l.wy)((0,l._)("input",{type:"text",id:"surname",name:"Last Name","onUpdate:modelValue":a[1]||(a[1]=e=>o.surname=e)},null,512),[[t.nr,o.surname]])]),(0,l._)("div",D,[R,(0,l.wy)((0,l._)("input",{type:"email",id:"email",name:"Email Address","onUpdate:modelValue":a[2]||(a[2]=e=>o.email=e)},null,512),[[t.nr,o.email]])]),(0,l._)("div",S,[L,(0,l.wy)((0,l._)("input",{type:"tel",id:"phone",name:"Phone Number","onUpdate:modelValue":a[3]||(a[3]=e=>o.phone=e)},null,512),[[t.nr,o.phone]])]),(0,l._)("div",P,[O,(0,l.wy)((0,l._)("input",{type:"text",id:"position",name:"Position","onUpdate:modelValue":a[4]||(a[4]=e=>o.position=e)},null,512),[[t.nr,o.position]])]),(0,l._)("div",C,[I,(0,l.wy)((0,l._)("select",{id:"companies",name:"Avaliable in company","onUpdate:modelValue":a[5]||(a[5]=e=>o.companies=e)},E,512),[[t.bM,o.companies]])])]),(0,l._)("footer",B,[(0,l._)("div",$,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"activeInAllCompanies",name:"Active In All Companies","onUpdate:modelValue":a[6]||(a[6]=e=>o.activeInAllCompanies=e)},null,512),[[t.e8,o.activeInAllCompanies]]),N]),(0,l._)("div",F,[o.required?((0,l.wg)(),(0,l.iD)("small",W,"All fields is required")):(0,l.kq)("",!0),Z])])],32)}var Y=n(262),z={setup(){const e=(0,y.oR)(),a=(0,Y.iH)(""),n=(0,Y.iH)(""),t=(0,Y.iH)(""),o=(0,Y.iH)(""),s=(0,Y.iH)(""),i=(0,Y.iH)(null),r=(0,Y.iH)(!1),c=(0,Y.iH)(!1);(0,l.YP)([a,n,t,o,s,i],(([e,a,n,t,l,o])=>{e&&a&&n&&t&&l&&o&&(c.value=!1)}));const u=()=>{c.value=!1,a.value&&n.value&&t.value&&o.value&&s.value&&i.value?(e.state.step1Data=new FormData(document.querySelector("#step1")),e.state.step1Done=!0,e.state.step++):c.value=!0};return{name:a,surname:n,email:t,phone:o,position:s,companies:i,next:u,activeInAllCompanies:r,required:c}}};const G=(0,h.Z)(z,[["render",T],["__scopeId","data-v-50d9e0d4"]]);var K=G;const J=e=>((0,l.dD)("data-v-783c0acd"),e=e(),(0,l.Cn)(),e),Q={class:"container"},X={class:"form-control"},ee=J((()=>(0,l._)("label",{for:"mainLocation"},[(0,l.Uk)("Main Location "),(0,l._)("span",{class:"danger"},"*")],-1))),ae=J((()=>(0,l._)("option",{value:"Main Precoro US"},"Main Precoro US",-1))),ne=J((()=>(0,l._)("option",{value:"Precoro EU"},"Precoro EU",-1))),te=J((()=>(0,l._)("option",{value:"Precoro UA"},"Precoro UA",-1))),le=[ae,ne,te],oe={class:"form-control-check"},se=J((()=>(0,l._)("label",{for:"selectAllLocations"},"Select All Locations",-1))),ie=J((()=>(0,l._)("h4",null,"Avaliable Locations",-1))),re={class:"availableLocations"},ce={class:"form-control-check"},ue=J((()=>(0,l._)("label",{for:"berlin"},"Berlin",-1))),pe={class:"form-control-check"},de=J((()=>(0,l._)("label",{for:"poland"},"Poland Office",-1))),me={class:"form-control-check"},ve=J((()=>(0,l._)("label",{for:"venice"},"Venice Office",-1))),_e={class:"form-control-check"},be=J((()=>(0,l._)("label",{for:"mexico"},"Mexico",-1))),ye={class:"form-control-check"},fe=J((()=>(0,l._)("label",{for:"usa"},"USA Office",-1))),he={class:"form-control-check"},we=J((()=>(0,l._)("label",{for:"ukraine"},"Ukraine Kyiv Lukivska 7 Main Office",-1))),ke={class:"form-control-check"},ge=J((()=>(0,l._)("label",{for:"canada"},"Canada",-1))),xe={class:"footer"},Ue={key:0,class:"danger"},qe=J((()=>(0,l._)("button",{type:"submit",class:"next"},null,-1)));function Ae(e,a,n,o,s,i){return(0,l.wg)(),(0,l.iD)("form",{id:"step2",onSubmit:a[9]||(a[9]=(0,t.iM)(((...e)=>o.next&&o.next(...e)),["prevent"]))},[(0,l._)("div",Q,[(0,l._)("div",X,[ee,(0,l.wy)((0,l._)("select",{name:"Main Location",id:"mainLocation","onUpdate:modelValue":a[0]||(a[0]=e=>o.mainLocation=e)},le,512),[[t.bM,o.mainLocation]])]),(0,l._)("div",oe,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"selectAllLocations","onUpdate:modelValue":a[1]||(a[1]=e=>o.selectAllLocations=e)},null,512),[[t.e8,o.selectAllLocations]]),se]),ie,(0,l._)("div",re,[(0,l._)("div",ce,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"berlin",name:"Berlin","onUpdate:modelValue":a[2]||(a[2]=e=>o.avaliableLocations.berlin=e)},null,512),[[t.e8,o.avaliableLocations.berlin]]),ue]),(0,l._)("div",pe,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"poland",name:"Poland","onUpdate:modelValue":a[3]||(a[3]=e=>o.avaliableLocations.poland=e)},null,512),[[t.e8,o.avaliableLocations.poland]]),de]),(0,l._)("div",me,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"venice",name:"Venice","onUpdate:modelValue":a[4]||(a[4]=e=>o.avaliableLocations.venice=e)},null,512),[[t.e8,o.avaliableLocations.venice]]),ve]),(0,l._)("div",_e,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"mexico",name:"Mexico","onUpdate:modelValue":a[5]||(a[5]=e=>o.avaliableLocations.mexico=e)},null,512),[[t.e8,o.avaliableLocations.mexico]]),be]),(0,l._)("div",ye,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"usa",name:"USA","onUpdate:modelValue":a[6]||(a[6]=e=>o.avaliableLocations.usa=e)},null,512),[[t.e8,o.avaliableLocations.usa]]),fe]),(0,l._)("div",he,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"ukraine",name:"Ukraine","onUpdate:modelValue":a[7]||(a[7]=e=>o.avaliableLocations.ukraine=e)},null,512),[[t.e8,o.avaliableLocations.ukraine]]),we]),(0,l._)("div",ke,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"canada",name:"Canada","onUpdate:modelValue":a[8]||(a[8]=e=>o.avaliableLocations.canada=e)},null,512),[[t.e8,o.avaliableLocations.canada]]),ge])])]),(0,l._)("footer",xe,[o.required?((0,l.wg)(),(0,l.iD)("small",Ue,"Choose at least one location")):(0,l.kq)("",!0),qe])],32)}var Ve={setup(){const e=(0,y.oR)(),a=(0,Y.iH)(null),n=(0,Y.iH)(!1),t=(0,Y.iH)(!1),o=(0,Y.iH)(!1),s=(0,Y.qj)({berlin:!1,poland:!1,venice:!1,mexico:!1,usa:!1,ukraine:!1,canada:!1});(0,l.YP)(n,(e=>{for(const a in s)s[a]=!!e}));const i=()=>{t.value=!1,o.value=!1;for(const e in s)s[e]&&(o.value=!0);n.value||o.value?(e.state.step2Data=new FormData(document.querySelector("#step2")),e.state.step2Done=!0,e.state.step++):t.value=!0};return{avaliableLocations:s,mainLocation:a,selectAllLocations:n,next:i,required:t}}};const De=(0,h.Z)(Ve,[["render",Ae],["__scopeId","data-v-783c0acd"]]);var Re=De;const Se=e=>((0,l.dD)("data-v-7c983ea2"),e=e(),(0,l.Cn)(),e),Le={class:"container"},Pe={class:"tableAside"},Oe={class:"table"},Ce=Se((()=>(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("strong",{class:"access"},"Access to:"),(0,l._)("th",null,"View only"),(0,l._)("th",null,"Create"),(0,l._)("th",null,"Approve"),(0,l._)("th",null,"Pay")])],-1))),Ie=Se((()=>(0,l._)("strong",{class:"allBelow"},"All below",-1))),He=Se((()=>(0,l._)("span",{class:"title"},"Warehouse requests",-1))),Me=Se((()=>(0,l._)("span",{class:"title"},"Purchase requests",-1))),je=Se((()=>(0,l._)("span",{class:"title"},"Requests for proposals",-1))),Ee=Se((()=>(0,l._)("span",{class:"title"},"Purchase oreders",-1))),Be=Se((()=>(0,l._)("span",{class:"title"},"Receipts",-1))),$e=Se((()=>(0,l._)("span",{class:"title"},"Invoices",-1))),Ne=Se((()=>(0,l._)("span",{class:"title"},"Expenses",-1))),Fe={class:"aside"},We=Se((()=>(0,l._)("h4",null,[(0,l.Uk)("Management: "),(0,l._)("span",{class:"info"})],-1))),Ze={class:"form-control-check"},Te=Se((()=>(0,l._)("label",{for:"managementAllBelow"},[(0,l._)("strong",null,"All below")],-1))),Ye={class:"form-control-check"},ze=Se((()=>(0,l._)("label",{for:"configuration"},"Configuration",-1))),Ge={class:"form-control-check"},Ke=Se((()=>(0,l._)("label",{for:"suppliersItems"},"Suppliers and items",-1))),Je={class:"form-control-check"},Qe=Se((()=>(0,l._)("label",{for:"budgets"},"Budgets",-1))),Xe={class:"form-control-check"},ea=Se((()=>(0,l._)("label",{for:"warehouseManager"},"Warehouse manager",-1))),aa={class:"form-control-check"},na=Se((()=>(0,l._)("label",{for:"reports"},"Reports",-1))),ta={class:"form-control-check"},la=Se((()=>(0,l._)("label",{for:"admin"},[(0,l.Uk)("Admin (Full access) "),(0,l._)("span",{class:"warning"})],-1))),oa=Se((()=>(0,l._)("div",{class:"infoText"},[(0,l._)("span",{class:"info"}),(0,l._)("span",null,[(0,l.Uk)("The user becomes a "),(0,l._)("a",{href:"#"},"Power user"),(0,l.Uk)(" if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.")])],-1))),sa={class:"footer"},ia={key:0,class:"danger"},ra={key:1,class:"danger"},ca={key:2,class:"primary"},ua=Se((()=>(0,l._)("button",{type:"submit",class:"submit"},null,-1)));function pa(e,a,n,o,s,i){return(0,l.wg)(),(0,l.iD)("form",{id:"step3",onSubmit:a[34]||(a[34]=(0,t.iM)(((...e)=>o.onSubmit&&o.onSubmit(...e)),["prevent"]))},[(0,l._)("div",Le,[(0,l._)("div",Pe,[(0,l._)("div",Oe,[(0,l._)("table",null,[Ce,(0,l._)("tbody",null,[(0,l._)("tr",null,[Ie,(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=e=>o.viewAll=e)},null,512),[[t.e8,o.viewAll]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=e=>o.createAll=e)},null,512),[[t.e8,o.createAll]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=e=>o.approveAll=e)},null,512),[[t.e8,o.approveAll]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=e=>o.payAll=e)},null,512),[[t.e8,o.payAll]])])]),(0,l._)("tr",null,[He,(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Warehouse requests (view only):","onUpdate:modelValue":a[4]||(a[4]=e=>o.view.warehouseRequest=e)},null,512),[[t.e8,o.view.warehouseRequest]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Warehouse requests (create):","onUpdate:modelValue":a[5]||(a[5]=e=>o.create.warehouseRequest=e)},null,512),[[t.e8,o.create.warehouseRequest]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Warehouse requests (approve):","onUpdate:modelValue":a[6]||(a[6]=e=>o.approve.warehouseRequest=e)},null,512),[[t.e8,o.approve.warehouseRequest]])])]),(0,l._)("tr",null,[Me,(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Purchase requests (view only):","onUpdate:modelValue":a[7]||(a[7]=e=>o.view.purchaseRequest=e)},null,512),[[t.e8,o.view.purchaseRequest]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Purchase requests (create):","onUpdate:modelValue":a[8]||(a[8]=e=>o.create.purchaseRequest=e)},null,512),[[t.e8,o.create.purchaseRequest]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Purchase requests (approve):","onUpdate:modelValue":a[9]||(a[9]=e=>o.approve.purchaseRequest=e)},null,512),[[t.e8,o.approve.purchaseRequest]])])]),(0,l._)("tr",null,[je,(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Requests for proposals (view only):","onUpdate:modelValue":a[10]||(a[10]=e=>o.view.proposalsRequest=e)},null,512),[[t.e8,o.view.proposalsRequest]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Requests for proposals (create):","onUpdate:modelValue":a[11]||(a[11]=e=>o.create.proposalsRequest=e)},null,512),[[t.e8,o.create.proposalsRequest]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Requests for proposals (approve):","onUpdate:modelValue":a[12]||(a[12]=e=>o.approve.proposalsRequest=e)},null,512),[[t.e8,o.approve.proposalsRequest]])])]),(0,l._)("tr",null,[Ee,(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Purchase oreders (view only):","onUpdate:modelValue":a[13]||(a[13]=e=>o.view.purchaseOrders=e)},null,512),[[t.e8,o.view.purchaseOrders]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Purchase oreders (create):","onUpdate:modelValue":a[14]||(a[14]=e=>o.create.purchaseOrders=e)},null,512),[[t.e8,o.create.purchaseOrders]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Purchase oreders (approve):","onUpdate:modelValue":a[15]||(a[15]=e=>o.approve.purchaseOrders=e)},null,512),[[t.e8,o.approve.purchaseOrders]])])]),(0,l._)("tr",null,[Be,(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Receipts (view only):","onUpdate:modelValue":a[16]||(a[16]=e=>o.view.receipts=e)},null,512),[[t.e8,o.view.receipts]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Receipts (create):","onUpdate:modelValue":a[17]||(a[17]=e=>o.create.receipts=e)},null,512),[[t.e8,o.create.receipts]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Receipts (approve):","onUpdate:modelValue":a[18]||(a[18]=e=>o.approve.receipts=e)},null,512),[[t.e8,o.approve.receipts]])])]),(0,l._)("tr",null,[$e,(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Invoices (view only):","onUpdate:modelValue":a[19]||(a[19]=e=>o.view.invoices=e)},null,512),[[t.e8,o.view.invoices]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Invoices (create):","onUpdate:modelValue":a[20]||(a[20]=e=>o.create.invoices=e)},null,512),[[t.e8,o.create.invoices]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Invoices (approve):","onUpdate:modelValue":a[21]||(a[21]=e=>o.approve.invoices=e)},null,512),[[t.e8,o.approve.invoices]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Invoices (pay):","onUpdate:modelValue":a[22]||(a[22]=e=>o.pay.invoices=e)},null,512),[[t.e8,o.pay.invoices]])])]),(0,l._)("tr",null,[Ne,(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Expenses (view only):","onUpdate:modelValue":a[23]||(a[23]=e=>o.view.expenses=e)},null,512),[[t.e8,o.view.expenses]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Expenses (create):","onUpdate:modelValue":a[24]||(a[24]=e=>o.create.expenses=e)},null,512),[[t.e8,o.create.expenses]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Expenses (approve):","onUpdate:modelValue":a[25]||(a[25]=e=>o.approve.expenses=e)},null,512),[[t.e8,o.approve.expenses]])]),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{type:"checkbox",name:"Expenses (pay):","onUpdate:modelValue":a[26]||(a[26]=e=>o.pay.expenses=e)},null,512),[[t.e8,o.pay.expenses]])])])])])]),(0,l._)("aside",Fe,[We,(0,l._)("div",Ze,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"managementAllBelow","onUpdate:modelValue":a[27]||(a[27]=e=>o.managementAllBelow=e)},null,512),[[t.e8,o.managementAllBelow]]),Te]),(0,l._)("div",Ye,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"configuration",name:"Configuration","onUpdate:modelValue":a[28]||(a[28]=e=>o.management.configuration=e)},null,512),[[t.e8,o.management.configuration]]),ze]),(0,l._)("div",Ge,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"suppliersItems",name:"Suppliers and items","onUpdate:modelValue":a[29]||(a[29]=e=>o.management.suppliersItems=e)},null,512),[[t.e8,o.management.suppliersItems]]),Ke]),(0,l._)("div",Je,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"budgets",name:"Budgets","onUpdate:modelValue":a[30]||(a[30]=e=>o.management.budgets=e)},null,512),[[t.e8,o.management.budgets]]),Qe]),(0,l._)("div",Xe,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"warehouseManager",name:"Warehouse manager","onUpdate:modelValue":a[31]||(a[31]=e=>o.management.warehouseManager=e)},null,512),[[t.e8,o.management.warehouseManager]]),ea]),(0,l._)("div",aa,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"reports",name:"Reports","onUpdate:modelValue":a[32]||(a[32]=e=>o.management.reports=e)},null,512),[[t.e8,o.management.reports]]),na]),(0,l._)("div",ta,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"admin",name:"Admin","onUpdate:modelValue":a[33]||(a[33]=e=>o.management.admin=e)},null,512),[[t.e8,o.management.admin]]),la])])]),oa,(0,l._)("footer",sa,[o.required?((0,l.wg)(),(0,l.iD)("small",ia,"Choose at least one role")):o.allStepsRequired?((0,l.wg)(),(0,l.iD)("small",ra,"All steps required")):o.submited?((0,l.wg)(),(0,l.iD)("small",ca,"Submited!")):(0,l.kq)("",!0),ua])])],32)}var da={emits:["disable"],setup(e,{emit:a}){const n=(0,y.oR)(),t=(0,Y.iH)(!1),o=(0,Y.iH)(!1),s=(0,Y.iH)(!1),i=(0,Y.iH)(!1),r=(0,Y.iH)(!1),c=(0,Y.iH)(!1),u=(0,Y.iH)(!1),p=(0,Y.iH)(!1),d=(0,Y.qj)({warehouseRequest:!1,purchaseRequest:!1,proposalsRequest:!1,purchaseOrders:!1,receipts:!1,invoices:!1,expenses:!1}),m=(0,Y.qj)({accessAllBelow:!1,warehouseRequest:!1,purchaseRequest:!1,proposalsRequest:!1,purchaseOrders:!1,receipts:!1,invoices:!1,expenses:!1}),v=(0,Y.qj)({accessAllBelow:!1,warehouseRequest:!1,purchaseRequest:!1,proposalsRequest:!1,purchaseOrders:!1,receipts:!1,invoices:!1,expenses:!1}),_=(0,Y.qj)({accessAllBelow:!1,invoices:!1,expenses:!1}),b=(0,Y.iH)(!1),f=(0,Y.qj)({configuration:!1,suppliersItems:!1,budgets:!1,warehouseManager:!1,reports:!1,admin:!1});(0,l.YP)([t,o,s,i,b,d,m,v,_],(([e,a,n,t,l],[o,s,i,r])=>{for(const c in d)e!==o&&(d[c]=!!e),d[c]&&(u.value=!0);for(const c in m)a!==s&&(m[c]=!!a),m[c]&&(u.value=!0);for(const c in v)n!==i&&(v[c]=!!n),v[c]&&(u.value=!0);for(const c in _)t!==r&&(_[c]=!!t),_[c]&&(u.value=!0);for(const c in f)f[c]=!!l}));const h=()=>{if(r.value=!1,c.value=!1,u.value||(r.value=!0),n.state.step1Done&&n.state.step2Done){n.state.step3Done=!0,n.state.step3Data=new FormData(document.querySelector("#step3")),p.value=!0,console.group("Main Info");for(const[e,a]of n.state.step1Data)console.log(`${e}: ${a}\n`);console.groupEnd(),console.group("Available Locations");for(const[e,a]of n.state.step2Data)console.log(`${e}: ${a}\n`);console.groupEnd(),console.group("Roles");for(const[e,a]of n.state.step3Data)console.log(`${e}: ${a}\n`);console.groupEnd(),a("disable")}else c.value=!0};return{viewAll:t,createAll:o,approveAll:s,payAll:i,view:d,create:m,approve:v,pay:_,managementAllBelow:b,management:f,required:r,allStepsRequired:c,submited:p,onSubmit:h}}};const ma=(0,h.Z)(da,[["render",pa],["__scopeId","data-v-7c983ea2"]]);var va=ma,_a={components:{Stepper:k,Step1:K,Step2:Re,Step3:va},setup(){const e=(0,Y.iH)([{id:1,title:"Main Info"},{id:2,title:"Avaliable Locations"},{id:3,title:"Roles"}]),a=()=>{document.querySelectorAll("input").forEach((e=>e.disabled=!0)),document.querySelector("button").disabled=!0};return{steps:e,disable:a}}};const ba=(0,h.Z)(_a,[["render",p],["__scopeId","data-v-19a03329"]]);var ya=ba,fa={components:{Page:ya},setup(){}};const ha=(0,h.Z)(fa,[["render",o]]);var wa=ha,ka=(0,y.MT)({state:{step:1,step1Data:null,step2Data:null,step3Data:null,step1Done:!1,step2Done:!1,step3Done:!1},getters:{},mutations:{changeStep(e,a){e.step=a}},actions:{},modules:{}});(0,t.ri)(wa).use(ka).mount("#app")}},a={};function n(t){var l=a[t];if(void 0!==l)return l.exports;var o=a[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,t,l,o){if(!t){var s=1/0;for(u=0;u<e.length;u++){t=e[u][0],l=e[u][1],o=e[u][2];for(var i=!0,r=0;r<t.length;r++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[r])}))?t.splice(r--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var c=l();void 0!==c&&(a=c)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,l,o]}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var l,o,s=t[0],i=t[1],r=t[2],c=0;if(s.some((function(a){return 0!==e[a]}))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(r)var u=r(n)}for(a&&a(t);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},t=self["webpackChunktest_task"]=self["webpackChunktest_task"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(719)}));t=n.O(t)})();
//# sourceMappingURL=app.640af50a.js.map