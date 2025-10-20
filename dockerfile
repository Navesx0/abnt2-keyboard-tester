# Use a imagem oficial do Alpine com Java 24
FROM eclipse-temurin:24-jdk-alpine

# Instale dependências necessárias
RUN apk add --no-cache bash

# Diretório de trabalho
WORKDIR /app

# Copie o arquivo JAR
COPY target/Teclado-0.0.1-SNAPSHOT.jar app.jar

# Exponha a porta da aplicação
EXPOSE 8080

# Comando para executar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]