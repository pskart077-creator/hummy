export type CategorySlug = "para-ela" | "para-ele" | "vitalidade" | "kits";

export type ProductType = "product" | "kit";

export type CommerceItem = {
  id: string;
  slug: string;
  type: ProductType;
  name: string;
  category: string;
  categorySlug: CategorySlug;
  shortDescription: string;
  description: string;
  benefits: string[];
  usage: string;
  ingredients: string[];
  importantInfo: string;
  price: number;
  oldPrice: number;
  installments: string;
  quantity: string;
  images: string[];
  tags: string[];
  savings?: string;
};

export const categories = [
  {
    slug: "para-ela",
    title: "Para Ela",
    description: "Vitalidade, prazer e confiança para a rotina feminina.",
  },
  {
    slug: "para-ele",
    title: "Para Ele",
    description: "Performance, energia e intensidade sem complicar a rotina.",
  },
  {
    slug: "vitalidade",
    title: "Vitalidade Diária",
    description: "Mais disposição e bem-estar para acompanhar o seu ritmo.",
  },
  {
    slug: "kits",
    title: "Kits Hummy",
    description: "Combinações comerciais para experimentar, repetir ou presentear.",
  },
] satisfies Array<{
  slug: CategorySlug;
  title: string;
  description: string;
}>;

export const products: CommerceItem[] = [
  {
    id: "hummy-libido-fem",
    slug: "hummy-libido-fem",
    type: "product",
    name: "Hummy Libido Fem",
    category: "Para Ela",
    categorySlug: "para-ela",
    shortDescription:
      "Vitalidade, prazer e equilíbrio para a rotina feminina. 30 unidades.",
    description:
      "Hummy Libido Fem foi pensado para mulheres que querem incluir autocuidado, confiança e vitalidade em uma rotina simples de seguir.",
    benefits: [
      "Apoia uma rotina de autocuidado mais prazerosa",
      "Combina praticidade com linguagem leve de bem-estar",
      "Formato fácil de consumir no dia a dia",
      "Ideal para quem busca mais confiança e disposição",
    ],
    usage:
      "Consuma conforme a orientação do rótulo do produto. Mantenha uma rotina consistente e respeite as recomendações de uso.",
    ingredients: [
      "Blend de vitaminas e nutrientes",
      "Ativos de suporte à vitalidade",
      "Aroma natural",
      "Excipientes alimentícios",
    ],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    price: 89.9,
    oldPrice: 119.9,
    installments: "3x de R$29,97 sem juros",
    quantity: "30 unidades",
    images: ["/assets/products/6-libido-fem-img.png"],
    tags: ["feminino", "vitalidade", "bem-estar", "libido"],
  },
  {
    id: "hummy-maca",
    slug: "hummy-maca",
    type: "product",
    name: "Hummy Maca",
    category: "Vitalidade Diária",
    categorySlug: "vitalidade",
    shortDescription:
      "Energia, disposição e vitalidade para o dia a dia. 30 unidades.",
    description:
      "Hummy Maca entra na rotina de quem quer mais disposição e um cuidado diário simples, direto e fácil de manter.",
    benefits: [
      "Ajuda a criar uma rotina de vitalidade diária",
      "Prático para consumir em casa, no trabalho ou na viagem",
      "Boa escolha para quem busca mais energia no dia",
      "Combina com hábitos de bem-estar e autocuidado",
    ],
    usage:
      "Consuma conforme a orientação do rótulo do produto. Evite exceder a recomendação diária indicada.",
    ingredients: [
      "Maca peruana",
      "Blend de vitaminas",
      "Ativos de suporte à disposição",
      "Excipientes alimentícios",
    ],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    price: 79.9,
    oldPrice: 109.9,
    installments: "3x de R$26,63 sem juros",
    quantity: "30 unidades",
    images: ["/assets/products/6-maca-img.png"],
    tags: ["maca", "energia", "disposição", "vitalidade"],
  },
  {
    id: "hummy-tadala",
    slug: "hummy-tadala",
    type: "product",
    name: "Hummy Tadala",
    category: "Para Ele",
    categorySlug: "para-ele",
    shortDescription:
      "Performance, confiança e intensidade para momentos especiais. 30 unidades.",
    description:
      "Hummy Tadala foi criado para quem deseja uma rotina mais confiante, intensa e prática, sem abrir mão de uma experiência premium.",
    benefits: [
      "Rotina prática para momentos de mais confiança",
      "Comunicação direta, jovem e sem exageros",
      "Fácil de incluir antes dos momentos importantes",
      "Ideal para quem valoriza intensidade e bem-estar",
    ],
    usage:
      "Consuma conforme a orientação do rótulo do produto. Use com responsabilidade e siga as recomendações de uso.",
    ingredients: [
      "Blend de ativos de suporte à vitalidade",
      "Vitaminas selecionadas",
      "Aroma natural",
      "Excipientes alimentícios",
    ],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    price: 99.9,
    oldPrice: 139.9,
    installments: "3x de R$33,30 sem juros",
    quantity: "30 unidades",
    images: ["/assets/products/6-tadala-img.png"],
    tags: ["masculino", "performance", "confiança", "intensidade"],
  },
];

export const kits: CommerceItem[] = [
  {
    id: "kit-hummy-essencial",
    slug: "kit-hummy-essencial",
    type: "kit",
    name: "Kit Hummy Essencial",
    category: "Kits Hummy",
    categorySlug: "kits",
    shortDescription: "Contém 1 unidade para começar a rotina Hummy.",
    description:
      "O kit ideal para experimentar a Hummy Original e entender qual produto combina melhor com a sua rotina.",
    benefits: [
      "Entrada simples no universo Hummy",
      "Compra prática",
      "Boa opção para primeira experiência",
    ],
    usage: "Escolha o produto desejado no atendimento e siga as orientações do rótulo.",
    ingredients: ["Ingredientes variam conforme o produto escolhido."],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    price: 89.9,
    oldPrice: 119.9,
    installments: "3x de R$29,97 sem juros",
    quantity: "1 unidade",
    images: ["/assets/products/3-todos-img.png"],
    tags: ["kit", "essencial", "hummy"],
    savings: "Economize R$30",
  },
  {
    id: "kit-hummy-duplo",
    slug: "kit-hummy-duplo",
    type: "kit",
    name: "Kit Hummy Duplo",
    category: "Kits Hummy",
    categorySlug: "kits",
    shortDescription: "Contém 2 unidades para manter a rotina por mais tempo.",
    description:
      "Uma combinação comercial para quem quer repetir a experiência ou dividir com alguém especial.",
    benefits: [
      "Mais tempo de rotina",
      "Melhor custo por unidade",
      "Compra inteligente para recompra",
    ],
    usage: "Escolha os produtos desejados no atendimento e siga as orientações do rótulo.",
    ingredients: ["Ingredientes variam conforme os produtos escolhidos."],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    price: 159.9,
    oldPrice: 239.8,
    installments: "3x de R$53,30 sem juros",
    quantity: "2 unidades",
    images: ["/assets/products/3-todos-img.png"],
    tags: ["kit", "duplo", "economia"],
    savings: "Economize R$79,90",
  },
  {
    id: "kit-hummy-completo",
    slug: "kit-hummy-completo",
    type: "kit",
    name: "Kit Hummy Completo",
    category: "Kits Hummy",
    categorySlug: "kits",
    shortDescription: "Contém 3 unidades para uma experiência Hummy completa.",
    description:
      "O kit mais completo para explorar vitalidade, disposição e confiança em uma rotina simples.",
    benefits: [
      "Experiência mais completa",
      "Maior economia do catálogo",
      "Ideal para presentear ou manter estoque",
    ],
    usage: "Escolha os produtos desejados no atendimento e siga as orientações do rótulo.",
    ingredients: ["Ingredientes variam conforme os produtos escolhidos."],
    importantInfo:
      "Este produto não substitui acompanhamento médico. Consulte um profissional de saúde em caso de dúvidas, uso de medicamentos, gestação, lactação ou condições pré-existentes.",
    price: 219.9,
    oldPrice: 359.7,
    installments: "3x de R$73,30 sem juros",
    quantity: "3 unidades",
    images: ["/assets/products/3-todos-img.png"],
    tags: ["kit", "completo", "mais vendido"],
    savings: "Economize R$139,80",
  },
];

export const shopItems = [...products, ...kits];

export const bestSellers = products;

export function getItemBySlug(slug: string) {
  return shopItems.find((item) => item.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getItemsByCategory(slug: string) {
  return shopItems.filter((item) => item.categorySlug === slug);
}
