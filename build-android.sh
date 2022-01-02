#!/bin/bash

set -e


if [ -d plugins ]; then
    echo "REMOVENDO PLUGINS";
    rm -rf  plugins
fi


if [ -d platforms ]; then
    echo "REMOVENDO PLATAFORMAS";
    rm -rf  platforms
fi

echo "ADICIONADO PLATAFORMA ANDROID"
cordova platform add android 
echo "INICIADO BUILD ANDROID"
cordova build android 
echo "RODANDO BUILD ANDROID"
cordova run android