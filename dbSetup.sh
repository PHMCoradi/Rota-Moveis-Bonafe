#!/bin/bash

# Script para inicializar o banco de dados e popular com CEPs

# Executar script completo de setup (criar tabelas e popular com CEPs)
echo "Iniciando setup completo do banco de dados..."
npx tsx server/populateCeps.ts

echo "Configuração do banco de dados concluída!"