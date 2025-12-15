# Frontend Scrum Plan — Markdown Notes App

## Proyecto Vacacional (Frontend Angular)

Stack Frontend:

- Angular
- TypeScript
- Angular Router
- HttpClient
- Markdown preview (render HTML desde backend)

Metodología:

- Scrum ligero
- 1 sprint = 1 semana
- Integración continua con Backend

---

## 🟩 SPRINT 1 — Setup Angular & Arquitectura Base

**Duración:** Semana 1  
**Objetivo:** Tener un frontend Angular limpio, escalable y conectado al backend.

### Historias de Usuario

- Como usuario, quiero abrir la app sin errores.
- Como desarrollador, quiero una base mantenible.

### Checklist Técnico

- [ ] Crear proyecto Angular
- [ ] Configurar estructura base:
  - core/
  - shared/
  - features/
- [ ] Configurar Angular Router
- [ ] Configurar HttpClient
- [ ] Configurar environments (dev/prod)
- [ ] Crear `ApiService` base
- [ ] Configurar manejo global de errores HTTP
- [ ] Linter y formato

### Criterios de Aceptación

- La app compila sin errores
- Se puede consumir el backend desde Angular
- La arquitectura es clara

---

## 🟩 SPRINT 2 — CRUD de Notas (Markdown Input)

**Duración:** Semana 2  
**Objetivo:** Crear, listar y visualizar notas en Markdown.

### Historias de Usuario

- Como usuario, quiero crear una nota en Markdown.
- Como usuario, quiero ver la lista de mis notas.

### Checklist Técnico

- [ ] Crear feature `notes`
- [ ] Crear modelo `Note`
- [ ] Crear `NotesService`
- [ ] Componente:
  - NotesListComponent
  - NoteEditorComponent
- [ ] Formulario para crear notas
- [ ] Validación de formulario
- [ ] Llamar a:
  - `POST /notes`
  - `GET /notes`
- [ ] Manejo de loading y errores

### Criterios de Aceptación

- Se pueden crear notas
- Las notas se listan correctamente
- El formulario valida datos

---

## 🟩 SPRINT 3 — Renderizado HTML & Vista de Nota

**Duración:** Semana 3  
**Objetivo:** Visualizar una nota renderizada en HTML.

### Historias de Usuario

- Como usuario, quiero ver mi nota renderizada.
- Como usuario, quiero navegar entre notas.

### Checklist Técnico

- [ ] Componente `NoteDetailComponent`
- [ ] Ruta `/notes/:id`
- [ ] Consumir `GET /notes/:id`
- [ ] Consumir `GET /notes/:id/render`
- [ ] Renderizar HTML con seguridad
- [ ] Manejo de estados vacíos
- [ ] Navegación básica

### Criterios de Aceptación

- El HTML se muestra correctamente
- No hay errores de seguridad
- La navegación es fluida

---

## 🟩 SPRINT 4 — Grammar Checking UI

**Duración:** Semana 4  
**Objetivo:** Permitir al usuario revisar gramática desde la UI.

### Historias de Usuario

- Como usuario, quiero revisar la gramática de mi nota.
- Como usuario, quiero ver errores claramente.

### Checklist Técnico

- [ ] Botón "Revisar Gramática"
- [ ] Consumir `POST /notes/grammar-check`
- [ ] Mostrar lista de errores
- [ ] Resaltar errores (básico)
- [ ] Manejo de estados:
  - loading
  - error
- [ ] UX clara (feedback visual)

### Criterios de Aceptación

- Los errores se muestran claramente
- El usuario entiende qué pasó
- No se bloquea la app

---

## 🟩 SPRINT 5 — Refactor UI & Preparación para IA

**Duración:** Semana 5  
**Objetivo:** Preparar la UI para features de IA sin refactor posterior.

### Historias de Usuario

- Como desarrollador, quiero componentes reutilizables.
- Como usuario, quiero una UI clara.

### Checklist Técnico

- [ ] Crear `AiService` (vacío)
- [ ] Refactorizar componentes grandes
- [ ] Crear componentes compartidos:
  - Button
  - Loader
  - ErrorMessage
- [ ] Centralizar estados UI
- [ ] Mejorar UX general
- [ ] Documentar estructura

### Criterios de Aceptación

- La UI es fácil de mantener
- Integrar IA no rompe componentes existentes

---

## 🟩 SPRINT 6 — Features de IA (Summarize & Rewrite)

**Duración:** Semana 6  
**Objetivo:** Integrar IA en el frontend.

### Historias de Usuario

- Como usuario, quiero resumir una nota.
- Como usuario, quiero reescribir una nota.

### Checklist Técnico

- [ ] Botón "Resumir"
- [ ] Botón "Reescribir"
- [ ] Consumir:
  - `POST /ai/summarize`
  - `POST /ai/rewrite`
- [ ] Mostrar resultado IA
- [ ] Confirmación antes de sobrescribir texto
- [ ] Manejo de errores IA
- [ ] Feedback visual de procesamiento

### Criterios de Aceptación

- La IA se integra correctamente
- El usuario controla el resultado
- La UI sigue siendo clara

---

## Estado Final del Frontend

- Angular app profesional
- Arquitectura clara
- Integración completa con backend
- UX funcional y entendible
- Preparada para escalar
