import {
  BUTTON,
  CONTENTS,
  Colors,
  Direction,
  Entites,
  IMAGES,
  Titles,
} from "./constants";

export const TemplateObject = {
  [Entites.Admin]: {
    header: {
      backgroundColor: Colors.Aqua,
      color: Colors.Black,
      title: Titles.Admin,
    },
    backgroundColor: Colors.White,
    color: Colors.Black,
    contents: CONTENTS.ADMIN,
    image: IMAGES.DOG_WALK_ALT,
    direction: Direction.Row,
    imageWidth: 450,
    imageHeight: 300,
    button: {
      title: BUTTON.TITLE,
      backgroundColor: Colors.Green,
      color: Colors.White,
      radius: 4,
    },
    hasButton: true,
  },
  [Entites.Developers]: {
    header: {
      backgroundColor: Colors.DarkGrey,
      color: Colors.White,
      title: Titles.Developers,
    },
    backgroundColor: Colors.White,
    color: Colors.Black,
    contents: CONTENTS.DEVELOPERS,
    image: IMAGES.DOG_WALK,
    direction: Direction.Column,
    imageWidth: 700,
    imageHeight: 400,
    button: {
      title: BUTTON.TITLE,
      backgroundColor: Colors.Green,
      color: Colors.White,
      radius: 4,
    },
    hasButton: true,
  },
  [Entites.Home]: {
    header: {
      backgroundColor: Colors.Purple,
      color: Colors.White,
      title: Titles.Home,
    },
    backgroundColor: Colors.White,
    color: Colors.Black,
    contents: CONTENTS.HOME,
    image: IMAGES.DOG_WALK_WHITE,
    direction: Direction.Row_reverse,
    imageWidth: 700,
    imageHeight: 400,
    hasButton: false,
  },
};
