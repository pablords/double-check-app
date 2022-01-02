#!/bin/bash

set -e


if [ "$1" ]; then echo "CONTEXTO: $1"; fi
if [ "$ENVIRONMENT" ]; then echo "CONTEXTO: $ENVIRONMENT"; fi
if [ "$APP_PATH" ]; then echo "DIRETORIO: $APP_PATH"; fi


if [ -z "$APP_PATH" ]; then APP_PATH=./; fi

if [ -d plugins ]; then
    echo "REMOVENDO PLUGINS";
    rm -rf  plugins
fi

if [ -d www ]; then
    echo "REMOVENDO WWW";
    rm -rf  www
fi

if [ -d platforms ]; then
    echo "REMOVENDO PLATAFORMAS";
    rm -rf  platforms
fi



if [ "$ENVIRONMENT" == "DEVELOPMENT" ] || [ "$1" == "DEVELOPMENT" ]; then
    source $APP_PATH/.env.dev
    echo "CRIANDO ARQUIVO .ENV"
    sed -i 1,1000d .env
    cat .env.dev >> .env
    echo "INSTALANDO DEPENDENCIAS EM $APP_PATH"
    npm install --prefix $APP_PATH --force
    npm start
fi

if [ "$ENVIRONMENT" == "TEST" ] || [ "$1" == "TEST" ]; then
    echo "CRIANDO ARQUIVO .ENV"
    sed -i 1,1000d .env
    cat .env.prod >> .env
    echo "INICIADO BUILD DA APLICACAO"
    npm run build --prefix $APP_PATH
    echo "INCIANDO SERVIDOR"
    
fi


if [ "$ENVIRONMENT" == "PRODUCTION" ] || [ "$1" == "PRODUCTION" ]; then
    echo "CRIANDO ARQUIVO .ENV"
    sed -i 1,1000d .env
    cat .env.prod >> .env
    npm run build --prefix $APP_PATH
    echo "INCIANDO SERVIDOR"
fi


if [ ! "$1" == "TEST" ]; then
    echo "Executando comando inicial do container"
    exec  "$@"
else
    echo "Terminado"
fi


