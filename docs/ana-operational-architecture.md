# Arquitectura Del Sitio

El training operativo ANA Seguros usa el look & feel HDI y organiza el flujo de siniestros como herramienta de consulta.

## Layout Base

- Header institucional HDI.
- Sidebar izquierda con navegación del flujo.
- Contenido central con secciones independientes.
- Footer institucional HDI.

## Secciones Del Flujo

1. Inicio: Carga de documentos.
2. Mesa Nexcar.
3. Corrección documental.
4. Supervisión HDI.
5. Pago de siniestro.
6. Calendario GANTT.

## Formato Obligatorio Por Sección

Cada sección debe incluir:

1. Título claro.
2. Descripción breve de la etapa.
3. Lista de pasos numerados.
4. Consideraciones, errores comunes o restricciones.
5. Evidencia visual cuando aplique.
6. Resultado esperado.

## Componentes Operativos

- `FlowSidebar`
- `StepList`
- `InfoBox`
- `WarningBox`
- `SuccessBox`
- `ImageBlock`
- `StatusTag`

## Criterio De Calidad

El usuario debe poder ejecutar el proceso sin ayuda externa, resolver errores comunes y entender el estado del caso.
