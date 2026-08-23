/* ==========================================================================
   VORTEX ESPORTS — Team data
   --------------------------------------------------------------------------
   Data for Home, Players, Combo & Loadout, Social and About pages.
   Edit this file to update team info, roster and lobby count.
   ========================================================================== */

const teamData = {

  /* Team identity -------------------------------------------------------- */
  team: {
    name: "Vortex Esports",
    shortName: "VTX",
    tagline: "Team • Compete • Conquer",
    joiningDate: "01 August 2026",
    founded: "2026",
    region: "India",
    game: "Free Fire",
    socials: {
      instagram: "#",
      youtube: "#",
      facebook: "#",
      discord: "#"
    }
  },

  /* Home stats ("Our Performance") --------------------------------------- */
  stats: {
    players: 0,
    games: 0,
    wins: 0,
    kills: 0
  },

  /* Players -------------------------------------------------------------- */
  players: [
    {
      id: 1,
      name: "LIMIT",
      ign: ".VTXLIMIT",
      uid: "6039342894",
      role: "IGL / Rusher",
      image: "assets/players/player-01.png",

      combo: {
        character: "Character 01",
        skill: "Skill 01",
        pet: "Pet 01",
        characterImage: "assets/characters/character-01.png",
        petImage: "assets/pets/pet-01.png"
      },

      weapons: ["Weapon 01", "Weapon 02"],

      socials: {
        instagram: "https://www.instagram.com/vtxlimit/?hl=en",
        youtube: "https://www.youtube.com/@VTXLIMIT",
        facebook: "https://www.facebook.com/",
        discord: "https://discord.com/channels/1535962604810272819/1535962749107052574"
      }
    },

    {
      id: 2,
      name: "SAHIL",
      ign: "VTX.SAHILL",
      uid: "6617901007",
      role: "Sniper",
      image: "assets/players/player-02.png",

      combo: {
        character: "Character 02",
        skill: "Skill 02",
        pet: "Pet 02",
        characterImage: "assets/characters/character-02.png",
        petImage: "assets/pets/pet-02.png"
      },

      weapons: ["Weapon 03", "Weapon 04"],

      socials: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        discord: "#"
      }
    },

    {
      id: 3,
      name: "AYUSH",
      ign: "VTX.AYUSH",
      uid: "4574897202",
      role: "Support & NEDER ",
      image: "assets/players/player-03.png",

      combo: {
        character: "Character 03",
        skill: "Skill 03",
        pet: "Pet 03",
        characterImage: "assets/characters/character-03.png",
        petImage: "assets/pets/pet-03.png"
      },

      weapons: ["Weapon 05", "Weapon 06"],

      socials: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        discord: "#"
      }
    },

    {
      id: 4,
      name: "ADITYA",
      ign: "VTX.ADITYA",
      uid: "12409625261",
      role: "Rusher &  neder ",
      image: "assets/players/player-04.png",

      combo: {
        character: "Character 04",
        skill: "Skill 04",
        pet: "Pet 04",
        characterImage: "assets/characters/character-04.png",
        petImage: "assets/pets/pet-04.png"
      },

      weapons: ["Weapon 07", "Weapon 08"],

      socials: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        discord: "#"
      }
    },

    {
      id: 5,
      name: "GOUTAM",
      ign: "VTX.GOUTAM",
      uid: "2916893594",
      role: "Support & rusher",
      image: "assets/players/player-05.png",

      combo: {
        character: "Character 05",
        skill: "Skill 05",
        pet: "Pet 05",
        characterImage: "assets/characters/character-05.png",
        petImage: "assets/pets/pet-05.png"
      },

      weapons: ["Weapon 09", "Weapon 10"],

      socials: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        discord: "#"
      }
    },

    {
      id: 6,
      name: "ISHAN",
      ign: "VTX.ISHAN",
      uid: "7309373870 ",
      role: "Rusher",
      image: "assets/players/player-06.png",

      combo: {
        character: "Character 06",
        skill: "Skill 06",
        pet: "Pet 06",
        characterImage: "assets/characters/character-06.png",
        petImage: "assets/pets/pet-06.png"
      },

      weapons: ["Weapon 11", "Weapon 12"],

      socials: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        discord: "#"
      }
    },

    {
      id: 7,
      name: "SHOTO",
      ign: "VTX.SHOTO",
      uid: "1881748425",
      role: "Flex",
      image: "assets/players/player-07.png",

      combo: {
        character: "Character 07",
        skill: "Skill 07",
        pet: "Pet 07",
        characterImage: "assets/characters/character-07.png",
        petImage: "assets/pets/pet-07.png"
      },

      weapons: ["Weapon 13", "Weapon 14"],

      socials: {
        instagram: "https://www.instagram.com/mr_bikash_38?igsh=MTdlNWN1bWpnY2oweA==",
        youtube: "#",
        facebook: "#",
        discord: "#"
      }
    }
  ],

  /* Lobby results -------------------------------------------------------- */
  lobby: [
    { lobby: "Lobby 01", rank: 0, players: 0, prize: "₹0" },
    { lobby: "Lobby 02", rank: 0, players: 0, prize: "₹0" },
    { lobby: "Lobby 03", rank: 0, players: 0, prize: "₹0" }
  ]
};
