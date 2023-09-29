# Find a Friend Back-End

This is the documentation for the Find a Friend Back-End, a crucial part of the practical challenge aimed at reinforcing concepts of API development, SOLID principles, and testing. The project consists of an API designed to facilitate the adoption of animals by connecting individuals interested in adopting pets with organizations that offer animals for adoption.

## Description

The Find a Friend Back-End is the server-side component of this application, providing the necessary resources for the operation of the animal adoption platform.

## Scripts

### Development Execution

- `npm run start:dev`: Initiates the server in development mode, monitoring changes in `src/server.ts`.

### Build

- `npm run build`: Compiles TypeScript code into JavaScript, generating files in the `build` folder.
- `npm start`: Launches the server using the compiled files.

### Testing

- `npm run test`: Executes unit tests located in the `src/use-cases` folder.
- `npm run test:e2e`: Executes integration tests located in the `src/http` folder.
- `npm run test:coverage`: Runs tests and generates a coverage report.

## Dependencies

- `@fastify/cors`, `fastify`: Framework for Node.js API development.
- `@prisma/client`: Prisma client for interacting with the database.
- `bcryptjs`: Library for password hashing.
- `dotenv`: Environment variable loading.
- `supertest`: Library for integration testing.
- `tsup`: TypeScript compiler.
- `vitest`: Testing framework.
- `zod`: Data validation library.
