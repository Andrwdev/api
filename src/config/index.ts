/**
 * API_USER: nombre de empresa (nombreEmpresa) en la URL de Softinm.
 * API_PASSWORD: token Bearer JWT solicitado a Empatia.Co Ltda.
 * API_BASE_URL: host base (ej. https://zonaclientes.softinm.com).
 */
export const config = {
    user: process.env.API_USER,
    password: process.env.API_PASSWORD,
    baseUrl: process.env.API_BASE_URL,
};
