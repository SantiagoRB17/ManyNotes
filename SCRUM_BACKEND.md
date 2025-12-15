# Backend Scrum Plan — Markdown Note-taking App

## Proyecto Vacacional (Backend First)

Stack Backend:

- Node.js
- Express (o NestJS si decides escalar)
- Markdown parsing
- Grammar checking
- Arquitectura preparada para IA (OpenAI en fase final)

Metodología:

- Scrum ligero
- 1 sprint = 1 semana
- Entregable funcional al final de cada sprint

---

## 🟦 SPRINT 1 — Core Backend & REST API

**Duración:** Semana 1  
**Objetivo:** Tener una API REST funcional para crear y listar notas en Markdown.

### Historias de Usuario

- Como usuario, quiero guardar una nota en Markdown.
- Como usuario, quiero listar todas mis notas.
- Como desarrollador, quiero una base de código limpia y extensible.

### Checklist Técnico

- [ ] Inicializar proyecto Node.js
- [ ] Configurar estructura base (controllers, services, routes)
- [ ] Configurar middleware básico (JSON, logging)
- [ ] Implementar modelo de Nota:
  - id
  - title
  - content (markdown)
  - createdAt
- [ ] Implementar endpoint `POST /notes`
- [ ] Implementar endpoint `GET /notes`
- [ ] Implementar endpoint `GET /notes/:id`
- [ ] Validación de inputs
- [ ] Manejo correcto de errores HTTP

### Criterios de Aceptación

- Se pueden crear notas vía API
- Las notas se listan correctamente
- La API responde con status codes correctos
- El servidor no se cae con datos inválidos

---

## 🟦 SPRINT 2 — Markdown Parsing & Renderizado HTML

**Duración:** Semana 2  
**Objetivo:** Convertir Markdown a HTML de forma segura.

### Historias de Usuario

- Como usuario, quiero ver mi nota renderizada en HTML.
- Como desarrollador, quiero evitar inyecciones XSS.

### Checklist Técnico

- [ ] Instalar librería de Markdown (`marked` / `markdown-it`)
- [ ] Implementar servicio `MarkdownRenderer`
- [ ] Sanitizar HTML generado
- [ ] Implementar endpoint `GET /notes/:id/render`
- [ ] Separar parsing de la lógica del controller
- [ ] Manejar errores de parsing

### Criterios de Aceptación

- Markdown se renderiza correctamente
- HTML es seguro
- El endpoint retorna solo HTML válido
- No se rompe el sistema existente

---

## 🟦 SPRINT 3 — Persistencia de Datos (Filesystem / DB)

**Duración:** Semana 3  
**Objetivo:** Persistir notas correctamente.

### Historias de Usuario

- Como usuario, quiero que mis notas no se pierdan.
- Como desarrollador, quiero una abstracción de persistencia.

### Checklist Técnico

- [ ] Implementar capa de repositorio (`NoteRepository`)
- [ ] Guardar notas en filesystem o base de datos ligera
- [ ] Cargar notas al iniciar el servidor
- [ ] Manejar concurrencia básica
- [ ] Validar integridad de datos
- [ ] Tests básicos de persistencia

### Criterios de Aceptación

- Las notas persisten entre reinicios
- No hay corrupción de datos
- El repositorio puede cambiarse sin romper la API

---

## 🟦 SPRINT 4 — Grammar Checking Service

**Duración:** Semana 4  
**Objetivo:** Analizar gramática del texto Markdown.

### Historias de Usuario

- Como usuario, quiero revisar la gramática de mi nota.
- Como desarrollador, quiero un servicio reutilizable.

### Checklist Técnico

- [ ] Investigar e integrar librería de grammar checking
- [ ] Crear `TextAnalysisService`
- [ ] Implementar endpoint `POST /notes/grammar-check`
- [ ] Definir formato estándar de errores
- [ ] Manejar timeouts y fallos del servicio externo
- [ ] Validar inputs largos

### Criterios de Aceptación

- El sistema detecta errores reales
- La respuesta es clara y estructurada
- Fallos externos no tumban la API

---

## 🟦 SPRINT 5 — Refactor Arquitectónico & Preparación para IA

**Duración:** Semana 5  
**Objetivo:** Dejar el backend listo para integrar IA sin deuda técnica.

### Historias de Usuario

- Como desarrollador, quiero una arquitectura escalable.
- Como sistema, quiero poder integrar IA fácilmente.

### Checklist Técnico

- [ ] Separar claramente:
  - Controllers
  - Services
  - Repositories
- [ ] Crear `AIService` (vacío)
- [ ] Configurar variables de entorno
- [ ] Implementar rate limiting básico
- [ ] Centralizar manejo de errores
- [ ] Documentar API (OpenAPI / README)

### Criterios de Aceptación

- El backend es fácil de entender
- No hay lógica mezclada
- Agregar IA no requiere refactor grande

---

## 🟦 SPRINT 6 — API de IA (Summarize & Rewrite)

**Duración:** Semana 6  
**Objetivo:** Convertir el backend en AI-powered.

### Historias de Usuario

- Como usuario, quiero resumir mis notas.
- Como usuario, quiero reescribir mis notas.
- Como desarrollador, quiero prompts controlados.

### Checklist Técnico

- [ ] Integrar OpenAI API
- [ ] Implementar endpoint `POST /ai/summarize`
- [ ] Implementar endpoint `POST /ai/rewrite`
- [ ] Diseñar prompts claros y reutilizables
- [ ] Manejar costos y errores de IA
- [ ] Logs de uso de IA

### Criterios de Aceptación

- La IA responde de forma coherente
- El backend sigue siendo estable
- El sistema maneja caídas de OpenAI

---

## Estado Final del Backend

- API REST profesional
- Markdown parsing seguro
- Grammar checking funcional
- Arquitectura lista para escalar
- Integración real con IA
- Proyecto presentable en portafolio
