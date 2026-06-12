export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  category: string;
  readTime: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-seu-hummy",
    title: "Como escolher o Hummy ideal para sua rotina",
    excerpt:
      "Libido Fem, Maca ou Tadala? Entenda como pensar em momento, objetivo e praticidade antes de escolher.",
    date: "12 de junho de 2026",
    image: "/assets/blog/post-escolher-hummy.jpg",
    imageAlt: "Produtos Hummy Original para diferentes rotinas",
    category: "Guia Hummy",
    readTime: "3 min",
    sections: [
      {
        title: "Comece pelo seu momento",
        body:
          "A melhor escolha nasce da sua rotina. Pense se voce busca mais disposicao para o dia, uma experiencia de autocuidado mais confiante ou uma compra mais completa para experimentar a linha.",
      },
      {
        title: "Compare as propostas",
        body:
          "Hummy Libido Fem conversa com autocuidado feminino e confianca. Hummy Maca combina com energia e vitalidade diaria. Hummy Tadala foi pensado para uma rotina mais intensa e pratica.",
      },
      {
        title: "Na duvida, va de kit",
        body:
          "Os kits ajudam quem quer conhecer mais de uma opcao e economizar na compra. Eles tambem deixam a recompra mais simples para quem ja sabe que quer manter a rotina.",
      },
    ],
  },
  {
    slug: "energia-sem-complicar",
    title: "Energia sem complicar: habitos simples para o dia render",
    excerpt:
      "Pequenas escolhas de rotina podem deixar o autocuidado mais leve, constante e facil de manter.",
    date: "10 de junho de 2026",
    image: "/assets/blog/post-energia-rotina.jpg",
    imageAlt: "Hummy Maca em uma rotina de energia e disposicao",
    category: "Vitalidade",
    readTime: "4 min",
    sections: [
      {
        title: "Rotina boa precisa ser simples",
        body:
          "O segredo de um cuidado constante e nao transformar tudo em tarefa dificil. Deixe seu Hummy em um lugar visivel e associe o consumo a um momento que ja existe no seu dia.",
      },
      {
        title: "Crie pequenos rituais",
        body:
          "Agua, pausa, movimento e uma escolha pratica de autocuidado ja mudam a sensacao de controle da rotina. O importante e repetir sem precisar pensar demais.",
      },
      {
        title: "Acompanhe seu ritmo",
        body:
          "Cada pessoa tem um tempo. Observe sua agenda, seu sono, sua alimentacao e suas prioridades antes de ajustar qualquer habito.",
      },
    ],
  },
  {
    slug: "autocuidado-e-confianca",
    title: "Autocuidado e confianca: quando a rotina pede atencao",
    excerpt:
      "Entenda sinais simples de que vale reorganizar seus momentos de cuidado, prazer e bem-estar.",
    date: "08 de junho de 2026",
    image: "/assets/blog/post-autocuidado-confianca.jpg",
    imageAlt: "Hummy Libido Fem e Tadala para autocuidado e confianca",
    category: "Bem-estar",
    readTime: "3 min",
    sections: [
      {
        title: "Confiança tambem e rotina",
        body:
          "Autocuidado nao precisa ser grande para funcionar. Ele pode aparecer no jeito de organizar o dia, no descanso, no cuidado com o corpo e nas escolhas que fazem sentido para voce.",
      },
      {
        title: "Prazer sem pressa",
        body:
          "Uma rotina mais leve tambem abre espaco para momentos de desejo, presenca e conexao. A proposta da Hummy e deixar esse cuidado mais simples e menos travado.",
      },
      {
        title: "Cuide com responsabilidade",
        body:
          "Produtos de bem-estar nao substituem acompanhamento medico. Em caso de duvidas, uso de medicamentos, gestacao, lactacao ou condicoes pre-existentes, fale com um profissional de saude.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
