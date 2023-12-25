# Steps to Run dev server

## UI
  ### `cd UI`
  ### `npm install`
  ### `npm run start`

## Backend
  ### `cd Backend`
  ### Create .env file and add the below content
  ``` 
  HOST = "localhost"
  PORT = "3306"
  MY_SQL_USER = ""
  PASSWORD = ""
  DB = "micros-fw-auth"
  ORIGIN_ADDRESS = "*"
  NODE_PORT = 3001
  # For development
  SERVER = "dev"
  # For Production
  # SERVER = "prod"
  # DOMAIN_NAME = ""
  ```
  ### `npm install`
  ### `npm run start`

## Database
  ### Install `mysql` database
  ### Run the script inside the file `micros-fw-auth-script.sql`