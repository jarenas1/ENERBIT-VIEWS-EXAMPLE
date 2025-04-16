// Array de objetos con la estructura solicitada para cada frontera
const fronteras = [
    {
      requerimiento: {
        tipoFroontera: "Tipo regulado",
        requerimiento: "1234567",
        contacto: "Juan Pérez",
        fechaSolicitudRegistro: "2025-04-01",
        fechaPosibleRegistro: "2025-04-15",
        representanteFrontera: "María López",
        tipoRequerimiento: "Registro nuevo"
      },
      frontera: {
        nombreFronteraComercial: "Frontera Norte",
        pais: "Colombia",
        departamento: "Antioquia",
        ciudad: "Medellín",
        centroPoblado: "El Poblado",
        longitud: "-75.567",
        latitud: "6.244",
        altitud: "1500",
        tipoModelo: "Modelo A",
        codigoSic: "SIC123",
        operadorRed: "Operador 1",
        mercadoDecComercializacion: "Colombiano",
        tensionPuntoMedida: "0.20",
        nivelTension: "11",
        usuarioConectadoStn: "Si"
      },
      usuario: {
        nit: "900123456-7",
        razonSocial: "Empresa Uno",
        ciiuTipo: "Comercio",
        codioCiiu: "CIIU001",
        niu: "1001"
      },
      ewquiposDeMedida: {
        numeroSerie: "SER123",
        esBidireccional: "Si",
        tipoContador: "Digital",
        modelo: "Modelo X",
        marca: "Marca A",
        empresaRealizoCalibracion: "Calibradora 1",
        numElementoUsados: "3",
        tipoPuntoMedicion: "Punto 1",
        fechcaCalibnracion: "2025-03-01",
        claseContador: "Clase 1",
        claseTransofrmadorPotencial: "Clase A",
        claseTransformadorCorriente: "Clase B"
      },
      curvaTipica: {
        dia: "Lunes",
        periodo: "Mañana",
        valor: "0.75"
      },
      certificaciones: {
        SIC200: "Si",
        SIC156: "No",
        SIC157: "Si",
        esNueva: "Si",
        esPorCambioDeUbicacion: "No",
        SIC058: "Si",
        SIC108: "No"
      },
      adjuntos: {
        certificadoCalibracion: "calibracion1.pdf",
        plantillaEquiposMedida: "plantilla1.pdf",
        pazYSalvo: "pazysalvo1.pdf"
      }
    },
    {
      requerimiento: {
        tipoFroontera: "Tipo no regulado",
        requerimiento: "2345678",
        contacto: "Mariana Rodríguez",
        fechaSolicitudRegistro: "2025-05-02",
        fechaPosibleRegistro: "2025-05-20",
        representanteFrontera: "Carlos Gómez",
        tipoRequerimiento: "Modificación"
      },
      frontera: {
        nombreFronteraComercial: "Frontera Sur",
        pais: "Colombia",
        departamento: "Cundinamarca",
        ciudad: "Bogotá",
        centroPoblado: "Usaquén",
        longitud: "-74.076",
        latitud: "4.711",
        altitud: "2600",
        tipoModelo: "Modelo B",
        codigoSic: "SIC234",
        operadorRed: "Operador 2",
        mercadoDecComercializacion: "Extranjero",
        tensionPuntoMedida: "0.30",
        nivelTension: "13",
        usuarioConectadoStn: "No"
      },
      usuario: {
        nit: "900234567-8",
        razonSocial: "Empresa Dos",
        ciiuTipo: "Industrial",
        codioCiiu: "CIIU002",
        niu: "1002"
      },
      ewquiposDeMedida: {
        numeroSerie: "SER234",
        esBidireccional: "No",
        tipoContador: "Analógico",
        modelo: "Modelo Y",
        marca: "Marca B",
        empresaRealizoCalibracion: "Calibradora 2",
        numElementoUsados: "2",
        tipoPuntoMedicion: "Punto 2",
        fechcaCalibnracion: "2025-04-15",
        claseContador: "Clase 2",
        claseTransofrmadorPotencial: "Clase B",
        claseTransformadorCorriente: "Clase C"
      },
      curvaTipica: {
        dia: "Martes",
        periodo: "Tarde",
        valor: "0.85"
      },
      certificaciones: {
        SIC200: "No",
        SIC156: "Si",
        SIC157: "No",
        esNueva: "No",
        esPorCambioDeUbicacion: "Si",
        SIC058: "No",
        SIC108: "Si"
      },
      adjuntos: {
        certificadoCalibracion: "calibracion2.pdf",
        plantillaEquiposMedida: "plantilla2.pdf",
        pazYSalvo: "pazysalvo2.pdf"
      }
    },
    {
      requerimiento: {
        tipoFroontera: "Tipo regulado",
        requerimiento: "3456789",
        contacto: "Luis Martínez",
        fechaSolicitudRegistro: "2025-06-10",
        fechaPosibleRegistro: "2025-06-25",
        representanteFrontera: "Ana Gómez",
        tipoRequerimiento: "Registro nuevo"
      },
      frontera: {
        nombreFronteraComercial: "Frontera Este",
        pais: "Colombia",
        departamento: "Valle del Cauca",
        ciudad: "Cali",
        centroPoblado: "Samaná",
        longitud: "-76.520",
        latitud: "3.450",
        altitud: "950",
        tipoModelo: "Modelo C",
        codigoSic: "SIC345",
        operadorRed: "Operador 3",
        mercadoDecComercializacion: "Colombiano",
        tensionPuntoMedida: "0.25",
        nivelTension: "12",
        usuarioConectadoStn: "Si"
      },
      usuario: {
        nit: "900345678-9",
        razonSocial: "Empresa Tres",
        ciiuTipo: "Servicios",
        codioCiiu: "CIIU003",
        niu: "1003"
      },
      ewquiposDeMedida: {
        numeroSerie: "SER345",
        esBidireccional: "Si",
        tipoContador: "Digital",
        modelo: "Modelo Z",
        marca: "Marca C",
        empresaRealizoCalibracion: "Calibradora 3",
        numElementoUsados: "4",
        tipoPuntoMedicion: "Punto 3",
        fechcaCalibnracion: "2025-05-20",
        claseContador: "Clase 1",
        claseTransofrmadorPotencial: "Clase A",
        claseTransformadorCorriente: "Clase B"
      },
      curvaTipica: {
        dia: "Miércoles",
        periodo: "Noche",
        valor: "0.95"
      },
      certificaciones: {
        SIC200: "Si",
        SIC156: "Si",
        SIC157: "No",
        esNueva: "Si",
        esPorCambioDeUbicacion: "No",
        SIC058: "Si",
        SIC108: "No"
      },
      adjuntos: {
        certificadoCalibracion: "calibracion3.pdf",
        plantillaEquiposMedida: "plantilla3.pdf",
        pazYSalvo: "pazysalvo3.pdf"
      }
    },
    {
      requerimiento: {
        tipoFroontera: "Tipo no regulado",
        requerimiento: "4567890",
        contacto: "Patricia Morales",
        fechaSolicitudRegistro: "2025-07-05",
        fechaPosibleRegistro: "2025-07-20",
        representanteFrontera: "Roberto Sánchez",
        tipoRequerimiento: "Modificación"
      },
      frontera: {
        nombreFronteraComercial: "Frontera Occidental",
        pais: "Colombia",
        departamento: "Santander",
        ciudad: "Bucaramanga",
        centroPoblado: "Cabecera",
        longitud: "-73.125",
        latitud: "7.125",
        altitud: "1000",
        tipoModelo: "Modelo D",
        codigoSic: "SIC456",
        operadorRed: "Operador 4",
        mercadoDecComercializacion: "Extranjero",
        tensionPuntoMedida: "0.30",
        nivelTension: "10",
        usuarioConectadoStn: "No"
      },
      usuario: {
        nit: "900456789-0",
        razonSocial: "Empresa Cuatro",
        ciiuTipo: "Construcción",
        codioCiiu: "CIIU004",
        niu: "1004"
      },
      ewquiposDeMedida: {
        numeroSerie: "SER456",
        esBidireccional: "No",
        tipoContador: "Analógico",
        modelo: "Modelo W",
        marca: "Marca D",
        empresaRealizoCalibracion: "Calibradora 4",
        numElementoUsados: "2",
        tipoPuntoMedicion: "Punto 4",
        fechcaCalibnracion: "2025-06-15",
        claseContador: "Clase 2",
        claseTransofrmadorPotencial: "Clase B",
        claseTransformadorCorriente: "Clase C"
      },
      curvaTipica: {
        dia: "Jueves",
        periodo: "Mañana",
        valor: "0.85"
      },
      certificaciones: {
        SIC200: "No",
        SIC156: "No",
        SIC157: "Si",
        esNueva: "No",
        esPorCambioDeUbicacion: "Si",
        SIC058: "No",
        SIC108: "Si"
      },
      adjuntos: {
        certificadoCalibracion: "calibracion4.pdf",
        plantillaEquiposMedida: "plantilla4.pdf",
        pazYSalvo: "pazysalvo4.pdf"
      }
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedorFronteras");
    contenedor.innerHTML = "";
  
    fronteras.forEach((f, idx) => {
      const div = document.createElement("div");
      div.className = "frontera";
      div.innerHTML = `
        <h3>Registro ${idx + 1}: ${f.frontera.nombreFronteraComercial}</h3>
        <div class="seccion">
          <strong>Requerimiento:</strong>
          Tipo Frontera: ${f.requerimiento.tipoFroontera}<br>
          Requerimiento: ${f.requerimiento.requerimiento}<br>
          Contacto: ${f.requerimiento.contacto}<br>
          Fecha Solicitud: ${f.requerimiento.fechaSolicitudRegistro}<br>
          Fecha Posible Registro: ${f.requerimiento.fechaPosibleRegistro}<br>
          Representante: ${f.requerimiento.representanteFrontera}<br>
          Tipo de Requerimiento: ${f.requerimiento.tipoRequerimiento}
        </div>
        <div class="seccion">
          <strong>Frontera:</strong>
          Nombre Comercial: ${f.frontera.nombreFronteraComercial}<br>
          País: ${f.frontera.pais}<br>
          Departamento: ${f.frontera.departamento}<br>
          Ciudad: ${f.frontera.ciudad}<br>
          Centro Poblado: ${f.frontera.centroPoblado}<br>
          Longitud: ${f.frontera.longitud}<br>
          Latitud: ${f.frontera.latitud}<br>
          Altitud: ${f.frontera.altitud}<br>
          Tipo de Modelo: ${f.frontera.tipoModelo}<br>
          Código SIC: ${f.frontera.codigoSic}<br>
          Operador de Red: ${f.frontera.operadorRed}<br>
          Mercado de Comercialización: ${f.frontera.mercadoDecComercializacion}<br>
          Tensión en Punto de Medida: ${f.frontera.tensionPuntoMedida}<br>
          Nivel de Tensión: ${f.frontera.nivelTension}<br>
          Usuario Conectado STN: ${f.frontera.usuarioConectadoStn}
        </div>
        <div class="seccion">
          <strong>Usuario:</strong>
          NIT: ${f.usuario.nit}<br>
          Razón Social: ${f.usuario.razonSocial}<br>
          CIIU Tipo: ${f.usuario.ciiuTipo}<br>
          Código CIIU: ${f.usuario.codioCiiu}<br>
          NIU: ${f.usuario.niu}
        </div>
        <div class="seccion">
          <strong>Equipos de Medida:</strong>
          <ul>
            <li>Número de Serie: ${f.ewquiposDeMedida.numeroSerie}</li>
            <li>Es Bidireccional: ${f.ewquiposDeMedida.esBidireccional}</li>
            <li>Tipo Contador: ${f.ewquiposDeMedida.tipoContador}</li>
            <li>Modelo: ${f.ewquiposDeMedida.modelo}</li>
            <li>Marca: ${f.ewquiposDeMedida.marca}</li>
            <li>Empresa que realizó calibración: ${f.ewquiposDeMedida.empresaRealizoCalibracion}</li>
            <li>Número de Elementos Usados: ${f.ewquiposDeMedida.numElementoUsados}</li>
            <li>Tipo de Punto de Medición: ${f.ewquiposDeMedida.tipoPuntoMedicion}</li>
            <li>Fecha de Calibración: ${f.ewquiposDeMedida.fechcaCalibnracion}</li>
            <li>Clase de Contador: ${f.ewquiposDeMedida.claseContador}</li>
            <li>Clase de Transformador Potencial: ${f.ewquiposDeMedida.claseTransofrmadorPotencial}</li>
            <li>Clase de Transformador Corriente: ${f.ewquiposDeMedida.claseTransformadorCorriente}</li>
          </ul>
        </div>
        <div class="seccion">
          <strong>Curva Típica:</strong>
          Día: ${f.curvaTipica.dia}<br>
          Periodo: ${f.curvaTipica.periodo}<br>
          Valor: ${f.curvaTipica.valor}
        </div>
        <div class="seccion">
          <strong>Certificaciones:</strong>
          SIC200: ${f.certificaciones.SIC200}<br>
          SIC156: ${f.certificaciones.SIC156}<br>
          SIC157: ${f.certificaciones.SIC157}<br>
          Es Nueva: ${f.certificaciones.esNueva}<br>
          Por Cambio de Ubicación: ${f.certificaciones.esPorCambioDeUbicacion}<br>
          SIC058: ${f.certificaciones.SIC058}<br>
          SIC108: ${f.certificaciones.SIC108}
        </div>
        <div class="seccion">
          <strong>Adjuntos:</strong>
          <ul>
            <li>Certificado Calibración: <a href="${f.adjuntos.certificadoCalibracion}" target="_blank">${f.adjuntos.certificadoCalibracion}</a></li>
            <li>Plantilla Equipos de Medida: <a href="${f.adjuntos.plantillaEquiposMedida}" target="_blank">${f.adjuntos.plantillaEquiposMedida}</a></li>
            <li>Paz y Salvo: <a href="${f.adjuntos.pazYSalvo}" target="_blank">${f.adjuntos.pazYSalvo}</a></li>
          </ul>
        </div>
      `;
      contenedor.appendChild(div);
    });
  });
  