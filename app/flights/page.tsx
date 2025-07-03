"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plane, Clock, Wifi, Coffee, Tv } from "lucide-react"
import Link from "next/link"

const flights = [
  {
    id: 1,
    airline: "SkyWings Airlines",
    flightNumber: "SW 1234",
    departure: { time: "08:30", airport: "JFK", city: "New York" },
    arrival: { time: "11:45", airport: "LAX", city: "Los Angeles" },
    duration: "5h 15m",
    stops: "Non-stop",
    price: 299,
    class: "Economy",
    amenities: ["wifi", "entertainment", "meals"],
  },
  {
    id: 2,
    airline: "AeroConnect",
    flightNumber: "AC 5678",
    departure: { time: "14:20", airport: "JFK", city: "New York" },
    arrival: { time: "17:55", airport: "LAX", city: "Los Angeles" },
    duration: "5h 35m",
    stops: "Non-stop",
    price: 349,
    class: "Economy",
    amenities: ["wifi", "entertainment"],
  },
  {
    id: 3,
    airline: "CloudJet",
    flightNumber: "CJ 9012",
    departure: { time: "19:10", airport: "JFK", city: "New York" },
    arrival: { time: "22:30", airport: "LAX", city: "Los Angeles" },
    duration: "5h 20m",
    stops: "Non-stop",
    price: 279,
    class: "Economy",
    amenities: ["wifi"],
  },
  {
    id: 4,
    airline: "Premium Airways",
    flightNumber: "PA 3456",
    departure: { time: "10:15", airport: "JFK", city: "New York" },
    arrival: { time: "13:40", airport: "LAX", city: "Los Angeles" },
    duration: "5h 25m",
    stops: "Non-stop",
    price: 599,
    class: "Business",
    amenities: ["wifi", "entertainment", "meals", "lounge"],
  },
]

export default function FlightsPage() {
  const [sortBy, setSortBy] = useState("price")

  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price
    if (sortBy === "duration") return a.duration.localeCompare(b.duration)
    if (sortBy === "departure") return a.departure.time.localeCompare(b.departure.time)
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">TravelEase</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-blue-600">
                Home
              </Link>
              <Link href="/bookings" className="text-gray-500 hover:text-blue-600">
                My Bookings
              </Link>
              <Link href="/profile" className="text-gray-500 hover:text-blue-600">
                Profile
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">New York (JFK)</span> →{" "}
                  <span className="font-semibold">Los Angeles (LAX)</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="text-sm text-gray-600">Dec 15, 2024 • 1 Passenger • Economy</div>
              </div>
              <Button variant="outline" size="sm">
                Modify Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Sort by</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price">Price (Low to High)</SelectItem>
                      <SelectItem value="duration">Duration</SelectItem>
                      <SelectItem value="departure">Departure Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div>
                  <label className="text-sm font-medium mb-2 block">Airlines</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">SkyWings Airlines</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">AeroConnect</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">CloudJet</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Flight Results */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Available Flights</h2>
              <p className="text-gray-600">{flights.length} flights found</p>
            </div>

            {sortedFlights.map((flight) => (
              <Card key={flight.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-lg">{flight.airline}</span>
                        <Badge variant="outline">{flight.flightNumber}</Badge>
                        {flight.class === "Business" && <Badge>Business</Badge>}
                      </div>

                      <div className="flex items-center gap-6 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{flight.departure.time}</div>
                          <div className="text-sm text-gray-600">{flight.departure.airport}</div>
                          <div className="text-xs text-gray-500">{flight.departure.city}</div>
                        </div>

                        <div className="flex-1 flex items-center gap-2">
                          <div className="flex-1 border-t border-gray-300 relative">
                            <Plane className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 h-4 w-4 text-blue-600 bg-white" />
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold">{flight.arrival.time}</div>
                          <div className="text-sm text-gray-600">{flight.arrival.airport}</div>
                          <div className="text-xs text-gray-500">{flight.arrival.city}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {flight.duration}
                        </div>
                        <div>{flight.stops}</div>
                        <div className="flex items-center gap-2">
                          {flight.amenities.includes("wifi") && <Wifi className="h-4 w-4" />}
                          {flight.amenities.includes("entertainment") && <Tv className="h-4 w-4" />}
                          {flight.amenities.includes("meals") && <Coffee className="h-4 w-4" />}
                        </div>
                      </div>
                    </div>

                    <div className="text-center lg:text-right">
                      <div className="text-3xl font-bold text-blue-600 mb-2">${flight.price}</div>
                      <div className="text-sm text-gray-600 mb-4">per person</div>
                      <Link href={`/booking/flight/${flight.id}`}>
                        <Button className="w-full lg:w-auto">Select Flight</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
