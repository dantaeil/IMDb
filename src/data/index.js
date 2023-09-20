import joker from "../assets/joker.png";
import panther from "../assets/panther.png";
import spiderman from "../assets/spiderman.png";
import thor from "../assets/thor.png";

import Joker from "../assets/Joker.jpg";
import Spiderman from "../assets/Spiderman.jpg";
import Thor from "../assets/Thor.jpg";
import Panther from "../assets/Panther.jpg";

export const MovieData = [
  {
    id: "joker",
    name: "JOKER",
    year: 2019,
    rating: 10,
    rank: 1,
    png: joker,
    jpg: Joker,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    detail: {
      tag: ["CRIME", "DRAMA", "THRILLER"],
      description:
        "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain",
    },
  },
  {
    id: "spiderman",
    name: "SPIDER-MAN: NO WAY HOME",
    year: 2019,
    rating: 9.7,
    rank: 2,
    png: spiderman,
    jpg: Spiderman,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    detail: {
      tag: ["HERO", "JUSTICE", "THRILLER"],
      description:
        "Spider-Man: No Way Home is a highly anticipated superhero film that explores the multiverse and features the return of iconic characters from previous Spider-Man franchises.",
    },
  },
  {
    id: "thor",
    name: "THOR: RAGNAROK",
    year: 2019,
    rating: 9.4,
    rank: 3,
    png: thor,
    jpg: Thor,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    detail: {
      tag: ["ACTION", "JOURNEY", "MARVEL"],
      description:
        "Thor: Ragnarok is an action-packed Marvel film that chronicles the epic journey of Thor as he confronts the destruction of his homeland and encounters new allies and foes along the way.",
    },
  },
  {
    id: "panther",
    name: "BLACK PANTHER",
    year: 2019,
    rating: 8.4,
    rank: 4,
    png: panther,
    jpg: Panther,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    detail: {
      tag: ["HERO", "HISTORY", "JUSTICE"],
      description:
        "Black Panther is a groundbreaking superhero film that tells the story of T'Challa, the king of Wakanda, as he struggles with the responsibilities of the throne and fights to protect his people and their advanced technology.",
    },
  },
];
