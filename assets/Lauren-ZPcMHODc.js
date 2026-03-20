import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{r as t,t as n}from"./vendor-BbA5cKEB.js";var r=e(t(),1),i=n(),a={small:60,medium:100,large:150},o={neutral:`rgba(16, 185, 129, 0.4)`,happy:`rgba(234, 179, 8, 0.4)`,encouraging:`rgba(59, 130, 246, 0.4)`,thinking:`rgba(168, 85, 247, 0.4)`,concerned:`rgba(245, 158, 11, 0.4)`,celebrating:`rgba(236, 72, 153, 0.4)`},s={neutral:`0 0 12px rgba(16, 185, 129, 0.35), 0 0 24px rgba(16, 185, 129, 0.15)`,happy:`0 0 12px rgba(234, 179, 8, 0.35), 0 0 24px rgba(234, 179, 8, 0.15)`,encouraging:`0 0 12px rgba(59, 130, 246, 0.35), 0 0 24px rgba(59, 130, 246, 0.15)`,thinking:`0 0 12px rgba(168, 85, 247, 0.35), 0 0 24px rgba(168, 85, 247, 0.15)`,concerned:`0 0 12px rgba(245, 158, 11, 0.35), 0 0 24px rgba(245, 158, 11, 0.15)`,celebrating:`0 0 12px rgba(236, 72, 153, 0.3), 0 0 24px rgba(168, 85, 247, 0.2), 0 0 36px rgba(234, 179, 8, 0.15)`},c=`
@keyframes lauren-neutral {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes lauren-happy {
  0%, 100% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.05) translateY(-8px); }
}
@keyframes lauren-encouraging {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  75% { transform: rotate(-3deg); }
}
@keyframes lauren-thinking {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-5deg); }
}
@keyframes lauren-concerned {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}
@keyframes lauren-celebrating {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.1); }
}
@keyframes lauren-fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes lauren-slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
`,l={neutral:`lauren-neutral 3s ease-in-out infinite`,happy:`lauren-happy 0.6s ease-in-out`,encouraging:`lauren-encouraging 1s ease-in-out`,thinking:`lauren-thinking 0.5s ease-in-out forwards`,concerned:`lauren-concerned 0.5s ease-in-out`,celebrating:`lauren-celebrating 0.8s ease-in-out 2`},u=!1;function d(){if(u)return;u=!0;let e=document.createElement(`style`);e.textContent=c,document.head.appendChild(e)}function f({emotion:e=`neutral`,message:t,size:n=`medium`,position:c=`inline`,onClose:u,animate:f=!0}){let[p,m]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1),_=(0,r.useRef)(null);(0,r.useEffect)(()=>{d(),requestAnimationFrame(()=>g(!0))},[]);let v=a[n]||a.medium,y=n===`large`,b=c===`floating`,x=y?`16px`:`50%`,S=o[e]||o.neutral,C=s[e]||s.neutral,w=f?l[e]||l.neutral:`none`,T={width:v,height:v,borderRadius:x,border:`2px solid ${S}`,boxShadow:C,objectFit:`cover`,objectPosition:`center top`,animation:w,flexShrink:0,display:`block`},E=t?(0,i.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #1e293b, #1a1f2e)`,border:`1px solid rgba(148, 163, 184, 0.15)`,borderRadius:`14px`,padding:`0.75rem 1rem`,maxWidth:280,color:`#f1f5f9`,fontSize:`0.85rem`,lineHeight:1.55,position:`relative`,animation:`lauren-fade-in 0.35s ease-out`,boxShadow:`0 4px 20px rgba(0, 0, 0, 0.35)`},children:[t,!b&&(0,i.jsx)(`div`,{style:{position:`absolute`,right:-7,top:`50%`,marginTop:-7,width:0,height:0,borderTop:`7px solid transparent`,borderBottom:`7px solid transparent`,borderLeft:`7px solid #1e293b`}})]}):null;return b?(0,i.jsxs)(`div`,{ref:_,style:{position:`fixed`,bottom:20,right:20,zIndex:1e3,display:`flex`,flexDirection:`column`,alignItems:`flex-end`,gap:`0.5rem`,animation:h?`lauren-slide-up 0.45s ease-out`:`none`,opacity:h?1:0},children:[p&&t&&(0,i.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #1e293b, #1a1f2e)`,border:`1px solid rgba(148, 163, 184, 0.15)`,borderRadius:`14px`,padding:`0.75rem 1rem`,maxWidth:280,color:`#f1f5f9`,fontSize:`0.85rem`,lineHeight:1.55,animation:`lauren-fade-in 0.3s ease-out`,boxShadow:`0 4px 20px rgba(0, 0, 0, 0.35)`,position:`relative`},children:[t,(0,i.jsx)(`div`,{style:{position:`absolute`,bottom:-7,right:20,width:0,height:0,borderLeft:`7px solid transparent`,borderRight:`7px solid transparent`,borderTop:`7px solid #1e293b`}})]}),(0,i.jsxs)(`div`,{style:{position:`relative`},children:[(0,i.jsx)(`img`,{src:`/english-tutor/Lauren.png`,alt:`Lauren, your English tutor`,onClick:()=>m(e=>!e),style:{...T,borderRadius:`50%`,cursor:`pointer`,transition:`box-shadow 0.3s ease`}}),u&&(0,i.jsx)(`button`,{onClick:e=>{e.stopPropagation(),u()},"aria-label":`Dismiss Lauren`,style:{position:`absolute`,top:-6,right:-6,width:22,height:22,borderRadius:`50%`,background:`#374151`,border:`1px solid rgba(148, 163, 184, 0.25)`,color:`#94a3b8`,fontSize:`0.7rem`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,lineHeight:1,padding:0},children:`✕`})]})]}):(0,i.jsxs)(`div`,{ref:_,style:{display:`flex`,alignItems:`center`,gap:`0.75rem`},children:[E,(0,i.jsx)(`img`,{src:`/english-tutor/Lauren.png`,alt:`Lauren, your English tutor`,style:T})]})}export{f as t};