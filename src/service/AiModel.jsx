import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_APIKEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [],
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text:
            "Create an optimal trip itinerary based on the specified location, duration, budget, and number of persons. Generate Travel Plan for Location: Kolkata for no of days between 2025-03-26 and 2025-03-27 with no of People or group: 3 with Budget: cheap; give me list of hotels with hotel name, description, address, rating, price, location in map, coordinates, image url; also for the same create the itinerary for each day, suggest places, give name, details, pricing, timings, place images urls, location (coordinate or in map); Remember all have to cover in the cheap level budget. Important: give the result in JSON Format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: JSON.stringify({
            travel_plan: {
              location: "Kolkata",
              duration: "2 days (2025-03-26 to 2025-03-27)",
              group_size: 3,
              budget: "cheap",
              currency: "INR",
              hotels: [
                {
                  name: "Hotel Park Street",
                  description: "A budget-friendly hotel in a central location.",
                  address:
                    "17, Park St, Park Street area, Kolkata, West Bengal 700016",
                  rating: 3.5,
                  price: 1500,
                  location_in_map:
                    "https://maps.app.goo.gl/48VbW1r4J2iHh9Fj6",
                  coordinates: {
                    latitude: 22.5465,
                    longitude: 88.3553,
                  },
                  image_url: "https://example.com/hotel_parkstreet.jpg",
                },
                {
                  name: "Hotel Galaxy",
                  description:
                    "Located near Sealdah station, offering affordable accommodation.",
                  address: "18, Beliaghata Main Rd, Kolkata, West Bengal 700010",
                  rating: 3.0,
                  price: 1200,
                  location_in_map:
                    "https://maps.app.goo.gl/8jVwY5a3qHk4Gq2N7",
                  coordinates: {
                    latitude: 22.5665,
                    longitude: 88.3786,
                  },
                  image_url: "https://example.com/hotel_galaxy.jpg",
                },
                {
                  name: "Astoria Hotel",
                  description:
                    "A budget hotel in Esplanade, close to many attractions.",
                  address: "6/2 Sudder Street, Kolkata, West Bengal 700016",
                  rating: 3.2,
                  price: 1300,
                  location_in_map:
                    "https://maps.app.goo.gl/e7d3jM6gQ3J7z9zJ6",
                  coordinates: {
                    latitude: 22.5445,
                    longitude: 88.3502,
                  },
                  image_url: "https://example.com/astoria_hotel.jpg",
                },
              ],
              itinerary: {
                "2025-03-26": [
                  {
                    name:
                      "Arrival at Netaji Subhas Chandra Bose International Airport (CCU)",
                    details:
                      "Arrive at CCU. Take pre-paid taxi or app-based cab (Ola/Uber) to hotel. Cost: INR 400-600. Alternatively, take Airport Bus AC 37 (INR 50 per person) to Esplanade and then a local bus/auto to the hotel. Check into Hotel.",
                    pricing: "INR 400-600 (Taxi) or INR 150 (Bus)",
                    timings: "Variable",
                    place_image_url:
                      "https://example.com/kolkata_airport.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/j8u8t9J8L6R4LqY7A",
                      coordinates: {
                        latitude: 22.6547,
                        longitude: 88.4466,
                      },
                    },
                  },
                  {
                    name: "Breakfast at Terreti Morning Market (Chinatown)",
                    details:
                      "Explore the Terreti Morning Market for authentic Chinese breakfast. Enjoy momos, soups, and more at incredibly low prices.",
                    pricing: "INR 150-200 for 3",
                    timings: "5:00 AM - 8:00 AM",
                    place_image_url: "https://example.com/terreti_market.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/jRzG3w9G62b5Z8u97",
                      coordinates: {
                        latitude: 22.5741,
                        longitude: 88.3541,
                      },
                    },
                  },
                  {
                    name: "Victoria Memorial",
                    details:
                      "Explore the gardens for free, or pay to enter the museum. Admire the architecture and learn about history.",
                    pricing: "INR 30 per person (museum entry)",
                    timings: "10:00 AM - 5:00 PM (Museum)",
                    place_image_url:
                      "https://example.com/victoria_memorial.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/4q2mD5W87R4y5N6H8",
                      coordinates: {
                        latitude: 22.5448,
                        longitude: 88.343,
                      },
                    },
                  },
                  {
                    name: "Lunch",
                    details:
                      "Have lunch at a local restaurant around Park Street or Esplanade. Try a Bengali thali.",
                    pricing: "INR 450-600 for 3",
                    timings: "1:00 PM - 2:00 PM",
                    place_image_url: "https://example.com/bengali_thali.jpg",
                    location: {
                      map: "",
                      coordinates: { latitude: 0.0, longitude: 0.0 },
                    },
                  },
                  {
                    name: "Indian Museum",
                    details:
                      "Explore a vast collection of artifacts, sculptures, and historical exhibits.",
                    pricing: "INR 75 per person",
                    timings: "10:00 AM - 5:00 PM",
                    place_image_url: "https://example.com/indian_museum.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/5i7F6z2rT5Q8f7Qj6",
                      coordinates: {
                        latitude: 22.5478,
                        longitude: 88.3513,
                      },
                    },
                  },
                  {
                    name: "Dinner",
                    details:
                      "Enjoy street food at New Market area. Try phuchka, rolls, and more.",
                    pricing: "INR 300-450 for 3",
                    timings: "7:00 PM - 9:00 PM",
                    place_image_url:
                      "https://example.com/kolkata_street_food.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/t88pL4V77gH2q5qW9",
                      coordinates: {
                        latitude: 22.5472,
                        longitude: 88.3522,
                      },
                    },
                  },
                ],
                "2025-03-27": [
                  {
                    name: "Breakfast at Local Tea Stall",
                    details:
                      "Start your day with a cup of chai and biscuits at a tea stall.",
                    pricing: "INR 50-75 for 3",
                    timings: "8:00 AM - 9:00 AM",
                    place_image_url: "https://example.com/tea_stall.jpg",
                    location: {
                      map: "",
                      coordinates: { latitude: 0.0, longitude: 0.0 },
                    },
                  },
                  {
                    name: "Howrah Bridge",
                    details:
                      "Take a walk along the bridge for stunning views of the Hooghly River.",
                    pricing: "Free",
                    timings: "Open 24 hours",
                    place_image_url: "https://example.com/howrah_bridge.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/4M8hQ9Hw6J2i7W1C8",
                      coordinates: {
                        latitude: 22.5855,
                        longitude: 88.3482,
                      },
                    },
                  },
                  {
                    name: "Lunch",
                    details:
                      "Have lunch at a local dhaba near Howrah or Burrabazar.",
                    pricing: "INR 450-600 for 3",
                    timings: "1:00 PM - 2:00 PM",
                    place_image_url: "https://example.com/dhaba_food.jpg",
                    location: {
                      map: "",
                      coordinates: { latitude: 0.0, longitude: 0.0 },
                    },
                  },
                  {
                    name: "Kumartuli (Potters' Town)",
                    details:
                      "Witness the creation of clay idols. Free to visit, donation optional.",
                    pricing: "Free (Donation optional)",
                    timings: "9:00 AM - 6:00 PM",
                    place_image_url: "https://example.com/kumartuli.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/gR989v8w2i4vT8b57",
                      coordinates: {
                        latitude: 22.5984,
                        longitude: 88.3643,
                      },
                    },
                  },
                  {
                    name:
                      "Departure from Netaji Subhas Chandra Bose International Airport (CCU)",
                    details:
                      "Take a cab or bus to airport. Check-in for your flight.",
                    pricing: "INR 400-600 (Taxi) or INR 150 (Bus)",
                    timings: "Variable",
                    place_image_url:
                      "https://example.com/kolkata_airport.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/j8u8t9J8L6R4LqY7A",
                      coordinates: {
                        latitude: 22.6547,
                        longitude: 88.4466,
                      },
                    },
                  },
                  {
                    name: "Dinner (Airport)",
                    details:
                      "Grab dinner at one of the budget-friendly food options in the airport.",
                    pricing: "INR 450 - 600",
                    timings: "Variable",
                    place_image_url: "https://example.com/airport_food.jpg",
                    location: {
                      map: "https://maps.app.goo.gl/j8u8t9J8L6R4LqY7A",
                      coordinates: {
                        latitude: 22.6547,
                        longitude: 88.4466,
                      },
                    },
                  },
                ],
              },
              notes: [
                "Use local buses and metro for affordable transportation (INR 10-20 per trip).",
                "Bargain while shopping at markets like New Market and Gariahat.",
                "Drink bottled water only to avoid stomach issues.",
                "Be aware of your belongings in crowded areas.",
                "Respect local customs and traditions.",
                "Learn a few basic Bengali phrases for better interaction with locals.",
              ],
              estimated_budget: {
                accommodation: 3000,
                food: 3000,
                transportation: 1500,
                activities: 700,
                total: 8200,
              },
            },
          }),
        },
      ],
    },
  ],
});
