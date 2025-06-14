import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "@/service/firebaseConfig";
import toast from "react-hot-toast";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

const MyTrips = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (!user?.email) {
          setTrips([]);
          setLoading(false);
          return;
        }

        const tripsQuery = query(
          collection(db, "AItrips"),
          where("userEmail", "==", user.email)
        );
        const snapshot = await getDocs(tripsQuery);
        const tripsData = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
          createdAt: d.data().createdAt || d.data().timestamp || Date.now(),
        }));

        const sortedTrips = tripsData.sort((a, b) => {
          if (a.id && b.id) return b.id.localeCompare(a.id);
          if (a.createdAt && b.createdAt) return b.createdAt - a.createdAt;
          const dateA = new Date(a.userSelection?.departureDate);
          const dateB = new Date(b.userSelection?.departureDate);
          if (!isNaN(dateA) && !isNaN(dateB)) return dateB - dateA;
          return 0;
        });

        setTrips(sortedTrips);
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  const handleDelete = async (tripId) => {
    if (!window.confirm("Are you sure you want to delete this trip?")) return;
    try {
      await deleteDoc(doc(db, "AItrips", tripId));
      setTrips((prev) => prev.filter((t) => t.id !== tripId));
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
    toast.success("Trip Deleted!")
  };

  const calculateDays = (start, end) => {
    const d1 = new Date(start);
    const d2 = new Date(end);
    return Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
  };

  if (loading)
    return (
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white/70 animate-pulse rounded-lg p-4 h-[180px]"
          ></div>
        ))}
      </div>
    );

  return (
    <div
      className="min-h-screen pt-20 bg-[url('/backgrounds/my-trip-bg.png')] bg-cover bg-center p-6 flex flex-col items-center"
      style={{ fontFamily: "Cinzel" }}
    >
      <h1 className="text-3xl font-bold mb-6 text-black">My Trips</h1>

      {trips.length === 0 ? (
        <div className="text-center mt-10 bg-white/80 p-6 rounded-lg shadow-md max-w-md">
          <h2 className="text-xl font-semibold mb-2">No Trips Found</h2>
          <p className="mb-4">Create a new trip to start your journey!</p>
          <button
            onClick={() => navigate("/create_trips")}
            className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
          >
            Create New Trip
          </button>
        </div>
      ) : (
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {trips.map((trip) => {
            const {
              departureDate,
              arrivalDate,
              Budget,
              NoOfPersons,
              destination,
            } = trip.userSelection;
            const days = calculateDays(departureDate, arrivalDate);
            return (
              <div
                key={trip.id}
                className="relative group bg-white/80 hover:bg-white rounded-lg shadow-lg p-4 cursor-pointer transition"
                style={{ fontFamily: "Cinzel" }}
                onClick={() => navigate(`/viewTrip/${trip.id}`)}
              >
                {/* Delete icon */}
                <div className="absolute top-2 right-2 z-20 transition-all">
                  <button
                    className="text-lg p-1 focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(trip.id);
                    }}
                    style={{ fontFamily: "Cinzel" }}
                  >
                    🗑️
                  </button>
                </div>

                {/* Trip details */}
                <h2 className="text-xl font-semibold mb-2 text-black">
                  {destination}
                </h2>
                <p className="text-gray-700">
                  {days} {days === 1 ? "Day" : "Days"} trip with{" "}
                  <span className="font-medium">{Budget}</span> budget for{" "}
                  <span className="font-medium"></span>
                  {NoOfPersons === "1 Person"
                    ? "Solo Trip"
                    : NoOfPersons === "2 People"
                    ? "Couple's Trip"
                    : NoOfPersons === "3 to 5 People"
                    ? "Family Trip"
                    : NoOfPersons === "5 to 10 People"
                    ? "Friends Trip"
                    : "Group Trip"}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800"
      >
        Go Back
      </button>
    </div>
  );
};

export default MyTrips;
