/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_CRM8sbCC.mjs';
import { $ as $$LayoutProtected } from '../chunks/LayoutProtected_DakdDe6U.mjs';
import { $ as $$LayoutSidebar } from '../chunks/LayoutSidebar_B5yBItIo.mjs';
import 'flowbite';
import 'datatables.net';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$DashBoard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="px-4 pt-6"> <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <div class="flex flex-col md:flex-row justify-between items-center px-6 py-4"> <div class="w-full md:w-auto md:pr-8 pb-4 md:pb-0"> <img class="w-48 h-48 rounded-full shadow-lg mx-auto" src="/src/assets/logo.png" alt="Profile image"> </div> <div class="w-full md:flex-1 md:ml-6"> <h5 id="userName" class="mb-2 text-xl font-medium text-gray-900 dark:text-white text-center md:text-left">
Cargando...
</h5> <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 md:p-6"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> <div> <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Email
</h5> <p id="userEmail" class="text-lg font-medium text-gray-900 dark:text-white">
Cargando...
</p> </div> <div> <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Tel\xE9fono
</h5> <p id="userPhone" class="text-lg font-medium text-gray-900 dark:text-white">
Cargando...
</p> </div> <div id="especialidadContainer" class="hidden"> <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Especialidad
</h5> <p id="userEspecialidad" class="text-lg font-medium text-gray-900 dark:text-white">
Cargando...
</p> </div> <div id="matriculaContainer" class="hidden"> <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">
N\xBA Matr\xEDcula
</h5> <p id="userMatricula" class="text-lg font-medium text-gray-900 dark:text-white">
Cargando...
</p> </div> </div> </div> </div> </div> <div id="tableContainer" class="mt-8"> <div class="flex justify-center mb-4 space-x-4"> <button id="citasButton" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500">
Ver Citas
</button> <button id="pacientesButton" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500">
Ver Pacientes
</button> </div> <!-- Tabla de Citas --> <div id="citasTable" class="hidden w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <div class="p-4"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Citas Programadas</h2> <div class="overflow-x-auto"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th class="px-6 py-3">Fecha</th> <th class="px-6 py-3">Paciente</th> <th class="px-6 py-3">Motivo</th> <th class="px-6 py-3">Estado</th> <th class="px-6 py-3">Monto</th> <th class="px-6 py-3">Atender</th> </tr> </thead> <tbody id="citasTableBody"> <!-- Las filas se llenar\xE1n din\xE1micamente --> </tbody> </table> </div> </div> </div> <!-- Tabla de Pacientes --> <div id="pacientesTable" class="hidden w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <div class="p-4"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lista de Pacientes</h2> <div class="overflow-x-auto"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th class="px-6 py-3">Nombre</th> <th class="px-6 py-3">DNI</th> <th class="px-6 py-3">Tel\xE9fono</th> <th class="px-6 py-3">Email</th> </tr> </thead> <tbody id="pacientesTableBody"> <!-- Las filas se llenar\xE1n din\xE1micamente --> </tbody> </table> </div> </div> </div> </div> </div> </div> <script>
	// Constantes globales
	const BASE_URL = 'https://consultorio-odontologico-backend-production-b1c8.up.railway.app/api/';
	
	// Cargar datos del perfil
	window.addEventListener('load', async () => {
		try {
			const userId = localStorage.getItem('userId');
			const userRole = localStorage.getItem('userRole');
	
			if (!userId || !userRole) {
				window.location.href = '/login';
				return;
			}
	
			let endpoint = '';
			if (userRole === 'secretaria') {
				endpoint = \`\${BASE_URL}/secretaria/buscarId/\${userId}\`;
			} else if (userRole === 'odontologo') {
				endpoint = \`\${BASE_URL}/medico/findById/\${userId}\`;
				
				const especialidadContainer = document.getElementById('especialidadContainer');
				const matriculaContainer = document.getElementById('matriculaContainer');
				
				if (especialidadContainer) especialidadContainer.classList.remove('hidden');
				if (matriculaContainer) matriculaContainer.classList.remove('hidden');
			}
	
			console.log('Endpoint:', endpoint);
			console.log('UserRole:', userRole);
			console.log('UserId:', userId);
	
			const response = await fetch(endpoint);
			if (!response.ok) {
				throw new Error(\`HTTP error! status: \${response.status}\`);
			}
			
			const data = await response.json();
			console.log('Data received:', data);
	
			const userData = userRole === 'secretaria' ? 
				data.secretaria : 
				(data.medico || data);
	
			const updateElement = (id, value) => {
				const element = document.getElementById(id);
				if (element) {
					element.textContent = value || 'No disponible';
				} else {
					console.log(\`Elemento con id \${id} no encontrado\`);
				}
			};
	
			updateElement('userName', userData.nombre);
			updateElement('userEmail', userData.email);
			updateElement('userPhone', userData.celular || userData.telefono);
	
			if (userRole === 'odontologo') {
				updateElement('userEspecialidad', userData.especialidad);
				updateElement('userMatricula', userData.nMatricula);
				setupTables();
			}
	
		} catch (error) {
			console.error('Error loading user data:', error);
			console.error('Error details:', error.message);
			
			const userRole = localStorage.getItem('userRole');
			
			const errorElements = ['userName', 'userEmail', 'userPhone'];
			if (userRole === 'odontologo') {
				errorElements.push('userEspecialidad', 'userMatricula');
			}
			errorElements.forEach(id => {
				const element = document.getElementById(id);
				if (element) {
					element.textContent = 'Error al cargar datos';
				}
			});
		}
	});
	
	function setupTables() {
		const citasButton = document.getElementById('citasButton');
		const pacientesButton = document.getElementById('pacientesButton');
		const citasTable = document.getElementById('citasTable');
		const pacientesTable = document.getElementById('pacientesTable');
		let citasDataTable, pacientesDataTable;
	
		citasButton.addEventListener('click', () => {
			pacientesTable.classList.add('hidden');
			citasTable.classList.remove('hidden');
			cargarCitas();
		});
	
		pacientesButton.addEventListener('click', () => {
			citasTable.classList.add('hidden');
			pacientesTable.classList.remove('hidden');
			cargarPacientes();
		});
	
		// Cargar citas por defecto
		citasButton.click();
	}
	
	async function cargarCitas() {
  const citasTableBody = document.getElementById('citasTableBody');
  try {
    const userId = localStorage.getItem('userId');
    const response = await fetch(\`\${BASE_URL}/citas/todas\`);
    if (!response.ok) throw new Error('Error al cargar citas');
    
    const data = await response.json();
    // Filtrar citas por m\xE9dico
    const citasFiltradas = data.filter(cita => 
      cita.medicoId?._id === userId || cita.medicoId === userId
    );

    citasTableBody.innerHTML = '';

    if (citasFiltradas.length === 0) {
      citasTableBody.innerHTML = \`
        <tr>
          <td colspan="5" class="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
            No hay citas programadas
          </td>
        </tr>
      \`;
      return;
    }

    citasFiltradas.forEach(cita => {
      const row = document.createElement('tr');
      row.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700';
      
      const fecha = new Date(cita.fecha).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

			const consultaUrl = \`/consulta?id=\${cita._id}\`;

      const estadoClasses = {
        'en_proceso': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        'completada': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        'pendiente': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      };

      row.innerHTML = \`
        <td class="px-6 py-4">\${fecha}</td>
        <td class="px-6 py-4">\${cita.pacienteId?.nombre || 'No disponible'}</td>
        <td class="px-6 py-4">\${cita.motivo}</td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 rounded-full text-xs font-medium \${estadoClasses[cita.estado] || ''}">\${cita.estado}</span>
        </td>
        <td class="px-6 py-4">$\${cita.monto || 0}</td>
				<td class="px-6 py-4">
          \${cita.estado === 'pendiente' ? \`
            <a href="\${consultaUrl}"
               class="px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-colors">
                Atender
            </a>
          \` : '-'}
        </td>
      \`;

      citasTableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error al cargar citas:', error);
    citasTableBody.innerHTML = \`
      <tr>
        <td colspan="5" class="px-6 py-4 text-center text-red-500">
          Error al cargar las citas: \${error.message}
        </td>
      </tr>
    \`;
  }
}

async function cargarPacientes() {
  const pacientesTableBody = document.getElementById('pacientesTableBody');
  try {
    const userId = localStorage.getItem('userId');
    
    // Primero obtenemos todas las citas
    const citasResponse = await fetch(\`\${BASE_URL}/citas/todas\`);
    const citasData = await citasResponse.json();
    
    // Filtramos las citas del m\xE9dico
    const citasDelMedico = citasData.filter(cita => 
      cita.medicoId?._id === userId || cita.medicoId === userId
    );

    // Obtenemos IDs \xFAnicos de pacientes
    const pacientesIds = [...new Set(citasDelMedico.map(cita => 
      cita.pacienteId?._id || cita.pacienteId
    ))];

    pacientesTableBody.innerHTML = '';

    if (pacientesIds.length === 0) {
      pacientesTableBody.innerHTML = \`
        <tr>
          <td colspan="4" class="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
            No hay pacientes atendidos
          </td>
        </tr>
      \`;
      return;
    }

    // Obtener datos de cada paciente
    for (const pacienteId of pacientesIds) {
      try {
        const pacienteResponse = await fetch(\`\${BASE_URL}/paciente/findById/\${pacienteId}\`);
        if (!pacienteResponse.ok) continue;
        
        const { paciente } = await pacienteResponse.json();
        
        const row = document.createElement('tr');
        row.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700';
        
        row.innerHTML = \`
          <td class="px-6 py-4">\${paciente.nombre || 'No disponible'}</td>
          <td class="px-6 py-4">\${paciente.dni || 'No disponible'}</td>
          <td class="px-6 py-4">\${paciente.areaCode || ''} \${paciente.telefono || 'No disponible'}</td>
          <td class="px-6 py-4">\${paciente.mail || 'No disponible'}</td>
        \`;

        pacientesTableBody.appendChild(row);
      } catch (error) {
        console.error('Error al cargar datos del paciente:', error);
      }
    }
  } catch (error) {
    console.error('Error al cargar pacientes:', error);
    pacientesTableBody.innerHTML = \`
      <tr>
        <td colspan="4" class="px-6 py-4 text-center text-red-500">
          Error al cargar los pacientes: \${error.message}
        </td>
      </tr>
    \`;
  }
}
	
	// Script de diagn\xF3stico
	setTimeout(() => {
		console.log('=== Diagn\xF3stico de elementos DOM ===');
		['userName', 'userEmail', 'userPhone', 'userEspecialidad', 'userMatricula'].forEach(id => {
			const element = document.getElementById(id);
			console.log(\`\${id}:\`, element ? 'Existe' : 'No existe');
			if (element) {
				console.log(\`\${id} contenido:\`, element.textContent);
			}
		});
	}, 2000);
	<\/script> `], ["", `<div class="px-4 pt-6"> <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <div class="flex flex-col md:flex-row justify-between items-center px-6 py-4"> <div class="w-full md:w-auto md:pr-8 pb-4 md:pb-0"> <img class="w-48 h-48 rounded-full shadow-lg mx-auto" src="/src/assets/logo.png" alt="Profile image"> </div> <div class="w-full md:flex-1 md:ml-6"> <h5 id="userName" class="mb-2 text-xl font-medium text-gray-900 dark:text-white text-center md:text-left">
Cargando...
</h5> <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 md:p-6"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> <div> <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Email
</h5> <p id="userEmail" class="text-lg font-medium text-gray-900 dark:text-white">
Cargando...
</p> </div> <div> <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Tel\xE9fono
</h5> <p id="userPhone" class="text-lg font-medium text-gray-900 dark:text-white">
Cargando...
</p> </div> <div id="especialidadContainer" class="hidden"> <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">
Especialidad
</h5> <p id="userEspecialidad" class="text-lg font-medium text-gray-900 dark:text-white">
Cargando...
</p> </div> <div id="matriculaContainer" class="hidden"> <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">
N\xBA Matr\xEDcula
</h5> <p id="userMatricula" class="text-lg font-medium text-gray-900 dark:text-white">
Cargando...
</p> </div> </div> </div> </div> </div> <div id="tableContainer" class="mt-8"> <div class="flex justify-center mb-4 space-x-4"> <button id="citasButton" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500">
Ver Citas
</button> <button id="pacientesButton" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500">
Ver Pacientes
</button> </div> <!-- Tabla de Citas --> <div id="citasTable" class="hidden w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <div class="p-4"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Citas Programadas</h2> <div class="overflow-x-auto"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th class="px-6 py-3">Fecha</th> <th class="px-6 py-3">Paciente</th> <th class="px-6 py-3">Motivo</th> <th class="px-6 py-3">Estado</th> <th class="px-6 py-3">Monto</th> <th class="px-6 py-3">Atender</th> </tr> </thead> <tbody id="citasTableBody"> <!-- Las filas se llenar\xE1n din\xE1micamente --> </tbody> </table> </div> </div> </div> <!-- Tabla de Pacientes --> <div id="pacientesTable" class="hidden w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> <div class="p-4"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lista de Pacientes</h2> <div class="overflow-x-auto"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> <th class="px-6 py-3">Nombre</th> <th class="px-6 py-3">DNI</th> <th class="px-6 py-3">Tel\xE9fono</th> <th class="px-6 py-3">Email</th> </tr> </thead> <tbody id="pacientesTableBody"> <!-- Las filas se llenar\xE1n din\xE1micamente --> </tbody> </table> </div> </div> </div> </div> </div> </div> <script>
	// Constantes globales
	const BASE_URL = 'https://consultorio-odontologico-backend-production-b1c8.up.railway.app/api/';
	
	// Cargar datos del perfil
	window.addEventListener('load', async () => {
		try {
			const userId = localStorage.getItem('userId');
			const userRole = localStorage.getItem('userRole');
	
			if (!userId || !userRole) {
				window.location.href = '/login';
				return;
			}
	
			let endpoint = '';
			if (userRole === 'secretaria') {
				endpoint = \\\`\\\${BASE_URL}/secretaria/buscarId/\\\${userId}\\\`;
			} else if (userRole === 'odontologo') {
				endpoint = \\\`\\\${BASE_URL}/medico/findById/\\\${userId}\\\`;
				
				const especialidadContainer = document.getElementById('especialidadContainer');
				const matriculaContainer = document.getElementById('matriculaContainer');
				
				if (especialidadContainer) especialidadContainer.classList.remove('hidden');
				if (matriculaContainer) matriculaContainer.classList.remove('hidden');
			}
	
			console.log('Endpoint:', endpoint);
			console.log('UserRole:', userRole);
			console.log('UserId:', userId);
	
			const response = await fetch(endpoint);
			if (!response.ok) {
				throw new Error(\\\`HTTP error! status: \\\${response.status}\\\`);
			}
			
			const data = await response.json();
			console.log('Data received:', data);
	
			const userData = userRole === 'secretaria' ? 
				data.secretaria : 
				(data.medico || data);
	
			const updateElement = (id, value) => {
				const element = document.getElementById(id);
				if (element) {
					element.textContent = value || 'No disponible';
				} else {
					console.log(\\\`Elemento con id \\\${id} no encontrado\\\`);
				}
			};
	
			updateElement('userName', userData.nombre);
			updateElement('userEmail', userData.email);
			updateElement('userPhone', userData.celular || userData.telefono);
	
			if (userRole === 'odontologo') {
				updateElement('userEspecialidad', userData.especialidad);
				updateElement('userMatricula', userData.nMatricula);
				setupTables();
			}
	
		} catch (error) {
			console.error('Error loading user data:', error);
			console.error('Error details:', error.message);
			
			const userRole = localStorage.getItem('userRole');
			
			const errorElements = ['userName', 'userEmail', 'userPhone'];
			if (userRole === 'odontologo') {
				errorElements.push('userEspecialidad', 'userMatricula');
			}
			errorElements.forEach(id => {
				const element = document.getElementById(id);
				if (element) {
					element.textContent = 'Error al cargar datos';
				}
			});
		}
	});
	
	function setupTables() {
		const citasButton = document.getElementById('citasButton');
		const pacientesButton = document.getElementById('pacientesButton');
		const citasTable = document.getElementById('citasTable');
		const pacientesTable = document.getElementById('pacientesTable');
		let citasDataTable, pacientesDataTable;
	
		citasButton.addEventListener('click', () => {
			pacientesTable.classList.add('hidden');
			citasTable.classList.remove('hidden');
			cargarCitas();
		});
	
		pacientesButton.addEventListener('click', () => {
			citasTable.classList.add('hidden');
			pacientesTable.classList.remove('hidden');
			cargarPacientes();
		});
	
		// Cargar citas por defecto
		citasButton.click();
	}
	
	async function cargarCitas() {
  const citasTableBody = document.getElementById('citasTableBody');
  try {
    const userId = localStorage.getItem('userId');
    const response = await fetch(\\\`\\\${BASE_URL}/citas/todas\\\`);
    if (!response.ok) throw new Error('Error al cargar citas');
    
    const data = await response.json();
    // Filtrar citas por m\xE9dico
    const citasFiltradas = data.filter(cita => 
      cita.medicoId?._id === userId || cita.medicoId === userId
    );

    citasTableBody.innerHTML = '';

    if (citasFiltradas.length === 0) {
      citasTableBody.innerHTML = \\\`
        <tr>
          <td colspan="5" class="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
            No hay citas programadas
          </td>
        </tr>
      \\\`;
      return;
    }

    citasFiltradas.forEach(cita => {
      const row = document.createElement('tr');
      row.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700';
      
      const fecha = new Date(cita.fecha).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

			const consultaUrl = \\\`/consulta?id=\\\${cita._id}\\\`;

      const estadoClasses = {
        'en_proceso': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        'completada': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        'pendiente': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      };

      row.innerHTML = \\\`
        <td class="px-6 py-4">\\\${fecha}</td>
        <td class="px-6 py-4">\\\${cita.pacienteId?.nombre || 'No disponible'}</td>
        <td class="px-6 py-4">\\\${cita.motivo}</td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 rounded-full text-xs font-medium \\\${estadoClasses[cita.estado] || ''}">\\\${cita.estado}</span>
        </td>
        <td class="px-6 py-4">$\\\${cita.monto || 0}</td>
				<td class="px-6 py-4">
          \\\${cita.estado === 'pendiente' ? \\\`
            <a href="\\\${consultaUrl}"
               class="px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-colors">
                Atender
            </a>
          \\\` : '-'}
        </td>
      \\\`;

      citasTableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error al cargar citas:', error);
    citasTableBody.innerHTML = \\\`
      <tr>
        <td colspan="5" class="px-6 py-4 text-center text-red-500">
          Error al cargar las citas: \\\${error.message}
        </td>
      </tr>
    \\\`;
  }
}

async function cargarPacientes() {
  const pacientesTableBody = document.getElementById('pacientesTableBody');
  try {
    const userId = localStorage.getItem('userId');
    
    // Primero obtenemos todas las citas
    const citasResponse = await fetch(\\\`\\\${BASE_URL}/citas/todas\\\`);
    const citasData = await citasResponse.json();
    
    // Filtramos las citas del m\xE9dico
    const citasDelMedico = citasData.filter(cita => 
      cita.medicoId?._id === userId || cita.medicoId === userId
    );

    // Obtenemos IDs \xFAnicos de pacientes
    const pacientesIds = [...new Set(citasDelMedico.map(cita => 
      cita.pacienteId?._id || cita.pacienteId
    ))];

    pacientesTableBody.innerHTML = '';

    if (pacientesIds.length === 0) {
      pacientesTableBody.innerHTML = \\\`
        <tr>
          <td colspan="4" class="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
            No hay pacientes atendidos
          </td>
        </tr>
      \\\`;
      return;
    }

    // Obtener datos de cada paciente
    for (const pacienteId of pacientesIds) {
      try {
        const pacienteResponse = await fetch(\\\`\\\${BASE_URL}/paciente/findById/\\\${pacienteId}\\\`);
        if (!pacienteResponse.ok) continue;
        
        const { paciente } = await pacienteResponse.json();
        
        const row = document.createElement('tr');
        row.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700';
        
        row.innerHTML = \\\`
          <td class="px-6 py-4">\\\${paciente.nombre || 'No disponible'}</td>
          <td class="px-6 py-4">\\\${paciente.dni || 'No disponible'}</td>
          <td class="px-6 py-4">\\\${paciente.areaCode || ''} \\\${paciente.telefono || 'No disponible'}</td>
          <td class="px-6 py-4">\\\${paciente.mail || 'No disponible'}</td>
        \\\`;

        pacientesTableBody.appendChild(row);
      } catch (error) {
        console.error('Error al cargar datos del paciente:', error);
      }
    }
  } catch (error) {
    console.error('Error al cargar pacientes:', error);
    pacientesTableBody.innerHTML = \\\`
      <tr>
        <td colspan="4" class="px-6 py-4 text-center text-red-500">
          Error al cargar los pacientes: \\\${error.message}
        </td>
      </tr>
    \\\`;
  }
}
	
	// Script de diagn\xF3stico
	setTimeout(() => {
		console.log('=== Diagn\xF3stico de elementos DOM ===');
		['userName', 'userEmail', 'userPhone', 'userEspecialidad', 'userMatricula'].forEach(id => {
			const element = document.getElementById(id);
			console.log(\\\`\\\${id}:\\\`, element ? 'Existe' : 'No existe');
			if (element) {
				console.log(\\\`\\\${id} contenido:\\\`, element.textContent);
			}
		});
	}, 2000);
	<\/script> `])), maybeRenderHead());
}, "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/modules/DashBoard.astro", undefined);

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutProtected", $$LayoutProtected, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LayoutSidebar", $$LayoutSidebar, { "title": "Dashboard" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DashBoard", $$DashBoard, {})} ` })} ` })}`;
}, "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/pages/dashboard.astro", undefined);

const $$file = "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dashboard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
