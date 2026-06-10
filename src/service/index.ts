import axios, { isAxiosError } from "axios";
import { config } from "../config";
import { MapperResponse } from "../mapper";
import { IEstate } from "../interfaces/estates";
import { IQuery } from "../interfaces/query";

const mapDestinacion = (destinacion?: string): string | undefined => {
    if (!destinacion || destinacion === "all") return undefined;
    const lower = destinacion.toLowerCase();
    if (lower === "venta" || lower === "arriendo") return lower;
    return undefined;
};

const buildRequestBody = (query: IQuery) => {
    const cantidadporpagina = Number(query.cantidadporpagina) || 4;
    const pagina = Number(query.pagina) || 1;

    const body: Record<string, number | string> = {
        cantidadporpagina,
        pagina,
    };

    const destinacion = mapDestinacion(
        typeof query.destinacion === "string" ? query.destinacion : undefined
    );
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

export const getEstates = async (query: IQuery) => {
    const { user, password, baseUrl } = config;

    const url = `${baseUrl}/api/inmuebles/consultar_inmuebles/${user}`;
    const body = buildRequestBody(query);

    try {
        const { data, status: code } = await axios.post<IEstate[]>(url, body, {
            headers: {
                Authorization: `Bearer ${password}`,
                "Content-Type": "application/json",
            },
        });

        const estates = Array.isArray(data) ? data : [];
        const mappedData = estates.map((estate) => new MapperResponse(estate));

        return { data: mappedData, code };
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.error(
                "Error consultando inmuebles Softinm:",
                error.response.status,
                error.response.data
            );
            return { data: [], code: error.response.status };
        }
        throw error;
    }
};
