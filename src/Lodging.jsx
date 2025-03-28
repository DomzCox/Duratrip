import {places} from "./dbase/places"; // Keeping your original import
import { MapPin, Clock, Hotel, DollarSign } from "lucide-react";

export default function Lodging() {
  return (
    <div className="mb-10 px-4">
    {/* Title */}
    <div className="flex items-center justify-center gap-2 text-gray-700 mt-10 mb-6">
      <Hotel size={28} className="text-blue-500" />
      <h2 className="text-2xl font-bold">Suggested Places to Stay</h2>
    </div>

    {/* Grid Layout for Places */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {places.map((place, key) => (
        <div
          key={key}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
        >
          {/* Hotel Name */}
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
            <Hotel size={20} className="text-teal-500" />
            {place.name}
          </h3>

          {/* Arrival Time */}
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <Clock size={18} className="text-blue-500" />
            <span className="font-semibold">Arrival:</span> {place.arrival} <sub>pm</sub>
          </div>

          {/* Distance */}
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            {/* <Road size={18} className="text-green-500" /> */}
            <span className="font-semibold">Distance:</span> {place.distance}
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-gray-600 text-sm mb-3">
            <MapPin size={18} className="text-red-500" />
            <span>
              {place.address}, {place.city}, {place.state} {place.zip}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 text-teal-600 font-semibold text-lg">
            <DollarSign size={22} className="text-yellow-500" />
            ${place.price}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
