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

All done! Please open the project directory and check the README.
```

```bash
gh secret set --env-file env.txt --repos <GITHUB_USERNAME>/<REPO>
```
