# Scaffold the project `pnpm create platformatic@latest`

```bash
 Hello Constantin Câmpean, welcome to Platformatic 0.31.0!
 Platformatic is not supported on Node.js v20.4.0.
 Please use one of the following Node.js versions >= 18.8.0 or >= 19.0.0.
 Let's start by creating a new project.
? Which kind of project do you want to create? DB
? Where would you like to create your project? .
? What database do you want to use? SQLite
? Do you want to use the connection string "sqlite://./db.sqlite"? Confirm
? Do you want to create default migrations? yes
? Do you want to create a plugin? yes
? Do you want to use TypeScript? no
? What port do you want to use? 3042
[19:16:45] INFO: Configuration file platformatic.db.json successfully created.
[19:16:45] INFO: Environment file .env successfully created.
[19:16:45] INFO: Migrations folder migrations successfully created.
[19:16:45] INFO: Migration file 001.do.sql successfully created.
[19:16:45] INFO: Migration file 001.undo.sql successfully created.
[19:16:45] INFO: Plugin file created at plugin.js
? Do you want to overwrite the existing README.md? yes
? Do you want to run pnpm install? yes
✔ ...done!
? Do you want to apply migrations? yes
✔ ...done!
? Do you want to generate types? yes
✔ ...done!
? Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? yes

[19:17:40] INFO: Github action successfully created, please add the following secrets as repository secrets:
[19:17:40] INFO:
      PLATFORMATIC_DYNAMIC_WORKSPACE_ID: your workspace id
PLATFORMATIC_DYNAMIC_WORKSPACE_API_KEY: your workspace API key
                          DATABASE_URL: sqlite://./db.sqlite
? Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? yes
[19:17:51] INFO: Github action successfully created, please add the following secrets as repository secrets:
[19:17:51] INFO:
      PLATFORMATIC_STATIC_WORKSPACE_ID: your workspace id
PLATFORMATIC_STATIC_WORKSPACE_API_KEY: your workspace API key
                         DATABASE_URL: sqlite://./db.sqlite
```

# Dump

- Deploy the app from cli with [`plt deploy`](https://youtu.be/8yTsy3SjPks)
- [Platformatic cloud wizard](https://github.com/settings/installations/39693393)
- https://portal.gitnation.org/contents/build-and-deploy-a-backend-with-fastify-and-platformatic
- https://blog.platformatic.dev/deploy-a-full-stack-app-with-platformatic-vercel-and-neon
- https://backend.cafe/how-to-build-a-pokedex-with-platformatic
- https://www.howtographql.com/graphql-js/7-subscriptions
- https://www.youtube.com/watch?v=2Pzu4Azmud8
- https://youtu.be/5wG2fy0Xe0A
- https://www.perplexity.ai/search/f029f524-9c06-4a65-83f7-6fa33186bf38

# TODO

- How to update the Swagger docs?
- Where can I see the URL of the deployed app?
