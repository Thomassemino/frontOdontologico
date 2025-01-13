const i="https://consultorio-odontologico-backend-production-b1c8.up.railway.app/api/",s={modals:{edit:{isOpen:!1,selectedTreatment:null},create:{isOpen:!1}}},l=t=>{const e=[];return t.nombre.trim()||e.push("El nombre es requerido"),t.descripcion.trim()||e.push("La descripción es requerida"),e},a=(t,e="success")=>{const o=document.querySelector(".notification");o&&o.remove();const r=document.createElement("div");r.className=`notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 text-white ${e==="success"?"bg-green-500":"bg-red-500"} transition-opacity duration-300`,r.textContent=t,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),3e3)},3e3)};async function p(){const t=document.getElementById("searchInput")?.value.toLowerCase().trim(),e=document.querySelector("tbody");if(e)try{const r=await(await fetch(`${i}/tratamientos`)).json(),c=t?r.filter(n=>n.nombre.toLowerCase().includes(t)||n.descripcion.toLowerCase().includes(t)):r;e.innerHTML=c.map(n=>`
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-150"
          data-id="${n._id}"
          data-nombre="${n.nombre}"
          data-descripcion="${n.descripcion}">
        <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${n.nombre}</td>
        <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${n.descripcion}</td>
        <td class="px-6 py-4">
          <div class="flex space-x-2">
            <button class="edit-button p-2 text-blue-600 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" 
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button class="delete-button p-2 text-red-600 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" 
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `).join("")}catch(o){console.error("Error al filtrar tratamientos:",o),a("Error al filtrar los tratamientos","error")}}async function d(){const t=document.querySelector("tbody");if(t)try{const e=await fetch(`${i}/tratamientos`);if(!e.ok)throw new Error("Error al obtener tratamientos");const o=await e.json();console.log("Tratamientos:",o),t.innerHTML=o.map(r=>`
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-150"
          data-id="${r._id}"
          data-nombre="${r.nombre}"
          data-descripcion="${r.descripcion}">
        <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${r.nombre}</td>
        <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${r.descripcion}</td>
        <td class="px-6 py-4">
          <div class="flex space-x-2">
            <button class="edit-button p-2 text-blue-600 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button class="delete-button p-2 text-red-600 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `).join("")}catch(e){console.error("Error al obtener tratamientos:",e),a("Error al cargar los tratamientos","error")}}async function h(t){const e={nombre:t.get("nombre")?.toString().trim(),descripcion:t.get("descripcion")?.toString().trim()},o=l(e);if(o.length>0)throw new Error(o.join(`
`));if(!(await fetch(`${i}/tratamientos/create`,{method:"POST",headers:{"Content-Type":"application/json",Origin:"http://localhost:4321"},body:JSON.stringify(e)})).ok)throw new Error("Error al crear el tratamiento");a("Tratamiento creado correctamente"),await d(),u()}async function g(t){const e=s.modals.edit.selectedTreatment.id,o={nombre:t.get("nombre")?.toString().trim(),descripcion:t.get("descripcion")?.toString().trim()},r=l(o);if(r.length>0)throw new Error(r.join(`
`));if(!(await fetch(`${i}/tratamientos/updateById/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Origin:"http://localhost:4321"},body:JSON.stringify(o)})).ok)throw new Error("Error al actualizar el tratamiento");a("Tratamiento actualizado correctamente"),await d(),m()}async function y(t,e){if(confirm(`¿Está seguro que desea eliminar el tratamiento "${e}"?`))try{if(!(await fetch(`${i}/tratamientos/deleteById/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",Origin:"http://localhost:4321"}})).ok)throw new Error("Error al eliminar el tratamiento");a("Tratamiento eliminado correctamente"),await d()}catch(o){a(o.message,"error")}}function b(t){s.modals.edit.selectedTreatment={...t},s.modals.edit.isOpen=!0;const e=document.getElementById("editModal"),o=document.getElementById("editForm");e?.classList.remove("hidden"),o&&(o.elements.nombre.value=t.nombre,o.elements.descripcion.value=t.descripcion)}function m(){s.modals.edit.isOpen=!1,s.modals.edit.selectedTreatment=null,document.getElementById("editModal")?.classList.add("hidden")}function f(){document.getElementById("createModal")?.classList.remove("hidden"),s.modals.create.isOpen=!0}function u(){document.getElementById("createModal")?.classList.add("hidden"),s.modals.create.isOpen=!1,document.getElementById("createForm")?.reset()}document.addEventListener("DOMContentLoaded",()=>{d(),document.getElementById("createTreatmentButton")?.addEventListener("click",f),document.getElementById("volverBtn")?.addEventListener("click",()=>{window.location.href="/"}),document.getElementById("searchInput")?.addEventListener("input",()=>{p()}),document.querySelectorAll(".close-modal").forEach(t=>{t.addEventListener("click",()=>{m(),u()})}),document.querySelector("tbody")?.addEventListener("click",async t=>{const e=t.target.closest("button");if(!e)return;const o=e.closest("tr");if(!o)return;const r={id:o.dataset.id,nombre:o.dataset.nombre,descripcion:o.dataset.descripcion};e.classList.contains("edit-button")&&b(r),e.classList.contains("delete-button")&&await y(r.id,r.nombre)}),document.getElementById("createForm")?.addEventListener("submit",async t=>{t.preventDefault();try{await h(new FormData(t.target))}catch(e){a(e.message,"error")}}),document.getElementById("editForm")?.addEventListener("submit",async t=>{t.preventDefault();try{await g(new FormData(t.target))}catch(e){a(e.message,"error")}})});
