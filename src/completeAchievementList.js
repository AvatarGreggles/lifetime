{/*
  This file is where all achievements are stored.
  When creating a new achievement to add to the app,
  include an id value, title, description and category
  and experience value.

  The current Catergories supported are:
  - Work
  - Fitness
  - Gaming
  - Creativity

  Experience values should follow this pattern:
  1 star: 10pts
  2 star: 50pts
  3 star: 100pts
  4 star: 250pts
  5 star: 500pts
  Lifetime Achievement: 1,000pts


  */}

  const oneStar = 10;
  const twoStar = 50;
  const threeStar = 100;
  const fourStar = 250;
  const fiveStar = 500;
  const lifetime = 1000;

const completeAchievementList =
[
  {
    id: 1,
    title: 'To infinity and beyond!',
    description: 'Get a promotion at work',
    category: 'Work',
    expValue: fiveStar
  },
  {
    id: 2,
    title: "Let's do this bro!",
    description: 'Join a gym',
    category: 'Fitness' ,
    expValue: threeStar
  },
  {
    id: 3,
    title: 'Simple and Clean!',
    description: 'Complete Kingdom hearts 3!',
    category: 'Gaming',
    expValue: twoStar
  },
  {
    id: 4,
    title: 'Gym Rat',
    description: 'Go to the gym 3 times in 1 week',
    category: 'Fitness',
    expValue: twoStar
  },
  {
    id: 5,
    title: 'Default',
    description: 'Default',
    category: 'Creativity',
    expValue: fourStar
  },
  {
    id: 6,
    title: 'Default',
    description: 'Default',
    category: 'Creativity',
    expValue: fourStar
  },
  {
    id: 7,
    title: 'Default',
    description: 'Default',
    category: 'Creativity',
    expValue: fourStar
  },
  {
    id: 8,
    title: 'Default',
    description: 'Default',
    category: 'Creativity',
    expValue: fourStar
  },
  {
    id: 9,
    title: 'Default',
    description: 'Default',
    category: 'Creativity',
    expValue: fourStar
  }
]

export default completeAchievementList;
