import{o as a,c as _,a as s,t as n,g as t,F as g,d as b,h as f,r as y}from"./entry.a359590a.js";const k={class:"masvideos-breadcrumb"},C=s("a",{href:"/"},"Home",-1),L=s("span",{class:"delimiter"},[s("svg",{width:"4px",height:"7px"},[s("path",{"fill-rule":"evenodd",d:"M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z"})])],-1),x=["href"],T=s("span",{class:"delimiter"},[s("svg",{width:"4px",height:"7px"},[s("path",{"fill-rule":"evenodd",d:"M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z"})])],-1),N={__name:"BreadScrumb",props:["base","page","title"],setup(c){const e=c,r=e.base||"/tv-shows",o=e.page,v=e.title||"TV Shows";return(p,i)=>(a(),_("nav",k,[C,L,s("a",{href:t(r)},n(t(v)),9,x),t(o)?(a(),_(g,{key:0},[T,b("Page "+n(t(o)),1)],64)):f("",!0)]))}},$s=N,D={class:"tv-show post-202574 tv_show type-tv_show status-publish has-post-thumbnail hentry category-disney category-k-drama tv_show_genre-action-adventure tv_show_genre-214 tv_show_genre-218 tv_show_tag-1126"},M={class:"tv-show__poster"},I={class:"box-tv-channel"},S=["src"],G=["href"],B=["src"],F={class:"tv-show__body"},O={class:"tv-show__meta--release-year"},V=["href"],Z={style:{display:"none"},class:"span_sea_ep_title"},z={class:"masvideos-loop-tv-show__title tv-show__title"},P={__name:"PopularItem",props:["link","postDateGmt","title","src","episodeNumber","seasonNumber","chanelImage"],setup(c){const e=c;e.link;const r=e.postDateGmt,o=e.title,v=e.src,p=e.episodeNumber,i=e.seasonNumber,u=e.chanelImage,m=h=>{const l=new Date;h=new Date(h.replace(" ","T")+".000Z");let d=Math.floor((l.valueOf()-h.valueOf())/1e3);return d>48*3600?h.getFullYear()+"-"+(h.getMonth()+1)+"-"+h.getDate():d<24*3600?Math.floor(d/3600)+" 시간 전":Math.floor(d/3600)+"1일 전"};return(h,l)=>(a(),_("div",D,[s("div",M,[s("div",I,[s("img",{src:t(u),alt:"",width:"62",height:"31",class:"tv-channel"},null,8,S)]),s("a",{href:"/episode/"+t(o),class:"masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"},[s("img",{width:"600",height:"900",src:t(v),class:"tv-show__poster--image tv_show__poster--image",alt:"",loading:"lazy",sizes:"(max-width: 600px) 100vw, 600px"},null,8,B)],8,G)]),s("div",F,[s("span",O,n(m(t(r))),1),s("a",{href:"/episode/"+t(o),class:"masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"},[s("span",Z,n((t(i)>1?"시즌 "+t(i)+" - ":"")+t(p))+"화",1),s("h3",z,n(t(o)),1)],8,V)])]))}},bs=P,A={class:"tv-show post-203100 tv_show type-tv_show status-publish has-post-thumbnail hentry category-netflix category-u-drama tv_show_genre-234"},Y={class:"tv-show__poster"},j={class:"box-tv-channel"},E=["src"],H=["href"],q=["src"],J={class:"tv-show__body"},K={class:"tv-show__info"},Q={class:"tv-show__info--head"},R={class:"tv-show__meta"},U={class:"tv-show__meta--release-year"},W={key:0,class:"original-title-tvshow"},X=["href"],ss={style:{display:"none"},class:"span_sea_ep_title"},ts={class:"masvideos-loop-tv-show__title tv-show__title"},es={__name:"Item",props:["postDateGmt","title","originalTitle","episodeNumber","seasonNumber","src","chanelImage"],setup(c){const e=c,r=e.postDateGmt,o=e.title,v=e.episodeNumber,p=e.seasonNumber,i=e.originalTitle,u=e.src,m=e.chanelImage,h=l=>{const d=new Date;l=new Date(l.replace(" ","T")+".000Z");let w=Math.floor((d.valueOf()-l.valueOf())/1e3);return w>48*3600?l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate():w<24*3600?Math.floor(w/3600)+" 시간 전":Math.floor(w/3600)+"1일 전"};return(l,d)=>(a(),_("div",A,[s("div",Y,[s("div",j,[t(m)?(a(),_("img",{key:0,class:"tv-channel",src:t(m),alt:"",width:"83",height:"31"},null,8,E)):f("",!0)]),s("a",{href:"/episode/"+t(o),class:"masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"},[s("img",{width:"300",height:"450",src:t(u),class:"tv-show__poster--image tv_show__poster--image",alt:"",loading:"lazy"},null,8,q)],8,H)]),s("div",J,[s("div",K,[s("div",Q,[s("div",R,[s("span",U,n(h(t(r))),1)]),t(i)?(a(),_("div",W,n(t(i)),1)):f("",!0),s("a",{href:"/episode/"+t(o),class:"masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"},[s("span",ss,n((t(p)>1?"시즌 "+t(p)+" - ":"")+t(v))+"화",1),s("h3",ts,n(t(o)),1)],8,X)])])])]))}},ks=es,os={class:"widget-area-inner"},as={id:"masvideos_tv_shows_widget-1",class:"widget masvideos masvideos_tv_shows_widget masvideos-tv-shows-widget"},_s={class:"widget-header"},ns={class:"widget-title"},is={class:"masvideos masvideos-tv-shows"},hs={class:"tv-shows columns-1"},ls={class:"tv-shows__inner"},cs={class:"tv-show__body"},rs={class:"tv-show__meta--release-year"},ds=["href"],vs=s("span",{style:{display:"none"},class:"span_sea_ep_title"},"16화",-1),ps=s("h3",{class:"masvideos-loop-tv-show__title tv-show__title"},"킹더랜드",-1),ms=[vs,ps],ws={class:"tv-show__meta--genre"},us={key:0},gs=["href"],fs={__name:"PopularContents",props:["data","title"],setup(c){const e=c,r=e.data,o=e.title;return(v,p)=>(a(),_("div",os,[s("div",as,[s("div",_s,[s("span",ns,n(t(o)),1)]),s("div",is,[s("div",hs,[s("div",ls,[(a(!0),_(g,null,y(t(r),(i,u)=>(a(),_("div",{key:u,class:"tv-show post-197303 tv_show type-tv_show status-publish has-post-thumbnail hentry category-jtbc category-k-drama tv_show_genre-214 tv_show_genre-213 tv_show_tag-1086"},[s("div",cs,[s("span",rs,n(i.year),1),s("a",{href:"/episode/"+i.title,class:"masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"},ms,8,ds),s("span",ws,[(a(!0),_(g,null,y(i.genres,(m,h)=>(a(),_(g,null,[h>0?(a(),_("span",us,", ")):f("",!0),s("a",{href:"/episode/"+i.title,rel:"tag"},n(m.name),9,gs)],64))),256))])])]))),128))])])])])]))}},Cs=fs;export{Cs as _,$s as a,bs as b,ks as c};
