let filmek = [
    {
      title: "The Shawshank Redemption",
      rating: "9.3",
      synopsis:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      director: "Frank Darabont",
      date_of_release: "September 23, 1994 (United States)",
      writers: ["Frank Darabont (screenplay)", "Stephen King (short story)"],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    },
    {
      title: "The Godfather",
      rating: "9.2",
      synopsis:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      director: "Francis Ford Coppola",
      date_of_release: "March 24, 1972 (USA)",
      writers: [
        "Mario Puzo (novel)",
        "Mario Puzo (screenplay)",
        "Francis Ford Coppola (screenplay)",
      ],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    },
    {
      title: "The Dark Knight",
      rating: "9.0",
      synopsis:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      director: "Christopher Nolan",
      date_of_release: "July 18, 2008 (United States)",
      writers: [
        "Jonathan Nolan (screenplay)",
        "Christopher Nolan (screenplay)",
        "Christopher Nolan (story)",
      ],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    },
    {
      title: "The Godfather: Part II",
      rating: "9.0",
      synopsis:
        "The early life and career of Vito Corleone in 1920s New York is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      director: "Francis Ford Coppola",
      date_of_release: "December 20, 1974 (USA)",
      writers: [
        "Mario Puzo (novel)",
        "Francis Ford Coppola (screenplay)",
        "Mario Puzo (screenplay)",
      ],
      poster_url:
        "https://play-lh.googleusercontent.com/PMCjTgN5iA-odMBcTVWl2OQr7mVF-jxQ46KygHRCvww8eIzJM0iCxjgub1ciWWlRXrp5gq1CdIjbxTUNmHM",
    },
    {
      title: "12 Angry Men",
      rating: "9.0",
      synopsis:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      director: "Sidney Lumet",
      date_of_release: "April 10, 1957 (USA)",
      writers: ["Reginald Rose (screenplay)"],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      rating: "8.9",
      synopsis:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      director: "Peter Jackson",
      date_of_release: "December 17, 2003 (United States)",
      writers: ["Peter Jackson", "Fran Walsh", "Philippa Boyens"],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
    },
    {
      title: "Schindler's List",
      rating: "8.9",
      synopsis:
        "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      director: "Steven Spielberg",
      date_of_release: "December 15, 1993 (United States)",
      writers: ["Steven Zaillian (screenplay)", "Thomas Keneally (book)"],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
    },
    {
      title: "Pulp Fiction",
      rating: "8.9",
      synopsis:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      director: "Quentin Tarantino",
      date_of_release: "October 14, 1994 (United States)",
      writers: ["Quentin Tarantino", "Roger Avary (story)"],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      rating: "8.8",
      synopsis:
        "A young hobbit, Frodo, is entrusted with an ancient ring and must set out with a fellowship to destroy it in the fires of Mount Doom.",
      director: "Peter Jackson",
      date_of_release: "December 19, 2001 (United States)",
      writers: ["Peter Jackson", "Fran Walsh", "Philippa Boyens"],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
    },
    {
      title: "The Good, the Bad and the Ugly",
      rating: "8.8",
      synopsis:
        "Three gunslingers search for a fortune in buried Confederate gold during the American Civil War, forming an uneasy alliance and rivalry.",
      director: "Sergio Leone",
      date_of_release: "December 23, 1966 (Italy)",
      writers: ["Age & Scarpelli", "Luciano Vincenzoni", "Sergio Leone"],
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg",
    },
  
    {
      rank: 11,
      title: "Forrest Gump",
      year: 1994,
      rating: 8.8,
      director: "Robert Zemeckis",
      writers: ["Winston Groom (novel)", "Eric Roth (screenplay)"],
      release_date: "1994-07-06",
      synopsis:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75, Forrest Gump.",
      poster_url:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/e3f5a9106971679.5f9c00936bad2.jpg",
    },
    {
      rank: 12,
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
      rating: 8.8,
      director: "Peter Jackson",
      writers: [
        "J.R.R. Tolkien (novel)",
        "Fran Walsh",
        "Philippa Boyens",
        "Peter Jackson",
      ],
      release_date: "2002-12-18",
      synopsis:
        "While Frodo and Sam edge closer to Mordor with the help of Gollum, the divided fellowship makes a stand against Sauron’s new ally, Saruman, and his hordes at Helm’s Deep.",
      poster_url:
        "https://preview.redd.it/what-are-your-thoughts-on-lord-of-the-rings-the-two-towers-v0-jt4xqwrcsw6a1.jpg?width=640&crop=smart&auto=webp&s=f9c3e3742a475921c1bc076ec25cf34ec2c61b31",
    },
    {
      rank: 13,
      title: "Fight Club",
      year: 1999,
      rating: 8.8,
      director: "David Fincher",
      writers: ["Chuck Palahniuk (novel)", "Jim Uhls (screenplay)"],
      release_date: "1999-10-15",
      synopsis:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
      poster_url:
        "https://m.media-amazon.com/images/I/31CauYmKHlL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      rank: 14,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      director: "Christopher Nolan",
      writers: ["Christopher Nolan"],
      release_date: "2010-07-16",
      synopsis:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      rank: 15,
      title: "Star Wars: Episode V – The Empire Strikes Back",
      year: 1980,
      rating: 8.7,
      director: "Irvin Kershner",
      writers: ["Leigh Brackett", "Lawrence Kasdan", "George Lucas"],
      release_date: "1980-05-21",
      synopsis:
        "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda while his friends are pursued across the galaxy by Darth Vader.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      rank: 16,
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      director: "Lana Wachowski & Lilly Wachowski",
      writers: ["Lana Wachowski", "Lilly Wachowski"],
      release_date: "1999-03-31",
      synopsis:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Matrix.png/250px-The_Matrix.png",
    },
    {
      rank: 17,
      title: "Goodfellas",
      year: 1990,
      rating: 8.7,
      director: "Martin Scorsese",
      writers: [
        "Nicholas Pileggi (book)",
        "Nicholas Pileggi (screenplay)",
        "Martin Scorsese (screenplay)",
      ],
      release_date: "1990-09-19",
      synopsis:
        "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
    },
    {
      rank: 18,
      title: "One Flew Over the Cuckoo’s Nest",
      year: 1975,
      rating: 8.7,
      director: "Miloš Forman",
      writers: ["Lawrence Hauben", "Bo Goldman", "Ken Kesey (novel)"],
      release_date: "1975-11-19",
      synopsis:
        "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies the patients in an escape attempt.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_.jpg",
    },
    {
      rank: 19,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      director: "Christopher Nolan",
      writers: ["Jonathan Nolan", "Christopher Nolan"],
      release_date: "2014-11-07",
      synopsis:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    },
    {
      rank: 20,
      title: "Se7en",
      year: 1995,
      rating: 8.6,
      director: "David Fincher",
      writers: ["Andrew Kevin Walker"],
      release_date: "1995-09-22",
      synopsis:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      poster_url:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/se7en_2.png",
    },
    {
      rank: 21,
      title: "It’s a Wonderful Life",
      year: 1946,
      rating: 8.6,
      director: "Frank Capra",
      writers: [
        "Frances Goodrich",
        "Albert Hackett",
        "Frank Capra",
        "Jo Swerling",
      ],
      release_date: "1946-12-20",
      synopsis:
        "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg/960px-It%27s_a_Wonderful_Life_%281946_poster%29.jpeg",
    },
    {
      rank: 22,
      title: "The Silence of the Lambs",
      year: 1991,
      rating: 8.6,
      director: "Jonathan Demme",
      writers: ["Thomas Harris (novel)", "Ted Tally"],
      release_date: "1991-02-14",
      synopsis:
        "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help in catching another serial killer.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      rank: 23,
      title: "Seven Samurai",
      year: 1954,
      rating: 8.6,
      director: "Akira Kurosawa",
      writers: ["Akira Kurosawa", "Shinobu Hashimoto", "Hideo Oguni"],
      release_date: "1954-04-26",
      synopsis:
        "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
      poster_url:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p5588_p_v8_au.jpg",
    },
    {
      rank: 24,
      title: "Saving Private Ryan",
      year: 1998,
      rating: 8.6,
      director: "Steven Spielberg",
      writers: ["Robert Rodat"],
      release_date: "1998-07-24",
      synopsis:
        "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
    },
    {
      rank: 25,
      title: "City of God",
      year: 2002,
      rating: 8.6,
      director: "Fernando Meirelles & Kátia Lund",
      writers: ["Paulo Lins (novel)", "Bráulio Mantovani"],
      release_date: "2002-08-31",
      synopsis:
        "In the slums of Rio de Janeiro, two kids’ paths diverge as one struggles to become a photographer and the other a kingpin.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/1/10/CidadedeDeus.jpg",
    },
    {
      rank: 26,
      title: "Life Is Beautiful",
      year: 1997,
      rating: 8.6,
      director: "Roberto Benigni",
      writers: ["Vincenzo Cerami", "Roberto Benigni"],
      release_date: "1997-12-20",
      synopsis:
        "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son’s innocence.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Vitaebella.jpg/250px-Vitaebella.jpg",
    },
    {
      rank: 27,
      title: "The Green Mile",
      year: 1999,
      rating: 8.6,
      director: "Frank Darabont",
      writers: ["Stephen King (novel)", "Frank Darabont"],
      release_date: "1999-12-10",
      synopsis:
        "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg",
    },
    {
      rank: 28,
      title: "Terminator 2: Judgment Day",
      year: 1991,
      rating: 8.5,
      director: "James Cameron",
      writers: ["James Cameron", "William Wisher"],
      release_date: "1991-07-03",
      synopsis:
        "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg",
    },
    {
      rank: 29,
      title: "Star Wars",
      year: 1977,
      rating: 8.6,
      director: "George Lucas",
      writers: ["George Lucas"],
      release_date: "1977-05-25",
      synopsis:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire’s world-destroying battle station.",
      poster_url:
        "https://m.media-amazon.com/images/I/81CIXJxQ3TL._SY522_.jpg",
    },
    {
      rank: 30,
      title: "Back to the Future",
      year: 1985,
      rating: 8.5,
      director: "Robert Zemeckis",
      writers: ["Robert Zemeckis", "Bob Gale"],
      release_date: "1985-07-03",
      synopsis:
        "Marty McFly, a teenager, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his scientist friend.",
      poster_url:
        "https://resizing.flixster.com/s85ABmMbwFG0PX0Y6X-1_tBQ5Mw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q3NDk5NzA1LWE4YWItNGJkMC04MDM2LTExNmY1MDU5ODNlYi5qcGc=",
    },
    {
      rank: 31,
      title: "Metropolis",
      year: 1927,
      rating: 8.3,
      director: "Fritz Lang",
      writers: ["Thea von Harbou", "Fritz Lang"],
      release_date: "1927-03-13",
      synopsis:
        "In a futuristic city sharply divided between the working class and the city planners, the son of the city’s mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BMjhjMGYyMjAtMzJkYy00NzhlLWIwY2MtMWQ2ODIxZDUyOGYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      rank: 32,
      title: "Pather Panchali",
      year: 1955,
      rating: 8.3,
      director: "Satyajit Ray",
      writers: ["Bibhutibhushan Bandyopadhyay (novel)", "Satyajit Ray"],
      release_date: "1955-05-26",
      synopsis:
        "Follows a poor family in rural Bengal through childhood, struggle, and loss, capturing the rhythms of Bengali village life with realism and emotional depth.",
      poster_url:
        "https://m.media-amazon.com/images/I/81voJKiZVQL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      rank: 33,
      title: "A Man Escaped",
      year: 1956,
      rating: 8.2,
      director: "Robert Bresson",
      writers: ["Robert Bresson"],
      release_date: "1956-10-17",
      synopsis:
        "A French Resistance member is imprisoned by the Nazis and plans a meticulous escape from his cell, relying on careful routine and resourcefulness.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BYjBkODI2NzItODMzMC00Yjc2LWI2NDItZTA5YTE0MTE5NDc2XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg",
    },
    {
      rank: 34,
      title: "GoodFellas",
      year: 1990,
      rating: 8.7,
      director: "Martin Scorsese",
      writers: ["Nicholas Pileggi", "Martin Scorsese"],
      release_date: "1990-09-19",
      synopsis:
        "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners over the years.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
    },
    {
      rank: 35,
      title: "Rashomon",
      year: 1950,
      rating: 8.2,
      director: "Akira Kurosawa",
      writers: [
        "Ryūnosuke Akutagawa (stories)",
        "Akira Kurosawa",
        "Fumio Hayasaka",
      ],
      release_date: "1950-08-25",
      synopsis:
        "In 12th-century Japan, a murder and rape are recounted from four different perspectives, raising questions of subjective truth.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BMTk1MDU5MjQ5NF5BMl5BanBnXkFtZTgwMDM2OTE4MzE@._V1_.jpg",
    },
    {
      rank: 36,
      title: "Some Like It Hot",
      year: 1959,
      rating: 8.2,
      director: "Billy Wilder",
      writers: ["Billy Wilder", "I.A.L. Diamond"],
      release_date: "1959-03-29",
      synopsis:
        "Two musicians witness a mob hit and flee the state disguised as women in an all-female band, but further complications arise when they fall for two singers.",
      poster_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-3stoZXH3ObyWtUJiAzqgoKLx7fFA7wLvNB9B8U2SF6Oz6gkXS1HWIw3DJ2RxH7GbLkTuWRX9BlqIXhO423eVSCfuud7lnVqeHRSat0&s=10",
    },
    {
      rank: 37,
      title: "Ugetsu",
      year: 1953,
      rating: 8.1,
      director: "Kenji Mizoguchi",
      writers: ["Jun'ichirō Tanizaki (stories)", "Yoshikata Yoda"],
      release_date: "1953-05-24",
      synopsis:
        "During Japan’s civil wars of the 16th century, two peasants leave their homes to pursue lofty ambitions, encountering ghosts, ambition, and tragedy along the way.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/77/Ugetsu_monogatari_poster.jpg",
    },
    {
      rank: 38,
      title: "North by Northwest",
      year: 1959,
      rating: 8.3,
      director: "Alfred Hitchcock",
      writers: ["Ernest Lehman"],
      release_date: "1959-07-21",
      synopsis:
        "An innocent man is mistaken for a government agent by foreign spies, leading to a cross-country chase, romance, and iconic set-piece scenes.",
      poster_url:
        "https://m.media-amazon.com/images/I/914Tl4VoOEL._AC_UF894,1000_QL80_.jpg",
    },
    {
      rank: 39,
      title: "All About Eve",
      year: 1950,
      rating: 8.2,
      director: "Joseph L. Mankiewicz",
      writers: ["Joseph L. Mankiewicz"],
      release_date: "1950-10-12",
      synopsis:
        "An ambitious young woman insinuates herself into the life of an aging Broadway star and her circle, stirring jealousy, betrayal, and power struggles.",
      poster_url:
        "https://www.filmsite.org/posters/allabouteve.jpg",
    },
    {
      rank: 40,
      title: "Lawrence of Arabia",
      year: 1962,
      rating: 8.3,
      director: "David Lean",
      writers: ["Robert Bolt", "Michael Wilson", "T.E. Lawrence (autobiography)"],
      release_date: "1962-12-10",
      synopsis:
        "The story of T.E. Lawrence’s experiences in Arabia during World War I, exploring themes of imperialism, identity, and mythic heroism.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lawrence_of_Arabia.jpg/250px-Lawrence_of_Arabia.jpg",
    },
    {
      rank: 41,
      title: "Double Indemnity",
      year: 1944,
      rating: 8.3,
      director: "Billy Wilder",
      writers: ["James M. Cain (novel)", "Billy Wilder", "Raymond Chandler"],
      release_date: "1944-02-11",
      synopsis:
        "An insurance salesman is enticed by a seductive woman into a scheme to murder her husband and collect the insurance money, but things soon spiral out of control.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/ce/Double_Indemnity_%281944_poster%29.jpg",
    },
    {
      rank: 42,
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
      rating: 8.3,
      director: "Michel Gondry",
      writers: ["Charlie Kaufman", "Michel Gondry", "Pierre Bismuth"],
      release_date: "2004-03-19",
      synopsis:
        "A couple undergoes a procedure to erase each other from their memories when their relationship turns sour, but they rediscover what they had lost.",
      poster_url:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33409_p_v10_bb.jpg",
    },
    {
      rank: 43,
      title: "Citizen Kane",
      year: 1941,
      rating: 8.3,
      director: "Orson Welles",
      writers: ["Herman J. Mankiewicz", "Orson Welles"],
      release_date: "1941-05-01",
      synopsis:
        "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance—‘Rosebud’—and trace his life’s rise and fall.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
    },
    {
      rank: 44,
      title: "Rear Window",
      year: 1954,
      rating: 8.4,
      director: "Alfred Hitchcock",
      writers: ["John Michael Hayes", "Jeanne Hoban"],
      release_date: "1954-08-01",
      synopsis:
        "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
      poster_url:
        "https://m.media-amazon.com/images/S/pv-target-images/efe1cf062ec517cc303d3bfb230778109f431da79924042e3e45d74fe0b605af.jpg",
    },
    {
      rank: 45,
      title: "The Thing (1982)",
      year: 1982,
      rating: 8.1,
      director: "John Carpenter",
      writers: ["Bill Lancaster", "John Carpenter", "Martin Häusler"],
      release_date: "1982-06-25",
      synopsis:
        "At a research station in Antarctica, scientists discover an alien life form that can imitate any living being — paranoia and distrust spread as they realize the danger among them.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/e/e3/The_Thing_%281982_film%29.png",
    },
    {
      rank: 46,
      title: "Vertigo",
      year: 1958,
      rating: 8.3,
      director: "Alfred Hitchcock",
      writers: [
        "Akimitsu Tajima (novel)",
        "Samuel A. Taylor",
        "Alfred Hitchcock",
      ],
      release_date: "1958-05-09",
      synopsis:
        "A retired detective with a fear of heights is hired to follow the wife of an old acquaintance, but becomes dangerously obsessed with her.",
      poster_url:
        "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2024/06/26170546/15uOEfqBNTVtDUT7hGBVCka0rZz.jpg",
    },
    {
      rank: 47,
      title: "Singin’ in the Rain",
      year: 1952,
      rating: 8.3,
      director: "Stanley Donen & Gene Kelly",
      writers: ["Betty Comden", "Adolph Green", "Arthur Freed"],
      release_date: "1952-04-11",
      synopsis:
        "In late-1920s Hollywood, a silent film production company makes the transition to sound, complicating its production and the love lives of its players.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/commons/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg",
    },
    {
      rank: 48,
      title: "The Wizard of Oz",
      year: 1939,
      rating: 8.0,
      director: "Victor Fleming",
      writers: [
        "L. Frank Baum (novel)",
        "Noël Langley",
        "Florence Ryerson",
        "Edgar Allan Woolf",
      ],
      release_date: "1939-08-25",
      synopsis:
        "Dorothy Gale is swept by a tornado from Kansas to the magical land of Oz, and must find the Wizard to return home, encountering colorful characters along the way.",
      poster_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Wizard_of_oz_IMAX.jpg/250px-Wizard_of_oz_IMAX.jpg",
    },
    {
      rank: 49,
      title: "In the Mood for Love",
      year: 2000,
      rating: 8.1,
      director: "Wong Kar-wai",
      writers: ["Wong Kar-wai"],
      release_date: "2000-09-29",
      synopsis:
        "In 1960s Hong Kong, two neighbors form a bond after suspecting their spouses of infidelity, resulting in a restrained yet emotionally intense love affair.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BN2Q4NjllMDgtOTk2Zi00YzM1LWJmOTMtNmRiZDgyZGJmMjQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      rank: 50,
      title: "2001: A Space Odyssey",
      year: 1968,
      rating: 8.3,
      director: "Stanley Kubrick",
      writers: ["Stanley Kubrick", "Arthur C. Clarke"],
      release_date: "1968-04-02",
      synopsis:
        "A voyage to Jupiter with a sentient computer, exploring themes of human evolution, artificial intelligence, and the unknown.",
      poster_url:
        "https://m.media-amazon.com/images/M/MV5BNjU0NDFkMTQtZWY5OS00MmZhLTg3Y2QtZmJhMzMzMWYyYjc2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  
  let counter = 0;
  for (let i of filmek) {
    document.getElementById(
      "lista"
    ).innerHTML += `<option  value="${i.title}"></option>`;
    document.getElementById(
      "filmLista"
    ).innerHTML += `<div id="${i.title}" class="card" >
    <img type="button" id="kep${counter}" src="${i.poster_url}" class="card-img-top" alt="${i.title}" title="Információért kattintson!">
    <div class="card-body">
      <p class="card-text" id="trivia${counter}" title="Találós kérdésért kattintson!">${i.title}</p>
    </div>
  </div>`;
    counter++;
  }
  document.getElementById(
    "filmLista"
  ).innerHTML += `<div id="nincs" style="display = none;">
        <img src="shrug.webp"><br>
        Sajnos nem találtunk ilyen filmet
        </div>`;
  let labelId = "writer_";
  counter = 0;
  // for(let i of filmek){
  //   document.getElementById(`${i.title}`).getElementsByClassName("card-body")[0].innerHTML += `<label id="${labelId}${counter}">Written by: </label>`;
  //   let utolso = 1;
  //   for(let g of i.writers){
  //     if(i.writers.length == utolso){
  //       document.getElementById(`${labelId}${counter}`).innerHTML += ` ${g}`;
  //     }
  //     else{
  //       document.getElementById(`${labelId}${counter}`).innerHTML += ` ${g},`;
  //     }
  //     utolso++;
  //   }
  //   counter++;
  // }
  // document.getElementById("search").addEventListener("mousedown", (e) => {
  //     Szuro()
  // })
  document.getElementById("film_nev").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      Szuro();
    }
  });
  function Szuro() {
    let mennyi = 0;
    for (let i of filmek) {
      if (
        document
          .getElementById(`${i.title}`)
          .id.toUpperCase()
          .includes(document.getElementById("film_nev").value.toUpperCase())
      ) {
        document.getElementById(`${i.title}`).style.display = "block";
      } else {
        document.getElementById(`${i.title}`).style.display = "none";
        mennyi++;
      }
    }
    if (mennyi == filmek.length) {
      document.getElementById("nincs").style.display = "block";
    } else {
      document.getElementById("nincs").style.display = "none";
    }
  }
  document.body.addEventListener("mousedown", (e) => {
    // if (e.target.id.includes("trivia")) {
    //   console.log(e.target.id.split("trivia")[1]);
    //   document.getElementById("szoveg").innerHTML =
    //     "<strong>Tudta?</strong><br><br>" +
    //     "<p>" +
    //     filmek[e.target.id.split("trivia")[1]].trivia +
    //     "</p>";
    //   document.getElementById("popup").style.display = "flex";
    //   document.body.style.overflow = "hidden";
    // }
    if (e.target.id.includes("kep")) {
      console.log(filmek[e.target.id.split("kep")[1]].director);
      document.getElementById("szoveg").innerHTML = `<label><u>Synopsis:</u> ${
        filmek[e.target.id.split("kep")[1]].synopsis
      }</label><br>
      <label><u>Directed by:</u>  ${
        filmek[e.target.id.split("kep")[1]].director
      }</label><br>
      <label id="writers"><u>Written by:</u> </label>`;
      let utolso = 1;
      for (let i of filmek[e.target.id.split("kep")[1]].writers) {
        if (utolso == filmek[e.target.id.split("kep")[1]].writers.length) {
          document.getElementById("writers").innerHTML += ` ${i}`;
        } else {
          document.getElementById("writers").innerHTML += ` ${i},`;
        }
        utolso++;
      }
      document.getElementById("popup").style.display = "flex";
      document.body.style.overflow = "hidden";
    }
    // document.getElementById("tudnivalok").style.top = window.scrollY + "px";
  });
  document.getElementById("close").addEventListener("mousedown", (e) => {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "visible";
  });
  window.addEventListener("scroll", (e) => {
    document.getElementById("popup").style.top = window.scrollY + "px";
    if(window.scrollY / document.body.scrollHeight < 0.7){
      document.getElementsByClassName("header")[0].style.display = "block";
    }
    else{
      document.getElementsByClassName("header")[0].style.display = "none";
    }
    // if(window.scrollY > 100){
    //   document.getElementsByClassName("navbar-brand")[0].style.display = "none";
    // }
    // else{
    //   document.getElementsByClassName("navbar-brand")[0].style.display = "block";
    // }
    // if(window.scrollY > 100){
    //   document.getElementById("film_nev").style.border = "2px solid white";
    //   document.getElementById("film_nev").style.backgroundColor = "black";
    //   // document.querySelector("::-ms-input-placeholder").style.color = "white";
    // }
    // else{
    //   document.getElementById("film_nev").style.border = "2px solid black";
    //   document.getElementById("film_nev").style.backgroundColor = "white";
    //   document.getElementById("film_nev").style.color = "black";
    // }
  });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.addEventListener("resize", (e) => {
  if(window.innerWidth <= 400){
    document.getElementById("film_nev").placeholder = "🔍"
  }
  else{
    document.getElementById("film_nev").placeholder = "Ide írj...🔍"
  }
});