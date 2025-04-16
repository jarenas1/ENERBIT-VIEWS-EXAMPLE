// Array de fronteras existente (puedes tener datos previos)
let fronteras = [
    // Puedes incluir registros previos si lo deseas o dejar el array vacío.
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
    }
  ];
  
  // Función para renderizar la tabla de preview
  function renderPreviewTable() {
    const tbody = document.querySelector("#previewTable tbody");
    tbody.innerHTML = "";
    fronteras.forEach((f, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${f.frontera.nombreFronteraComercial}</td>
        <td>${f.frontera.ciudad}</td>
        <td>${f.requerimiento.contacto}</td>
        <td>${f.requerimiento.tipoRequerimiento}</td>
        <td>${f.frontera.usuarioConectadoStn}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Mostrar/Ocultar el formulario
  const btnCrear = document.getElementById("btnCrear");
  const formSection = document.getElementById("formSection");
  const btnCancelar = document.getElementById("btnCancelar");
  
  btnCrear.addEventListener("click", () => {
    formSection.classList.remove("hidden");
  });
  
  btnCancelar.addEventListener("click", () => {
    formSection.classList.add("hidden");
    document.getElementById("fronteraForm").reset();
  });
  
  // Manejo del formulario
  const fronteraForm = document.getElementById("fronteraForm");
  
  fronteraForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Extraer datos del formulario usando FormData
    const formData = new FormData(fronteraForm);
  
    // Construir el objeto con la estructura solicitada
    const nuevoRegistro = {
      requerimiento: {
        tipoFroontera: formData.get("tipoFroontera"),
        requerimiento: formData.get("requerimiento"),
        contacto: formData.get("contacto"),
        fechaSolicitudRegistro: formData.get("fechaSolicitudRegistro"),
        fechaPosibleRegistro: formData.get("fechaPosibleRegistro"),
        representanteFrontera: formData.get("representanteFrontera"),
        tipoRequerimiento: formData.get("tipoRequerimiento")
      },
      frontera: {
        nombreFronteraComercial: formData.get("nombreFronteraComercial"),
        pais: formData.get("pais"),
        departamento: formData.get("departamento"),
        ciudad: formData.get("ciudad"),
        centroPoblado: formData.get("centroPoblado"),
        longitud: formData.get("longitud"),
        latitud: formData.get("latitud"),
        altitud: formData.get("altitud"),
        tipoModelo: formData.get("tipoModelo"),
        codigoSic: formData.get("codigoSic"),
        operadorRed: formData.get("operadorRed"),
        mercadoDecComercializacion: formData.get("mercadoDecComercializacion"),
        tensionPuntoMedida: formData.get("tensionPuntoMedida"),
        nivelTension: formData.get("nivelTension"),
        usuarioConectadoStn: formData.get("usuarioConectadoStn")
      },
      usuario: {
        nit: formData.get("nit"),
        razonSocial: formData.get("razonSocial"),
        ciiuTipo: formData.get("ciiuTipo"),
        codioCiiu: formData.get("codioCiiu"),
        niu: formData.get("niu")
      },
      ewquiposDeMedida: {
        numeroSerie: formData.get("numeroSerie"),
        esBidireccional: formData.get("esBidireccional"),
        tipoContador: formData.get("tipoContador"),
        modelo: formData.get("modelo"),
        marca: formData.get("marca"),
        empresaRealizoCalibracion: formData.get("empresaRealizoCalibracion"),
        numElementoUsados: formData.get("numElementoUsados"),
        tipoPuntoMedicion: formData.get("tipoPuntoMedicion"),
        fechcaCalibnracion: formData.get("fechcaCalibnracion"),
        claseContador: formData.get("claseContador"),
        claseTransofrmadorPotencial: formData.get("claseTransofrmadorPotencial"),
        claseTransformadorCorriente: formData.get("claseTransformadorCorriente")
      },
      curvaTipica: {
        dia: formData.get("dia"),
        periodo: formData.get("periodo"),
        valor: formData.get("valor")
      },
      certificaciones: {
        SIC200: formData.get("SIC200"),
        SIC156: formData.get("SIC156"),
        SIC157: formData.get("SIC157"),
        esNueva: formData.get("esNueva"),
        esPorCambioDeUbicacion: formData.get("esPorCambioDeUbicacion"),
        SIC058: formData.get("SIC058"),
        SIC108: formData.get("SIC108")
      },
      adjuntos: {
        certificadoCalibracion: formData.get("certificadoCalibracion"),
        plantillaEquiposMedida: formData.get("plantillaEquiposMedida"),
        pazYSalvo: formData.get("pazYSalvo")
      }
    };
  
    // Simulación: Validar que algunos campos obligatorios tengan valor
    if (!nuevoRegistro.requerimiento.requerimiento || !nuevoRegistro.frontera.nombreFronteraComercial) {
      alert("Error: Por favor, complete los campos obligatorios.");
      return;
    }
  
    // Agregar el nuevo registro al array
    fronteras.push(nuevoRegistro);
  
    // Actualizar la tabla de preview
    renderPreviewTable();
  
    // Resetear y ocultar el formulario
    fronteraForm.reset();
    formSection.classList.add("hidden");
  
    // Alertar sobre el éxito
    alert("¡Frontera creada correctamente!");
  });
  
  // Al cargar la página, renderizamos la tabla
  document.addEventListener("DOMContentLoaded", renderPreviewTable);
  