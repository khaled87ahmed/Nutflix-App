import{r,M as d,j as n,F as o,a,N as c,C as m,m as p,d as x,G as v,R as h,b as f,c as g,P as C}from"./index-7eb21447.js";function u(){const{movies:s,movieGenres:t,handleGenres:i,latestTotalPages:l}=r.useContext(d);return n(o,{children:[a(c,{}),n(m,{className:"mt-4",children:[a(p.div,{variants:x,initial:"hidden",animate:"visible",className:"genres d-flex flex-wrap ",style:{gap:"5px 15px"},children:t==null?void 0:t.map(e=>a(v,{id:e.id,title:e.name,active:e.active,handleGenres:i},e.id))}),a("div",{className:"wrapper mt-4",children:a(h,{md:3,xs:1,lg:4,className:"g-4",children:s==null?void 0:s.map(e=>a(f,{children:a(g,{movie:e,tvShow:!1})},e.id))})}),a("div",{className:"mt-5 d-flex justify-content-center",children:a(C,{totalPages:l})})]})]})}export{u as default};