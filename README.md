# Worskpace Admin API Demo

## Steps to follow

- Create a project in google dev console
- Setup both service acct and oauth client id authentication keys
- Download credentials on OAuth then save it as credentials.json
- Download credentials on Service Accounts then save it as key.json

## Preperations

- Create a `.env` file in the project root the supply the following as content:
  ```
  GSUITE_ID=your_company_immutable_GSUITE_ID
  ```
- Run `npm i`

## Running

- Make sure you `npm i` before running both commands below.

1. Run `npm run start:oauth` for OAuth example
2. Run `npm run start:service-acct` for Service Account example
