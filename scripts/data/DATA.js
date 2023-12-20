const categories = [
  {
    id: 'linguagens',
    key: 'linguagens',
    name: 'Linguagens de programação'
  },
  {
    id: 'bibliotecas',
    key: 'bibliotecas',
    name: 'Bibliotecas de códigos'
  },
  {
    id: 'frameworks',
    key: 'frameworks',
    name: 'Esqueletos de aplicação'
  }
]

const unshuffledItems = [
  {
    categoryId: 'bibliotecas',
    title: 'React',
    description: 'React é uma biblioteca JavaScript para criar interfaces de usuário.',
    price: 19999,
    images: ['react.png'],
    stock: 100,
  },
  {
    categoryId: 'frameworks',
    title: 'Angular',
    description: 'Angular é um framework TypeScript mantido pelo Google para criar aplicativos web.',
    price: 19999,
    images: ['angular.png'],
    stock: 80,
  },
  {
    categoryId: 'linguagens',
    title: 'Python',
    description: 'Python é uma linguagem de programação de alto nível conhecida por sua simplicidade e legibilidade.',
    price: 14999,
    images: ['python.jpg'],
    stock: 120,
  },
  {
    categoryId: 'bibliotecas',
    title: 'jQuery',
    description: 'jQuery é uma biblioteca JavaScript que simplifica a manipulação de documentos HTML, animações e interações AJAX.',
    price: 29999,
    images: ['jquery.png'],
    stock: 60,
  },
  {
    categoryId: 'frameworks',
    title: 'Vue.js',
    description: 'Vue.js é um framework progressivo para a construção de interfaces de usuário.',
    price: 24999,
    images: ['vuejs.png'],
    stock: 90,
  },
  {
    categoryId: 'linguagens',
    title: 'Java',
    description: 'Java é uma linguagem de programação amplamente usada para desenvolvimento de aplicativos.',
    price: 9999,
    images: ['java.png'],
    stock: 110,
  },
  {
    categoryId: 'bibliotecas',
    title: 'Lodash',
    description: 'Lodash é uma biblioteca JavaScript que oferece utilitários para manipulação de arrays, objetos e strings.',
    price: 4990,
    images: ['lodash.png'],
    stock: 75,
  },
  {
    categoryId: 'frameworks',
    title: 'Django',
    description: 'Django é um framework web de alto nível baseado em Python para desenvolvimento rápido e limpo.',
    price: 9999,
    images: ['django.png'],
    stock: 65,
  },
  {
    categoryId: 'linguagens',
    title: 'JavaScript',
    description: 'JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web.',
    price: 29990,
    images: ['javascript.png'],
    stock: 150,
  },
  {
    categoryId: 'bibliotecas',
    title: 'Moment.js',
    description: 'Moment.js é uma biblioteca JavaScript para manipulação de datas e horários de forma fácil e eficiente.',
    price: 4599,
    images: ['momentjs.jpg'],
    stock: 55,
  },
  {
    categoryId: 'frameworks',
    title: 'Ruby on Rails',
    description: 'Ruby on Rails é um framework de desenvolvimento web em Ruby conhecido por sua simplicidade e produtividade.',
    price: 14999,
    images: ['rubyonrails.png'],
    stock: 70,
  },
  {
    categoryId: 'linguagens',
    title: 'C#',
    description: 'C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft para aplicativos .NET.',
    price: 14999,
    images: ['csharp.png'],
    stock: 100,
  },
  {
    categoryId: 'bibliotecas',
    title: 'Redux',
    description: 'Redux é uma biblioteca JavaScript para gerenciamento de estado em aplicativos JavaScript.',
    price: 19999,
    images: ['redux.png'],
    stock: 85,
  },
  {
    categoryId: 'frameworks',
    title: 'Ember.js',
    description: 'Ember.js é um framework JavaScript focado em produtividade e escalabilidade para aplicações web.',
    price: 5999,
    images: ['emberjs.jpg'],
    stock: 45,
  },
  {
    categoryId: 'bibliotecas',
    title: 'Immer',
    description: 'O immer é uma pequena biblioteca que permite manusear estados imutáveis de forma prática.',
    price: 19999,
    images: ['immer.png'],
    stock: 20,
  },
  {
    categoryId: 'frameworks',
    title: 'Laravel',
    description: 'O immer é uma pequena biblioteca que permite manusear estados imutáveis de forma prática.',
    price: 24999,
    images: ['laravel.png'],
    stock: 70,
  },
  {
    categoryId: 'linguagens',
    title: 'PHP',
    description: 'PHP é um acrônimo recursivo para PHP: Hypertext Preprocessor (Pré-Processador de Hipertexto), que originalmente se chamava Personal Home Page (Página Inicial Pessoal). Ele também é um subconjunto de linguagens de scripts como JavaScript e Python.',
    price: 19999,
    images: ['php.png'],
    stock: 90,
  },
  {
    categoryId: 'linguagens',
    title: 'Go',
    description: 'Go é uma linguagem de programação compilada desenvolvida pelo Google, conhecida por sua eficiência e concorrência.',
    price: 59999,
    images: ['go.png'],
    stock: 80,
  },
  {
    categoryId: 'linguagens',
    title: 'Ruby',
    description: 'Ruby é uma linguagem de programação interpretada conhecida por sua simplicidade e produtividade.',
    price: 44990,
    images: ['ruby.jpg'],
    stock: 95,
  },
  {
    categoryId: 'frameworks',
    title: 'Symfony',
    description: 'Symfony é um conjunto de componentes e um framework PHP de alto desempenho para desenvolvimento web.',
    price: 19999,
    images: ['symfony.png'],
    stock: 55,
  },
  {
    categoryId: 'frameworks',
    title: 'Flask',
    description: 'Flask é um microframework leve em Python para desenvolvimento web rápido e simples.',
    price: 2999,
    images: ['flask.png'],
    stock: 70,
  },
  {
    categoryId: 'bibliotecas',
    title: 'Zustand',
    description: 'Zustand é uma biblioteca pequena e simples para gerenciamento de estado global em aplicações React.',
    price: 19999,
    images: ['zustand.jpeg'],
    stock: 40,
  },
  {
    categoryId: 'linguagens',
    title: 'C',
    description: 'C é uma linguagem de programação de propósito geral conhecida por sua eficiência e proximidade ao hardware.',
    price: 4999,
    images: ['c.png'],
    stock: 90,
  },
  {
    categoryId: 'linguagens',
    title: 'C++',
    description: 'C++ é uma linguagem de programação que expande o C, incluindo recursos de programação orientada a objetos.',
    price: 4999,
    images: ['cplusplus.png'],
    stock: 85,
  },
  {
    categoryId: 'linguagens',
    title: 'Assembly',
    description: 'Assembly é uma linguagem de baixo nível usada para escrever códigos que se traduzem diretamente para instruções de máquina.',
    price: 999,
    images: ['assembly-1.png','assembly.jpg'],
    stock: 75,
  },
  {
    categoryId: 'linguagens',
    title: 'Cobol',
    description: 'Cobol é uma linguagem de programação comumente usada em sistemas corporativos para processamento de dados comerciais.',
    price: 999,
    images: ['cobol-1.png','cobol.png'],
    stock: 70,
  },
  {
    categoryId: 'linguagens',
    title: 'Delphi',
    description: 'Delphi é uma linguagem de programação baseada em Object Pascal, conhecida por sua facilidade de desenvolvimento de aplicativos.',
    price: 4999,
    images: ['delphi.png'],
    stock: 80,
  },
  {
    categoryId: 'linguagens',
    title: 'Pascal',
    description: 'Pascal é uma linguagem de programação estruturada comumente usada em fins educacionais e de aprendizado de programação.',
    price: 14999,
    images: ['pascal-1.png','pascal.png'],
    stock: 60,
  },
  {
    categoryId: 'frameworks',
    title: 'NestJS',
    description: 'NestJS é um framework de Node.js para construção de aplicativos escaláveis usando conceitos de arquitetura sólida.',
    price: 19999,
    images: ['nestjs.png'],
    stock: 95,
  },
  {
    categoryId: 'frameworks',
    title: 'Next.js',
    description: 'Next.js é um framework React para construção de aplicativos web com renderização do lado do servidor e roteamento fácil.',
    price: 34999,
    images: ['nextjs.png'],
    stock: 100,
  },
  {
    categoryId: 'frameworks',
    title: 'Vite',
    description: 'Vite é um construtor de aplicações JavaScript rápido que oferece um ambiente de desenvolvimento de alta performance.',
    price: 39999,
    images: ['vite.jpg'],
    stock: 85,
  },
  {
    categoryId: 'linguagens',
    title: 'Dart',
    description: 'Dart é uma linguagem de programação desenvolvida pela Google, conhecida por sua sintaxe limpa e eficiência.',
    price: 14999,
    images: ['dart.png'],
    stock: 90,
  },
  {
    categoryId: 'frameworks',
    title: 'Flutter',
    description: 'Flutter é um framework de desenvolvimento de aplicativos móveis multiplataforma, baseado em Dart.',
    price: 14999,
    images: ['flutter.png'],
    stock: 85,
  },
  {
    categoryId: 'frameworks',
    title: 'Spring Boot',
    description: 'Spring Boot é um framework Java que simplifica o desenvolvimento de aplicativos Java EE.',
    price: 12999,
    images: ['springboot.png'],
    stock: 75,
  },
  {
    categoryId: 'linguagens',
    title: 'Swift',
    description: 'Swift é uma linguagem de programação desenvolvida pela Apple para criar aplicativos iOS, macOS e outros.',
    price: 49990,
    images: ['swift.jpg'],
    stock: 70,
  },
  {
    categoryId: 'linguagens',
    title: 'Kotlin',
    description: 'Kotlin é uma linguagem de programação moderna para desenvolvimento de aplicativos Android, apoiada pelo Google.',
    price: 34999,
    images: ['kotlin.jpg'],
    stock: 80,
  },
  {
    categoryId: 'frameworks',
    title: 'Ionic',
    description: 'Ionic é um framework de desenvolvimento de aplicativos móveis híbridos baseado em HTML, CSS e JavaScript.',
    price: 19999,
    images: ['ionic.png'],
    stock: 60,
  },
  {
    categoryId: 'frameworks',
    title: 'Xamarin',
    description: 'Xamarin é uma plataforma para desenvolvimento de aplicativos móveis multiplataforma usando C# e .NET.',
    price: 14999,
    images: ['xamarin.png'],
    stock: 95,
  },
  {
    categoryId: 'frameworks',
    title: 'PHPUnit',
    description: 'PHPUnit é um framework de teste unitário para PHP, utilizado para testes automatizados.',
    price: 24999,
    images: ['phpunit.png'],
    stock: 100,
  },
  {
    categoryId: 'frameworks',
    title: 'Cypress',
    description: 'Cypress é uma ferramenta de teste de front-end para aplicações web modernas.',
    price: 29999,
    images: ['cypress.jpeg'],
    stock: 85,
  },
  {
    categoryId: 'frameworks',
    title: 'Jest',
    description: 'Jest é um framework de teste de JavaScript com foco na simplicidade e funcionalidades integradas.',
    price: 29990,
    images: ['jest.png'],
    stock: 90,
  },
  {
    categoryId: 'frameworks',
    title: 'Nuxt',
    description: 'Nuxt.js é um framework Vue.js para construção de aplicações web escaláveis e de fácil manutenção.',
    price: 49990,
    images: ['nuxt.png'],
    stock: 90,
  },
  {
    categoryId: 'frameworks',
    title: 'Meteor',
    description: 'Meteor é uma plataforma JavaScript para construção de aplicações web e móveis em tempo real.',
    price: 59990,
    images: ['meteor.png'],
    stock: 85,
  },
  {
    categoryId: 'linguagens',
    title: 'SwiftUI',
    description: 'SwiftUI é uma estrutura para criação de interfaces de usuário declarativas e modernas em Swift.',
    price: 14999,
    images: ['swiftui.png'],
    stock: 75,
  },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const items = shuffle(unshuffledItems);

module.exports = {items, categories}
