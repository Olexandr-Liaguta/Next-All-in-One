interface Wonder {
  url: string;
  place: string;
  description: string;
  id: number;
}

export const wonders: Wonder[] = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6436.jpg/640px-New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6436.jpg",
    place: "New York City",
    description: "A beautiful view of the Manhattan skyline.",
  },
  {
    id: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Eiffel_Tower_from_the_Tour_Montparnasse%2C_1_May_2012_N2.jpg/640px-Eiffel_Tower_from_the_Tour_Montparnasse%2C_1_May_2012_N2.jpg",
    place: "Paris",
    description: "The Eiffel Tower at sunset.",
  },
  {
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg/640px-Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg",
    place: "Tokyo",
    description: "A bustling street in Shibuya.",
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/640px-Sydney_Opera_House_-_Dec_2008.jpg",
    place: "Sydney",
    description: "The Sydney Opera House during the Vivid Sydney festival.",
  },
  {
    id: 5,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cape_Town_%28ZA%29%2C_Wale_Street_--_2024_--_3544.jpg/640px-Cape_Town_%28ZA%29%2C_Wale_Street_--_2024_--_3544.jpg",
    place: "Cape Town",
    description: "Table Mountain overlooking the city.",
  },
  {
    id: 6,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Rio_de_Janeiro%2C_Brazil_003_version_2.jpg/640px-Rio_de_Janeiro%2C_Brazil_003_version_2.jpg",
    place: "Rio de Janeiro",
    description:
      "Christ the Redeemer statue with a panoramic view of the city.",
  },
  {
    id: 7,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Super_moon_over_City_of_London_from_Tate_Modern_2018-01-31_4.jpg/640px-Super_moon_over_City_of_London_from_Tate_Modern_2018-01-31_4.jpg",
    place: "London",
    description: "Big Ben and the Houses of Parliament.",
  },
];
