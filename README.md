# ManyNotes

ManyNotes is a full-stack Markdown note-taking application designed to evolve into an AI-powered writing assistant.  
It focuses on clean architecture, RESTful APIs, and progressive enhancement with AI features.

---

## Getting Started

**Note:** To work on the frontend or backend, you must navigate to the respective folder (`/backend` or `/frontend`) for the development scripts to work properly.

## Features

- Create and manage notes written in Markdown
- Render Markdown notes as secure HTML
- Grammar checking for written content
- RESTful backend API
- Angular frontend with clear separation of concerns
- AI-powered summarization and rewriting (optional / final phase)

---

## Tech Stack

### Backend

- Node.js
- Express (or NestJS)
- Markdown parsing
- Grammar checking service
- OpenAI API (AI features)

#### Backend dependencies

Dependencies can be found in the `backend/package.json` folder.
To install all dependencies`bun i`.

- **Express**: Web framework for building the REST API
- **Morgan**: HTTP request logger middleware
- **Zod**: TypeScript-first schema validation for request/response models
- **Markdown-it** (or similar): Markdown parser
- **Grammar checking library**: (e.g., LanguageTool API or similar)
- **OpenAI SDK**: For AI-powered features

### Frontend

- Angular
- TypeScript
- Angular Router
- HttpClient

---

## Architecture

- Backend-first approach
- Layered architecture:
  - Controllers
  - Services
  - Repositories
- Frontend feature-based structure
- AI integrated as an isolated service

---

## Project Goals

- Learn how to handle Markdown content in a real application
- Build and consume a clean REST API
- Practice frontend–backend integration
- Integrate AI features without introducing technical debt
- Deliver a portfolio-ready project

---

## Status

🚧 In active development  
Built following a sprint-based roadmap.

---

## Authors

[Santiago](https://github.com/SantiagoRB17)

[Walter](https://github.com/walter1705)

---

## License

MIT
