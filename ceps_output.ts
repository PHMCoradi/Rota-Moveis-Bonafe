interface CepInfo {
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
  latitude?: number;
  longitude?: number;
}

// Dicionário de CEPs para busca rápida
export const cepDatabase: Record<string, CepInfo> = {
  // CEP da Avenida Paulista em São Paulo - SP
  "01310200": {
    logradouro: "Avenida Paulista",
    bairro: "Bela Vista",
    cidade: "São Paulo",
    estado: "SP",
    latitude: -23.5655593,
    longitude: -46.6541554
  },

  // CEP da Avenida Brigadeiro Faria Lima em São Paulo - SP
  "04538133": {
    logradouro: "Avenida Brigadeiro Faria Lima",
    bairro: "Itaim Bibi",
    cidade: "São Paulo",
    estado: "SP",
    latitude: -23.5846735,
    longitude: -46.6833662
  },

  // CEP da Rua dos Pinheiros em São Paulo - SP
  "05402000": {
    logradouro: "Rua dos Pinheiros",
    bairro: "Pinheiros",
    cidade: "São Paulo",
    estado: "SP",
    latitude: -23.5669989,
    longitude: -46.6883365
  },

  // CEP da Rua Augusta em São Paulo - SP
  "01311000": {
    logradouro: "Rua Augusta",
    bairro: "Consolação",
    cidade: "São Paulo",
    estado: "SP",
    latitude: -23.5501267,
    longitude: -46.6504348
  },

  // CEP da Universidade Estadual de Campinas em Campinas - SP
  "13083970": {
    logradouro: "Universidade Estadual de Campinas",
    bairro: "Barão Geraldo",
    cidade: "Campinas",
    estado: "SP",
    latitude: -22.8165466,
    longitude: -47.0699234
  },

  // CEP da Rua Barão de Jaguara em Campinas - SP
  "13015082": {
    logradouro: "Rua Barão de Jaguara",
    bairro: "Centro",
    cidade: "Campinas",
    estado: "SP",
    latitude: -22.9037889,
    longitude: -47.0577115
  },

  // CEP da Rua General Osório em Ribeirão Preto - SP
  "14010140": {
    logradouro: "Rua General Osório",
    bairro: "Centro",
    cidade: "Ribeirão Preto",
    estado: "SP",
    latitude: -21.1709294,
    longitude: -47.8090837
  },

  // CEP da Rua Arnaldo Victaliano em Ribeirão Preto - SP
  "14091530": {
    logradouro: "Rua Arnaldo Victaliano",
    bairro: "Jardim Iguatemi",
    cidade: "Ribeirão Preto",
    estado: "SP",
    latitude: -21.19465085439178,
    longitude: -47.78211921523098
  },

  // CEP da Avenida Dr. Nelson D'Ávila em São José dos Campos - SP
  "12243750": {
    logradouro: "Avenida Dr. Nelson D'Ávila",
    bairro: "Centro",
    cidade: "São José dos Campos",
    estado: "SP",
    latitude: -23.1791397,
    longitude: -45.8872804
  },

  // CEP da Praça da Independência em Santos - SP
  "11045534": {
    logradouro: "Praça da Independência",
    bairro: "Aparecida",
    cidade: "Santos",
    estado: "SP",
    latitude: -23.9683124,
    longitude: -46.3269976
  },

  // CEP da Rua Batista de Carvalho em Bauru - SP
  "17010130": {
    logradouro: "Rua Batista de Carvalho",
    bairro: "Centro",
    cidade: "Bauru",
    estado: "SP",
    latitude: -22.3208132,
    longitude: -49.0737941
  },

  // CEP da Rua 13 de Maio em Dois Córregos - SP
  "17302122": {
    logradouro: "Rua 13 de Maio",
    bairro: "Centro",
    cidade: "Dois Córregos",
    estado: "SP",
    latitude: -22.369643,
    longitude: -48.384349
  },

  // CEP da Praça Sete de Setembro em Belo Horizonte - MG
  "30130110": {
    logradouro: "Praça Sete de Setembro",
    bairro: "Centro",
    cidade: "Belo Horizonte",
    estado: "MG",
    latitude: -19.9235687,
    longitude: -43.9409658
  },

  // CEP da Avenida do Contorno em Belo Horizonte - MG
  "30310390": {
    logradouro: "Avenida do Contorno",
    bairro: "Santa Efigênia",
    cidade: "Belo Horizonte",
    estado: "MG",
    latitude: -19.9224386,
    longitude: -43.9350697
  },

  // CEP da Praça da Liberdade em Belo Horizonte - MG
  "30140002": {
    logradouro: "Praça da Liberdade",
    bairro: "Funcionários",
    cidade: "Belo Horizonte",
    estado: "MG",
    latitude: -19.9349283,
    longitude: -43.9373347
  },

  // CEP da Avenida Afonso Pena em Uberlândia - MG
  "38400156": {
    logradouro: "Avenida Afonso Pena",
    bairro: "Centro",
    cidade: "Uberlândia",
    estado: "MG",
    latitude: -18.9237513,
    longitude: -48.2777074
  },

  // CEP da Avenida Getúlio Vargas em Juiz de Fora - MG
  "36010010": {
    logradouro: "Avenida Getúlio Vargas",
    bairro: "Centro",
    cidade: "Juiz de Fora",
    estado: "MG",
    latitude: -21.7629646,
    longitude: -43.3486494
  },

  // CEP da Avenida João César de Oliveira em Contagem - MG
  "32010230": {
    logradouro: "Avenida João César de Oliveira",
    bairro: "Eldorado",
    cidade: "Contagem",
    estado: "MG",
    latitude: -19.9378815,
    longitude: -44.0304781
  },

  // CEP da Avenida Amazonas em Betim - MG
  "32510000": {
    logradouro: "Avenida Amazonas",
    bairro: "Centro",
    cidade: "Betim",
    estado: "MG",
    latitude: -19.9645865,
    longitude: -44.1991608
  },

  // CEP da Praça Tiradentes em Ouro Preto - MG
  "35400000": {
    logradouro: "Praça Tiradentes",
    bairro: "Centro",
    cidade: "Ouro Preto",
    estado: "MG",
    latitude: -20.3854745,
    longitude: -43.5045146
  },
  
  // CEPs comuns no Rio de Janeiro - RJ
  "22031000": {
    logradouro: "Avenida Atlântica",
    bairro: "Copacabana",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    latitude: -22.9720358,
    longitude: -43.1869932
  },
  
  // CEPs comuns em Curitiba - PR
  "80060150": {
    logradouro: "Rua XV de Novembro",
    bairro: "Centro",
    cidade: "Curitiba",
    estado: "PR",
    latitude: -25.4291691,
    longitude: -49.2696101
  },
  
  // CEPs comuns em Salvador - BA
  "40060055": {
    logradouro: "Avenida Sete de Setembro",
    bairro: "Campo Grande",
    cidade: "Salvador",
    estado: "BA",
    latitude: -12.9914073,
    longitude: -38.5243881
  },
  
  // São Carlos - SP
  "13560010": {
    logradouro: "Rua General Osório",
    bairro: "Centro",
    cidade: "São Carlos",
    estado: "SP",
    latitude: -22.0175,
    longitude: -47.8908
  }
};