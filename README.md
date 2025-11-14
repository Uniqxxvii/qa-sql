# qa-sql
Playwright + PostgreSQL minimal QA sample

## Quick start
1. Start Postgres:
```bash
   docker run --name pg-qa -e POSTGRES_PASSWORD=pass -e POSTGRES_USER=qa_user -e POSTGRES_DB=qa_db -p 5432:5432 -v pgdata:/var/lib/postgresql/data -d postgres:15
```

2. Seed DB:
```bash
   npm run seed:docker
```

3. Install dependencies:
```bash
   npm install
   npx playwright install
```

4. Run tests:
```bash
   npx playwright test
```
