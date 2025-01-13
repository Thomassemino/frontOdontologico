/* empty css                                      */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as addAttribute, b as renderSlot } from '../../chunks/astro/server_CRM8sbCC.mjs';
import { $ as $$CopyrightNotice } from '../../chunks/CopyrightNotice_B6bKuU4G.mjs';
import { u as url, $ as $$LayoutCommon, a as asset } from '../../chunks/LayoutCommon_B2LeAhyB.mjs';
export { renderers } from '../../renderers.mjs';

const $$FooterStacked = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="md:flex md:items-center md:justify-between px-4 2xl:px-0 py-6 md:py-10"> ${renderComponent($$result, "CopyrightNotice", $$CopyrightNotice, {})} <ul class="flex flex-wrap items-center justify-center"> <li> <a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms</a> </li> <li> <a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a> </li> <li> <a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Cookie Policy</a> </li> <li> <a href="#" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a> </li> </ul> </footer>`;
}, "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/app/FooterStacked.astro", undefined);

const $$NavBarStacked = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed z-50 w-full bg-white border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700"> <div class="container py-3 mx-auto"> <div class="flex items-center justify-between"> <div class="flex items-center justify-start"> <a class="flex mr-4"> <img src="/src/assets/logo.png" class="h-8 mr-3" alt="Flowbite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> </a> <div class="hidden sm:flex sm:ml-6"> <ul class="flex space-x-8"> <li> <a${addAttribute(url(), "href")} class="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Home</a> </li> <li> <a href="#" class="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Team</a> </li> <li> <a href="#" class="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Pricing</a> </li> <li> <a href="#" class="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Contact</a> </li> </ul> </div> </div> <div> <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path> </svg>
Login/Register
</a> <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center justify-center p-2 ml-3 text-gray-400 rounded-lg sm:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:hover:bg-gray-700 dark:hover:text-white" aria-controls="mobile-menu-2" aria-expanded="false"> <span class="sr-only">Open main menu</span> <!-- Open mobile menu icon --> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path> </svg> <!-- Close mobile menu icon --> <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> </div> </div> </div> <!-- Mobile menu --> <div class="hidden sm:hidden" id="mobile-menu"> <ul class="pt-2"> <li> <a href="#" class="block py-2 pl-3 pr-4 text-base font-normal text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Team</a> </li> <li> <a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Projects</a> </li> <li> <a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Calendar
</a> </li> <li class="block"> <a href="#" class="inline-flex items-center w-full px-3 py-2 text-base font-normal text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path> </svg>
Login/Register
</a> </li> </ul> </div> </nav>`;
}, "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/app/NavBarStacked.astro", undefined);

const $$LayoutStacked = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutCommon", $$LayoutCommon, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBarStacked", $$NavBarStacked, {})} ${maybeRenderHead()}<div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900"> <div id="main-content" class="relative w-full max-w-screen-2xl mx-auto h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 min-h-screen"> <div class="px-4 pt-6 2xl:px-0"> ${renderSlot($$result2, $$slots["default"])} </div> ${renderComponent($$result2, "FooterStacked", $$FooterStacked, {})} </div> </div> ` })}`;
}, "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/app/LayoutStacked.astro", undefined);

const $$ErrorNotFound = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900"> <div class="block md:max-w-lg"> <img${addAttribute(asset("images/illustrations/404.svg"), "src")} alt="astronaut image"> </div> <div class="text-center xl:max-w-4xl"> <h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
Page not found
</h1> <p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
Oops! Looks like you followed a bad link. If you think this is a problem
			with us, please tell us.
</p> <a${addAttribute(url(""), "href")} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
Go back home
</a> </div> </div>`;
}, "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/modules/ErrorNotFound.astro", undefined);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorNotFound", $$ErrorNotFound, {})} ` })}`;
}, "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/pages/pages/404.astro", undefined);

const $$file = "C:/Users/Windows/Documents/Odontograma/frontOdontologico/src/pages/pages/404.astro";
const $$url = "/pages/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
