# 🌍 PotherPanchali.AI

**PotherPanchali.AI** is an AI-driven, culturally inspired, end-to-end personalized travel planner. Inspired by Satyajit Ray's iconic film _Pather Panchali_, it offers a soulful, intuitive, and emotionally engaging way to plan trips—especially for those who seek cultural immersion and nostalgia.

🔗 **Live Demo**: [https://pother-panchali.vercel.app](https://pother-panchali.vercel.app)

---

## 🎯 Project Goals

- Democratize and personalize travel planning.
- Provide intelligent, culturally-aware, emotionally engaging travel suggestions.
- Optimize travel routes and recommend flights, hotels, and activities.
- Enable real-time planning with AI chatbots and weather integration.

---

## 💡 Features

- ✈️ Flight & Hotel Recommendations (via Amadeus & Google Places APIs)
- 📅 AI-Generated Itineraries (via Gemini API)
- 💬 Conversational Chatbot – **Durga** for travel tips, visa queries, cultural insights
- 🧠 Route Optimization using the Travelling Salesman Problem (TSP)
- 🌦️ Weather Forecast Integration using WeatherAPI
- 🔐 Google Auth Integration with Firebase
- 💾 Trip Dashboard to view, edit, and reuse past plans
- 🧩 Fully Customizable Itinerary (add/delete/rearrange events)
- 📱 Responsive Design (React + Tailwind CSS)

---

## 🤖 Chatbot: Durga

- Culturally aware, travel-focused AI companion
- Responds only to travel-related queries
- Rejects non-relevant queries gently
- Built with Gemini LLM using custom prompt instructions

---

## 🚀 Use Case Flow

1. User logs in via Google
2. Fills trip form with location, date, budget, type
3. Gets:
   - AI itinerary (Gemini)
   - Flight + hotel suggestions
   - Route optimization (TSP)
   - Weather forecast
4. Customizes, saves, and chats with Durga
5. Accesses trips via the **My Trips** dashboard

---

## 📦 Local Development Setup

```bash
git clone https://github.com/your-username/PotherPanchali.git
cd PotherPanchali
npm install
npm run dev
```

> ⚠️ Add environment variables for:
>
> - Gemini API
> - Firebase Config
> - Amadeus API
> - WeatherAPI
> - Google OAuth

---

## 👥 Team

| Name               | Role                   |
| ------------------ | ---------------------- |
| Srija Chakraborty  | Project Lead & Backend |
| Rupkatha Ray       | Frontend Developer     |
| Aparajita Goswami  | Full Stack Developer   |
| Sristi Chakraborty | Frontend Developer     |
| Ananya Roy         | UI/UX & Testing        |

## ❤️ Inspired by

- _Pather Panchali_ (1955) by Satyajit Ray — for its emotional depth, cultural richness, and timeless narrative that this project humbly seeks to echo in the realm of digital travel.
