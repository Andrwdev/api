"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/**
 * API_USER: nombre de empresa (nombreEmpresa) en la URL de Softinm.
 * API_PASSWORD: token Bearer JWT solicitado a Empatia.Co Ltda.
 * API_BASE_URL: host base (ej. https://zonaclientes.softinm.com).
 */
exports.config = {
    user: process.env.API_USER,
    password: process.env.API_PASSWORD,
    baseUrl: process.env.API_BASE_URL,
};
