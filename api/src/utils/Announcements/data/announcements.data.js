let announcements = [
  {
    userId: 1,
    title: "TERRI's House",
    owner: "TERRI",
    country: "United States",
    state: "Florida",
    city: "Miami",
    adress: "Biscayne Boulevard 146",
    type: "House",
    arrivealDate:"2022-01-01",
    departureDate:"2022-01-15",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/fd/14/be.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/fd/14/95.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/fd/14/99.jpg",
    ],
    points: 280,
    sleeps: 9,
    bedrooms: 4,
    beds: 5,
    bathrooms: 4,
    surfaceM2: 260,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: false,
    },
    description:
      "Wonderful location, excellent neighborhood, quiet street, lots of privacy, best location on the Beach.",
  },
  {
    userId: 2,
    title: "JAQUELINE's Home",
    owner: "JAQUELINE",
    country: "Brazil",
    state: "Copacabana",
    city: "Rio de Janeiro",
    adress: "Av. Nossa Sra. de Copacabana 552",
    type: "Apartment",
    arrivealDate:"2022-01-01",
    departureDate:"2022-01-15",
    sleeps: 4,
    beds: 3,
    bedrooms: 2,
    bathrooms: 1,
    surfaceM2: 90,
    points: 280,
    rating: 5,
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/09/ac/69/3e.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/09/ac/69/40.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/08/63/86/c9.jpg",
    ],
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: false,
    },
    description:
      "Nuestra casa está situada en una muy buena parte de Copacabana. A solo 5 minutos a pie de la famosa playa de Copacabana y de muchos bares y restaurantes agradables que mantienen la vida en la calle hasta tarde. ",
  },
  {
    userId: 3,
    title: "WHALTER's House",
    owner: "WHALTER",
    country: "Netherlands",
    state: "Noord-Holland",
    city: " Amsterdam",
    adress: "Spuistraat 288",
    type: "Apartment",
    arrivealDate:"2022-02-01",
    departureDate:"2022-02-15",
    sleeps: 2,
    beds: 1,
    bedrooms: 1,
    bathrooms: 1,
    surfaceM2: 85,
    points: 123,
    rating: 3,
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/07/88/ab/cd.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/07/88/ab/8f.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/07/89/8e/1b.jpg",
    ],
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: false,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: true,
    },
    description:
      "Very comfortable house (groundfloor) in the centre of Amsterdam.",
  },
  {
    userId: 4,
    title: "NADINA's Home",
    owner: "NADINA",
    country: "Russia",
    state: "Central federal district",
    city: "Moscow",
    adress: "Tverskaya 903",
    type: "Apartment",
    arrivealDate:"2022-02-01",
    departureDate:"2022-02-15",
    sleeps: 5,
    beds: 3,
    bedrooms: 2,
    bathrooms: 1,
    surfaceM2: 65,
    points: 136,
    rating: 4,
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/50/57/53.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/50/57/6e.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/50/56/e8.jpg",
    ],
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: false,
    },
    description:
      "The apartment in the new house is being renovated. Furnished in the rooms and kitchen on the 15th floor. Near the lake. Subway 10 minutes walk.",
  },
  {
    userId: 5,
    title: "MICHAEL's House",
    owner: "MICHAEL",
    country: "Indonesia",
    state: "Kabupaten Badung",
    city: "Bali",
    adress: "Baturiti 82191",
    type: "House",
    arrivealDate:"2022-03-10",
    departureDate:"2022-03-25",
    sleeps: 6,
    beds: 4,
    bedrooms: 3,
    bathrooms: 2,
    surfaceM2: 300,
    points: 250,
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/83/f2/fd.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/84/03/71.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/84/03/de.jpg",
    ],
    home_rules: {
      smokersWelcome: true,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: false,
    },
    description:
      "My place is a beautiful 3 bedroom Balinese open-style villa with a private pool. Great for families.",
    rating: 4,
  },
  {
    userId: 6,
    title: "GEERT's House",
    owner: "GEERT",
    country: "Belgium",
    state: "Brusels",
    city: "Brusels",
    adress: "Rue Gustave Gilson 150",
    type: "Apartment",
    arrivealDate:"2022-03-10",
    departureDate:"2022-03-25",
    sleeps: 6,
    bedrooms: 2,
    beds: 4,
    bathrooms: 1,
    surfaceM2: 49,
    points: 270,
    rating: 5,
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/0d/36/eb.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/34/e7/36.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/0d/36/03.jpg",
    ],
    home_rules: {
      smokersWelcome: false,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: false,
      fridge: true,
      a_c: true,
      bancony: true,
      private_parking: false,
    },
    description:
      "Our home is a big apartment built in 1926 and we tried to keep it authentic , yet it has all the modern comfort anyone could need.",
  },
  {
    userId: 7,
    title: "ANA, VANINA I NEO's Home",
    owner: "ANA, VANINA I NEO",
    country: "Croatia",
    state: "Grad Zagreb",
    city: "Zagreb",
    adress: "Sisačka cesta 67",
    type: "House",
    arrivealDate:"2022-04-05",
    departureDate:"2022-04-20",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/07/8b/97/d7.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/07/8b/98/8f.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/07/8b/98/90.jpg",
    ],
    points: 129,
    sleeps: 4,
    bedrooms: 1,
    beds: 3,
    bathrooms: 1,
    surfaceM2: 71,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: true,
      fridge: true,
      a_c: false,
      balcony: false,
      private_parking: false,
    },
    description:
      "We live in the suburbs, its 20 min drive from city center and its surrounded with nature. Sometimes you can see deers, rabbits, foxes and sheep nearby.",
  },
  {
    userId: 8,
    title: "IVY's House",
    owner: "IVY",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    adress: "Mont Albert Rd 301",
    type: "House",
    arrivealDate:"2022-04-05",
    departureDate:"2022-04-20",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/90/77/73.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/90/73/67.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/90/73/6b.jpg",
    ],
    points: 187,
    sleeps: 6,
    bedrooms: 2,
    beds: 4,
    bathrooms: 1,
    surfaceM2: 92,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: false,
      tv: false,
      washing_machine: false,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: false,
    },
    description:
      "My home, a fairly new (2 years old) townhouse which is on 3 floors. Entrance is on the middle floor, as is the lounge room and kitchen.",
  },
  {
    userId: 9,
    title: "La Casa de Xochimilco",
    owner: "PALOMA",
    country: "México",
    state: "Ciudad De México",
    city: "Ciudad De México",
    adress: "Lago Atabasca 69",
    type: "House",
    arrivealDate:"2022-05-01",
    departureDate:"2022-05-15",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/3e/29/4a.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/3e/2c/c3.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/3e/29/ef.jpg",
    ],
    points: 219,
    sleeps: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    surfaceM2: 88,
    rating: 3,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: true,
    },
    description:
      "Cute house at the perfect location in new port of Nativitas, few blocks from Chapultepec Park and metro/bus stations.",
  },
  {
    userId: 10,
    title: "YENY's House",
    owner: "YENY",
    country: "United States",
    state: "Florida",
    city: "Miami",
    adress: "NW 3rd Ave 1501",
    type: "Apartment",
    arrivealDate:"2022-05-01",
    departureDate:"2022-05-15",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/3e/b2/59.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/3e/b2/5b.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/3e/b2/57.jpg",
    ],
    points: 240,
    sleeps: 5,
    bedrooms: 2,
    beds: 4,
    bathrooms: 2,
    surfaceM2: 167,
    rating: 4,
    home_rules: {
      smokersWelcome: true,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "Mi apartamento es amplio y con excelentes espacios, un apartamento por piso, con ascensor privado, 3 habitaciones cada una con baño privado, dos salas, amplia cocina, hermosa decoración",
  },
  {
    userId: 11,
    title: "ALMA's place",
    owner: "ALMA DIAZ",
    country: "Spain",
    state: " Comunidad De Madrid",
    city: "Madrid",
    adress: "C. Benita Ávila 33",
    type: "Apartment",
    arrivealDate:"2022-06-20",
    departureDate:"2022-07-05",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/be/6c/a5.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/be/6d/2b.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/be/6d/b6.jpg",
    ],
    points: 182,
    sleeps: 3,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    surfaceM2: 80,
    rating: 3,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: false,
      fridge: false,
      a_c: true,
      balcony: true,
      private_parking: true,
    },
    description:
      "Si tengo que describir mi piso diría que tiene personalidad, es luminoso y se encuentra en pleno corazón del Madrid de los Austrias, ubicado en el emblemático barrio de Palacio y La Latina, la zona con más encanto de Madrid.",
  },
  {
    userId: 12,
    title: "La Morada de ANDREA",
    owner: "ANDREA",
    country: "Spain",
    state: "Catalunya ",
    city: "Barcelona",
    adress: "Carrer de Bartomeu Pi 29",
    type: "Apartment",
    arrivealDate:"2022-06-20",
    departureDate:"2022-07-05",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/3b/4c/3e.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/3b/4c/67.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/00/76/a0/23.jpg",
    ],
    points: 260,
    sleeps: 8,
    bedrooms: 3,
    beds: 6,
    bathrooms: 2,
    surfaceM2: 125,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: true,
    },
    description:
      "Nuestro apartamento es realmente muy bonito, recién reformado, espacioso y moderno.",
  },
  {
    userId: 13,
    title: "Il Palatium",
    owner: "SONJA",
    country: "Italy",
    state: "Lombardia",
    city: "Milano",
    adress: "Via Dante 16",
    type: "Apartment",
    arrivealDate:"2022-07-05",
    departureDate:"2022-07-20",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/01/e8/53/67.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/43/08/11.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/01/e8/52/f3.jpg",
    ],
    points: 207,
    sleeps: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    surfaceM2: 170,
    rating: 5,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: false,
      fridge: true,
      a_c: true,
      private_parking: false,
    },
    description:
      "Our apartment is located on the 5th floor of a 6 stories high liberty style bulding from the 1930's.",
  },
  {
    userId: 14,
    title: "Dreamland",
    owner: "VANESSA",
    country: "Switzerland",
    state: " Zurich ",
    city: " Zurich",
    adress: "Im Rossweidli 15",
    type: "House",
    arrivealDate:"2022-07-05",
    departureDate:"2022-07-20",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/37/b5/22.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/37/ba/88.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/37/ba/02.jpg",
    ],
    points: 230,
    sleeps: 9,
    bedrooms: 3,
    beds: 5,
    bathrooms: 1,
    surfaceM2: 120,
    rating: 4,
    home_rules: {
      smokersWelcome: true,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "We live in a terraced house in a lovely residential area with a village like feel.",
  },
  {
    userId: 15,
    title: "Not aLONE",
    owner: "LONE",
    country: "Denmark",
    state: "Copenhagen",
    city: "Copenhagen",
    adress: "Hollændervej 4",
    type: "House",
    arrivealDate:"2022-08-01",
    departureDate:"2022-08-15",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/96/ac/29.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/e9/e3/3b.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/e9/e2/70.jpg",
    ],
    points: 187,
    sleeps: 8,
    bedrooms: 3,
    beds: 6,
    bathrooms: 2,
    surfaceM2: 109,
    rating: 5,
    home_rules: {
      smokersWelcome: true,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: false,
      tv: false,
      washing_machine: false,
      fridge: true,
      a_c: false,
      balcony: false,
      private_parking: false,
    },
    description:
      "Our home is a beautiful almost 100 year old house in Copenhagen on the Island of Amager. ",
  },
  {
    userId: 16,
    title: "El Diego",
    owner: "DIEGO",
    country: "Uruguay",
    state: "Montevideo Department",
    city: "Montevideo",
    adress: "C. Ramón Ortiz 2952",
    type: "Apartment",
    arrivealDate:"2022-08-01",
    departureDate:"2022-08-15",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/95/b2/f5.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/95/b3/28.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/96/7e/f5.jpg",
    ],
    points: 175,
    sleeps: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    surfaceM2: 67,
    rating: 3,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: false,
    },
    description:
      "Es un hermoso y cómodo apartamento.Cuenta con un confortable living comedor con aire acondicionado, para relajarse, leer o si lo prefiere conectarse a internet y/o mirar TV en el Smart TV de 65 (Netflix, YouTube,Señal Satelital, Etc).",
  },
  {
    userId: 17,
    title: "Chillax",
    owner: "NORMA",
    country: "Paraguay",
    state: "Asunción  del Paraguay",
    city: "Asunción",
    adress: "Cap. Victor Manuel Brizuela 355",
    type: "House",
    arrivealDate:"2022-09-10",
    departureDate:"2022-09-25",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/8c/ca/23.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/8c/c3/aa.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/8c/c3/95.jpg",
    ],
    points: 194,
    sleeps: 8,
    bedrooms: 4,
    beds: 7,
    bathrooms: 4,
    surfaceM2: 325,
    rating: 3,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: false,
    },
    description:
      "La casa es única. Ubicación privilegiada con un entorno placentero. Querrán quedarse a vivir en ella.",
  },
  {
    userId: 18,
    title: "LASSE's House",
    owner: "LASSE & OYVIND",
    country: "Norway",
    state: "Oslo",
    city: "Oslo",
    adress: "Tollbugata 7",
    type: "Apartment",
    arrivealDate:"2022-09-10",
    departureDate:"2022-09-25",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/07/a2/38/5d.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/07/93/1e/07.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/07/93/1e/0f.jpg",
    ],
    points: 270,
    sleeps: 7,
    bedrooms: 4,
    beds: 5,
    bathrooms: 2,
    surfaceM2: 140,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: false,
      balcony: true,
      private_parking: false,
    },
    description:
      "4 BR apartment at Aker Brygge downtown Oslo.The apartment is on the 7th and 8th floor above the bustle of street life.",
  },
  {
    userId: 19,
    title: "JOANA's Home",
    owner: "JOANA",
    country: "Portugal",
    state: " Lisbon ",
    city: " Lisbon ",
    adress: "R. Amadeu de Sousa Cardoso 18",
    type: "Apartment",
    arrivealDate:"2022-09-05",
    departureDate:"2022-09-20",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/51/91/c9.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/51/91/cd.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/51/91/d0.jpg",
    ],
    points: 127,
    sleeps: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    surfaceM2: 90,
    rating: 3,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: false,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: true,
    },
    description:
      "My home is a duplex located on the second floor of a Lisbon looking building. Because it is located in a dead end street, it is very quiet and central at the same time.",
  },
  {
    userId: 20,
    title: "PAULA's House",
    owner: "PAULA",
    country: "Chile",
    state: " Santiago Metropolitan Region ",
    city: "Santiago",
    adress: "Franklin 566",
    type: "Apartment",
    arrivealDate:"2022-09-05",
    departureDate:"2022-09-20",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/27/f7/44.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/2b/4b/3a.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/27/f5/13.jpg",
    ],
    points: 180,
    sleeps: 7,
    bedrooms: 3,
    beds: 6,
    bathrooms: 2,
    surfaceM2: 110,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: false,
      fridge: true,
      a_c: false,
      balcony: false,
      private_parking: false,
    },
    description:
      "My flat is located on the 20th floor in a nice building. It has a doorman making the building really safe.",
  },
  {
    userId: 21,
    title: "Spacious and close to the city center",
    owner: "HECTOR",
    country: "Spain",
    state: " Comunidad De Madrid",
    city: "Madrid",
    adress: "Enrique Granados  6",
    type: "Apartment",
    arrivealDate:"2022-08-01",
    departureDate:"2022-08-15",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/03/f4/60/50.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/03/f4/60/45.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/03/f4/60/4a.jpg",
    ],
    points: 163,
    sleeps: 8,
    bedrooms: 5,
    beds: 5,
    bathrooms: 1,
    surfaceM2: 140,
    rating: 5,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: false,
      a_c: false,
      balcony: true,
      private_parking: false,
    },
    description:
      "The house is spacious, 140m², 5 rooms and it has been recently renovated (2018).",
  },
  {
    userId: 22,
    title: "La casa de Bedani",
    owner: "BEDANI",
    country: "Spain",
    state: "Catalunya ",
    city: "Barcelona",
    adress: "AV Icaria  136",
    type: "Apartment",
    arrivealDate:"2022-08-01",
    departureDate:"2022-08-15",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/01/43/16/c4.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/01/43/16/bd.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/01/43/16/c8.jpg",
    ],
    points: 154,
    sleeps: 7,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    surfaceM2: 120,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "Piso típico del eixample de principios del siglo XX, techos muy altos, parquet de roble, recién reformado.",
  },
  {
    userId: 23,
    title: "Jose Manuel Home's",
    owner: "JOSE MANUEL",
    country: "Spain",
    state: "Comunidad Valenciana",
    city: "Valencia",
    adress: "AV Zacarias 198",
    type: "Apartment",
    arrivealDate:"2022-07-10",
    departureDate:"2022-07-25",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/78/c2/5d.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/78/c2/05.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/78/c2/cd.jpg",
    ],
    points: 140,
    sleeps: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    surfaceM2: 65,
    rating: 5,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "Mi apartamento se encuentra ubicado frente al casco histórico a 5 minutos andando de la plaza de la Virgen, a dos minutos de las Torres de Serrano",
  },
  {
    userId: 24,
    title: "Charming flat in the earth of Paris",
    owner: "IVO",
    country: "France",
    state: " Île-De-France",
    city: "Paris",
    adress: "Mignon 18",
    type: "Apartment",
    arrivealDate:"2022-07-10",
    departureDate:"2022-07-25",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/84/09/0d.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/87/b2/aa.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/87/b2/ab.jpg",
    ],
    points: 113,
    sleeps: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    surfaceM2: 40,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "Gorgeous apartment totally renovated in a 17th century old building.",
  },
  {
    userId: 25,
    title: "Barbara's home",
    owner: "BARBARA",
    country: "Italy",
    state: " Città Metropolitana Di Roma ",
    city: "Rome",
    adress: "Labella 980",
    type: "Apartment",
    arrivealDate:"2022-06-05",
    departureDate:"2022-06-20",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/04/96/20/48.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/04/96/20/37.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/04/96/20/34.jpg",
    ],
    points: 231,
    sleeps: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    surfaceM2: 60,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "Salve, abbiamo piacere nel sapere che sareste interessati a trascorrere del tempo nel nostro bed and breakfast.",
  },
  {
    userId: 26,
    title: "Central, spacious home in Reykjavik",
    owner: "BJORN",
    country: "Iceland",
    state: "Vesturbær",
    city: "Reikiavik",
    adress: "Lotbrock 100",
    type: "House",
    arrivealDate:"2022-06-05",
    departureDate:"2022-06-20",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/a0/5a/11.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/a0/5a/82.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/a0/5a/7e.jpg",
    ],
    points: 160,
    sleeps: 3,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    surfaceM2: 200,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "The house is by the University of Iceland in the Reykjavik city center area only about 8-10 min walk to the center. ",
  },
  {
    userId: 27,
    title: "Beautiful Amsterdam vintage apartment",
    owner: "NICO & ERLEND",
    country: "Netherlands",
    state: "Noord-Holland",
    city: " Amsterdam ",
    adress: "De Boer 1350",
    type: "Apartment",
    arrivealDate:"2022-05-10",
    departureDate:"2022-05-25",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/83/86/50.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/83/86/65.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/83/86/2b.jpg",
    ],
    points: 212,
    sleeps: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    surfaceM2: 60,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "This cosy apartment is very comfortable for 2 persons.",
  },
  {
    userId: 28,
    title: "Condo of 65m2 in the lovely city Amsterdam",
    owner: "CHIEL",
    country: "Netherlands",
    state: "Noord-Holland",
    city: "Amsterdam",
    adress: "De Ligth 748",
    type: "Apartment",
    arrivealDate:"2022-05-10",
    departureDate:"2022-05-25",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/75/38/44.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/75/38/46.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/75/38/45.jpg",
    ],
    points: 90,
    sleeps: 5,
    bedrooms: 3,
    beds: 4,
    bathrooms: 1,
    surfaceM2: 65,
    rating: 4,
    home_rules: {
      smokersWelcome: false,
      petsWelcome: false,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "The condo is located in a block of 6 condos with a shared entrance and build in the 60s.",
  },
  {
    userId: 29,
    title: "SUSAN's House",
    owner: "SUSAN",
    country: "United States",
    state: "Florida",
    city: "Miami",
    adress: "Av 6rd Ave 2983",
    type: "Apartment",
    arrivealDate:"2022-04-01",
    departureDate:"2022-04-15",
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/9c/ae/41.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/9c/ae/39.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/9c/ae/40.jpg",
    ],
    points: 274,
    sleeps: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    surfaceM2: 184,
    rating: 5,
    home_rules: {
      smokersWelcome: true,
      petsWelcome: false,
      childremWelcome: false,
    },
    amenities: {
      Wifi: true,
      tv: true,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: true,
      private_parking: false,
    },
    description:
      "The apartment is decorated in a combination of furniture styles that gives one a feeling of coziness and comfort.",
  },
  {
    userId: 30,
    title: "VALERIIA's Home",
    owner: "VALERIIA",
    country: "Russia",
    state: "Central federal district",
    city: "Moscow",
    adress: "Racjaba 541",
    type: "Apartment",
    arrivealDate:"2022-04-01",
    departureDate:"2022-04-15",
    sleeps: 7,
    beds: 3,
    bedrooms: 4,
    bathrooms: 1,
    surfaceM2: 67,
    points: 210,
    rating: 4,
    image: [
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/df/cb/2f.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/df/cb/38.jpg",
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/df/cb/40.jpg",
    ],
    home_rules: {
      smokersWelcome: false,
      petsWelcome: true,
      childremWelcome: true,
    },
    amenities: {
      Wifi: true,
      tv: false,
      washing_machine: true,
      fridge: true,
      a_c: true,
      balcony: false,
      private_parking: false,
    },
    description:
      "My apartment is located in Moscow. It's on the 10th floor of a 14-story building with an Elevator.",
  },
];

module.exports = announcements;