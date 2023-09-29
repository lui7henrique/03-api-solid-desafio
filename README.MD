```markdown
# Find a Friend Back-End

This is the documentation for the Find a Friend Back-End, a crucial part of the practical challenge aimed at reinforcing concepts of API development, SOLID principles, and testing. The project consists of an API designed to facilitate the adoption of animals by connecting individuals interested in adopting pets with organizations that offer animals for adoption.

## Description

The Find a Friend Back-End is the server-side component of this application, providing the necessary resources for the operation of the animal adoption platform.

## How to Run

To run the Find a Friend Back-End, follow these steps:

1. **Start Docker Compose:**

   ```bash
   docker-compose up
   ```

2. **Set Environment Variables:**

   Create a `.env` file or configure environment variables with the following values:

   ```
   NODE_ENV=dev
   PORT=3333
   DATABASE_URL=postgresql://docker:docker@localhost:5432/find-a-friend-db?schema=public
   JWT_SECRET=henrique
   ```

3. **Install Dependencies:**

   ```bash
   pnpm install
   ```

4. **Generate Prisma Client:**

   ```bash
   npx prisma generate
   ```

5. **Run Prisma Migrations:**

   ```bash
   npx prisma migrate dev
   ```

6. **Start the Server in Development Mode:**

   ```bash
   pnpm run start:dev
   ```

The Find a Friend Back-End should now be running and accessible at the specified port. You can interact with the API according to your requirements.

## How to Build

To build the project, follow these steps:

1. **Compile TypeScript to JavaScript:**

   ```bash
   pnpm run build
   ```

2. **Start the Compiled Server:**

   ```bash
   pnpm start
   ```

## How to Test

To run tests, follow these steps:

1. **Install Dependencies:**

   ```bash
   pnpm install
   ```

2. **Generate Prisma Client:**

   ```bash
   npx prisma generate
   ```

3. **Run Prisma Migrations:**

   ```bash
   npx prisma migrate dev
   ```

4. **Execute Unit Tests:**

   ```bash
   pnpm run test
   ```

5. **Execute Integration Tests:**

   ```bash
   pnpm run test:e2e
   ```

6. **Generate Test Coverage Report:**

   ```bash
   pnpm run test:coverage
   ```

The tests will ensure the functionality and reliability of the Find a Friend Back-End.

## Dependencies

- `@fastify/cors`, `fastify`: Framework for Node.js API development.
- `@prisma/client`: Prisma client for interacting with the database.
- `bcryptjs`: Library for password hashing.
- `dotenv`: Environment variable loading.
- `supertest`: Library for integration testing.
- `tsup`: TypeScript compiler.
- `vitest`: Testing framework.
- `zod`: Data validation library.

Developed with 💜 by Rocketseat 👋
```
