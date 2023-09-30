# 🐾 Find a Friend (Back-End)

This is the documentation for the Find a Friend (back-end), a crucial part of the practical challenge aimed at reinforcing concepts of `API development`, `SOLID principles`, and `testing`. The project consists of an API designed to facilitate the adoption of animals by connecting individuals interested in adopting pets with organizations that offer animals for adoption.

## 💡 About

### Application Rules

- [x] It must be possible to register a pet.
- [x] It must be possible to list all pets available for adoption in a city.
- [x] It must be possible to filter pets by their characteristics.
- [x] It must be possible to view details of a pet available for adoption.
- [x] It must be possible to register as an organization (ORG).
- [x] It must be possible to log in as an organization (ORG).

### Business Rules

- [x] To list pets, it is mandatory to provide the city.
- [x] An ORG needs to have an address and a WhatsApp number.
- [x] A pet must be associated with an ORG.
- [x] Users who want to adopt a pet will contact the ORG via WhatsApp.
- [x] All filters, other than the city, are optional.
- [x] For an ORG to access the application as an admin, they must be logged in.

## 🚀 How to Run

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

## 🛠️ How to Build

1. **Compile TypeScript to JavaScript:**

   ```bash
   pnpm run build
   ```

2. **Start the Compiled Server:**

   ```bash
   pnpm start
   ```

## 🧪 How to Test

To run tests, follow these steps:

1. **Execute Unit Tests:**

   ```bash
   pnpm run test
   ```

2. **Execute Integration Tests:**

   ```bash
   pnpm run test:e2e
   ```

3. **Generate Test Coverage Report:**

   ```bash
   pnpm run test:coverage
   ```

The tests will ensure the functionality and reliability of the Find a Friend Back-End.

## 📦 Dependencies

- `@fastify/cors`, `fastify`: Framework for Node.js API development.
- `@prisma/client`: Prisma client for interacting with the database.
- `bcryptjs`: Library for password hashing.
- `dotenv`: Environment variable loading.
- `supertest`: Library for integration testing.
- `tsup`: TypeScript compiler.
- `vitest`: Testing framework.
- `zod`: Data validation library. 🐶

> If you're interested in deploying the application, you can learn how to do it [here](https://github.com/lui7henrique/find-a-friend-back-end/blob/main/DEPLOY.MD). It's quick and easy! 🚀

##  👨‍💻 **Author**

Luiz Henrique - Software Developer

[Linkedin](https://www.linkedin.com/in/luiz-henrique7/) | [E-mail](mailto:7henrique18@gmail.com)



