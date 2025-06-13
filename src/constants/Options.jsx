export const SelectBudgetOptions = [
    {
        id: 1,
        icon: "🪙",
        title: "Matir Poth",
        desc: "A simple yet soulful journey",
        name: "cheap"
    },
    {
        id: 2,
        icon: "👛",
        title: "Shohorer Goli",
        desc: "A balanced exploration",
        name: "moderate"
    },
    {
        id: 3,
        icon: "💰",
        title: "Rajpath",
        desc: "Where elegance and exclusivity define the experience.",
        name: "luxury"
    },
]

export const SelectNoOfPersons = [
    {
        id: 1,
        icon: "🚶🏻‍♀️‍➡️",
        title: "Ekla Cholo",
        desc: "Lone wanderer's tale",
        no: "1 Person"
    },
    {
        id: 2,
        icon: "👫🏻",
        title: "Ami Tumi",
        desc: "Two souls one journey",
        no: "2 People"
    },
    {
        id: 3,
        icon: "👨🏻‍👩🏻‍👧🏻‍👦🏻",
        title: "Poribaar",
        desc: "A journey bound by family",
        no: "3 to 5 People"
    },
    {
        id: 4,
        icon: "🫱🏻‍🫲🏼",
        title: "Bondhu Chol",
        desc: "A lively expedition with your friends",
        no: "5 to 10 People"
    },
]

export const PROMPT = "Create a {Budget} budget trip itinerary for Location: {destination} for {NoOfPersons} people from {departureDate} to {arrivalDate}. Return result strictly in JSON format with the following structure:\n\n{\n  \"travel_plan\": {\n    \"location\": \"{destination}\",\n    \"duration\": \"2 days ({departureDate} to {arrivalDate})\",\n    \"group_size\": {NoOfPersons},\n    \"budget\": \"{Budget}\",\n    \"currency\": \"INR\",\n    \"hotels\": [\n      {\n        \"name\": \"\",\n        \"description\": \"\",\n        \"address\": \"\",\n        \"rating\": 0,\n        \"price\": 0,\n        \"location_in_map\": \"\"\n      }\n    ],\n    \"itinerary\": {\n      \"{departureDate}\": [\n        {\n          \"name\": \"\",\n          \"details\": \"\",\n          \"pricing\": \"\",\n          \"timings\": \"\",\n          \"location\": {\n            \"map\": \"\"\n          }\n        }\n      ],\n      \"{arrivalDate}\": [\n        {\n          \"name\": \"\",\n          \"details\": \"\",\n          \"pricing\": \"\",\n          \"timings\": \"\",\n          \"location\": {\n            \"map\": \"\"\n          }\n        }\n      ]\n    },\n    \"notes\": [\n      \"Include tips, safety or cost-saving suggestions.\"\n    ],\n    \"estimated_budget\": {\n      \"accommodation\": 0,\n      \"food\": 0,\n      \"transportation\": 0,\n      \"activities\": 0,\n      \"total\": 0\n    }\n  }\n}\n\nImportant:\n- Suggest 3 budget hotels.\n- Include daily breakfast, lunch, dinner, arrival/departure, and 2-3 cheap/free attractions per day.\n- Minimize costs using public transport and affordable food.\n- Return only the final JSON wrapped in ```json and ```.";
