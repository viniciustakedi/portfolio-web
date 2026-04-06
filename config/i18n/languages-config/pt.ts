import { text } from "stream/consumers";
import { ILanguageConfig } from ".";

export const ptContentConfig: ILanguageConfig = {
  menu: {
    nav_option_one: "Trabalho",
    nav_option_two: "Sobre",
    nav_option_three: "Contato",
  },
  work: {
    title: {
      part1: "Olá, tudo certo?",
      part2: "Eu sou o ",
      part3: "Vinicius Takedi",
      part4: ",",
      part5: "um ",
      part6: "engenheiro de software",
      part7: "morando no ",
      part8: "Brasil",
    },
    iconsTooltip: {
      instagram: "Ir para o meu Instagram",
      linkedin: "Ir para o meu LinkedIn",
      github: "Ir para o meu Github",
    },
    job: {
      noneDateText: "Presente",
      error: {
        loadingContentTitle:
          "Erro ao carregar a experiência profissional... Desculpe por isso!",
        loadingContentDescription: "Por favor, tente novamente mais tarde.",
      },
    },
    shortSummary:
      "Sou um engenheiro de software brasileiro com mais de quatro anos de experiência, especializado em criar soluções confiáveis e escaláveis para empresas que constroem produtos excepcionais.",
    contactButtonLabel: "Fale comigo!",
  },
  about: {
    title: {
      part1: "Quem ",
      part2: "é Vinicius Takedi ",
      part3: "?",
    },
    textOne: {
      partOne:
        "<p><strong>Eu sou</strong> bacharel em <strong>Ciência da Computação</strong>, foi difícil, mas no final...</p>",
      partTwo:
        "<p>...as <strong>amizades</strong> feitas fizeram tudo valer a pena!</p>",
    },
    textTwo:
      "<p><strong>Eu</strong> gosto muito de <strong>ler</strong> qualquer tipo de <strong>livro</strong> e <strong>adoro</strong> experimentar novos <strong>pratos</strong>.</p>",
    textThree:
      "<p><strong>Sem</strong> um ambiente <strong>organizado</strong> eu não consigo trabalhar, acho que um bom local <strong>faz a diferença</strong> em <strong>todos</strong> os dias da nossa rotina.</p>",
    textFour:
      "<p><strong>Estar</strong> em contato com a <strong>natureza</strong> sempre me faz <strong>resetar</strong> a <strong>mente</strong>.</p>",
    textFive:
      "<p>E para finalizar essa pequena apresentação, <strong>eu tenho</strong> uma <strong>cachorrinha</strong> na qual às vezes é muito <strong>carente</strong>.</p>",
    carousel: {
      label: "Fotos do dia a dia, viagens e momentos pessoais",
      photoAlt: "Foto pessoal {{n}} de {{total}}",
    },
  },
  contactMe: {
    title: {
      part1: "Fale ",
      part2: "comigo!",
    },
    modalSubtitle:
      "Envie uma mensagem pelo site — ela chega direto na minha caixa de entrada.",
    form: {
      submitError:
        "Não foi possível enviar sua mensagem. Tente novamente em instantes.",
      input: {
        email: {
          placeholder: "Seu melhor email",
          errors: {
            required: "O campo email é obrigatório.",
            invalidFormat: "Email inválido.",
          },
        },
        name: {
          placeholder: "Seu nome",
          errors: {
            required: "O campo nome é obrigatório.",
          },
        },
        message: {
          placeholder: "Sua mensagem...",
          errors: {
            required: "O campo mensagem é obrigatório.",
            minLength: "A mensagem deve ter no mínimo 10 caracteres.",
          },
        },
        submitButton: {
          text: "Enviar!",
          success: "Mensagem enviada com sucesso!",
          loading: "Enviando...",
        },
      },
    },
  },
  footer: {
    centeredText: "Feito com ❤️‍🩹 por Vinicius Takedi",
  },
};
