import{d as m,o as a,c,z as t,a as u,t as l,G as p,b as i,F as r,L as h,_ as T,O as A,u as b,A as w,C as g,K as v,a2 as y,a3 as j,a4 as $,a5 as x,a6 as P,a7 as D,a8 as S,a9 as C,aa as V,ab as L,ac as R,p as E,k as B,ad as O,ae as F,af as N,ag as H}from"./chunks/framework.571309da.js";import{t as f}from"./chunks/theme.367c32fd.js";const I="/rijksoverheid.svg",z={class:"container title-bar"},G={class:"title-text"},U=t("a",{href:"/home.html"},"Home",-1),K=m({__name:"VPAeriusBreadCrum",props:{breadcumtitle:{}},setup(s){return(o,e)=>(a(),c("div",z,[t("h3",G,[U,u(" > "),t("strong",null,l(o.breadcumtitle),1)])]))}}),M={class:"container title-bar"},Z={class:"title-text"},q=t("section",{class:"home-logo"},null,-1),J={class:"main-content container"},Q={class:"row justify-content-center"},W={class:"text-col"},X={class:"main-text"},Y=t("br",null,null,-1),tt={class:"products"},et={class:"container"},st={class:"products-title"},ot={class:"products-row"},it={class:"product-item"},nt={class:"product-item-wrapper"},at={class:"product-item-img"},ct=["src","alt"],lt={class:"product-item-content"},dt={class:"product-description-font"},rt=t("br",null,null,-1),_t=t("br",null,null,-1),ht=["href"],ut={class:"container"},mt={class:"row justify-content-center"},pt={class:"text-col"},vt={class:"middle-title"},ft={class:"middle-text"},wt=t("div",{class:"middle-image"},null,-1),gt={class:"most-downloads"},bt={class:"container"},kt={class:"most-downloads-header"},Tt={class:"container"},At={class:"most-downloads-row"},yt={class:"most-downloads-column"},jt=["href"],$t={class:"most-downloads-column"},xt={class:"container"},Pt={class:"row justify-content-center"},Dt={class:"most-downloads-column"},St=t("h3",{class:"middle-title"},"Zie ook",-1),Ct=["href"],Vt={class:"most-downloads-column"},Lt=t("h3",{class:"middle-title"},"Overige onderwerpen",-1),Rt=["href"],Et=m({__name:"VPAeriusHomePage",props:{title:{},middleTitle:{},products:{},middleText:{},productsTitle:{},downloadsTitle:{},mostDownloads:{},seeAlso:{},otherSubjects:{},service:{},about:{}},setup(s){const{Layout:o}=f;return(e,d)=>(a(),c(r,null,[t("div",M,[t("h3",Z,l(e.title),1)]),q,t("div",J,[t("div",Q,[t("div",W,[t("div",X,[Y,p(i(o))])])])]),t("div",tt,[t("div",et,[t("div",st,l(e.productsTitle),1),t("div",ot,[(a(!0),c(r,null,h(e.products,n=>(a(),c("div",it,[t("div",nt,[t("div",at,[t("img",{src:n.logo,alt:n.logoAlt},null,8,ct)]),t("div",lt,[t("p",dt,[u(l(n.description)+" ",1),rt,_t,t("a",{href:n.link,class:"text-primary"},l(n.linktext),9,ht)])])])]))),256))])])]),t("div",ut,[t("div",mt,[t("div",pt,[t("h4",vt,l(e.middleTitle),1),t("p",ft,l(e.middleText),1)])])]),wt,t("div",gt,[t("div",bt,[t("div",kt,l(e.downloadsTitle),1)]),t("div",Tt,[(a(!0),c(r,null,h(e.mostDownloads,n=>(a(),c("div",At,[t("div",yt,[t("a",{href:n.link,target:"_blank"},l(n.description),9,jt)]),t("div",$t,l(n.date),1)]))),256))])]),t("div",xt,[t("div",Pt,[t("div",Dt,[St,(a(!0),c(r,null,h(e.seeAlso,n=>(a(),c("div",null,[t("a",{href:n.link,target:"_blank"},l(n.description),9,Ct)]))),256))]),t("div",Vt,[Lt,(a(!0),c(r,null,h(e.otherSubjects,n=>(a(),c("div",null,[t("a",{href:n.link,target:"_blank"},l(n.description),9,Rt)]))),256))])])])],64))}}),Bt={},Ot={class:"footer"},Ft=A('<div class="container"><div class="footer-row text-white"><div class="footer-col"></div><div class="footer-col"></div><div class="footer-col"><h5 class="footer-font-title">Service</h5><div class="footer-font"><a href="/downloads.html" class="text-white">Downloads</a></div><div class="footer-font"><a href="https://aerius.stainlessmedia.com/huisstijl.html" class="text-white">Huisstijl AERIUS</a></div><div class="footer-font"><a href="https://www.bij12.nl/contact/" class="text-white" target="_blank">Contact &gt; Bij12</a></div></div><div class="footer-col"><h5 class="footer-font-title">Over deze site</h5><div class="footer-font"><a href="/toegankelijkheid.html" class="text-white">Toegankelijkheid</a></div></div></div></div>',1),Nt=[Ft];function Ht(s,o){return a(),c("div",Ot,Nt)}const It=T(Bt,[["render",Ht]]),zt=t("div",{class:"logo-wrapper"},[t("img",{src:I,alt:"Logo Rijksoverheid"})],-1),Gt=t("a",{href:"/home.html"},"Home",-1),Ut=t("a",{href:"/downloads.html"},"Downloads",-1),Kt=t("a",{href:"/toegankelijkheidsverklaring.html"},"Toegankelijkheidsverklaring",-1),Mt={key:0},Zt={key:1},qt={class:"row justify-content-center"},Jt=m({__name:"VPAeriusLayout",setup(s){const{site:o,frontmatter:e}=b(),{Layout:d}=f;return(n,ee)=>(a(),c(r,null,[zt,Gt,u(" | "),Ut,u(" | "),Kt,i(e).layout=="home"?(a(),c("div",Mt,[i(e).home?(a(),w(Et,{key:0,title:i(e).home.title,productsTitle:i(e).home.productsTitle,products:i(e).home.products,middleTitle:i(e).home.middleTitle,middleText:i(e).home.middleText,downloadsTitle:i(e).home.downloadsTitle,mostDownloads:i(e).home.mostDownloads,seeAlso:i(e).home.seeAlso,otherSubjects:i(e).home.otherSubjects,service:i(e).home.service,about:i(e).home.about},null,8,["title","productsTitle","products","middleTitle","middleText","downloadsTitle","mostDownloads","seeAlso","otherSubjects","service","about"])):g("",!0)])):(a(),c("div",Zt,[i(e).aerius?(a(),w(K,{key:0,breadcumtitle:i(e).aerius.breadcumtitle},null,8,["breadcumtitle"])):g("",!0),t("div",qt,[p(i(d),{class:"main-content container"})])])),p(It)],64))}});const Qt={...f,Layout:Jt};function k(s){if(s.extends){const o=k(s.extends);return{...o,...s,async enhanceApp(e){o.enhanceApp&&await o.enhanceApp(e),s.enhanceApp&&await s.enhanceApp(e)}}}return s}const _=k(Qt),Wt=m({name:"VitePressApp",setup(){const{site:s}=b();return E(()=>{B(()=>{document.documentElement.lang=s.value.lang,document.documentElement.dir=s.value.dir})}),O(),F(),N(),_.setup&&_.setup(),()=>H(_.Layout)}});async function Xt(){const s=te(),o=Yt();o.provide(j,s);const e=$(s.route);return o.provide(x,e),o.component("Content",P),o.component("ClientOnly",D),Object.defineProperties(o.config.globalProperties,{$frontmatter:{get(){return e.frontmatter.value}},$params:{get(){return e.page.value.params}}}),_.enhanceApp&&await _.enhanceApp({app:o,router:s,siteData:S}),{app:o,router:s,data:e}}function Yt(){return C(Wt)}function te(){let s=v,o;return V(e=>{let d=L(e);return s&&(o=d),(s||o===d)&&(d=d.replace(/\.js$/,".lean.js")),v&&(s=!1),R(()=>import(d),[])},_.NotFound)}v&&Xt().then(({app:s,router:o,data:e})=>{o.go().then(()=>{y(o.route,e.site),s.mount("#app")})});export{Xt as createApp};
