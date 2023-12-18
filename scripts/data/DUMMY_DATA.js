const categories = [
  {
    id: 'artigos',
    key: 'artigos',
    name: 'Artigos'
  },
  {
    id: 'livros',
    key: 'livros',
    name: 'Livros'
  },
  {
    id: 'videos',
    key: 'videos',
    name: 'Vídeos'
  }
]

const items = [
  {
    title: 'Smartphone',
    description: 'Desfrute de uma experiência de última geração com nosso smartphone. Este dispositivo incrível apresenta uma tela de alta resolução que exibe cores vibrantes e detalhes nítidos. Com um processador potente e uma câmera de alta qualidade, capture momentos preciosos com clareza excepcional. Sua bateria de longa duração garante que você fique conectado durante todo o dia.',
    price: 99999,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/icones-isometricos-de-dispositivos-eletronicos-inovadores-de-tecnologia-eletronica-definidos-com-fone-de-ouvido-de-realidade-virtual-relogio-inteligente-roxo_1284-29227.jpg',
    stock: 50,
    categoryId: 'artigos',
  },
  {
    title: 'Laptop',
    description: 'Aumente sua produtividade com nosso laptop inovador. Projetado para oferecer desempenho excepcional, este laptop possui um processador veloz e armazenamento generoso para todas as suas necessidades. Sua tela de alta definição proporciona uma experiência visual imersiva. Com design elegante e portabilidade, é ideal para o trabalho em movimento ou entretenimento relaxante.',
    price: 149999,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/icones-isometricos-de-dispositivos-eletronicos-inovadores-de-tecnologia-eletronica-definidos-com-fone-de-ouvido-de-realidade-virtual-relogio-inteligente-roxo_1284-29227.jpg',
    stock: 30,
    categoryId: 'artigos',
  },
  {
    title: 'Livro - Aventura na Floresta',
    description: 'Embarque nesta emocionante aventura literária que transporta você para uma jornada através da densa floresta. Com personagens cativantes e reviravoltas emocionantes, este livro mantém você envolvido do começo ao fim. Descubra os segredos ocultos entre as árvores e desvende os mistérios que aguardam nesta narrativa emocionante.',
    price: 1999,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg',
    stock: 25,
    categoryId: 'livros',
  },
  {
    title: 'Livro - Mistérios do Universo',
    description: 'Explore o desconhecido com este livro fascinante que mergulha nos segredos profundos do universo. Descubra galáxias distantes, buracos negros e teorias intrigantes que desafiam nossa compreensão. Com ilustrações detalhadas e explicações acessíveis, esta obra é uma jornada emocionante pelo cosmos e suas maravilhas.',
    price: 2999,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg',
    stock: 20,
    categoryId: 'livros',
  },
  {
    title: 'Vídeo - Curso de Fotografia',
    description: 'Aprimore suas habilidades fotográficas com este curso completo em vídeo. Desde noções básicas até técnicas avançadas, este curso abrange todos os aspectos da fotografia. Aprenda a dominar a luz, composição e edição para capturar imagens deslumbrantes. Aprimore seu olhar artístico e crie fotografias memoráveis.',
    price: 4999,
    pictureUrl: 'https://img.freepik.com/premium-vector/professional-video-camera-icon-vector-illustration_444196-4733.jpg',
    stock: 40,
    categoryId: 'videos',
  },
  {
    title: 'Fones de Ouvido Bluetooth',
    description: 'Experimente a liberdade sem fio com estes fones de ouvido Bluetooth. Projetados para qualidade de som excepcional, oferecem áudio nítido e graves potentes. Seu design ergonômico e confortável permite longas sessões de audição. Com conectividade estável, são ideais para uso diário ou atividades físicas.',
    price: 7999,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/icones-isometricos-de-dispositivos-eletronicos-inovadores-de-tecnologia-eletronica-definidos-com-fone-de-ouvido-de-realidade-virtual-relogio-inteligente-roxo_1284-29227.jpg',
    stock: 35,
    categoryId: 'artigos',
  },
  {
    title: 'Livro - Receitas Saudáveis',
    description: 'Descubra um novo mundo de alimentação saudável com este livro de receitas diversificado. Repleto de pratos deliciosos e nutritivos, oferece opções para todas as refeições do dia. Desde saladas refrescantes até sobremesas irresistíveis, este livro é um guia completo para uma vida mais saudável.',
    price: 2499,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg',
    stock: 15,
    categoryId: 'livros',
  },
  {
    title: 'Câmera DSLR',
    description: 'Capte momentos especiais com esta câmera DSLR de alta qualidade. Equipada com recursos avançados, oferece imagens nítidas e detalhadas. Seja fotografando paisagens deslumbrantes ou retratos encantadores, esta câmera oferece versatilidade e desempenho excepcional para fotógrafos exigentes.',
    price: 69999,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/icones-isometricos-de-dispositivos-eletronicos-inovadores-de-tecnologia-eletronica-definidos-com-fone-de-ouvido-de-realidade-virtual-relogio-inteligente-roxo_1284-29227.jpg',
    stock: 10,
    categoryId: 'artigos',
  },
  {
    title: 'Vídeo - Aulas de Yoga',
    description: 'Encontre equilíbrio e bem-estar com estas aulas de yoga em vídeo. Guiadas por instrutores experientes, as aulas abrangem desde posturas básicas até técnicas avançadas de respiração. Aprenda a relaxar a mente e fortalecer o corpo no conforto da sua casa.',
    price: 2999,
    pictureUrl: 'https://img.freepik.com/premium-vector/professional-video-camera-icon-vector-illustration_444196-4733.jpg',
    stock: 50,
    categoryId: 'videos',
  },
  {
    title: 'Mouse Sem Fio',
    description: 'Maximize sua eficiência com este mouse ergonômico e sem fio. Projetado para conforto e precisão, oferece movimentos suaves e responsivos. Com conectividade estável, é perfeito para trabalho ou jogos. Sua bateria de longa duração mantém você produtivo por mais tempo.',
    price: 3999,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/icones-isometricos-de-dispositivos-eletronicos-inovadores-de-tecnologia-eletronica-definidos-com-fone-de-ouvido-de-realidade-virtual-relogio-inteligente-roxo_1284-29227.jpg',
    stock: 45,
    categoryId: 'artigos',
  },
  {
    title: 'Livro - Mistérios Antigos',
    description: 'Mergulhe nos enigmas do passado com este livro fascinante sobre mistérios antigos. Explore civilizações perdidas, artefatos misteriosos e teorias intrigantes que desafiam explicações convencionais. Uma viagem emocionante pelo desconhecido aguarda você nestas páginas.',
    price: 2299,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg',
    stock: 20,
    categoryId: 'livros',
  },
  {
    title: 'Caixa de Som Portátil',
    description: 'Leve a festa com você para qualquer lugar com esta caixa de som portátil. Oferecendo som de alta qualidade e bateria de longa duração, é perfeita para atividades ao ar livre ou reuniões com amigos. Seu design compacto e resistente facilita o transporte.',
    price: 5999,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/icones-isometricos-de-dispositivos-eletronicos-inovadores-de-tecnologia-eletronica-definidos-com-fone-de-ouvido-de-realidade-virtual-relogio-inteligente-roxo_1284-29227.jpg',
    stock: 55,
    categoryId: 'artigos',
  },
  {
    title: 'Vídeo - Curso de Edição de Vídeo',
    description: 'Domine a arte da edição de vídeo com este curso completo em vídeo. Aprenda desde os fundamentos até técnicas avançadas de edição. Descubra ferramentas poderosas e truques profissionais para criar vídeos incríveis e destacar seu trabalho. Com aulas práticas e exemplos reais, este curso é ideal para aspirantes a editores de vídeo ou profissionais que desejam aprimorar suas habilidades.',
    price: 8999,
    pictureUrl: 'https://img.freepik.com/premium-vector/professional-video-camera-icon-vector-illustration_444196-4733.jpg',
    stock: 25,
    categoryId: 'videos',
  },
  {
    title: 'Livro - Viagem ao Desconhecido',
    description: 'Embarque em uma jornada literária fascinante para terras desconhecidas. Este livro leva você a locais exóticos, aventuras emocionantes e encontros inspiradores. Descubra culturas fascinantes e paisagens deslumbrantes enquanto viaja através das páginas desta obra envolvente.',
    price: 1799,
    pictureUrl: 'https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg',
    stock: 30,
    categoryId: 'livros',
  }
];

module.exports = {items, categories}
