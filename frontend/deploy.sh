#!/bin/bash

# dist klasörünün varlığını kontrol et
if [ -d "./dist" ]; then
  # var/www/html içerisindeki mevcut dosyaları sil
  rm -rf /var/www/html/*

  # dist klasörünün içeriğini var/www/html içerisine taşı
  cp -r ./dist/* /var/www/html/
else
  echo "dist klasörü bulunamadı. Lütfen önce 'npm run build' komutunu çalıştırın."
fi
