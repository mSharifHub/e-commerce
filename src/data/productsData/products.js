export const products = [
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "HighFlyer Basketball Sneakers",
    description:
      "Designed for the dynamic player, HighFlyer Basketball Sneakers offer superior ankle support and cushioning. Ideal for both indoor and outdoor courts.",
    price: "$120.00",
    color: "Classic Black",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 2,
    newArrival: true,
    openBox: false,
    discount: 10,
    discountAvailable: true,
    fastDelivery: true,
    rating: 5,
    category: "Sports",
    newProduct: true,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "JohnDoe123",
        comment: "Amazing grip and comfort! Played my best game in these.",
        rating: 5,
        date: "2024-02-10",
      },
      {
        reviewer: "BasketballFanatic",
        comment: "Good quality but runs a bit small. Order a size up.",
        rating: 4,
        date: "2024-02-01",
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "UrbanTrek Hiking Boots",
    description:
      "Rugged yet stylish, the UrbanTrek Hiking Boots are your perfect companion for outdoor adventures. Features water-resistant leather and a durable sole.",
    price: "$150.00",
    color: "Forest Green",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 13,
    newArrival: false,
    openBox: false,
    discount: 0,
    discountAvailable: false,
    fastDelivery: true,
    rating: 4,
    category: "Outdoor",
    newProduct: false,
    mostOrdered: true,
    reviews: [
      {
        reviewer: "NatureWalker",
        comment: "Super comfortable for long hikes. Great ankle support.",
        rating: 4,
      },
      {
        reviewer: "TrailBlazer",
        comment: "Durable and stylish. Just wish they had more color options.",
        rating: 3,
      },
    ],
  },

  {
    id: Math.random().toString(36).substring(2, 9),
    name: "CityStride Casual Loafers",
    description:
      "Comfortable and stylish loafers perfect for everyday wear in the city. Made with breathable material.",
    price: "$85.00",
    color: "crisp white",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 5,
    newArrival: true,
    openBox: false,
    discount: 5,
    discountAvailable: true,
    fastDelivery: false,
    rating: 4,
    category: "Casual",
    newProduct: true,
    mostOrdered: false,
    reviews: [],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "ElegantSteps Formal Shoes",
    description:
      "Sleek and elegant, these formal shoes are perfect for special occasions or business attire.",
    price: "$110.00",
    color: "deep navy",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 4,
    newArrival: false,
    openBox: false,
    discount: 0,
    discountAvailable: false,
    fastDelivery: true,
    rating: 4.5,
    category: "Formal",
    newProduct: false,
    mostOrdered: true,
    reviews: [],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "SpeedRun Athletic Shoes",
    description:
      "Designed for the athlete, these running shoes offer great traction and comfort during long runs.",
    price: "$130.00",
    color: "neon yellow",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 8,
    newArrival: false,
    openBox: true,
    discount: 15,
    discountAvailable: true,
    fastDelivery: true,
    rating: 5,
    category: "Running",
    newProduct: false,
    mostOrdered: false,
    reviews: [],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "KidsFun Sneakers",
    description:
      "Colorful and durable sneakers for kids, perfect for all sorts of play and activities.",
    price: "$45.00",
    color: "laser lime",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 10,
    newArrival: true,
    openBox: false,
    discount: 10,
    discountAvailable: true,
    fastDelivery: false,
    rating: 4.5,
    category: "Children",
    newProduct: true,
    mostOrdered: false,
    reviews: [],
  },

  {
    id: Math.random().toString(36).substring(2, 9),
    name: "GlideWalk Sandals",
    description:
      "Lightweight and comfortable sandals ideal for beach walks or casual outings.",
    price: "$50.00",
    color: "sandy beige",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 7,
    newArrival: false,
    openBox: false,
    discount: 5,
    discountAvailable: true,
    fastDelivery: false,
    rating: 4.2,
    category: "Casual",
    newProduct: false,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "BeachLover",
        comment: "Perfect for beach days. So comfortable and easy to clean!",
        rating: 4,
      },
      {
        reviewer: "CasualWalker",
        comment: "Nice design, but I wish they had more cushioning.",
        rating: 3,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "Marathon Elite Running Shoes",
    description:
      "High-performance running shoes designed for marathon runners, offering exceptional support and breathability.",
    price: "$140.00",
    color: "blazing red",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 4,
    newArrival: true,
    openBox: false,
    discount: 10,
    discountAvailable: true,
    fastDelivery: true,
    rating: 4.8,
    category: "Running",
    newProduct: true,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "RunnerPro",
        comment:
          "Took these for a spin and loved the support. Felt light and fast!",
        rating: 5,
      },
      {
        reviewer: "MarathonManiac",
        comment: "Great for long runs. Durable and comfortable.",
        rating: 5,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "FormalShine Leather Shoes",
    description:
      "Classic leather shoes with a modern twist, ideal for formal events and business meetings.",
    price: "$120.00",
    color: "metallic silver",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],

    image: "",
    inStock: 6,
    newArrival: false,
    openBox: false,
    discount: 0,
    discountAvailable: false,
    fastDelivery: true,
    rating: 4.5,
    category: "Formal",
    newProduct: false,
    mostOrdered: true,
    reviews: [
      {
        reviewer: "BusinessCasual",
        comment:
          "Stylish and professional. A bit tight at first but fits well after breaking in.",
        rating: 4,
      },
      {
        reviewer: "EventPlanner",
        comment: "Love the shine on these! Comfortable for long events.",
        rating: 5,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "WinterWarm Snow Boots",
    description:
      "Keep your feet warm and dry with these insulated snow boots, perfect for chilly winter days.",
    price: "$100.00",
    color: "icy white",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5, 14,
    ],

    image: "",
    inStock: 6,
    newArrival: true,
    openBox: false,
    discount: 15,
    discountAvailable: true,
    fastDelivery: false,
    rating: 4.3,
    category: "Winter",
    newProduct: true,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "ColdFeet",
        comment: "Really warm and comfortable. Kept my feet dry in the snow!",
        rating: 5,
      },
      {
        reviewer: "SnowHiker",
        comment: "Great traction, but a bit heavy.",
        rating: 3,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "AquaSwim Water Shoes",
    description:
      "Ideal for water sports and activities, these shoes offer protection and comfort in wet conditions.",
    price: "$40.00",
    color: "aqua blue",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],

    image: "",
    inStock: 10,
    newArrival: false,
    openBox: false,
    discount: 0,
    discountAvailable: false,
    fastDelivery: true,
    rating: 4,
    category: "Water Sports",
    newProduct: false,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "BeachVolley",
        comment: "Great for beach sports, snug fit and quick drying.",
        rating: 4,
      },
      {
        reviewer: "WaterRaft",
        comment:
          "Protects feet from rocks and sharp objects. A bit tight around the toes.",
        rating: 3,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "FitnessFlex Gym Trainers",
    description:
      "Versatile and supportive trainers designed for a variety of gym activities and workouts.",
    price: "$90.00",
    color: "flame red",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 8,
    newArrival: false,
    openBox: true,
    discount: 10,
    discountAvailable: true,
    fastDelivery: true,
    rating: 4.6,
    category: "Gym",
    newProduct: false,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "GymRat",
        comment: "Super supportive for lifting and cardio. Love the design!",
        rating: 5,
      },
      {
        reviewer: "WorkoutEnthusiast",
        comment: "Good all-around gym shoe, but not the best for running.",
        rating: 4,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "SkyJog Air Runners",
    description:
      "Lightweight and breathable, these runners are perfect for high-intensity workouts or casual jogs.",
    price: "$95.00",
    color: "sky blue",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 7,
    newArrival: false,
    openBox: false,
    discount: 10,
    discountAvailable: true,
    fastDelivery: true,
    rating: 4.4,
    category: "Running",
    newProduct: false,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "DailyJogger",
        comment: "Super light and comfortable, great for daily runs!",
        rating: 5,
      },
      {
        reviewer: "FitnessAddict",
        comment: "Nice cushioning, but could use more arch support.",
        rating: 4,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "UrbanChic Fashion Sneakers",
    description:
      "Stylish and versatile sneakers that blend seamlessly with any casual outfit.",
    price: "$80.00",
    color: "vibrant violet",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5, 14,
    ],
    image: "",
    inStock: 9,
    newArrival: true,
    openBox: false,
    discount: 5,
    discountAvailable: true,
    fastDelivery: false,
    rating: 4.1,
    category: "Fashion",
    newProduct: true,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "TrendSetter",
        comment:
          "Absolutely love the color and style! Compliments my outfits perfectly.",
        rating: 5,
      },
      {
        reviewer: "CasualWearer",
        comment: "Good for everyday use, but not for long walks.",
        rating: 3,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "TrailMaster Hiking Shoes",
    description:
      "Durable and rugged, these hiking shoes are built to withstand tough trails and varied terrain.",
    price: "$120.00",
    color: "granite gray",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 5,
    newArrival: false,
    openBox: false,
    discount: 0,
    discountAvailable: false,
    fastDelivery: true,
    rating: 4.7,
    category: "Hiking",
    newProduct: false,
    mostOrdered: true,
    reviews: [
      {
        reviewer: "HikePro",
        comment: "Excellent grip and ankle support. Handled rocky trails well.",
        rating: 5,
      },
      {
        reviewer: "OutdoorAdventurer",
        comment: "Really tough and waterproof. A bit stiff at first.",
        rating: 4,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "SprintEdge Track Spikes",
    description:
      "Optimized for track and field athletes, these spikes offer unmatched grip and lightweight performance.",
    price: "$110.00",
    color: "neon yellow",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],

    image: "",
    inStock: 8,
    newArrival: true,
    openBox: false,
    discount: 15,
    discountAvailable: true,
    fastDelivery: false,
    rating: 4.8,
    category: "Athletic",
    newProduct: true,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "TrackStar",
        comment:
          "Excellent traction and really lightweight. Felt faster on the track.",
        rating: 5,
      },
      {
        reviewer: "FieldAthlete",
        comment:
          "Great for sprinting, but not as comfortable for longer distances.",
        rating: 4,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "EcoWalk Recycled Sneakers",
    description:
      "Eco-friendly sneakers made from recycled materials, combining style and sustainability.",
    price: "$70.00",
    color: "moss green",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5, 14,
    ],
    image: "",
    inStock: 12,
    newArrival: false,
    openBox: false,
    discount: 10,
    discountAvailable: true,
    fastDelivery: true,
    rating: 4.2,
    category: "Eco-Friendly",
    newProduct: false,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "GreenWarrior",
        comment:
          "Love the sustainable approach. Comfortable and good for everyday wear.",
        rating: 4,
      },
      {
        reviewer: "EcoFashionista",
        comment:
          "Stylish and earth-friendly! Wish there were more color options.",
        rating: 4,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "GalaGlam High Heels",
    description:
      "Elegant high heels perfect for gala events and formal gatherings, offering both style and comfort.",
    price: "$95.00",
    color: "coral pink",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 6,
    newArrival: false,
    openBox: false,
    discount: 0,
    discountAvailable: false,
    fastDelivery: false,
    rating: 4.5,
    category: "Formal",
    newProduct: false,
    mostOrdered: true,
    reviews: [
      {
        reviewer: "EveningStar",
        comment:
          "Gorgeous heels, and surprisingly comfortable for a night out!",
        rating: 5,
      },
      {
        reviewer: "FormalFashion",
        comment: "Stunning design, but need a little break-in time.",
        rating: 4,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "ComfyCraft Slippers",
    description:
      "Ultra-comfortable slippers perfect for lounging at home, with soft cushioning and a cozy fit.",
    price: "$35.00",
    color: "sunrise pink",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5, 14,
    ],
    image: "",
    inStock: 15,
    newArrival: false,
    openBox: false,
    discount: 5,
    discountAvailable: true,
    fastDelivery: false,
    rating: 4.7,
    category: "Home",
    newProduct: false,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "Homebody",
        comment: "So soft and comfortable, perfect for relaxing at home!",
        rating: 5,
      },
      {
        reviewer: "CozyFeet",
        comment:
          "Love the color and the plush feel, but wish they had more sizes.",
        rating: 4,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "DanceRhythm Ballet Flats",
    description:
      "Elegantly designed ballet flats that offer both grace and comfort for dancers and casual wearers alike.",
    price: "$60.00",
    color: "vivid purple",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5,
    ],
    image: "",
    inStock: 10,
    newArrival: true,
    openBox: false,
    discount: 0,
    discountAvailable: false,
    fastDelivery: true,
    rating: 4.3,
    category: "Dance",
    newProduct: true,
    mostOrdered: false,
    reviews: [
      {
        reviewer: "BalletEnthusiast",
        comment: "Beautiful and functional. Perfect for my dance classes.",
        rating: 5,
      },
      {
        reviewer: "CasualDancer",
        comment: "Elegant and comfy, though a bit snug at first.",
        rating: 4,
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "UrbanExplorer Walking Shoes",
    description:
      "Designed for the urban adventurer, these walking shoes provide comfort and durability for city explorations.",
    price: "$85.00",
    color: "graphite gray",
    sizes: [
      2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11,
      11.5, 12, 12.5, 13, 13.5, 14, 15,
    ],

    image: "",
    inStock: 7,
    newArrival: false,
    openBox: false,
    discount: 10,
    discountAvailable: true,
    fastDelivery: true,
    rating: 4.6,
    category: "Walking",
    newProduct: false,
    mostOrdered: true,
    reviews: [
      {
        reviewer: "CityWalker",
        comment: "Great for long city walks. Stylish and comfortable.",
        rating: 5,
      },
      {
        reviewer: "UrbanHiker",
        comment: "Durable and supportive, but took a week to break in.",
        rating: 4,
      },
    ],
  },
];
