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

export const PROMPT = "Create an optimal trip itinerary based on the following:\n\n- Location: {destination}\n- Travel Dates: {departureDate} to {arrivalDate}\n- Number of People: {NoOfPersons}\n- Budget: {Budget} (Budget stay, food, and commute)\n\nFormat the response strictly in the following JSON structure:\n\n```\n{\n  \"travel_plan\": {\n    \"location\": \"{destination}\",\n    \"duration\": \"2 days ({departureDate} to {arrivalDate})\",\n    \"group_size\": {NoOfPersons},\n    \"budget\": \"{Budget}\",\n    \"currency\": \"INR\",\n    \"hotels\": [\n      {\n        \"name\": \"\",\n        \"description\": \"\",\n        \"address\": \"\",\n        \"rating\": 0,\n        \"price\": 0,\n        \"location_in_map\": \"\",\n        \"coordinates\": {\n          \"latitude\": 0.0,\n          \"longitude\": 0.0\n        },\n        \"image_url\": \"\"\n      }\n    ],\n    \"itinerary\": {\n      \"{departureDate}\": [\n        {\n          \"name\": \"\",\n          \"details\": \"\",\n          \"pricing\": \"\",\n          \"timings\": \"\",\n          \"place_image_url\": \"\",\n          \"location\": {\n            \"map\": \"\",\n            \"coordinates\": {\n              \"latitude\": 0.0,\n              \"longitude\": 0.0\n            }\n          }\n        }\n      ],\n      \"{arrivalDate}\": [\n        {\n          \"name\": \"\",\n          \"details\": \"\",\n          \"pricing\": \"\",\n          \"timings\": \"\",\n          \"place_image_url\": \"\",\n          \"location\": {\n            \"map\": \"\",\n            \"coordinates\": {\n              \"latitude\": 0.0,\n              \"longitude\": 0.0\n            }\n          }\n        }\n      ]\n    },\n    \"notes\": [\n      \"Include tips, safety or cost-saving tips.\"\n    ],\n    \"estimated_budget\": {\n      \"accommodation\": 0,\n      \"food\": 0,\n      \"transportation\": 0,\n      \"activities\": 0,\n      \"total\": 0\n    }\n  }\n}\n```\n\nImportant:\n- Include budget-friendly hotels with name, location, rating, price, coordinates, and image URL. Give 3 hotel suggestions.\n- For each day’s itinerary:\n  - Include morning breakfast, lunch, and dinner slots.\n  - Mention free or cheap attractions with coordinates, price, timings, and place images.\n  - Include arrival and departure instructions.\n- Keep costs minimal: use public transport, free-entry spots, and suggest hygienic street food.\n- Ensure all items (hotel, activities, food, transport) stay within a {Budget} level budget for {NoOfPersons} people.\n- Do not return markdown or extra commentary—only the final JSON result wrapped in ```json and ```.";
