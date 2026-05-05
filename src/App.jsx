import {
  Card,
  FlowSidebar,
  HDIFooter,
  HDIHeader,
  ImageBlock,
  InfoBox,
  PageContainer,
  SectionHeader,
  StepList,
  SuccessBox,
  WarningBox,
} from './components/hdi';

const flowSections = [
  {
    id: 'creacion-expediente',
    shortTitle: 'Creación del expediente',
    title: 'Creación del expediente',
    status: 'active',
    description: 'Inicio operativo del flujo para crear el expediente antes de solicitar documentos al afectado.',
    steps: [
      {
        title: 'Paso 1: Visualización de expedientes creados',
        items: [
          {
            text: ' se tendrá un gestor de siniestros mostrados del más reciente al más antiguo.',
            linkFirst: true,
            link: {
              label: 'En la página inicial para crear siniestros',
              href: 'https://hdi-two.vercel.app/casos',
            },
          },
          'Se podrá ver los datos del afectado, VIN, fecha de creación y el estatus actual del siniestro.',
        ],
        image: {
          src: '/flow-images/creacion-expediente-paso-1-listado.png',
          alt: 'Listado de casos creados en el gestor de siniestros',
          description: 'Vista inicial del gestor de siniestros con expedientes ordenados del más reciente al más antiguo.',
        },
      },
      {
        title: 'Paso 2: Crear nuevo siniestro',
        items: [
          'Al hacer clic en el botón de la esquina superior derecha "Nuevo Caso", se desplegará una pantalla con un pequeño formulario.',
          'En dicho formulario se ingresará la información del siniestro: número de reporte, número de siniestro, nombre, tipo de persona, correo electrónico del usuario en HDI que jugará a ser afectado, teléfono y VIN.',
          'Al ingresar esta información se habilitará el botón "Crear caso"; al hacer clic ahí se detonará el inicio del proceso para el afectado.',
        ],
        image: {
          src: '/flow-images/creacion-expediente-paso-2-nuevo-caso.png',
          alt: 'Botón Nuevo caso en el gestor de siniestros',
          description: 'Acceso para crear un nuevo caso desde la esquina superior derecha del gestor.',
        },
        images: [
          {
            src: '/flow-images/creacion-expediente-paso-2-formulario.png',
            alt: 'Formulario de nuevo caso',
            description: 'Formulario para capturar la información del siniestro y crear el caso.',
          },
        ],
      },
    ],
    considerations: [],
    errors: [],
    image: null,
    result: '',
    hideSectionBlocks: true,
  },
  {
    id: 'inicio-carga-documentos',
    shortTitle: 'Carga de documentos',
    title: 'Inicio: Carga de documentos',
    status: 'active',
    description: 'Iniciar correctamente el expediente y subir documentación completa.',
    steps: [
      {
        title: 'Paso 1: Recepción de correo de creación de siniestro',
        items: [
          'En este correo tendrás la lista de documentos que necesitaremos para continuar con el proceso.',
          'Una vez que el afectado haya leído este correo, tiene que hacer clic en el botón "Subir Documentos".',
        ],
        image: {
          src: '/flow-images/inicio-carga-documentos-paso-1.png',
          alt: 'Correo de Nexcar para subir documentos del siniestro',
          description: 'Correo recibido por el afectado para iniciar la carga de documentos.',
        },
      },
      {
        title: 'Paso 2: Pantalla de carga de documentos',
        items: [
          'Al entrar a la pantalla de documentos, podrás ver que el proceso se divide en tres secciones. Documentos del usuario, Documentos del vehículo, Resumen.',
          'Verás al final de la página que hay una barra de avance que se llenará en función de los documentos necesarios para el proceso que han sido cargados.',
        ],
        image: {
          src: '/flow-images/inicio-carga-documentos-paso-2.png',
          alt: 'Pantalla de documentos con secciones y barra de avance',
          description: 'Pantalla de carga documental dividida en documentos del usuario, documentos del vehículo y resumen.',
        },
      },
      {
        title: 'Paso 3: Subida de documentos',
        items: [
          'Para comenzar a subir un archivo, tienes que hacer clic en cada caja para que se despliegue el espacio que recibirá el/los documentos. Aplica tanto para celular como para computadora.',
          'Una vez que hayas completado ese paso, podrás arrastrar los archivos o hacer clic nuevamente en la caja para buscar los archivos en tu dispositivo.',
          'Tendrás que repetir este paso en cada caja para subir los documentos pertinentes.',
          'En cajas para subir documentos como Factura, Bajas de placas o tenencias podrás agregar más de un documento.',
        ],
        image: {
          src: '/flow-images/inicio-carga-documentos-paso-3.png',
          alt: 'Caja desplegada para subir identificación oficial',
          description: 'Caja desplegada para arrastrar o seleccionar archivos del dispositivo.',
        },
        images: [
          {
            src: '/flow-images/inicio-carga-documentos-paso-3-multiples.png',
            alt: 'Caja de documentos vehiculares con opción para agregar más de un archivo',
            description: 'Ejemplo de caja que permite agregar más de un documento al proceso.',
          },
        ],
      },
      {
        title: 'Paso 4: Avanzar a la siguiente sección',
        items: [
          'Una vez que hayas completado cada sección correctamente con los documentos necesarios, se habilitará el botón para pasar a la siguiente sección.',
          'Restricciones: Recuerda que esta pantalla es inteligente. Si algún documento o archivo no cumple con los requerimientos necesarios (vigencias o tipo de documento esperado), la pantalla te dirá qué tienes que corregir.',
          'Sección 3 - Resumen: En el tercer paso podrás verificar los documentos que subiste, y si lo necesitas, previsualizar cada archivo haciendo clic en el ícono del ojo.',
        ],
        image: {
          src: '/flow-images/inicio-carga-documentos-paso-4-avance.png',
          alt: 'Botón habilitado para continuar a la siguiente sección',
          description: 'Cuando los documentos requeridos están completos, se habilita el avance a la siguiente sección.',
        },
        images: [
          {
            src: '/flow-images/inicio-carga-documentos-paso-4-resumen.png',
            alt: 'Resumen de documentos cargados con opción de previsualizar archivos',
            description: 'Resumen para verificar documentos cargados y previsualizar archivos con el ícono del ojo.',
          },
        ],
      },
      {
        title: 'Paso 5: Firma tu expediente.',
        items: [
          'Para poder realizar la validación de las firmas, habilitamos un botón para que el afectado pueda hacer una firma digital.',
          'El afectado puede limpiar el espacio de la firma y reintentar cuantas veces considere necesario. Para continuar tendrá que hacer clic en el botón de "Guardar Firma".',
          'Una vez que se haya completado este paso, el expediente está listo para enviarse, se habilitará el botón de "Finalizar y enviar".',
        ],
        image: {
          src: '/flow-images/inicio-carga-documentos-paso-5-firma-1.png',
          alt: 'Sección de firma de conformidad con botón Firmar documento',
          description: 'Sección donde el afectado inicia la firma digital del expediente.',
        },
        images: [
          {
            src: '/flow-images/inicio-carga-documentos-paso-5-firma-2.png',
            alt: 'Modal de firma digital con botones Limpiar y Guardar firma',
            description: 'Modal donde el afectado firma digitalmente y guarda la firma.',
          },
        ],
      },
      {
        title: 'Paso 6: Confirmación y seguimiento del afectado',
        items: [
          'Al completar los tres pasos, la pantalla te redireccionará a la página de confirmación de carga de documentos exitosa, en donde viene la información del afectado y los siguientes pasos.',
          'Al hacer clic en el botón de "Ver estado de mi caso", el afectado podrá dar seguimiento en tiempo real a su expediente.',
          'Se envía un correo electrónico con la confirmación de recepción de documentos y cuáles son los siguientes pasos en el proceso.',
        ],
        image: {
          src: '/flow-images/inicio-carga-documentos-paso-6-confirmacion.png',
          alt: 'Pantalla de confirmación de documentos recibidos',
          description: 'Confirmación de carga exitosa con datos del afectado y siguientes pasos.',
        },
        images: [
          {
            src: '/flow-images/inicio-carga-documentos-paso-6-seguimiento.png',
            alt: 'Pantalla de seguimiento del estado del caso',
            description: 'Seguimiento en tiempo real del expediente del afectado.',
          },
          {
            src: '/flow-images/inicio-carga-documentos-paso-6-correo.png',
            alt: 'Correo de confirmación de recepción de documentos',
            description: 'Correo enviado al afectado con confirmación y siguientes pasos.',
          },
        ],
      },
    ],
    considerations: ['Tipos de archivo.', 'Peso máximo.', 'Documentos incompletos.'],
    errors: ['Subir documentos incompletos.', 'Subir archivos incorrectos.', 'No validar confirmación.'],
    image: { description: 'Evidencia visual de la sección: carga de documentos.' },
    result: 'Expediente creado con documentos completos y visibles para Nexcar.',
    hideSectionBlocks: true,
  },
  {
    id: 'mesa-nexcar',
    shortTitle: 'Mesa Nexcar',
    title: 'Documentos en mesa Nexcar',
    status: 'pending',
    description: 'Entender cómo Nexcar procesa el expediente.',
    steps: [
      {
        title: 'Paso 1: Ver expediente.',
        items: [
          'Una vez que los documentos son cargados, se recibirá una notificación al equipo de Nexcar para comenzar con el proceso de validación.',
          'Nexcar se encarga de leer los documentos, extraer la información relevante de cada documento, y utilizar estos datos para consultar en fuentes externas. (Pasa al paso de Validaciones para saber más de las fuentes de consulta que tenemos).',
          'Dentro de un expediente puedes visualizar los documentos que fueron cargados por parte del afectado, así como visualizar el archivo y la información extraída.',
        ],
        image: {
          src: '/flow-images/mesa-nexcar-paso-1-ver-expediente.png',
          alt: 'Expediente en Nexcar con documentos cargados e información extraída',
          description: 'Vista de expediente con documentos cargados, archivo visualizado e información extraída.',
        },
      },
      {
        title: 'Paso 2: Primera inspección (Equipo Nexcar)',
        items: [
          'El equipo de Nexcar se encargará, en la prueba de concepto, de validar los datos extraídos por la inteligencia artificial.',
          'Este paso permite asegurarse, de forma ágil, que los datos sean correctos y hacer un primer filtro de las reglas de negocio en la validación.',
          'Al hacer clic en el botón de continuar, la plataforma llevará al analista a la sección de validaciones.',
        ],
        image: {
          src: '/flow-images/mesa-nexcar-paso-2-primera-inspeccion.png',
          alt: 'Primera inspección Nexcar con documento y datos extraídos',
          description: 'Primera inspección de datos extraídos por inteligencia artificial para validar información del expediente.',
        },
      },
      {
        title: 'Paso 3: Validaciones de la plataforma',
        items: [
          'Nexcar se encarga de consultar diferentes fuentes de consulta y validaciones de los documentos en función de las reglas de negocio establecidas.',
          'Para hacer fácil la inspección, la plataforma maneja una simbología (✅ y ⚠) para indicar si todo es correcto, o hay que revisar alguna sección con detenimiento.',
          'Dentro de las fuentes de consulta están: SAT, REPUVE, RAPI, Multas y tenencias (en los estados que cuenten con un portal de consulta), INE, AMIS.',
          'Para los documentos, se hacen validaciones de los datos, montos (en los casos que aplique), cruce de los datos encontrados dentro de los documentos en la sección de integridad de datos (VIN, marca, año, modelo, número de motor, etc.) y fechas de vigencia.',
          'Además, extrae todos los nombres y placas en todos los documentos encontrados.',
          'Cada validación tiene su sección respectiva. Esto fue diseñado para consumir la información de manera ordenada y sencilla.',
        ],
        image: {
          src: '/flow-images/mesa-nexcar-paso-3-validaciones-1.png',
          alt: 'Validaciones de plataforma con placas, nombres y tenencias',
          description: 'Secciones de validación con simbología para indicar estado correcto o revisión requerida.',
        },
        images: [
          {
            src: '/flow-images/mesa-nexcar-paso-3-validaciones-2.png',
            alt: 'Validaciones de plataforma con fuentes de consulta',
            description: 'Vista de fuentes de consulta y validaciones organizadas por sección.',
          },
        ],
      },
      {
        title: 'Paso 4: Agregar observaciones',
        items: [
          'Nexcar tiene un ícono (💬) que permite poner comentarios dentro de cada sección en las validaciones.',
          'Esta función permite que todas las observaciones de la inspección queden registradas para un conocimiento de las diferentes áreas, facilitando procesos posteriores.',
          'No hay un límite de observaciones que se puedan agregar, además de que cada documento o sección puede tener más de una.',
        ],
        image: {
          src: '/flow-images/mesa-nexcar-paso-4-observaciones-1.png',
          alt: 'Ícono de observaciones dentro de una sección de validaciones',
          description: 'Ícono para agregar observaciones dentro de cada sección de validaciones.',
        },
        images: [
          {
            src: '/flow-images/mesa-nexcar-paso-4-observaciones-2.png',
            alt: 'Modal para agregar una nueva observación',
            description: 'Modal para registrar observaciones internas del expediente.',
          },
        ],
      },
    ],
    considerations: ['Si alguna regla falla → devolución de documentos.'],
    errors: ['Interpretar como aprobación final.', 'No entender motivo de devolución.'],
    image: { description: 'Evidencia visual de la sección: mesa Nexcar.' },
    result: 'Expediente listo para revisión o devuelto con observaciones claras.',
    hideSectionBlocks: true,
  },
  {
    id: 'correccion-documental',
    shortTitle: 'Corrección documental',
    title: 'Corrección documental',
    status: 'pending',
    description: 'Gestionar correctamente devoluciones.',
    steps: [
      {
        title: 'Paso 1: Categorías de devolución de documentos',
        items: [
          'Para tener información consistente y facilitar la comunicación con el afectado durante la operación, establecimos motivos de devolución de documentos para correcciones.',
          'Estos motivos son personalizables a las causas que el equipo haya identificado.',
        ],
        detailSections: [
          {
            title: 'Documento(s) con diferencias en nombre vs volante o identificación',
            description: 'Opciones al usuario final (6):',
            items: [
              'El estado de cuenta bancario no coincide con el nombre del afectado indicado en el volante de pago HDI. Envía un estado de cuenta a tu nombre.',
              'La identificación oficial no coincide con el nombre del afectado del volante HDI. Envía una identificación vigente a tu nombre.',
              'La tarjeta de circulación no coincide con el nombre del afectado del volante HDI. Envía documentación que acredite la propiedad del vehículo a tu nombre (factura, endosos, título o pedimento, según aplique).',
              'La(s) factura(s) y/o endoso(s) no coinciden con el nombre del afectado del volante HDI. Completa la cadena de propiedad o envía tarjeta de circulación a tu nombre.',
              'El título de propiedad y/o pedimento no coinciden con el nombre del afectado del volante HDI. Envía documentación vehicular consistente con el volante.',
              'La carta factura no coincide con el nombre del afectado del volante HDI. Envía documentación que acredite la propiedad a tu nombre.',
            ],
          },
          {
            title: 'Documento(s) ilegibles',
            description: 'Opciones al usuario final (9):',
            items: [
              'El comprobante de domicilio no es legible. Sube un archivo nítido y completo.',
              'El estado de cuenta bancario no es legible. Sube la carátula completa donde se vea CLABE y titular.',
              'La identificación oficial no es legible. Sube frente y reverso con buena calidad.',
              'La tarjeta de circulación no es legible. Sube una imagen clara de ambos lados.',
              'La(s) factura(s) y/o endoso(s) no son legibles. Sube archivos completos y legibles.',
              'El título de propiedad y/o pedimento no son legibles. Sube el documento completo.',
              'La carta factura no es legible. Sube una versión clara o sustituye por documentación vehicular válida.',
              'El acta constitutiva y/o poder no son legibles. Sube el documento completo y legible.',
              'La CLABE no se alcanza a leer con claridad. Sube nuevamente la carátula del estado de cuenta.',
            ],
          },
          {
            title: 'Documento(s) inválidos o incompletos',
            description: 'Opciones al usuario final (7):',
            items: [
              'El comprobante de domicilio no cumple requisitos HDI (vigencia y tipo de domicilio). Sube un comprobante válido.',
              'La identificación oficial enviada no es válida o está incompleta. Sube INE o documento migratorio vigente (frente y reverso).',
              'La tarjeta de circulación no es válida para acreditar el vehículo del siniestro HDI. Sube documentación vehicular correcta.',
              'La(s) factura(s) y/o endoso(s) no son válidos o no acreditan la propiedad. Sube documentación completa.',
              'El estado de cuenta debe ser de una institución en México, mostrar titular, CLABE de 18 dígitos y tipo de cuenta de débito/nómina vigente (máx. 3 meses).',
              'El estado de cuenta corresponde a cuenta de crédito. Envía estado de cuenta de débito o nómina con CLABE.',
              'El estado de cuenta no es el formato original del banco. Sube el documento emitido por la institución (PDF o imagen oficial).',
            ],
          },
          {
            title: 'Documentación vehicular vs volante HDI',
            description: 'Opciones al usuario final (4):',
            items: [
              'La tarjeta de circulación no corresponde al VIN/placas del volante de pago HDI. Sube documentación del vehículo del siniestro.',
              'La(s) factura(s) y/o endoso(s) no corresponden al vehículo del volante HDI. Sube factura, endosos o tarjeta de circulación del vehículo correcto.',
              'La cadena de endosos está incompleta respecto al beneficiario del volante HDI. Sube la secuencia completa o documento alterno de propiedad.',
              'La documentación vehicular no coincide con el beneficiario del volante HDI. Si eres el nuevo propietario, sube el trámite de cambio de propietario o documento equivalente.',
            ],
          },
          {
            title: 'Documento(s) vencido(s)',
            description: 'Opciones al usuario final (4):',
            items: [
              'El comprobante de domicilio está vencido. Envía uno con antigüedad máxima de 3 meses.',
              'El estado de cuenta está vencido. Envía uno con antigüedad máxima de 3 meses.',
              'La identificación oficial está vencida. Actualízala o envía otra identificación vigente.',
              'La carta factura está vencida. Sube versión reciente o tarjeta de circulación vigente del vehículo del siniestro.',
            ],
          },
          {
            title: 'Persona moral',
            description: 'Opciones al usuario final (4):',
            items: [
              'Falta acta constitutiva y/o poder notarial que acredite facultades. Sube el documento completo.',
              'El acta constitutiva y/o poder no corresponde a la persona moral del volante HDI. Sube la documentación correcta.',
              'La identificación del representante no aparece en el acta/poder o no tiene facultades para cobro. Envía identificación de quien sí esté facultado.',
              'El acta o poder está incompleto (faltan páginas o datos). Sube el archivo completo.',
            ],
          },
          {
            title: 'Atención por canal HDI',
            description: 'Opciones al usuario final (1):',
            items: [
              'No fue posible concluir la validación con la documentación cargada. Para continuar tu trámite de pago HDI, contacta al canal oficial indicado en tu póliza o en el volante de pago.',
            ],
          },
        ],
        image: {
          src: '/flow-images/correccion-documental-paso-1-categorias.png',
          alt: 'Categorías de devolución de documentos para corrección',
          description: 'Catálogo de motivos de devolución para estandarizar la comunicación con el afectado.',
        },
      },
      {
        title: 'Paso 2: Correo que le llega al afectado',
        items: [
          'Una vez que se detectó alguna inconsistencia, o razón por la cual regresar algún documento para corrección al asegurado, el usuario recibirá un correo especificando los pasos a seguir.',
          'Se habilitará únicamente las casillas de los documentos que necesitan atención, evitando retrabajo o fricciones al afectado.',
          'Una vez que se haya cargado la corrección, se enviará a la plataforma de Nexcar para su inspección.',
        ],
        image: {
          src: '/flow-images/correccion-documental-paso-1-correo.png',
          alt: 'Correo de acción requerida para subir correcciones',
          description: 'Correo que recibe el afectado con el mensaje de corrección y el botón para subir correcciones.',
        },
        images: [
          {
            src: '/flow-images/correccion-documental-paso-1-casillas.png',
            alt: 'Pantalla de correcciones requeridas con casilla habilitada',
            description: 'Pantalla donde solo se habilitan los documentos que necesitan corrección.',
          },
        ],
      },
      {
        title: 'Paso 3: Confirmar que el envío de corrección de documentos fue exitoso.',
        items: [
          'El afectado tendrá que subir únicamente el documento requerido, cuando esté subido se llenará la barra de progreso en función a la cantidad de documentos regresados.',
          'Al subir sus correcciones recibirá un nuevo correo indicando que fueron recibidos sus documentos para su nuevo análisis.',
        ],
        image: {
          src: '/flow-images/correccion-documental-paso-3-confirmacion.png',
          alt: 'Correo de confirmación de correcciones recibidas',
          description: 'Correo de confirmación que recibe el afectado después de enviar sus correcciones.',
        },
      },
    ],
    considerations: ['Documento incompleto.', 'Documento incorrecto.', 'Inconsistencia de datos.'],
    errors: ['Reenviar lo mismo.', 'No leer observaciones.'],
    image: { description: 'Evidencia visual de la sección: corrección documental.' },
    result: 'Documentación corregida y reenviada correctamente.',
    hideSectionBlocks: true,
  },
  {
    id: 'supervision-hdi',
    shortTitle: 'Supervisión HDI',
    title: 'Supervisión HDI',
    status: 'pending',
    description: 'Permitir al analista validar y dictaminar.',
    steps: [
      {
        title: 'Paso 1: Recibir una notificación cuando se recibe un estatus prevalidado',
        items: [
          'El equipo de HDI recibirá un correo de prevalidación una vez que el caso fue prevalidado cuando se cumplan las reglas de negocio. Eso se considera después de la corrección de documentos o en el escenario en que no haya existido alguna corrección.',
          'La notificación se enviará por correo cuando el equipo de Nexcar marque el estatus Prevalidado.',
          'El correo llevará al usuario de HDI al expediente correspondiente.',
        ],
        image: {
          src: '/flow-images/supervision-hdi-paso-1-prevalidado.png',
          alt: 'Correo de expediente validado para el analista HDI',
          description: 'Correo que notifica al usuario de HDI que el expediente fue prevalidado.',
        },
      },
      {
        title: 'Paso 2: Ver documentos',
        items: [
          'Al dar click en el botón "Ir a mi workspace en Nexcar →" te llevará a la plataforma para comenzar la supervisión del expediente.',
          'El analista de HDI podrá ver todos los documentos cargados en el expediente dando click en el título del documento, sobre la barra del lado izquierdo que enlista los mismos. Al dar click en "Continuar" que está después de la lista de documentos, avanzará a la página de validaciones.',
          'El analista encontrará un botón que dice: "Seguimiento del expediente" que le servirá para leer el desarrollo del expediente y observaciones de cada documento.',
          'En el botón de la esquina superior derecha "Acciones", se podrá eliminar o descargar el documento, en caso que sea necesario.',
        ],
        image: {
          src: '/flow-images/supervision-hdi-paso-2-workspace.png',
          alt: 'Correo con botón para ir al workspace en Nexcar',
          description: 'Correo con acceso al workspace de Nexcar para comenzar la supervisión del expediente.',
        },
        images: [
          {
            src: '/flow-images/supervision-hdi-paso-2-documentos.png',
            alt: 'Vista de documentos del expediente en Nexcar',
            description: 'Vista donde el analista puede revisar documentos cargados desde la barra lateral del expediente.',
          },
        ],
      },
      {
        title: 'Paso 3: Hacer seguimiento de expediente y estatus de dictaminación',
        items: [
          'Al hacer clic en el botón de "Seguimiento del expediente", el equipo de HDI podrá ver todas las anotaciones realizadas en la preinspección por parte del equipo de Nexcar.',
          'El equipo de HDI podrá hacer una supervisión del caso y la predictaminación para después asignar un estatus de dictaminación (Validado o Rechazado).',
        ],
        image: {
          src: '/flow-images/supervision-hdi-paso-3-estatus-inspeccion.png',
          alt: 'Estatus de la inspección del expediente',
          description: 'Panel de estatus de la inspección con botones para modificar dictamen, agregar observación y revisar seguimiento.',
        },
      },
      {
        title: 'Paso 4: Dictaminación',
        items: [
          'Para asignar un estatus, tendrá que hacer clic en el botón de "Modificar Dictamen" y seleccionar el estatus de interés.',
          {
            text: 'Para fines de la prueba de concepto, se parte del supuesto de que el equipo de Nexcar se encargó de la predictaminación y ejecución de las reglas de negocio marcadas en la presentación de HDI enviada.',
            link: {
              label: 'Ver presentación de HDI',
              href: 'https://docs.google.com/presentation/d/1YtL3_8-JWWIRr8KRgvG3oBxprWbZ2rIG/edit?usp=sharing&ouid=114541089609766998316&rtpof=true&sd=true',
            },
          },
        ],
        image: {
          src: '/flow-images/supervision-hdi-paso-3-modificar-dictamen.png',
          alt: 'Modal para modificar dictamen del expediente',
          description: 'Modal donde el analista puede seleccionar un nuevo dictamen para el expediente.',
        },
      },
      {
        title: 'Paso 5: Descarga de reporte',
        items: [
          'El botón de descargar el reporte se encuentra en la esquina superior derecha en la página de validaciones.',
          'En dicho reporte se agregan las capturas de pantalla de las validaciones realizadas y que servirán como evidencia. Actualmente del SAT y REPUVE, con opción a poder agregar más evidencias posteriores a la prueba de concepto.',
        ],
        image: {
          src: '/flow-images/supervision-hdi-paso-5-descarga-reporte.png',
          alt: 'Botón Descargar reporte en la página de validaciones',
          description: 'Vista del botón para descargar el reporte del expediente desde la página de validaciones.',
        },
      },
      {
        title: 'Paso 6: Comunicación al afectado',
        items: [
          'Una vez que el usuario de HDI asigne un estatus en la dictaminación, el afectado recibirá comunicación sobre su siniestro, en donde se le notifica que su caso fue aprobado y necesita llevar documentos de forma física.',
        ],
        image: {
          src: '/flow-images/supervision-hdi-paso-6-comunicacion-afectado.png',
          alt: 'Correo de caso aprobado enviado al afectado',
          description: 'Correo que informa al afectado que su caso fue aprobado y comunica los siguientes pasos.',
        },
      },
    ],
    considerations: ['Qué ya validó Nexcar.', 'Cuenta CLABE.', 'Datos críticos.'],
    errors: ['Ignorar notas de Nexcar.', 'Validar superficialmente.', 'Asignar estatus incorrecto.'],
    image: { description: 'Evidencia visual de la sección: supervisión HDI.' },
    result: 'Expediente dictaminado correctamente con evidencia.',
    hideSectionBlocks: true,
  },
  {
    id: 'calendario-gantt',
    shortTitle: 'Calendario GANTT',
    title: 'Calendario GANTT',
    status: 'pending',
    description: 'Calendario GANTT.',
    steps: [],
    considerations: [],
    errors: [],
    image: null,
    result: 'Cliente listo para completar proceso de pago.',
    hideResult: true,
  },
];

const ganttWeeks = [
  { label: 'Semana 1 · 6-8 mayo', className: 'hdi-gantt-week--one', width: 152 },
  { label: 'Semana 2 · 11-15 mayo', className: 'hdi-gantt-week--two', width: 254 },
  { label: 'Semana 3 · 18-22 mayo', className: 'hdi-gantt-week--three', width: 254 },
];

const ganttDays = [
  { day: '6', dow: 'Mié', width: 51, week: 'one' },
  { day: '7', dow: 'Jue', width: 51, week: 'one' },
  { day: '8', dow: 'Vie', width: 50, week: 'one' },
  { day: '11', dow: 'Lun', width: 51, week: 'two' },
  { day: '12', dow: 'Mar', width: 51, week: 'two' },
  { day: '13', dow: 'Mié', width: 51, week: 'two' },
  { day: '14', dow: 'Jue', width: 51, week: 'two' },
  { day: '15', dow: 'Vie', width: 50, week: 'two' },
  { day: '18', dow: 'Lun', width: 51, week: 'three' },
  { day: '19', dow: 'Mar', width: 51, week: 'three' },
  { day: '20', dow: 'Mié', width: 51, week: 'three' },
  { day: '21', dow: 'Jue', width: 51, week: 'three' },
  { day: '22', dow: 'Vie', width: 50, week: 'three' },
];

const ganttRows = [
  {
    label: 'Capacitación Día 1',
    detail: 'Secciones 1-2 · docs + mesa Nexcar',
    left: 2,
    width: 47,
    variant: 'training',
  },
  {
    label: 'Capacitación Día 2',
    detail: 'Secciones 3-5 · analistas + comunicación',
    left: 53,
    width: 47,
    variant: 'training',
  },
  { separator: true },
  {
    label: 'Primera carga de siniestros',
    detail: 'Expedientes ya procesados (prueba)',
    left: 104,
    width: 46,
    variant: 'poc',
  },
  {
    label: 'Uso de plataforma Nexcar',
    detail: 'Carga y análisis de expedientes',
    left: 104,
    width: 554,
    variant: 'poc',
    text: 'Uso de plataforma Nexcar',
  },
  {
    label: 'Beneficios operativos',
    detail: 'Tiempo en fuentes de consulta · plataforma · comunicación con clientes',
    left: 154,
    width: 250,
    variant: 'analysis',
    text: 'Beneficios operativos',
  },
  {
    label: 'Mapeo de resultados',
    detail: 'Resultados por uso de plataforma',
    left: 408,
    width: 200,
    variant: 'analysis',
    text: 'Mapeo de resultados',
  },
  { separator: true },
  {
    label: 'Reunión de cierre',
    detail: 'Presentación de resultados · 22 mayo',
    left: 612,
    width: 46,
    variant: 'closing',
  },
];

const ganttValuePoints = [
  { left: 76.5, icon: '★', name: 'Flujo E2E dominado', variant: 'value' },
  { left: 127, icon: '★', name: 'Primera exp. práctica', variant: 'value' },
  { left: 228.5, icon: '★', name: 'Métrica de tiempo visible', variant: 'warning' },
  { left: 330.5, icon: '★', name: 'Automatización activa', variant: 'warning' },
  { left: 560, icon: '◆', name: 'Comparación entre proceso actual vs proceso propuesto', variant: 'closing' },
];

const successMetrics = [
  {
    title: 'Tiempo de proceso',
    description: 'Reducción medible del tiempo de análisis por expediente vs proceso manual actual.',
  },
  {
    title: 'Automatización de consultas',
    description: 'Consultas automáticas en fuentes externas eliminando pasos manuales del analista.',
  },
  {
    title: 'Flujo integrado',
    description: 'Un solo sistema para el flujo completo desde recepción hasta dictaminación.',
  },
];

const flowDiagramSteps = [
  { icon: '📁', label: 'Inicio - Creación de expediente', href: '#creacion-expediente' },
  { icon: '📄', label: 'Carga de documentos', href: '#inicio-carga-documentos' },
  { icon: '🔎', label: 'Mesa Nexcar', href: '#mesa-nexcar' },
  { icon: '✏️', label: 'Corrección documental', href: '#correccion-documental' },
  { icon: '✅', label: 'Supervisión HDI', href: '#supervision-hdi' },
  { icon: '🏁', label: 'Dictaminación de siniestro y envío de checklist al afectado' },
];

export default function App() {
  return (
    <div className="hdi-page">
      <HDIHeader />

      <PageContainer className="hdi-main">
        <SectionHeader
          eyebrow="Training operativo ANA Seguros"
          title="Prueba de concepto"
          description={(
            <>
              Sitio de consulta paso a paso para aprender, operar y resolver errores comunes durante el proceso.
              <br />
              Horario de atención para la Prueba de Concepto de 9 am a 6 pm
            </>
          )}
        />

        <FlowDiagram />

        <div className="hdi-flow-layout">
          <FlowSidebar sections={flowSections} activeId="creacion-expediente" />

          <div className="hdi-flow-content">
            {flowSections.map((section) => (
              <OperationalSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </PageContainer>

      <HDIFooter />
    </div>
  );
}

function FlowDiagram() {
  return (
    <Card className="hdi-flow-diagram-card">
      <h2>Pasos del flujo</h2>
      <div className="hdi-flow-diagram" aria-label="Pasos del flujo operativo">
        {flowDiagramSteps.map((step, index) => (
          <FlowDiagramItem step={step} index={index} key={step.label} />
        ))}
      </div>
      <a className="hdi-flow-diagram__gantt" href="#calendario-gantt">
        <span className="hdi-flow-diagram__icon" aria-hidden="true">📅</span>
        <span>Planeación de la prueba de concepto: GANTT</span>
      </a>
    </Card>
  );
}

function FlowDiagramItem({ step, index }) {
  const content = (
    <>
      <span className="hdi-flow-diagram__number">{index + 1}</span>
      <span className="hdi-flow-diagram__icon" aria-hidden="true">{step.icon}</span>
      <span>{step.label}</span>
    </>
  );

  if (!step.href) {
    return <div className="hdi-flow-diagram__item">{content}</div>;
  }

  return (
    <a className="hdi-flow-diagram__item" href={step.href}>
      {content}
    </a>
  );
}

function OperationalSection({ section }) {
  return (
    <Card className="hdi-operational-section" id={section.id}>
      <header className="hdi-operational-section__header">
        <p className="hdi-section-header__eyebrow">Etapa operativa</p>
        <h2>{section.title}</h2>
        <p className="hdi-section-header__description">{section.description}</p>
      </header>

      {section.steps.length > 0 ? <StepList steps={section.steps} /> : null}

      {!section.hideSectionBlocks && section.considerations.length > 0 ? (
        <InfoBox title="Consideraciones">
          <ul>
            {section.considerations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoBox>
      ) : null}

      {!section.hideSectionBlocks && section.errors.length > 0 ? (
        <WarningBox>
          <ul>
            {section.errors.map((item) => (
              <li key={`warning-${item}`}>{item}</li>
            ))}
          </ul>
        </WarningBox>
      ) : null}

      {!section.hideSectionBlocks && (section.id === 'calendario-gantt' ? <GanttSchedule /> : <ImageBlock {...section.image} />)}

      {!section.hideSectionBlocks && !section.hideResult && (
        <SuccessBox>
          <p>{section.result}</p>
        </SuccessBox>
      )}
    </Card>
  );
}

function GanttSchedule() {
  return (
    <section className="hdi-gantt-card" aria-labelledby="gantt-title">
      <div className="hdi-gantt-card__header">
        <h3 id="gantt-title">Capacitación y prueba de concepto · Nexcar</h3>
        <p>Mayo 2025 · Analistas y supervisores HDI</p>
      </div>

      <div className="hdi-gantt-outer">
        <div className="hdi-gantt">
          <div className="hdi-gantt-week-row">
            <div className="hdi-gantt-label-spacer" />
            {ganttWeeks.map((week) => (
              <div
                className={`hdi-gantt-week ${week.className}`}
                key={week.label}
                style={{ width: `${week.width}px` }}
              >
                {week.label}
              </div>
            ))}
          </div>

          <div className="hdi-gantt-day-row">
            <div className="hdi-gantt-header-label">Actividad</div>
            <div className="hdi-gantt-days">
              {ganttDays.map((day) => (
                <div
                  className={`hdi-gantt-day hdi-gantt-day--${day.week}`}
                  key={`${day.day}-${day.dow}`}
                  style={{ width: `${day.width}px` }}
                >
                  <div className="hdi-gantt-day__num">{day.day}</div>
                  <div className="hdi-gantt-day__dow">{day.dow}</div>
                </div>
              ))}
            </div>
          </div>

          {ganttRows.map((row, index) =>
            row.separator ? (
              <div className="hdi-gantt-row hdi-gantt-row--separator" key={`separator-${index}`} />
            ) : (
              <div className="hdi-gantt-row" key={row.label}>
                <div className="hdi-gantt-row__label">
                  <div className="hdi-gantt-row__main">{row.label}</div>
                  <div className="hdi-gantt-row__sub">{row.detail}</div>
                </div>
                <div className="hdi-gantt-timeline">
                  <GanttBands />
                  <div
                    className={`hdi-gantt-bar hdi-gantt-bar--${row.variant}`}
                    style={{
                      left: `${row.left}px`,
                      width: `${row.width}px`,
                    }}
                  >
                    {row.text}
                  </div>
                </div>
              </div>
            ),
          )}

          <div className="hdi-gantt-value-row">
            <div className="hdi-gantt-value-label">Puntos de valor</div>
            <div className="hdi-gantt-value-area">
              {ganttValuePoints.map((point) => (
                <div className="hdi-gantt-value-point" key={point.name} style={{ left: `${point.left}px` }}>
                  <div className={`hdi-gantt-value-point__icon hdi-gantt-value-point__icon--${point.variant}`}>
                    {point.icon}
                  </div>
                  <div className={`hdi-gantt-value-point__name hdi-gantt-value-point__name--${point.variant}`}>
                    {point.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hdi-gantt-training-detail">
        <h3>Detalle de capacitación</h3>
        <div className="hdi-gantt-training-cards">
          <article className="hdi-gantt-training-card">
            <h4>Día 1 · Miércoles 6 de mayo</h4>
            <p>1. Carga de documentos: inicio del siniestro.</p>
            <p>2. Documentos a mesa Nexcar: validación y predictaminación.</p>
          </article>
          <article className="hdi-gantt-training-card">
            <h4>Día 2 · Jueves 7 de mayo</h4>
            <p>3. Comunicación a afectados en corrección documental.</p>
            <p>4. Seguimiento y supervisión por analistas HDI.</p>
            <p>5. Comunicación y siguientes pasos para pago de siniestro.</p>
          </article>
        </div>
      </div>

      <div className="hdi-gantt-metrics">
        <h3>Métricas de éxito · Reunión 22 mayo</h3>
        <div className="hdi-gantt-metric-grid">
          {successMetrics.map((metric) => (
            <article className="hdi-gantt-metric-card" key={metric.title}>
              <h4>{metric.title}</h4>
              <p>{metric.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="hdi-gantt-legend" aria-label="Leyenda del calendario GANTT">
        <LegendItem variant="training" label="Capacitación" />
        <LegendItem variant="poc" label="Prueba de concepto" />
        <LegendItem variant="analysis" label="Análisis comparativo" />
        <LegendItem variant="closing" label="Reunión de cierre" />
        <LegendItem icon="★" label="Punto de valor" />
        <LegendItem icon="◆" label="Hito de cierre" />
      </div>
    </section>
  );
}

function GanttBands() {
  return (
    <>
      <div className="hdi-gantt-band hdi-gantt-band--one" />
      <div className="hdi-gantt-band hdi-gantt-band--two" />
      <div className="hdi-gantt-band hdi-gantt-band--three" />
      <div className="hdi-gantt-divider hdi-gantt-divider--one" />
      <div className="hdi-gantt-divider hdi-gantt-divider--two" />
    </>
  );
}

function LegendItem({ variant, icon, label }) {
  return (
    <div className="hdi-gantt-legend__item">
      {icon ? <span className="hdi-gantt-legend__icon">{icon}</span> : <span className={`hdi-gantt-legend__box hdi-gantt-legend__box--${variant}`} />}
      <span>{label}</span>
    </div>
  );
}
