# PlantAct

A MERN web application with informational pages, report/post listings, account management, and administration screens.

## What the source includes

- React pages for home, news, services, prevention information, and reports.
- Sign-up, sign-in, profile editing, and JWT-based API authentication.
- Administrative user management and post creation, editing, and deletion.
- MongoDB persistence through Mongoose.
- Support-chat components requiring separate third-party configuration.

The backend retains `products` naming for content displayed as posts or reports. This is an existing application prototype, with incomplete paths documented below.

**Stack:** React 17, React Router 6, Bootstrap, Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs.

## Repository structure

- `frontend/`: React UI and client-side routes.
- `backend/server.js`: Express startup and database connection.
- `backend/routes/`: user and post endpoints.
- `backend/models/`: persistence models.
- Root `package.json`: build and combined-server commands.

## Local setup

Use Node.js/npm and a MongoDB instance under your control. This older dependency set has no pinned Node engine in the package manifests. Validate compatibility in your development environment.

1. Replace the project-specific MongoDB connection template in `backend/server.js` with your own connection configuration. The existing code reads `MONGODB_PASSWORD`, but the username, host, and database are fixed in source.
2. Provide `JWT_SECRET`, `MONGODB_PASSWORD` where applicable, and optionally `PORT` through your environment or an untracked `.env` in the process working directory. Use your own development values.
3. Install frontend and backend dependencies from the repository root:

```sh
npm install --prefix backend
npm install --prefix frontend
```

Start the API from the repository root:

```sh
npm start
```

In a second terminal:

```sh
npm start --prefix frontend
```

The frontend proxy targets `http://localhost:5000`. Keep the API on port 5000 or update the proxy to match. The API serves a frontend build when one exists.

To build the frontend and run the combined server:

```sh
npm run build
npm start
```

The build script also installs dependencies in both subprojects.

## API overview

- `/api/users`: registration, sign-in, profile changes, and administrative user routes.
- `/api/products`: post listing, detail, and administrative CRUD routes.

## Known limitations

- The post search handler references an undeclared `category` variable and needs repair.
- The reCAPTCHA handler needs implementation review before being treated as verification.
- The server only registers the frontend fallback at `/`, so direct navigation to client-side routes needs hosting support.
- Support-chat integrations require their own configuration and service access.
- Root and backend test scripts are placeholders which exit with an error. The frontend includes a React test script, but no passing test result is asserted here.

## Portfolio context and next steps

This project provides source examples of React routing, API integration, persistence, and administration screens. A complete production deployment is not claimed.

Priorities are reproducible environment configuration, repairing the known routes, reviewing older dependencies, testing account and post workflows, and adding screenshots of verified functionality.
