(()=>{var s={apiHost:turbofanSettings.apiHost||"https://api.turbofan.email",confirmationPathname:turbofanSettings.confirmationPathname||"/signup-confirmed/"};async function f(e="",o={}){try{let t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!t.ok)throw new Error("Network response was not OK");return t.json()}catch(t){return console.error("There has been a problem with your fetch operation:",t),!1}}function l(e,o){let t=e.getAttribute("action"),r=new FormData(o).get("email");if(!r)return;let n=document.querySelector("#form-success"),c=document.querySelector("#form-error");f(t,{email:r}).then(m=>{m?n?(n.classList.remove("hidden"),e.reset()):console.log("Signup successful!",m):c&&c.classList.remove("hidden")})}var i=document.querySelector("#signUpForm");i&&i.addEventListener("submit",e=>{e.preventDefault(),l(i,e.target)});if(s.confirmationUrl&&window.location.pathname===s.confirmationPathname){let e=window.location.search,t=new URLSearchParams(e).get("jwt"),a=document.querySelector("#confirmation-error");if(t&&s.apiHost){let r=`${s.apiHost}/v1/form/confirm/${t}`;f(r).then(n=>{n||a&&a.classList.remove("hidden")})}}})();
