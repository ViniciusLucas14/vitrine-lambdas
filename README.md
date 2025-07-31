# 🔐 Backblaze B2 Authorization Lambda

This AWS Lambda function, built using the [Serverless Framework](https://www.serverless.com/), performs authorization with the [Backblaze B2 Cloud Storage API](https://www.backblaze.com/b2/docs/).

## 🚀 What It Does
This Lambda calls the `b2_authorize_account` and it gets the token for Vitrinid to authenticate and integrate with Backblaze services. To know more access: [Vitrinid](http://page.vitrinid.com.br/)

🔧 Features

Retrieves authorizationToken, accountId, and other required B2 credentials

## 🧠 Technologies Used
- Node.js (ESModules)
- AWS Lambda (via Serverless Framework)
- Backblaze B2 API
- GitHub for version control and CI/CD (via GitHub Actions or other)
