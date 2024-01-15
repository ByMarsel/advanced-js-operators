// Деструктуризация объектов, spread оператор, сокращеннная нотация свойств

export const user1 = {
  userID: 123456,
  userName: "MusicLover",
  email: "musiclover@example.com",
  phone: "+1234567890",
  profile: {
    avatarURL: "https://example.com/avatars/musiclover.jpg",
    bio: "Music enthusiast and amateur guitarist. Loves attending live concerts.",
    location: "New York, USA",
  },
  preferences: {
    music: {
      genres: ["Rock", "Jazz", "Classical"],
      favoriteArtists: ["The Beatles", "Miles Davis", "Ludwig van Beethoven"],
      favoriteSongs: [
        {
          artist: "The Beatles",
          song: "Let It Be",
        },
        {
          artist: "Miles Davis",
          song: "Freddie Freeloader",
        },
        {
          artist: "Ludwig van Beethoven",
          song: "Moonlight Sonata",
        },
      ],
      recentlyPlayed: [
        {
          artist: "The Beatles",
          song: "Yesterday",
          playDate: "2024-01-10",
        },
        {
          artist: "Miles Davis",
          song: "So What",
          playDate: "2024-01-09",
        },
        {
          artist: "Ludwig van Beethoven",
          song: "Symphony No. 9",
          playDate: "2024-01-08",
        },
      ],
    },
  },
  settings: {
    language: "English",
    notificationPreferences: {
      email: true,
      push: false,
    },
  },
  socialLinks: {
    facebook: "https://www.facebook.com/musiclover",
    twitter: "@musiclover",
    instagram: "https://www.instagram.com/musiclover",
  },
};

export const user2 = {
  userID: 7891011,
  userName: "ArtLover",
  email: "artlover@example.com",
  profile: {
    avatarURL: "https://example.com/avatars/artlover.jpg",
    bio: "Art enthusiast and museum explorer. Passionate about modern art.",
    location: "Paris, France",
  },
  preferences: {
    music: {
      genres: ["Electronic", "Indie", "Pop"],
      favoriteArtists: ["Daft Punk", "Tame Impala", "Billie Eilish"],
      favoriteSongs: [
        {
          artist: "Daft Punk",
          song: "One More Time",
        },
        {
          artist: "Tame Impala",
          song: "The Less I Know The Better",
        },
        {
          artist: "Billie Eilish",
          song: "Bad Guy",
        },
      ],
      recentlyPlayed: [
        {
          artist: "Daft Punk",
          song: "Get Lucky",
          playDate: "2024-01-12",
        },
        {
          artist: "Tame Impala",
          song: "Feels Like We Only Go Backwards",
          playDate: "2024-01-11",
        },
        {
          artist: "Billie Eilish",
          song: "Everything I Wanted",
          playDate: "2024-01-10",
        },
      ],
    },
  },
  settings: {
    notificationPreferences: {
      email: true,
      push: true,
    },
  },
  socialLinks: {
    facebook: "https://www.facebook.com/artlover",
    twitter: "@artlover",
    instagram: "https://www.instagram.com/artlover",
  },
};

export const user3 = {
  userID: 11223344,
  userName: "FoodieFan",
  email: "foodiefan@example.com",
  profile: {
    avatarURL: "https://example.com/avatars/foodiefan.jpg",
    bio: "Gourmet aficionado and world cuisine explorer. Loves cooking and blogging about food.",
    location: "Tokyo, Japan",
  },
  preferences: {
    music: {
      genres: ["K-Pop", "R&B", "Hip-Hop"],
      favoriteArtists: ["BTS", "Ariana Grande", "Drake"],
      favoriteSongs: [
        {
          artist: "BTS",
          song: "Dynamite",
        },
        {
          artist: "Ariana Grande",
          song: "7 Rings",
        },
        {
          artist: "Drake",
          song: "God's Plan",
        },
      ],
      recentlyPlayed: [
        {
          artist: "BTS",
          song: "Butter",
          playDate: "2024-01-13",
        },
        {
          artist: "Ariana Grande",
          song: "Thank U, Next",
          playDate: "2024-01-12",
        },
        {
          artist: "Drake",
          song: "In My Feelings",
          playDate: "2024-01-11",
        },
      ],
    },
  },
  settings: {
    language: "Japanese",
    notificationPreferences: {
      email: false,
      push: true,
    },
  },
  socialLinks: {
    facebook: "https://www.facebook.com/foodiefan",
    twitter: "@foodiefan",
    instagram: "https://www.instagram.com/foodiefan",
  },
};

export const users = [user1, user2, user3];

export const subjectsSchedule = [
  ["Mathematics", "Literature", "Physical Education"], // Monday
  ["Chemistry", "History", "Computer Science"], // Tuesday
  ["Biology", "Geography", "English"], // Wednesday
  ["Physics", "Art", "Mathematics"], // Thursday
  ["History", "Physical Education", "Literature"], // Friday
  // Пятница
  undefined, // Суббота
];

export const subjectTranslations = {
  Mathematics: "Математика",
  Literature: "Литература",
  Chemistry: "Химия",
  History: "История",
  "Computer Science": "Информатика",
  Biology: "Биология",
  Geography: "География",
  English: "Английский",
  Physics: "Физика",
  Art: "Искусство",
};
