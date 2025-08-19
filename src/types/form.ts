export interface FormData {
  // Identificação
  nome: string;
  dataAniversario: string;
  
  // Tamanhos
  camiseta: string;
  calca: string;
  sapato: string;
  observacoesTamanhos: string;
  
  // Preferências
  estilos: string[];
  coresFavoritas: string;
  coresEvitar: string;
  
  // Tipos de presentes
  tiposPresentes: string[];
  generosLivros: string[];
  preferenciaGastronomia: string;
  
  // Restrições
  alergias: string[];
  preferenciasAlimentares: string[];
  
  // Wishlist
  wishlist: string[];
  observacoesAdicionais: string;
  
  // Consentimento
  consentimento: boolean;
}

export interface FormErrors {
  [key: string]: string;
}
