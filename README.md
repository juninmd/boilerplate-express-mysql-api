# boilerplate-express-mysql-api

API simples em express com mysql

## Setup

```sh
yarn install --frozen-lockfile
node app.js
```

O app lê `bin/env/<NODE_ENV>.env` (padrão `development.env`) e sobe na `PORT`. Variáveis lidas em `app.js` e `bin/webconfig.js`: `PORT`, `NODE_ENV`, `mysqlhost`, `mysqluser`, `mysqlpassword`, `mysqldatabase`, `mysqlport`, `urlHook`, `channel`, `iconUrl`, `botusername`.

Não há scripts `build`, `lint` ou `test` em `package.json`; o gate de PR pula essas etapas.

## CI

- `validate.yml`: checa segredos tracked, instala com lockfile congelado e roda `yarn audit --level high` (bloqueante).
- `security.yml`: Gitleaks sobre o histórico (config em `.gitleaks.toml`).
