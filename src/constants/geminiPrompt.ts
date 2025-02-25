const cvResumeJson = {
  data: {
    categories: [
      {
        description: 'Estrutura e Formatação',
        itens: [
          {
            item: 'Clareza e organização',
            values: {
              score: 9 /* integer 1 to 10 */,
              value: true /* boolean */,
              observation:
                'O currículo está muito bem organizado e fácil de ler.' /* string */,
            },
          },
          { item: 'Formatação', values: {} },
          { item: 'Palavras chave', values: {} },
        ],
      },
      {
        description: 'Informações Pessoais',
        itens: [
          { item: 'Contato', values: {} },
          { item: 'Resumo profissional', values: {} },
        ],
      },
      {
        description: 'Experiência Profissional',
        itens: [
          { item: 'Relevância', values: {} },
          { item: 'Conquistas', values: {} },
          { item: 'Verbos de ação', values: {} },
        ],
      },
      {
        description: 'Formação Acadêmica',
        itens: [
          { item: 'Relevância', values: {} },
          { item: 'Projetos', values: {} },
        ],
      },
      {
        description: 'Habilidades',
        itens: [
          { item: 'Habilidades técnicas', values: {} },
          { item: 'Soft skills', values: {} },
        ],
      },
      {
        description: 'Alinhamento com o ATS',
        itens: [
          { item: 'Palavras chave', values: {} },
          { item: 'Formatação', values: {} },
          { item: 'Repetição', values: {} },
        ],
      },
    ],
  },
};

const teste = JSON.stringify(cvResumeJson);
console.log(teste);

export const cvScannerPrompt = `Analisar o seguinte currículo e fornecer uma avaliação detalhada, seguindo o formato JSON abaixo. Para cada categoria, atribua uma pontuação de 1 a 10 e inclua uma observação descritiva. Preciso que ertorne somente o json sem nenhuma pontuação a mais nem plavras a mais. ${teste}. o score vai de 1 a 10, observation é a descrição e o value é um boolean que se caso foi possível avaliar esse requisito.`;
