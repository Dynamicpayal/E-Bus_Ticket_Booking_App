import React, { useState } from "react";

// Debounce helper
const useDebounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const BookingDetails = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const API_KEY = "YOUR_RAPIDAPI_KEY";

  const fetchSuggestions = async (query, setter) => {
    if (!query.trim()) return setter([]);

    try {
      const res = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&offset=0&namePrefix=${query}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );

      const data = await res.json();

      // Filter only Indian cities because free API does NOT support countryIds
      const indianCities = data?.data?.filter((c) => c.country === "IN");

      setter(
        indianCities.map((city) => ({
          id: city.id,
          name: city.city,
          state: city.region,
          country: city.country,
        }))
      );
    } catch (err) {
      console.error("Error fetching:", err);
    }
  };

  const debouncedFetchFrom = useDebounce(
    (v) => fetchSuggestions(v, setFromSuggestions),
    350
  );
  const debouncedFetchTo = useDebounce(
    (v) => fetchSuggestions(v, setToSuggestions),
    350
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Book Bus Tickets
        </h2>

        {/* FROM */}
        <div className="relative mb-5">
          <label className="text-gray-600 font-semibold">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              debouncedFetchFrom(e.target.value);
            }}
            placeholder="Enter Source City"
            className="w-full border p-3 rounded-lg mt-1"
          />

          {fromSuggestions.length > 0 && (
            <div className="absolute bg-white w-full shadow-lg rounded-lg mt-1 max-h-56 overflow-y-auto z-20 border">
              {fromSuggestions.map((place) => (
                <div
                  key={place.id}
                  onClick={() => {
                    setFrom(`${place.name}, ${place.state}`);
                    setFromSuggestions([]);
                  }}
                  className="p-3 border-b hover:bg-gray-100 cursor-pointer flex gap-3"
                >
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold">{place.name}</p>
                    <p className="text-sm text-gray-600">{place.state}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TO */}
        <div className="relative mb-5">
          <label className="text-gray-600 font-semibold">To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              debouncedFetchTo(e.target.value);
            }}
            placeholder="Enter Destination City"
            className="w-full border p-3 rounded-lg mt-1"
          />

          {toSuggestions.length > 0 && (
            <div className="absolute bg-white w-full shadow-lg rounded-lg mt-1 max-h-56 overflow-y-auto z-20 border">
              {toSuggestions.map((place) => (
                <div
                  key={place.id}
                  onClick={() => {
                    setTo(`${place.name}, ${place.state}`);
                    setToSuggestions([]);
                  }}
                  className="p-3 border-b hover:bg-gray-100 cursor-pointer flex gap-3"
                >
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold">{place.name}</p>
                    <p className="text-sm text-gray-600">{place.state}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DATE */}
        <label className="text-gray-600 font-semibold">Departure Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-3 rounded-lg mt-1 mb-5"
        />

        <button className="w-full bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-800 transition">
          SEARCH BUSES
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
