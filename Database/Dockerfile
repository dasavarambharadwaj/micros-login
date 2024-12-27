FROM mysql:latest

COPY my.cnf /etc/mysql/conf.d/

# Copy the initial SQL script to the Docker container
COPY micros-fw-auth-script.sql /docker-entrypoint-initdb.d/

# Expose the default MySQL port
EXPOSE 3306