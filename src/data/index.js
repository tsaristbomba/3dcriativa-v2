import imgOne from "../images/image-1.svg";
import imgTwo from "../images/image-2.svg";
import imgThree from "../images/image-3.svg";
import emailImg from "../images/email.svg";

// Palette
export const primary = "#2E856E"; // green
export const secondary = "#fff"; // white
export const tertiary = "#000"; // black

// Component Data Objects
export const heroObj = {
  heroTitle: "Impressões 3D de qualidade",
  heroSub:
    "Trabalhamos com impressões 3D para o mundo gamer e nerd de São Paulo e todo o Brasil",
  btnLabel: "Confira",
};

export const infoObjOne = {
  imgStart: true, // start with img or text
  topLine: "Qualidade premium",
  headline: "Impressões de qualidade de maneira acessível",
  description:
    "Aproveite preços baixos com impressões de qualidade de maquinário de ultima geração!",
  isHome: true, // is home page
  btnOn: true, // has button or not
  darkBg: false, // has dark background or not
  iconOn: false, // has social icons or not
  btnLabel: "Veja mais",
  imgSrc: imgOne,
  imgAlt: "Qualidade",
};

export const infoObjTwo = {
  imgStart: false, // start with img or text
  topLine: "Equipe Qualificada",
  headline: "Equipe treinada nos mais modernos softwares do mercado",
  description:
    "Usamos os mais modernos softwares para produzir e modelar personagens em 3D",
  isHome: true, // is home page
  btnOn: false, // has button or not
  darkBg: false, // has dark background or not
  iconOn: false, // has social icons or not
  imgSrc: imgTwo,
  imgAlt: "Equipe",
};

export const infoObjThree = {
  imgStart: true, // start with img or text
  topLine: "Velocidade de Impressão",
  headline: "Máquinas velozes sem perdas de qualidade",
  description:
    "Impressoras de última geração tornando o processo mais eficiente e rápido",
  isHome: true, // is home page
  btnOn: false, // has button or not
  darkBg: false, // has dark background or not
  iconOn: false, // has social icons or not
  imgSrc: imgThree,
  imgAlt: "Velocidade",
};

export const contactObject = {
  imgStart: true, // start with img or text
  topLine: "Fale Conosco",
  headline: "Tem interesse em nossos serviços?",
  description:
    "Mande agora um email para criativa3d@outlook.com ou envie um direct via Instagram!",
  isHome: false, // is home page
  btnOn: false, // has button or not
  iconOn: true, // has social icons or not
  darkBg: false, // has dark background or not
  imgSrc: emailImg,
  imgAlt: "Contato",
};

export const homeContactObject = {
  imgStart: false, // start with img or text
  topLine: "Fale Conosco",
  headline: "Tem interesse em nossos serviços?",
  description: "Mande agora um email ou direct!",
  isHome: true, // is home page
  btnOn: false, // has button or not
  iconOn: true, // has social icons or not
  darkBg: true, // has dark background or not
  imgSrc: emailImg,
  imgAlt: "Contato",
};
