### Regras da aplicação

| Regras                                                                       | Descrição                                                                                                                                                                                                                     | Status |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Deve ser possível cadastrar um pet                                           | Contendo: Nome, Descrição (máximo de 300 caracteres, Idade, Porte (pequeno, médio, grande), Nível de energia (baixa, média, alta), nível de independência , Ambiente (reduzido, médio, amplo), Fotos, Requisitos para adoção) | Feito  |
| Deve ser possível listar todos os pets disponíveis para adoção em uma cidade |                                                                                                                                                                                                                               | Feito  |
| Deve ser possível filtrar pets por suas características                      |                                                                                                                                                                                                                               | Feito  |
| Deve ser possível visualizar detalhes de um pet para adoção                  |                                                                                                                                                                                                                               | Feito  |
| Deve ser possível se cadastrar como uma ORG                                  | Contendo os seguintes campos: Nome do responsável, e-mail, CEP, Endereço, Número de whatsapp, Senha                                                                                                                           | Feito  |
| Deve ser possível realizar login como uma ORG                                |                                                                                                                                                                                                                               | Feito  |

### Regras de negócio

| Regras                                                                | Descrição | Status |
| --------------------------------------------------------------------- | --------- | ------ |
| Para listar os pets, obrigatoriamente precisamos informar a cidade    |           | Feito  |
| Uma ORG precisa ter um endereço e um número de WhatsApp               |           | Feito  |
| Um pet deve estar ligado a uma ORG                                    |           | Feito  |
| O usuário que quer adotar, entrará em contato com a ORG via WhatsApp  |           | Feito  |
| Todos os filtros, além da cidade, são opcionais                       |           | Feito  |
| Para uma ORG acessar a aplicação como admin, ela precisa estar logada |           | Feito  |

### Setup E2E Test

```bash
cd prisma/vitest-environment-prisma
npm link
```

```bash
cd ..
cd ..
npm link vitest-environment-prisma
```
