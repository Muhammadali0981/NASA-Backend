# NASA-Backend

Backend scaffold for our NASA Space Apps Challenge project (October 2025). The data and documentation live in [Abser-Mansoor/NASA-Space-Apps-Project](https://github.com/Abser-Mansoor/NASA-Space-Apps-Project).

## Status

This repository holds the initial API setup only; no feature routes have been added yet. What's there:

- An Express app in TypeScript (`app.ts`, `index.ts`) with Morgan logging, JSON / URL-encoded body parsing and CORS.
- A central error handler (`api/utils/error-handler.ts`) and an `asyncHandler` wrapper for async routes.
- A typed `RequestError` class with standard exception types (400, 401, 403, 404, 409, 500) in `api/errors/`.

## Running

```bash
npm install
npm run dev        # tsx watch index.ts, on PORT or 3001
```

Configuration is read from a `.env` file (`PORT`).

## Stack

Node.js, Express, TypeScript, tsx.
