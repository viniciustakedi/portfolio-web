import { ILanguageConfig } from ".";

export const enContentConfig: ILanguageConfig = {
  menu: {
    nav_option_one: "Work",
    nav_option_two: "About",
    nav_option_three: "Contact",
  },
  work: {
    title: {
      part1: "Hello there!",
      part2: "I’m ",
      part3: "Vinicius Takedi",
      part4: ",",
      part5: "a ",
      part6: "software engineer",
      part7: "based in ",
      part8: "Brazil",
    },
    job: {
      noneDateText: "Present",
    },
    shortSummary:
      "As a Brazilian software engineer with over four years of experience, I specialize in crafting reliable, scalable solutions for companies building exceptional products.",
    contactButtonLabel: "Contact Me",
  },
  about: {
    title: {
      part1: "Who ",
      part2: "is Vinicius Takedi ",
      part3: "?",
    },
    text1: {
      part1: "I hold ",
      part2: "a bachelor's degree in ",
      part3: "computer science...",
      part4: "...was hard, however now it was all worth it.",
    },
    text2: {
      part1: "I ",
      part2: "really ",
      part3: "enjoys reading ",
      part4: "any kind of random ",
      part5: "book ",
      part6: "and ",
      part7: "enjoying ",
      part8: "a good/different ",
      part9: "dish.",
    },
    text3: {
      part1: "Without ",
      part2: "an ",
      part3: "organized ",
      part4: "environment I can't work I think a good environment makes a ",
      part5: "difference ",
      part6: "in ",
      part7: "everyday ",
      part8: "life.",
    },
    text4: {
      part1: "Being ",
      part2: "in ",
      part3: "nature ",
      part4: "always makes me ",
      part5: "reset ",
      part6: "my ",
      part7: "mind. ",
    },
    text5: {
      part1: "And to finish this little summary, ",
      part2: "I have ",
      part3: "a ",
      part4: "little dog ",
      part5: "who is sometimes too ",
      part6: "needy.",
    },
  },
  contactMe: {
    title: {
      part1: "Contact ",
      part2: "me!",
    },
    form: {
      input: {
        email: {
          placeholder: "Your best email",
          errors: {
            required: "Email is required.",
            invalidFormat: "Invalid email format.",
          },
        },
        name: {
          placeholder: "Your name",
          errors: {
            required: "Name is required.",
          },
        },
        message: {
          placeholder: "Your message...",
          errors: {
            required: "Message is required.",
            minLength: "Message must be at least 10 characters long.",
          },
        },
        submitButton: {
          text: "Send!",
        },
      },
    },
  },
  footer: {
    centeredText: "Made with ❤️‍🩹 by Vinicius Takedi",
  },
};
