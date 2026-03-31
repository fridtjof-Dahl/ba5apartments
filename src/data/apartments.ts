export type ApartmentType = 'entire' | 'room'

export interface Apartment {
  id: string
  name: string
  type: ApartmentType
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
  reviews?: number
  superhost?: boolean
  coordinates: [number, number]
  neighborhood: {
    vibe: string
    walkScore: number
    highlights: string[]
    nearbySpots: { name: string; type: string; distance: string }[]
  }
}

export const apartments: Apartment[] = [
  // ─── Frogner Shared Apartment — Rooms ───
  {
    id: 'frogner-deluxe',
    name: 'Deluxe Room — Frogner',
    type: 'room',
    reviews: 33,
    location: 'Frogner',
    area: 'Frogner',
    size: '18 sqm',
    guests: '1–2',
    description:
      'A beautifully appointed deluxe room in one of Oslo\'s most prestigious neighborhoods. Features a comfortable double bed, elegant dark wood interiors, and large windows flooding the room with natural light. Shared access to a fully equipped kitchen, modern bathroom, and common areas in a charming period apartment.',
    features: ['Double Bed', 'Shared Kitchen', 'Shared Bathroom', 'WiFi', 'Central Location', 'Period Building'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1120844328872172996',
    coordinates: [59.9212, 10.7055],
    neighborhood: {
      vibe: 'Oslo\'s most prestigious neighborhood — elegance and tranquility',
      walkScore: 95,
      highlights: ['Vigeland Park 5 min', 'Frogner Manor', 'Exclusive shops and bakeries'],
      nearbySpots: [
        { name: 'Vigeland Park', type: 'Park', distance: '5 min' },
        { name: 'Baker Hansen', type: 'Bakery', distance: '2 min' },
        { name: 'Frogner Tram', type: 'Transport', distance: '3 min' },
        { name: 'Palace Grill', type: 'Restaurant', distance: '8 min' },
      ],
    },
  },
  {
    id: 'frogner-deluxe-twin',
    name: 'Deluxe Twin Room — Frogner',
    type: 'room',
    reviews: 44,
    location: 'Frogner',
    area: 'Frogner',
    size: '20 sqm',
    guests: '1–2',
    description:
      'A spacious twin room in a stunning Frogner apartment, perfect for friends or colleagues traveling together. Two comfortable single beds, elegant interiors, and shared access to a fully equipped kitchen and modern bathroom. Located in a classic period building in one of Oslo\'s finest streets.',
    features: ['Twin Beds', 'Shared Kitchen', 'Shared Bathroom', 'WiFi', 'Period Building', 'Quiet Street'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1128471679055477602',
    coordinates: [59.9214, 10.7048],
    neighborhood: {
      vibe: 'Oslo\'s most prestigious neighborhood — elegance and tranquility',
      walkScore: 95,
      highlights: ['Vigeland Park 5 min', 'Frogner Manor', 'Exclusive shops and bakeries'],
      nearbySpots: [
        { name: 'Vigeland Park', type: 'Park', distance: '5 min' },
        { name: 'Baker Hansen', type: 'Bakery', distance: '2 min' },
        { name: 'Frogner Tram', type: 'Transport', distance: '3 min' },
        { name: 'Palace Grill', type: 'Restaurant', distance: '8 min' },
      ],
    },
  },
  {
    id: 'frogner-king',
    name: 'King Room — Frogner',
    type: 'room',
    reviews: 48,
    location: 'Frogner',
    area: 'Frogner',
    size: '22 sqm',
    guests: '1–2',
    description:
      'Our most spacious private room in Frogner, featuring a luxurious king-size bed, dedicated workspace, and private bathroom. Enjoy the elegance of a boutique hotel with the warmth of a real Oslo home. Shared access to a fully equipped kitchen and elegant common areas.',
    features: ['King-Size Bed', 'Private Bathroom', 'Shared Kitchen', 'WiFi', 'Workspace', 'Frogner Location'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1128255688957410984',
    coordinates: [59.9210, 10.7060],
    neighborhood: {
      vibe: 'Oslo\'s most prestigious neighborhood — elegance and tranquility',
      walkScore: 95,
      highlights: ['Vigeland Park 5 min', 'Frogner Manor', 'Exclusive shops and bakeries'],
      nearbySpots: [
        { name: 'Vigeland Park', type: 'Park', distance: '5 min' },
        { name: 'Baker Hansen', type: 'Bakery', distance: '2 min' },
        { name: 'Frogner Tram', type: 'Transport', distance: '3 min' },
        { name: 'Palace Grill', type: 'Restaurant', distance: '8 min' },
      ],
    },
  },
  {
    id: 'frogner-cozy',
    name: 'Cozy Room — Frogner',
    type: 'room',
    reviews: 9,
    location: 'Frogner',
    area: 'Frogner',
    size: '15 sqm',
    guests: '1–2',
    description:
      'A charming and cozy room in our beautiful Frogner apartment, ideal for solo travelers or couples seeking an affordable stay in Oslo\'s best neighborhood. Comfortable double bed, natural light, and shared access to kitchen, bathroom, and living areas.',
    features: ['Double Bed', 'Shared Kitchen', 'Shared Bathroom', 'WiFi', 'Affordable', 'Great Location'],
    image: 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1128482433296477360',
    coordinates: [59.9208, 10.7052],
    neighborhood: {
      vibe: 'Oslo\'s most prestigious neighborhood — elegance and tranquility',
      walkScore: 95,
      highlights: ['Vigeland Park 5 min', 'Frogner Manor', 'Exclusive shops and bakeries'],
      nearbySpots: [
        { name: 'Vigeland Park', type: 'Park', distance: '5 min' },
        { name: 'Baker Hansen', type: 'Bakery', distance: '2 min' },
        { name: 'Frogner Tram', type: 'Transport', distance: '3 min' },
        { name: 'Palace Grill', type: 'Restaurant', distance: '8 min' },
      ],
    },
  },

  // ─── Solli Plass / Central Oslo — Rooms ───
  {
    id: 'solli-deluxe',
    name: 'Deluxe Room — Solli Plass',
    type: 'room',
    location: 'Solli Plass',
    area: 'Solli Plass',
    size: '18 sqm',
    guests: '1–2',
    description:
      'A refined deluxe room in our elegant Solli Plass condominium, in the very heart of Oslo. Comfortable double bed, stylish interiors, and shared access to modern amenities. Steps from Nationaltheatret, the Royal Palace, and the best of Oslo\'s dining and nightlife.',
    features: ['Double Bed', 'Shared Kitchen', 'Shared Bathroom', 'WiFi', 'City Center', 'Near Metro'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1608802267894604295',
    coordinates: [59.9175, 10.7225],
    neighborhood: {
      vibe: 'Elegant and central with tree-lined streets and upscale dining',
      walkScore: 96,
      highlights: ['5 min to Nationaltheatret', 'Aker Brygge within walking distance', 'Surrounded by embassies and parks'],
      nearbySpots: [
        { name: 'Theatercaféen', type: 'Restaurant', distance: '3 min' },
        { name: 'Aker Brygge', type: 'Shopping & Food', distance: '8 min' },
        { name: 'Nationaltheatret Metro', type: 'Transport', distance: '4 min' },
        { name: 'Slottsparken', type: 'Park', distance: '5 min' },
      ],
    },
  },
  {
    id: 'solli-standard',
    name: 'Standard Room — Solli Plass',
    type: 'room',
    reviews: 1,
    location: 'Solli Plass',
    area: 'Solli Plass',
    size: '14 sqm',
    guests: '1–2',
    description:
      'A comfortable standard room in our centrally located Solli Plass property. Perfect for budget-conscious travelers who still want a premium Oslo location. Features a comfortable bed, shared bathrooms, and access to communal kitchen and living spaces.',
    features: ['Comfortable Bed', 'Shared Kitchen', 'Shared Bathrooms', 'WiFi', 'Walkable Area', 'Budget-Friendly'],
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1618930459639956189',
    coordinates: [59.9178, 10.7228],
    neighborhood: {
      vibe: 'Elegant and central with tree-lined streets and upscale dining',
      walkScore: 96,
      highlights: ['5 min to Nationaltheatret', 'Aker Brygge within walking distance', 'Surrounded by embassies and parks'],
      nearbySpots: [
        { name: 'Theatercaféen', type: 'Restaurant', distance: '3 min' },
        { name: 'Aker Brygge', type: 'Shopping & Food', distance: '8 min' },
        { name: 'Nationaltheatret Metro', type: 'Transport', distance: '4 min' },
        { name: 'Slottsparken', type: 'Park', distance: '5 min' },
      ],
    },
  },
  {
    id: 'solli-superior',
    name: 'Superior Room — Solli Plass',
    type: 'room',
    reviews: 1,
    location: 'Solli Plass',
    area: 'Solli Plass',
    size: '20 sqm',
    guests: '1–2',
    description:
      'An upgraded room in our Solli Plass condominium, offering more space and premium furnishings. Comfortable bed, tasteful decor, and a walkable location in the heart of Oslo. Shared access to bathrooms, kitchen, and living areas.',
    features: ['Premium Bed', 'Shared Kitchen', 'Shared Bathrooms', 'WiFi', 'Walkable Area', 'Upgraded Furnishings'],
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1618928837680777693',
    coordinates: [59.9173, 10.7222],
    neighborhood: {
      vibe: 'Elegant and central with tree-lined streets and upscale dining',
      walkScore: 96,
      highlights: ['5 min to Nationaltheatret', 'Aker Brygge within walking distance', 'Surrounded by embassies and parks'],
      nearbySpots: [
        { name: 'Theatercaféen', type: 'Restaurant', distance: '3 min' },
        { name: 'Aker Brygge', type: 'Shopping & Food', distance: '8 min' },
        { name: 'Nationaltheatret Metro', type: 'Transport', distance: '4 min' },
        { name: 'Slottsparken', type: 'Park', distance: '5 min' },
      ],
    },
  },
  {
    id: 'solli-twin',
    name: 'Twin Room — Solli Plass',
    type: 'room',
    location: 'Solli Plass',
    area: 'Solli Plass',
    size: '18 sqm',
    guests: '1–2',
    description:
      'A comfortable twin room in our Solli Plass condominium, ideal for friends or colleagues. Two single beds, clean and modern interiors, and an unbeatable central location. Shared access to kitchen, bathrooms, and common areas.',
    features: ['Twin Beds', 'Shared Kitchen', 'Shared Bathrooms', 'WiFi', 'Central Location', 'Safe & Secure'],
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.no/rooms/1608860070415458572',
    coordinates: [59.9176, 10.7220],
    neighborhood: {
      vibe: 'Elegant and central with tree-lined streets and upscale dining',
      walkScore: 96,
      highlights: ['5 min to Nationaltheatret', 'Aker Brygge within walking distance', 'Surrounded by embassies and parks'],
      nearbySpots: [
        { name: 'Theatercaféen', type: 'Restaurant', distance: '3 min' },
        { name: 'Aker Brygge', type: 'Shopping & Food', distance: '8 min' },
        { name: 'Nationaltheatret Metro', type: 'Transport', distance: '4 min' },
        { name: 'Slottsparken', type: 'Park', distance: '5 min' },
      ],
    },
  },

  // ─── Entire Apartments ───
  {
    id: 'bygdoy-apartment',
    name: 'Two Room Apartment — Bygdøy',
    type: 'entire',
    reviews: 96,
    location: 'Bygdøy',
    area: 'Bygdøy',
    size: '55 sqm',
    guests: '2–4',
    description:
      'Discover tranquility and beauty from this lovely 2-room apartment on idyllic Bygdøy, perfect for up to 4 guests. Located in a private house with its own entrance, enjoy a sense of privacy in one of Oslo\'s most peaceful areas. Features a private patio, sea and garden views, free parking, and a dedicated workspace.',
    features: ['Private Entrance', 'Full Kitchen', 'Free Parking', 'Sea View', 'Garden View', 'Workspace'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/703426062508620510',
    coordinates: [59.9060, 10.6830],
    neighborhood: {
      vibe: 'The museum peninsula — peaceful, green, and culturally rich',
      walkScore: 72,
      highlights: ['Viking Ship Museum 10 min away', 'Beaches and swimming spots', 'Royal atmosphere'],
      nearbySpots: [
        { name: 'Viking Ship Museum', type: 'Museum', distance: '10 min' },
        { name: 'Huk Beach', type: 'Beach', distance: '12 min' },
        { name: 'Fram Museum', type: 'Museum', distance: '8 min' },
        { name: 'Bygdøy Sjøbad', type: 'Restaurant', distance: '7 min' },
      ],
    },
  },
  {
    id: 'frogner-studio',
    name: 'Studio Apartment — Frogner',
    type: 'entire',
    reviews: 164,
    superhost: true,
    location: 'Frogner',
    area: 'Frogner',
    size: '25 sqm',
    guests: '1–2',
    description:
      'A newly renovated studio in the heart of Frogner, one of Oslo\'s most beautiful neighborhoods. Fully equipped for short and long stays with everything you need. Self check-in, walkable area, and steps from grocery stores, bakeries, restaurants, and shops. Our most popular listing with over 160 five-star reviews.',
    features: ['Self Check-in', 'Full Kitchen', 'Sofa Bed', 'Washing Machine', 'Superhost', 'Walkable Area'],
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    bookingComUrl: 'https://www.booking.com/hotel/no/newly-renovated-studio-apartment-at-frogner.html',
    airbnbUrl: 'https://www.airbnb.se/rooms/769496684949345924',
    coordinates: [59.9210, 10.7050],
    neighborhood: {
      vibe: 'Oslo\'s most prestigious neighborhood — elegance and tranquility',
      walkScore: 95,
      highlights: ['Vigeland Park 5 min', 'Frogner Manor', 'Exclusive shops and bakeries'],
      nearbySpots: [
        { name: 'Vigeland Park', type: 'Park', distance: '5 min' },
        { name: 'Baker Hansen', type: 'Bakery', distance: '2 min' },
        { name: 'Frogner Tram', type: 'Transport', distance: '3 min' },
        { name: 'Palace Grill', type: 'Restaurant', distance: '8 min' },
      ],
    },
  },
  {
    id: 'majorstuen-apartment',
    name: 'Stylish Apartment — Majorstuen',
    type: 'entire',
    location: 'Majorstuen',
    area: 'Majorstuen',
    size: '55 sqm',
    guests: '2–4',
    description:
      'A stylish apartment with the perfect location in Oslo\'s trendiest neighborhood. Features two bedrooms, a modern bathroom, and a fully equipped kitchen. The living room sofa bed converts into extra sleeping space, paired with a smart TV for ultimate relaxation. Bogstadveien shopping street is right outside.',
    features: ['2 Bedrooms', 'Smart TV', 'Full Kitchen', 'Washing Machine', 'Central Location', 'Near Shops'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1293443667533494630',
    coordinates: [59.9295, 10.7145],
    neighborhood: {
      vibe: 'Trendy shopping district with excellent public transport',
      walkScore: 97,
      highlights: ['Bogstadveien right outside', 'Majorstuen Metro 2 min', 'Frogner Park within walking distance'],
      nearbySpots: [
        { name: 'Bogstadveien', type: 'Shopping', distance: '1 min' },
        { name: 'Frognerparken', type: 'Park', distance: '6 min' },
        { name: 'Majorstuen Metro', type: 'Transport', distance: '2 min' },
        { name: 'Lorry Restaurant', type: 'Restaurant', distance: '5 min' },
      ],
    },
  },
  {
    id: 'central-renovated',
    name: 'Newly Renovated Apartment — Central Oslo',
    type: 'entire',
    reviews: 27,
    superhost: true,
    location: 'Central Oslo',
    area: 'Solli',
    size: '30 sqm',
    guests: '1–2',
    description:
      'A stylish, newly renovated apartment in central Oslo. Bright and modern with high-quality furnishings, a fully equipped kitchen, and a comfortable bedroom. Self check-in, Superhost managed, and perfectly positioned for exploring everything Oslo has to offer. Ideal for both short holidays and extended business stays.',
    features: ['Self Check-in', 'Full Kitchen', 'Washing Machine', 'Superhost', 'Newly Renovated', 'Modern Design'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
    ],
    bookingUrl: '/booking',
    airbnbUrl: 'https://www.airbnb.se/rooms/1505110456312265614',
    coordinates: [59.9175, 10.7230],
    neighborhood: {
      vibe: 'Urban and sophisticated — cafés, galleries, and city life',
      walkScore: 98,
      highlights: ['City center 5 min away', 'Surrounded by trendy cafés', 'Near the Royal Palace and Aker Brygge'],
      nearbySpots: [
        { name: 'Tim Wendelboe', type: 'Café', distance: '6 min' },
        { name: 'Solli Plass Tram', type: 'Transport', distance: '1 min' },
        { name: 'Astrup Fearnley', type: 'Museum', distance: '10 min' },
        { name: 'Frognerparken', type: 'Park', distance: '10 min' },
      ],
    },
  },
]

export const neighborhoods = [
  { name: 'Solli Plass', description: 'Elegant and central, with tree-lined streets and upscale dining' },
  { name: 'Frogner', description: 'Oslo\'s most prestigious neighborhood, home to Vigeland Park' },
  { name: 'Majorstuen', description: 'Trendy shopping district with excellent transport connections' },
  { name: 'Bygdøy', description: 'The museum peninsula, peaceful beaches and lush greenery' },
  { name: 'Central Oslo', description: 'Urban and sophisticated — the heart of Norway\'s capital' },
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
