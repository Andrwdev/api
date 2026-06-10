"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstates = void 0;
const axios_1 = __importStar(require("axios"));
const config_1 = require("../config");
const mapper_1 = require("../mapper");
const mapDestinacion = (destinacion) => {
    if (!destinacion || destinacion === "all")
        return undefined;
    const lower = destinacion.toLowerCase();
    if (lower === "venta" || lower === "arriendo")
        return lower;
    return undefined;
};
const buildRequestBody = (query) => {
    const cantidadporpagina = Number(query.cantidadporpagina) || 4;
    const pagina = Number(query.pagina) || 1;
    const body = {
        cantidadporpagina,
        pagina,
    };
    const destinacion = mapDestinacion(typeof query.destinacion === "string" ? query.destinacion : undefined);
    if (destinacion) {
        body.destinacion = destinacion;
    }
    if (query.codigo !== undefined && query.codigo !== "") {
        const codigo = Number(query.codigo);
        if (!Number.isNaN(codigo)) {
            body.codigo = codigo;
        }
    }
    return body;
};
const getEstates = async (query) => {
    const { user, password, baseUrl } = config_1.config;
    const url = `${baseUrl}/api/inmuebles/consultar_inmuebles/${user}`;
    const body = buildRequestBody(query);
    try {
        const { data, status: code } = await axios_1.default.post(url, body, {
            headers: {
                Authorization: `Bearer ${password}`,
                "Content-Type": "application/json",
            },
        });
        const estates = Array.isArray(data) ? data : [];
        const mappedData = estates.map((estate) => new mapper_1.MapperResponse(estate));
        return { data: mappedData, code };
    }
    catch (error) {
        if ((0, axios_1.isAxiosError)(error) && error.response) {
            console.error("Error consultando inmuebles Softinm:", error.response.status, error.response.data);
            return { data: [], code: error.response.status };
        }
        throw error;
    }
};
exports.getEstates = getEstates;
