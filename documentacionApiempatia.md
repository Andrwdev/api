Consulta de inmuebles
Para consultar los inmuebles disponibles registrados por la inmobiliaria en Softinm Web, se debe realizar una petición Post a la siguiente URL.



Post: https://zonaclientes.softinm.com/api/inmuebles/consultar_inmuebles/nombreEmpresa



Autenticación:

Bearer authentication: (Token principal) El token se debe solicitar Empatia.Co Ltda y es un token por inmobiliaria
nombreEmpresa: Es un dato suministrado por Empatia.Co Ltda y va en la url de todas las consultas.








Parámetros: Los datos no obligatorios pueden enviarse como null o simplemente excluirse del envío. También pueden enviarse con su valor por defecto: si es un string, en vacío (""); si es un dato numérico, en 0; si es un booleano, en false; y si es un datetime, debe ir en null."



cantidadporpagina:

Nos permite limitar la cantidad de inmuebles en una petición.
INT
Obligatorio
pagina:

Nos trae los inmuebles correspondientes a la página dependido del filtro.
INT
Obligatorio
La cantidad de páginas disponibles se agregó como un atributo de cada inmueble.
destinacion:

Nos permite filtrar los inmuebles entre arriendo y venta.
String
No obligatorio
Posibles valores: arriendo | venta
municipio:

Nos permite filtrar los inmuebles dependiendo de los municipios registrados por la inmobiliaria.
String
No obligatorio
Posibles valores: municipios registrados por la inmobiliaria (admite lista separada por coma).
barrio:

Nos permite filtrar los inmuebles dependiendo de los barrios registrados por la inmobiliaria.
String
No obligatorio
Posibles valores: barrios registrados por la inmobiliaria (admite lista separada por coma).
El barrio debe pertenecer al municipio por el cual se está filtrando.
clase:

Nos permite filtrar los inmuebles por el tipo de inmueble.
String
No obligatorio
Posibles valores: Apartamento | Apto-Loft | Amoblados | Apartaestudio | Bodega | Casa | Casa-Finca | Casa-Local | Cuarto Util | Edificio | Finca | Finca de Producción | Hotel | Local | Oficina | Oficina-Local | Oficina-Consultorio | Parqueadero | Terreno
alcobas:

Filtra los inmuebles con la cantidad de alcobas especificadas.
LONG
No obligatorio
banos:

Filtra los inmuebles con la cantidad de baños especificados.
LONG
No obligatorio
preciodesde:

Filtra los inmuebles con precio superior al valor especificado.
LONG
No obligatorio
preciohasta:

Filtra los inmuebles con precio inferior al valor especificado.
LONG
No obligatorio
areadesde:

Filtra los inmuebles con área superior al valor especificado.
LONG
No obligatorio
areahasta:

Filtra los inmuebles con área inferior al valor especificado.
LONG
No obligatorio
estrato:

Filtra los inmuebles por su estrato socioeconómico.
LONG
No obligatorio
Posibles valores: 1 | 2 | 3 | 4 | 5 | 6
amoblado:

Filtra los inmuebles por amoblado (sí/no).
BOOLEAN
No obligatorio
Nota: aquí sí se aplica tanto true como false cuando se envía valor.
ascensor:

Filtra los inmuebles con ascensor.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true, de lo contrario no será aplicado este filtro.
piscina:

Filtra los inmuebles con piscina.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true, de lo contrario no será aplicado este filtro.
unidadcerrada:

Filtra los inmuebles ubicados en unidad cerrada.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
parqueadero:

Filtra los inmuebles que tienen parqueadero.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
destacado:

Filtra los inmuebles destacados.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
inmueble_lujo:

Filtra los inmuebles de lujo.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
fecha_modificacion:

Filtra los inmuebles modificados a partir de la fecha indicada.
DateTime
No obligatorio
Formato recomendado: yyyy-MM-dd o yyyy-MM-ddTHH:mm:ss
codigo:

Filtra por código único del inmueble (consecutivo).
LONG
No obligatorio
balcon:

Filtra inmuebles con balcón.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
patio:

Filtra inmuebles con patio.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
calentador:

Filtra inmuebles con calentador.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
terraza:

Filtra inmuebles con terraza.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
solar:

Filtra inmuebles con solar.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
gas:

Filtra inmuebles que tengan gas (distinto de “no tiene gas”).
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
garaje:

Filtra inmuebles con garaje.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
Parqueadero_Moto:

Filtra inmuebles con parqueadero de moto.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
garaje_cubierto:

Filtra inmuebles con garaje cubierto.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
cuartoutil:

Filtra inmuebles con cuarto útil.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
urbanizacion:

Búsqueda por nombre de urbanización.
String
No obligatorio
Se evalúa por coincidencia parcial.
sauna:

Filtra inmuebles con sauna.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
turco:

Filtra inmuebles con turco.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
shutBasuras:

Filtra inmuebles con shut de basuras.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
vista_panoramica:

Filtra inmuebles con vista panorámica (columna mirador).
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
cancha_microfutbol:

Filtra inmuebles con cancha de microfútbol.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
libre_SsPp:

Filtra inmuebles con SS.PP. libres.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
parqueaderovisitantes:

Filtra inmuebles con parqueadero de visitantes.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
zona_deportiva:

Filtra inmuebles con zonas deportivas.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
zona_verde:

Filtra inmuebles con zonas verdes.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
red_gas:

Filtra inmuebles con red de gas.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
porteria:

Filtra inmuebles con portería.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
salon_social:

Filtra inmuebles con salón social.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
gimnasio:

Filtra inmuebles con gimnasio.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
antejardin:

Filtra inmuebles con antejardín.
BOOLEAN
No obligatorio
Solo se toma en cuenta si es true.
nivel:

Filtra inmuebles por nivel.
LONG
No obligatorio
order:

Ordena los inmuebles dependiendo el valor que se envíe.
String
No obligatorio
Valores que acepta: fecha_consignacion | fecha_ofrecer_inmueble | precio | consecutivo
fecha_consignacion: fecha en la que fue ingresado el inmueble al sistema.
fecha_ofrecer_inmueble: fecha en la que la inmobiliaria decide ofrecer el inmueble.
precio: si la destinación es venta ordena por precio de venta; de lo contrario por canon de arriendo.
consecutivo: código único autoincremental del inmueble.
type_order:

Indica el tipo de ordenamiento (ascendente o descendente).
String
No obligatorio
Valores que acepta: asc | desc
------------------------------

Conversion de campos:



cocina -> 1 Cocina Semi Integral - 2 Cocina Integral - 3 Cocina Integral Mixta - 4 Cocina Sencilla - 5 sin cocina



Ejemplo de respuesta:

[
   {
      "nro_id": "999999999",
      "clase": "Apartamento",
      "unidad_cerrada": false,
      "unidad_abierta": false,
      "urbanizacion": "ORION",
      "area": "45",
      "precio": 0,
      "vlr_admon": 0,
      "estrato": 0,
      "direccion": "CL 5 63 B 86",
      "municipio": "LA ESTRELLA",
      "barrio": "SURAMERICA",
      "arrendado": false,
      "solicitud": false,
      "sostenimiento": "Propietario",
      "telefono": "",
      "llaves_en": "",
      "tipo_servicio": "Venta",
      "sala": false,
      "sala_comedor": true,
      "comedor": false,
      "cocina": 2,
      "gas": 2,
      "bibliotecas": false,
      "salon_social": false,
      "chimenea": false,
      "zona_verde": false,
      "antejardin": false,
      "mirador": false,
      "terraza": false,
      "ascensor": true,
      "estadero": false,
      "solar": false,
      "hall": false,
      "alcobas": 1,
      "closets": 0,
      "lamparas": 0,
      "persianas": 0,
      "vestier": 0,
      "baños": 1,
      "baño_Cabina": false,
      "sanitarios": 0,
      "lavamanos": 0,
      "patios": 0,
      "agua_caliente": false,
      "tanque_h2o": false,
      "pisos": "",
      "nivel": 0,
      "parabolica": "",
      "garaje": 1,
      "garaje_cubierto": true,
      "tipogaraje": 0,
      "juegos": true,
      "piscina": true,
      "sauna": false,
      "jacuzzi": false,
      "alcoba_serv": false,
      "mascotas": false,
      "noniños": false,
      "comedorauxiliar": false,
      "parqueaderovisitantes": true,
      "porteria": true,
      "citofono": false,
      "cuartoutil": false,
      "lineastels": false,
      "multiple": false,
      "mezanine": false,
      "zonaropas": true,
      "bañoSocial": false,
      "bañoExterno": false,
      "arealote": "",
      "areaconstruida": "",
      "frente": "",
      "fondo": "",
      "altura": "",
      "predial": 0,
      "escrituranro": "",
      "edad": "",
      "doblealtura": false,
      "puertacamion": false,
      "capacidadenergia": "",
      "lineastelefonicas": 0,
      "oficinas": 0,
      "divisiones": 0,
      "matriculainmobiliaria": "",
      "avaluocatastral": 0,
      "primerpiso": "",
      "segundopiso": "",
      "tercerpiso": "",
      "codigo_interno": "",
      "amoblado": false,
      "consecutivo": 510,
      "zona": 0,
      "balcon": true,
      "baño_servicio": false,
      "parqueadero_cubierto": false,
      "porteria_tiempo": 3,
      "casa": 0,
      "torre": "",
      "numero_del_garaje": "",
      "numero_cuarto_util": "",
      "resumen": "apartamento con área de 45 metros construidos, contiene 1 alcoba, 1 baño, cocina integral, balcón, excelente vista, 1 garaje, facilidad de acceso, lugar tranquilo, la unidad cuenta con Piscinas, Juegos, Gimnasio, turco, amplias zonas de parqueo para visitantes, portería 24 horas.",
      "ciclo": "",
      "suscripcion": "",
      "vereda": "",
      "clima": "",
      "casa_principal": false,
      "casa_mayordomo": false,
      "campamentos": 0,
      "corralejas": 0,
      "clase_de_pasto": "",
      "galpones": 0,
      "pesebreras": 0,
      "establos": 0,
      "marraneras": 0,
      "potreros": 0,
      "cerca_electrica": false,
      "aguas_vivas": "",
      "agua_Acueducto": false,
      "luz": false,
      "frutales": "",
      "carga_por_hectarea": "",
      "kiosco": false,
      "tierra_ondulada": false,
      "tierra_plana": false,
      "quebrada": false,
      "bañera": false,
      "estufa": false,
      "calentador": false,
      "horno": false,
      "turco": true,
      "zona_deportiva": false,
      "piso_reforzado": false,
      "pagar_impuesto_predial": false,
      "inmueble_tiene_aviso": false,
      "video": "",
      "latitud": "",
      "longitud": "",
      "propietario_alterno": "ESTEBAN SANDOVAL",
      "precio_venta": 165000000,
      "solarium": false,
      "sector": "",
      "cama_doble": false,
      "cama_SemiDoble": false,
      "cama_sencilla": false,
      "cama_coche": false,
      "cama_servicio": false,
      "baño_Full": false,
      "aire_ac": false,
      "serv_internet": false,
      "cantidad_baños_cabina": 0,
      "libre_SsPp": false,
      "ssPp_Compartido": false,
      "camaraSeguridad": false,
      "shutBasuras": false,
      "piscinaInfantil": false,
      "bbq": false,
      "canchaBasquetball": false,
      "canchaSquash": false,
      "canchaTenis": false,
      "canchaMicroFutbol": false,
      "canchaVolleyBall": false,
      "kiosco_Unidad": false,
      "microondas": false,
      "equipoSonido": false,
      "nroCamasKing": 0,
      "nroCamasDobles": 0,
      "nroCamasSemidobles": 0,
      "nroCamasSencillas": 0,
      "nroCamarotes": 0,
      "nroSofaCamas": 0,
      "nroTvPlasmas": 0,
      "nroTvSencillos": 0,
      "nroTvPorCables": 0,
      "nombreWifi": "",
      "claveWifi": "",
      "ventanal": false,
      "gimnasio": true,
      "nevera": false,
      "lavadora": false,
      "secadora": false,
      "wifi": false,
      "agencia": 1,
      "colegios_cercanos": true,
      "nombres_colegios": "",
      "universidades_cercanas": false,
      "nombres_Universidades": "",
      "parques_cercanos": true,
      "nombres_parques": "",
      "sobre_via_ppal": false,
      "supermercados_cercanos": true,
      "centros_comerciales_cercanos": false,
      "transporte_publico_cercano": true,
      "zona_campestre": false,
      "zona_comercial": false,
      "zona_industrial": false,
      "zona_recidencial": true,
      "destacado": false,
      "palabra_clave": "",
      "foto360_1": "",
      "foto360_2": "",
      "foto360_3": "",
      "foto360_4": "",
      "foto360_5": "",
      "foto360_6": "",
      "foto360_7": "",
      "foto360_8": "",
      "foto360_9": "",
      "foto360_10": "",
      "foto360_11": "",
      "foto360_12": "",
      "metatitle": "",
      "metadescripcion": "",
      "metakeywords": "",
      "titulo": null,
      "urlpdf": null,
      "fotopdf": null,
      "parqueaderocubierto": false,
      "parqueadero": false,
      "totalpaginas": 1,
      "totalinmuebles": 2,
      "imagenes": [
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr251985.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr254085.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr249678.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr241760.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr243034.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr886683.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr883383.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr936948.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr935748.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr930966.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr932366.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr018067.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr999241.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr996348.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr99646.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr993630.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr993160.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr990812.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr989462.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr180_sr989458.jpg",
            "alt": ""
         }
      ]
   },
   {
      "nro_id": "999999999",
      "clase": "Apartamento",
      "unidad_cerrada": false,
      "unidad_abierta": false,
      "urbanizacion": "CONJUNTO RESIDENCIAL CACTUS",
      "area": "62",
      "precio": 1250000,
      "vlr_admon": 0,
      "estrato": 0,
      "direccion": "CL 1000 SUR 53 208 AP 9702",
      "municipio": "LA ESTRELLA",
      "barrio": "SURAMERICA",
      "arrendado": false,
      "solicitud": false,
      "sostenimiento": "Propietario",
      "telefono": "",
      "llaves_en": "OFICINA CCI",
      "tipo_servicio": "Arriendo",
      "sala": false,
      "sala_comedor": true,
      "comedor": false,
      "cocina": 2,
      "gas": 2,
      "bibliotecas": false,
      "salon_social": true,
      "chimenea": false,
      "zona_verde": true,
      "antejardin": false,
      "mirador": false,
      "terraza": false,
      "ascensor": true,
      "estadero": false,
      "solar": false,
      "hall": false,
      "alcobas": 2,
      "closets": 2,
      "lamparas": 0,
      "persianas": 0,
      "vestier": 0,
      "baños": 2,
      "baño_Cabina": false,
      "sanitarios": 0,
      "lavamanos": 2,
      "patios": 0,
      "agua_caliente": false,
      "tanque_h2o": false,
      "pisos": "CERAMICA",
      "nivel": 0,
      "parabolica": "",
      "garaje": 0,
      "garaje_cubierto": true,
      "tipogaraje": 3,
      "juegos": true,
      "piscina": true,
      "sauna": false,
      "jacuzzi": false,
      "alcoba_serv": false,
      "mascotas": false,
      "noniños": false,
      "comedorauxiliar": false,
      "parqueaderovisitantes": true,
      "porteria": true,
      "citofono": true,
      "cuartoutil": true,
      "lineastels": false,
      "multiple": false,
      "mezanine": false,
      "zonaropas": true,
      "bañoSocial": false,
      "bañoExterno": false,
      "arealote": "",
      "areaconstruida": "",
      "frente": "",
      "fondo": "",
      "altura": "",
      "predial": 0,
      "escrituranro": "",
      "edad": "",
      "doblealtura": false,
      "puertacamion": false,
      "capacidadenergia": "",
      "lineastelefonicas": 0,
      "oficinas": 0,
      "divisiones": 0,
      "matriculainmobiliaria": "",
      "avaluocatastral": 0,
      "primerpiso": "",
      "segundopiso": "",
      "tercerpiso": "",
      "codigo_interno": "",
      "amoblado": false,
      "consecutivo": 624,
      "zona": 0,
      "balcon": true,
      "baño_servicio": false,
      "parqueadero_cubierto": true,
      "porteria_tiempo": 3,
      "casa": 0,
      "torre": "",
      "numero_del_garaje": "",
      "numero_cuarto_util": "",
      "resumen": "apartamento en sector suramerica, 62m, 2 alcobas, 2 baños, cocina integral, sala comedor, zona de ropas, 2 balcones.\nla unidad cuenta con vigilancia 24h, piscina, gimnasio dotado, salon social, canchas, zona infantil.\ncuenta con un aprqueadero privado cubierto y cuarto util.",
      "ciclo": "",
      "suscripcion": "",
      "vereda": "",
      "clima": "",
      "casa_principal": false,
      "casa_mayordomo": false,
      "campamentos": 0,
      "corralejas": 0,
      "clase_de_pasto": "",
      "galpones": 0,
      "pesebreras": 0,
      "establos": 0,
      "marraneras": 0,
      "potreros": 0,
      "cerca_electrica": false,
      "aguas_vivas": "",
      "agua_Acueducto": false,
      "luz": false,
      "frutales": "",
      "carga_por_hectarea": "",
      "kiosco": false,
      "tierra_ondulada": false,
      "tierra_plana": false,
      "quebrada": false,
      "bañera": false,
      "estufa": false,
      "calentador": false,
      "horno": false,
      "turco": true,
      "zona_deportiva": true,
      "piso_reforzado": false,
      "pagar_impuesto_predial": false,
      "inmueble_tiene_aviso": false,
      "video": "",
      "latitud": "",
      "longitud": "",
      "propietario_alterno": "JUAN DIEGO",
      "precio_venta": 0,
      "solarium": false,
      "sector": "",
      "cama_doble": false,
      "cama_SemiDoble": false,
      "cama_sencilla": false,
      "cama_coche": false,
      "cama_servicio": false,
      "baño_Full": false,
      "aire_ac": false,
      "serv_internet": false,
      "cantidad_baños_cabina": 0,
      "libre_SsPp": false,
      "ssPp_Compartido": false,
      "camaraSeguridad": false,
      "shutBasuras": false,
      "piscinaInfantil": false,
      "bbq": false,
      "canchaBasquetball": false,
      "canchaSquash": false,
      "canchaTenis": false,
      "canchaMicroFutbol": false,
      "canchaVolleyBall": false,
      "kiosco_Unidad": false,
      "microondas": false,
      "equipoSonido": false,
      "nroCamasKing": 0,
      "nroCamasDobles": 0,
      "nroCamasSemidobles": 0,
      "nroCamasSencillas": 0,
      "nroCamarotes": 0,
      "nroSofaCamas": 0,
      "nroTvPlasmas": 0,
      "nroTvSencillos": 0,
      "nroTvPorCables": 0,
      "nombreWifi": "",
      "claveWifi": "",
      "ventanal": false,
      "gimnasio": true,
      "nevera": false,
      "lavadora": false,
      "secadora": false,
      "wifi": false,
      "agencia": 1,
      "colegios_cercanos": true,
      "nombres_colegios": "",
      "universidades_cercanas": false,
      "nombres_Universidades": "",
      "parques_cercanos": true,
      "nombres_parques": "",
      "sobre_via_ppal": true,
      "supermercados_cercanos": true,
      "centros_comerciales_cercanos": true,
      "transporte_publico_cercano": true,
      "zona_campestre": false,
      "zona_comercial": true,
      "zona_industrial": false,
      "zona_recidencial": true,
      "destacado": false,
      "palabra_clave": "",
      "foto360_1": "",
      "foto360_2": "",
      "foto360_3": "",
      "foto360_4": "",
      "foto360_5": "",
      "foto360_6": "",
      "foto360_7": "",
      "foto360_8": "",
      "foto360_9": "",
      "foto360_10": "",
      "foto360_11": "",
      "foto360_12": "",
      "metatitle": "",
      "metadescripcion": "",
      "metakeywords": "",
      "titulo": null,
      "urlpdf": null,
      "fotopdf": null,
      "parqueaderocubierto": false,
      "parqueadero": false,
      "totalpaginas": 1,
      "totalinmuebles": 2,
      "imagenes": [
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr211413.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr829325.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr829822.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr819673.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr816095.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr809691.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr80965.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr803937.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr801967.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr811335.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr795329.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr790081.jpg",
            "alt": ""
         },
         {
            "fotourl": "http://www.empatia.co/Empatia/sr179_sr788892.jpg",
            "alt": ""
         }
      ]
   }
]