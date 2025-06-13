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
          text: `Create a cheap-budget trip itinerary for 3 people visiting Kolkata from 2025-03-26 to 2025-03-27. Return the result strictly in the JSON structure below:

{
  "travel_plan": {
    "location": "Kolkata",
    "duration": "2 days (2025-03-26 to 2025-03-27)",
    "group_size": 3,
    "budget": "cheap",
    "currency": "INR",
    "hotels": [
      {
        "name": "",
        "description": "",
        "address": "",
        "rating": 0,
        "price": 0,
        "location_in_map": ""
      }
    ],
    "itinerary": {
      "2025-03-26": [
        {
          "name": "",
          "details": "",
          "pricing": "",
          "timings": "",
          "location": {
            "map": ""
          }
        }
      ],
      "2025-03-27": [
        {
          "name": "",
          "details": "",
          "pricing": "",
          "timings": "",
          "location": {
            "map": ""
          }
        }
      ]
    },
    "notes": [
      "Include tips, safety or cost-saving tips."
    ],
    "estimated_budget": {
      "accommodation": 0,
      "food": 0,
      "transportation": 0,
      "activities": 0,
      "total": 0
    }
  }
}

Important:
- Give 3 budget hotel suggestions with location, rating, and price.
- Each day's itinerary must include arrival/departure, breakfast, lunch, dinner, and at least 2-3 free/cheap attractions.
- Use cheap transport, affordable food, and low-cost activities.
- Return only the final JSON result wrapped in \`\`\`json and \`\`\`.`,
        },
      ],
    },
  ],
});

const result = await chatSession.sendMessage("INSERT_INPUT_HERE");

// Output handler (optional cleanup or console logging)
const candidates = result.response.candidates;
for (let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
  for (
    let part_index = 0;
    part_index < candidates[candidate_index].content.parts.length;
    part_index++
  ) {
    const part = candidates[candidate_index].content.parts[part_index];
    if (part.text) {
      console.log("AI Output:\n", part.text);
    }
  }
}
