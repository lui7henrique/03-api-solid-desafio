Certainly, here's the README with an additional section in English for deployment recommendations using the Render platform for hosting the application and Neon for the database:

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


# 🚀 Deployment

For deploying your Find a Friend Back-End and managing your database, we recommend the following services:

### 🌐 Hosting Platform: Render

[Render](https://render.com) is an excellent hosting platform that simplifies the deployment of web applications. It offers continuous integration, automatic scaling, and Docker support. Here's how to deploy your application on Render:

1. Sign up for an account on [Render](https://render.com) if you haven't already.

2. Create a new Render service for your Back-End application and follow the instructions to connect it to your Git repository.

3. Configure environment variables in the Render dashboard under "Environment Variables" to match the settings you defined in your local `.env` file.

4. Render will automatically detect that your application is based on Node.js and will handle dependency installation and environment setup.

5. After the deployment is complete, your application will be live at a Render URL, ready to be accessed.

### 🐘 Database: Neon

[Neon](https://www.neon-soft.com) is a managed PostgreSQL database hosting platform that offers scalability, automated backups, and robust security. To deploy your database on Neon:

1. Create an account on [Neon](https://www.neon-soft.com) if you don't have one already.

2. Create a new PostgreSQL database on Neon and follow the setup instructions. Make sure to note down the connection credentials.

3. In Render, go to your application's environment variables and update the `DATABASE_URL` variable with the connection URL provided by Neon.

4. Render will automatically configure the database connection using the URL you provided.

Now, your Back-End application is deployed on Render, and it's connected to the Neon database. Be sure to fine-tune your production settings as needed and monitor your application's performance on your chosen hosting platform. Good luck! 🚀

This should provide developers with clear instructions on how to deploy the application using Render and Neon for the database.

##  👨‍💻 **Author**

Luiz Henrique - Software Developer

[Linkedin](https://www.linkedin.com/in/luiz-henrique7/) | [E-mail](mailto:7henrique18@gmail.com)

