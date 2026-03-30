export interface Apartment {
  id: string
  name: string
  location: string
  area: string
  size: string
  guests: string
  description: string
  features: string[]
  image: string
  images: string[]
  bookingUrl: string
  hostawayListingId?: number
  bookingComUrl?: string
  airbnbUrl?: string
  coordinates: [number, number]
  neighborhood: {
    vibe: string
    walkScore: number
    highlights: string[]
    nearbySpots: { name: string; type: string; distance: string }[]
  }
}

export const apartments: Apartment[] = [
  {
    id: 'oslo-vest-hostel',
    name: 'Oslo Vest Hostel',
    location: 'Solli Plass, Vika',
    area: 'Solli Plass',
    size: '155 sqm',
    guests: '1–2',
    description:
      'Located in Oslo\'s most charming neighborhood, this luxurious 155 sqm apartment is a perfect blend of traditional and modern design. Rent a private room with access to shared amenities including a fully equipped kitchen and modern bathroom. Just steps from public transportation and the airport express train.',
    features: ['Shared Kitchen', 'Shared Bathroom', 'WiFi', 'Central Location', 'Airport Express Nearby', 'Safe & Secure'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    coordinates: [59.9175, 10.7225],
    neighborhood: {
      vibe: 'Elegant og sentralt med trelinede gater og eksklusive spisesteder',
      walkScore: 96,
      highlights: ['5 min til Nationaltheatret', 'Aker Brygge i gangavstand', 'Omgitt av ambassader og parkområder'],
      nearbySpots: [
        { name: 'Theatercaféen', type: 'Restaurant', distance: '3 min' },
        { name: 'Aker Brygge', type: 'Shopping & Mat', distance: '8 min' },
        { name: 'Nationaltheatret T-bane', type: 'Transport', distance: '4 min' },
        { name: 'Slottsparken', type: 'Park', distance: '5 min' },
      ],
    },
  },
  {
    id: 'bygdoy-two-room',
    name: 'Two Room Apartment',
    location: 'Bygdøy',
    area: 'Bygdøy',
    size: '35 sqm',
    guests: '2–4',
    description:
      'Discover tranquility and beauty from this lovely 2-room apartment, perfect for 2 guests with optional annex for up to 4. Located in a private house with its own entrance, enjoy a sense of privacy in one of Oslo\'s most peaceful areas. Features a private patio and rooftop terrace with panoramic views.',
    features: ['Private Entrance', 'Full Kitchen', 'Washer & Dryer', 'Patio', 'Rooftop Terrace', 'Panoramic Views'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    coordinates: [59.9060, 10.6830],
    neighborhood: {
      vibe: 'Museumshalvøya — fredelig, grønn og kulturrik',
      walkScore: 72,
      highlights: ['Vikingskipshuset 10 min unna', 'Strand og badeplasser', 'Kongelig atmosfære'],
      nearbySpots: [
        { name: 'Vikingskipshuset', type: 'Museum', distance: '10 min' },
        { name: 'Huk Strand', type: 'Strand', distance: '12 min' },
        { name: 'Fram Museum', type: 'Museum', distance: '8 min' },
        { name: 'Bygdøy Sjøbad', type: 'Restaurant', distance: '7 min' },
      ],
    },
  },
  {
    id: 'majorstuen-stylish',
    name: 'Stylish Apartment',
    location: 'Majorstuen',
    area: 'Majorstuen',
    size: '50+ sqm',
    guests: '2–4',
    description:
      'Newly renovated in one of Oslo\'s most sought-after areas. Features a large bedroom with comfortable double bed, modern bathroom with washing machine, and a fully equipped kitchen. The living room sofa bed converts into two extra sleeping spaces, paired with a smart TV for ultimate relaxation.',
    features: ['Double Bed', 'Smart TV', 'Sofa Bed', 'Full Kitchen', 'Washing Machine', 'Central Location'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    coordinates: [59.9295, 10.7145],
    neighborhood: {
      vibe: 'Trendy shoppingstrøk med utmerket kollektivtilbud',
      walkScore: 97,
      highlights: ['Bogstadveien rett utenfor', 'Majorstuen T-bane 2 min', 'Frognerparken i gangavstand'],
      nearbySpots: [
        { name: 'Bogstadveien', type: 'Shopping', distance: '1 min' },
        { name: 'Frognerparken', type: 'Park', distance: '6 min' },
        { name: 'Majorstuen T-bane', type: 'Transport', distance: '2 min' },
        { name: 'Lorry Restaurant', type: 'Restaurant', distance: '5 min' },
      ],
    },
  },
  {
    id: 'solli-studio',
    name: 'Studio Apartment',
    location: 'Solli',
    area: 'Solli',
    size: '30 sqm',
    guests: '1–2',
    description:
      'Perfect for experiencing everything Oslo has to offer. Features a bright and open living area with a cozy loft bed and a practical sofa bed alternative. The modern kitchen is fully equipped, and you\'ll appreciate having your own washing machine. Located steps from trendy cafes, restaurants, and cultural attractions.',
    features: ['Loft Bed', 'Sofa Bed', 'Full Kitchen', 'Washing Machine', 'Private Bathroom', 'Trendy Neighborhood'],
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    coordinates: [59.9175, 10.7230],
    neighborhood: {
      vibe: 'Urbant og sofistikert — kafeer, gallerier og byliv',
      walkScore: 98,
      highlights: ['Sentrum 5 min unna', 'Omgitt av trendye kafeer', 'Nær Slottet og Aker Brygge'],
      nearbySpots: [
        { name: 'Tim Wendelboe', type: 'Kafé', distance: '6 min' },
        { name: 'Solli Plass trikk', type: 'Transport', distance: '1 min' },
        { name: 'Astrup Fearnley', type: 'Museum', distance: '10 min' },
        { name: 'Frognerparken', type: 'Park', distance: '10 min' },
      ],
    },
  },
  {
    id: 'kiellands-two-room',
    name: 'Two Room Apartment',
    location: 'Kiellands Plass',
    area: 'Kiellands Plass',
    size: '35 sqm',
    guests: '1–3',
    description:
      'A charming and modern apartment in vibrant Kiellands, perfectly blending comfort, convenience, and style. Features a separate bedroom with king-size bed, fully equipped kitchen, dining area, and a comfortable living room with TV. Located in a family-friendly neighborhood on the second floor.',
    features: ['King-Size Bed', 'Separate Bedroom', 'Full Kitchen', 'Dining Area', 'TV', 'Family-Friendly Area'],
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    coordinates: [59.9265, 10.7505],
    neighborhood: {
      vibe: 'Levende og familievennlig med kreativ atmosfære',
      walkScore: 94,
      highlights: ['Grünerløkka 5 min unna', 'Mathallen i gangavstand', 'Mange parker i nabolaget'],
      nearbySpots: [
        { name: 'Mathallen', type: 'Mat & Marked', distance: '7 min' },
        { name: 'Grünerløkka', type: 'Nabolag', distance: '5 min' },
        { name: 'Birkelunden', type: 'Park', distance: '6 min' },
        { name: 'Schous Plass trikk', type: 'Transport', distance: '4 min' },
      ],
    },
  },
  {
    id: 'frogner-studio',
    name: 'Studio Apartment',
    location: 'Frogner',
    area: 'Frogner',
    size: '20 sqm',
    guests: '1–2',
    description:
      'Newly renovated studio on the 4th floor overlooking an internal garden, in Oslo\'s most beautiful neighborhood. Fully equipped for short and long stays with everything you need. Steps from grocery stores, bakeries, restaurants, and shops. Easy public transport access to all of Oslo\'s attractions.',
    features: ['Garden View', '4th Floor', 'Fully Equipped', 'Frogner Location', 'Shops Nearby', 'Public Transport'],
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    bookingComUrl: 'https://www.booking.com/hotel/no/newly-renovated-studio-apartment-at-frogner.html',
    coordinates: [59.9210, 10.7050],
    neighborhood: {
      vibe: 'Oslos mest prestisjetunge nabolag — eleganse og ro',
      walkScore: 95,
      highlights: ['Vigelandsparken 5 min', 'Frogner Hovedgård', 'Eksklusive butikker og bakerier'],
      nearbySpots: [
        { name: 'Vigelandsparken', type: 'Park', distance: '5 min' },
        { name: 'Baker Hansen', type: 'Bakeri', distance: '2 min' },
        { name: 'Frogner trikk', type: 'Transport', distance: '3 min' },
        { name: 'Palace Grill', type: 'Restaurant', distance: '8 min' },
      ],
    },
  },
  {
    id: 'bislett-two-room',
    name: 'Two Room Apartment',
    location: 'Bislett',
    area: 'Bislett',
    size: '52 sqm',
    guests: '1–3',
    description:
      'A cozy apartment on central Bislett with a separate bedroom featuring walk-in closet, and a spacious living room with kitchen area. The bathroom comes equipped with shower, washing machine, and dryer. Enjoy your own fully furnished private terrace. Surrounded by parks, shops, and excellent public transport.',
    features: ['Walk-in Closet', 'Private Terrace', 'Washer & Dryer', 'Full Kitchen', 'Separate Bedroom', 'Near Parks'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    coordinates: [59.9270, 10.7370],
    neighborhood: {
      vibe: 'Sentralt og livlig — omgitt av parker og lokale perler',
      walkScore: 96,
      highlights: ['St. Hanshaugen park', 'Bislett stadion like ved', 'Hippt uteliv og matscene'],
      nearbySpots: [
        { name: 'St. Hanshaugen', type: 'Park', distance: '4 min' },
        { name: 'Bislett Kebab', type: 'Restaurant', distance: '2 min' },
        { name: 'Adamstuen trikk', type: 'Transport', distance: '3 min' },
        { name: 'Schrøder', type: 'Bar & Restaurant', distance: '5 min' },
      ],
    },
  },
]

export const neighborhoods = [
  { name: 'Solli Plass', description: 'Elegant and central, with tree-lined streets and upscale dining' },
  { name: 'Frogner', description: 'Oslo\'s most prestigious neighborhood, home to Vigeland Park' },
  { name: 'Kiellands Plass', description: 'Vibrant and family-friendly, with a creative atmosphere' },
  { name: 'Majorstuen', description: 'Trendy shopping district with excellent transport connections' },
  { name: 'Bygdøy', description: 'The museum peninsula, peaceful beaches and lush greenery' },
  { name: 'Vika', description: 'Oslo\'s waterfront business district, steps from Aker Brygge' },
  { name: 'Bislett', description: 'Central and lively, surrounded by parks and local gems' },
]

export const activities = [
  {
    id: 'opera-house',
    name: 'Oslo Opera House',
    description: 'An architectural marvel along the waterfront. Walk on its iconic sloping roof for panoramic views of the Oslofjord, or attend a world-class performance inside.',
    image: 'https://images.unsplash.com/photo-1533627750546-0e60f80218c1?w=800&q=80',
    category: 'Culture',
  },
  {
    id: 'vigeland-park',
    name: 'Vigeland Park',
    description: 'A mesmerizing oasis featuring over 200 sculptures by Gustav Vigeland, exploring themes of love, life, and the human condition amidst beautiful gardens.',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
    category: 'Nature',
  },
  {
    id: 'bygdoy-museums',
    name: 'Bygdøy Museums',
    description: 'The Museum Peninsula houses world-renowned collections including Viking ships, polar exploration vessels, and Norway\'s rich maritime heritage.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    category: 'History',
  },
  {
    id: 'aker-brygge',
    name: 'Aker Brygge',
    description: 'Oslo\'s vibrant waterfront promenade with world-class restaurants, boutique shopping, and stunning harbor views. Perfect for an evening stroll.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    category: 'Dining',
  },
  {
    id: 'munch-museum',
    name: 'Munch Museum',
    description: 'Home to the world\'s largest collection of Edvard Munch\'s artwork, including The Scream. A striking 13-story building on Oslo\'s waterfront.',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80',
    category: 'Art',
  },
  {
    id: 'oslo-fjord',
    name: 'Oslo Fjord',
    description: 'Explore the stunning fjord by boat, kayak, or paddleboard. Island-hop to car-free islands for swimming, hiking, and picnics in summer.',
    image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=800&q=80',
    category: 'Adventure',
  },
]

export const testimonials = [
  {
    text: 'The accommodation was very cozy and clean. We felt very comfortable. The location is unbeatable in the middle of a cozy residential area, easily accessible and close to the water. You can get to the city quickly by car. Agneta and Kim were proactive with communication and were always very pleasant. We would love to come back here next time we are in Oslo.',
    author: 'Julie',
    source: 'Airbnb',
    rating: 5,
  },
  {
    text: 'Beautifully furnished apartment in a fantastic location. Everything was spotless and well-organized. The hosts thought of every detail — from fresh towels to local restaurant recommendations. Will definitely be coming back!',
    author: 'Marcus',
    source: 'Airbnb',
    rating: 5,
  },
  {
    text: 'Perfect for our business trip. The apartment had everything we needed, and the central location meant we could walk to all our meetings. The flexible check-in was a huge plus. Highly recommend for corporate travelers.',
    author: 'Sofia',
    source: 'Booking.com',
    rating: 5,
  },
  {
    text: 'Fantastisk leilighet med alt man trenger. Veldig rent og moderne. Beliggenhet er perfekt — nærme alt, men likevel rolig. Vertskapet var utrolig hjelpsomme og responderte raskt på alle spørsmål. Anbefales på det sterkeste!',
    author: 'Erik',
    source: 'Airbnb',
    rating: 5,
  },
  {
    text: 'Stayed here for two weeks on a work assignment. The apartment felt like a real home — fully equipped kitchen, fast WiFi, and a comfortable workspace. Check-in was seamless. Would absolutely book again.',
    author: 'Sarah',
    source: 'Booking.com',
    rating: 5,
  },
  {
    text: 'What a gem! The apartment was even better than the photos. Stylish interior, super clean, and the neighborhood was lovely. We loved exploring the local cafés and parks nearby. Perfect for a couple.',
    author: 'Thomas',
    source: 'Airbnb',
    rating: 5,
  },
  {
    text: 'Vi bodde her i en uke og det var helt perfekt. Leiligheten har alt du trenger, og mer til. Beliggenhet i Frogner er fantastisk — rolig gate men med butikker og restauranter rett rundt hjørnet.',
    author: 'Ingrid',
    source: 'Booking.com',
    rating: 5,
  },
  {
    text: 'Outstanding! Clean, modern, and thoughtfully designed. The self check-in made our late arrival stress-free. The bed was incredibly comfortable and the shower had great water pressure. Little details that matter.',
    author: 'David',
    source: 'Airbnb',
    rating: 5,
  },
  {
    text: 'Used this apartment for a business trip with my colleague. Two separate sleeping areas, fast internet, and a great location near public transport. Very professional hosts. We will use BA5 for all our Oslo trips going forward.',
    author: 'Maria',
    source: 'Booking.com',
    rating: 5,
  },
  {
    text: 'Herlig opphold! Leiligheten var akkurat som beskrevet — ren, moderne og med en fantastisk utsikt. Vertene var raske til å svare og ga oss gode restauranttips. Vi kommer tilbake!',
    author: 'Anders',
    source: 'Airbnb',
    rating: 5,
  },
  {
    text: 'Spotless apartment with everything you need. The kitchen was well stocked, towels and linens were fresh, and the location could not be better. Easy walk to the city center. Five stars all around.',
    author: 'Emma',
    source: 'Booking.com',
    rating: 5,
  },
  {
    text: 'My third stay with BA5 and they never disappoint. Consistent quality across all their apartments. This time we stayed at Majorstuen — loved the neighborhood. Already booking our next trip!',
    author: 'Henrik',
    source: 'Airbnb',
    rating: 5,
  },
]
