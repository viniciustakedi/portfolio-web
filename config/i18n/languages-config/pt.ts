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
    job: {
      noneDateText: "Presente"
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
    text1: {
      part1: "Eu sou ",
      part2: "bacharel em ",
      part3: "Ciência da Computação...",
      part4: "...foi difícil mas no final tudo valeu a pena!",
    },
    text2: {
      part1: "Eu ",
      part2: "gosto muito de ",
      part3: "ler ",
      part4: "qualquer tipo de ",
      part5: "livro ",
      part6: "e ",
      part7: "adoro ",
      part8: "experimentar novos ",
      part9: "pratos.",
    },
    text3: {
      part1: "Sem ",
      part2: "um ambiente ",
      part3: "organizado ",
      part4: "eu não consigo trabalhar, acho que um bom local ",
      part5: "faz a diferença ",
      part6: "em ",
      part7: "todos ",
      part8: "os dias da nossa rotina.",
    },
    text4: {
      part1: "Estar ",
      part2: "na ",
      part3: "natureza ",
      part4: "me faz bem, porque consigo ",
      part5: "resetar ",
      part6: "minha ",
      part7: "mente. ",
    },
    text5: {
      part1: "E para finalizar essa pequena apresentação, ",
      part2: "Eu tenho ",
      part3: "uma ",
      part4: "cachorrinha ",
      part5: "na qual às vezes é muito ",
      part6: "carente!",
    },
  },
  contactMe: {
    title: {
      part1: "Fale ",
      part2: "comigo!",
    },
    form: {
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
        },
      },
    },
  },
  footer: {
    centeredText: "Feito com ❤️‍🩹 por Vinicius Takedi",
  },
};
