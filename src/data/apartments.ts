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
  bookingUrl: string
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
    bookingUrl: '/booking',
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
    bookingUrl: '/booking',
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
    bookingUrl: '/booking',
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
    bookingUrl: '/booking',
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
    bookingUrl: '/booking',
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
    bookingUrl: '/booking',
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
    bookingUrl: '/booking',
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
]
