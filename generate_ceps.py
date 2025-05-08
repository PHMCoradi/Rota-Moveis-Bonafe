#!/usr/bin/env python3
"""
Script para gerar dados de CEPs para os estados de São Paulo e Minas Gerais.
Este script gera dados de exemplo para CEPs comuns em várias cidades.
"""

import json

# CEPs de São Paulo (SP)
sao_paulo_ceps = [
    {
        "cep": "01310200",
        "logradouro": "Avenida Paulista",
        "bairro": "Bela Vista",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5655593,
        "longitude": -46.6541554
    },
    {
        "cep": "04538133",
        "logradouro": "Avenida Brigadeiro Faria Lima",
        "bairro": "Itaim Bibi",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5846735,
        "longitude": -46.6833662
    },
    {
        "cep": "05402000",
        "logradouro": "Rua dos Pinheiros",
        "bairro": "Pinheiros",
        "cidade": "São Paulo",
        "estado": "SP",
        "latitude": -23.5669989,
        "longitude": -46.6883365
    },
    {
        "cep": "01311000",
        "logradouro": "Rua Augusta",
        "bairro": "Consolação",
        "cidade": "São Paulo", 
        "estado": "SP",
        "latitude": -23.5501267,
        "longitude": -46.6504348
    },
    # Campinas
    {
        "cep": "13083970",
        "logradouro": "Universidade Estadual de Campinas",
        "bairro": "Barão Geraldo",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.8165466,
        "longitude": -47.0699234
    },
    {
        "cep": "13015082",
        "logradouro": "Rua Barão de Jaguara",
        "bairro": "Centro",
        "cidade": "Campinas",
        "estado": "SP",
        "latitude": -22.9037889,
        "longitude": -47.0577115
    },
    # Ribeirão Preto
    {
        "cep": "14010140",
        "logradouro": "Rua General Osório",
        "bairro": "Centro",
        "cidade": "Ribeirão Preto",
        "estado": "SP",
        "latitude": -21.1709294,
        "longitude": -47.8090837
    },
    {
        "cep": "14091530",
        "logradouro": "Rua Arnaldo Victaliano",
        "bairro": "Jardim Iguatemi",
        "cidade": "Ribeirão Preto",
        "estado": "SP",
        "latitude": -21.2055079,
        "longitude": -47.7941506
    },
    # São José dos Campos
    {
        "cep": "12243750",
        "logradouro": "Avenida Dr. Nelson D'Ávila",
        "bairro": "Centro",
        "cidade": "São José dos Campos",
        "estado": "SP",
        "latitude": -23.1791397,
        "longitude": -45.8872804
    },
    # Santos
    {
        "cep": "11045534",
        "logradouro": "Praça da Independência",
        "bairro": "Aparecida",
        "cidade": "Santos",
        "estado": "SP",
        "latitude": -23.9683124,
        "longitude": -46.3269976
    },
    # Bauru
    {
        "cep": "17010130",
        "logradouro": "Rua Batista de Carvalho",
        "bairro": "Centro",
        "cidade": "Bauru",
        "estado": "SP",
        "latitude": -22.3208132,
        "longitude": -49.0737941
    },
    # Dois Córregos
    {
        "cep": "17302122",
        "logradouro": "Rua Botafogo 135",
        "bairro": "Vila Coradi",
        "cidade": "Dois Córregos",
        "estado": "SP",
        "latitude": -22.369643,
        "longitude": -48.384349
    }
]

# CEPs de Minas Gerais (MG)
minas_gerais_ceps = [
    # Belo Horizonte
    {
        "cep": "30130110",
        "logradouro": "Praça Sete de Setembro",
        "bairro": "Centro",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "latitude": -19.9235687,
        "longitude": -43.9409658
    },
    {
        "cep": "30310390",
        "logradouro": "Avenida do Contorno",
        "bairro": "Santa Efigênia",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "latitude": -19.9224386,
        "longitude": -43.9350697
    },
    {
        "cep": "30140002",
        "logradouro": "Praça da Liberdade",
        "bairro": "Funcionários",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "latitude": -19.9349283,
        "longitude": -43.9373347
    },
    # Uberlândia
    {
        "cep": "38400156",
        "logradouro": "Avenida Afonso Pena",
        "bairro": "Centro",
        "cidade": "Uberlândia",
        "estado": "MG",
        "latitude": -18.9237513,
        "longitude": -48.2777074
    },
    # Juiz de Fora
    {
        "cep": "36010010",
        "logradouro": "Avenida Getúlio Vargas",
        "bairro": "Centro",
        "cidade": "Juiz de Fora",
        "estado": "MG",
        "latitude": -21.7629646,
        "longitude": -43.3486494
    },
    # Contagem
    {
        "cep": "32010230",
        "logradouro": "Avenida João César de Oliveira",
        "bairro": "Eldorado",
        "cidade": "Contagem",
        "estado": "MG",
        "latitude": -19.9378815,
        "longitude": -44.0304781
    },
    # Betim
    {
        "cep": "32510000",
        "logradouro": "Avenida Amazonas",
        "bairro": "Centro",
        "cidade": "Betim",
        "estado": "MG",
        "latitude": -19.9645865,
        "longitude": -44.1991608
    },
    # Ouro Preto
    {
        "cep": "35400000",
        "logradouro": "Praça Tiradentes",
        "bairro": "Centro",
        "cidade": "Ouro Preto",
        "estado": "MG",
        "latitude": -20.3854745,
        "longitude": -43.5045146
    }
]

# Juntar todos os CEPs
all_ceps = sao_paulo_ceps + minas_gerais_ceps

# Gerar o código TypeScript
ts_code = "// Dicionário de CEPs para busca rápida\n"
ts_code += "export const cepDatabase: Record<string, CepInfo> = {\n"

for cep_info in all_ceps:
    ts_code += f'  // CEP da {cep_info["logradouro"]} em {cep_info["cidade"]} - {cep_info["estado"]}\n'
    ts_code += f'  "{cep_info["cep"]}": {{\n'
    ts_code += f'    logradouro: "{cep_info["logradouro"]}",\n'
    ts_code += f'    bairro: "{cep_info["bairro"]}",\n'
    ts_code += f'    cidade: "{cep_info["cidade"]}",\n'
    ts_code += f'    estado: "{cep_info["estado"]}",\n'
    ts_code += f'    latitude: {cep_info["latitude"]},\n'
    ts_code += f'    longitude: {cep_info["longitude"]}\n'
    ts_code += "  },\n\n"

ts_code += "};"

print(ts_code)

# Também exportar como JSON para referência
with open("ceps.json", "w", encoding="utf-8") as f:
    json.dump(all_ceps, f, ensure_ascii=False, indent=2)

print(f"Gerados {len(all_ceps)} CEPs: {len(sao_paulo_ceps)} de SP e {len(minas_gerais_ceps)} de MG")