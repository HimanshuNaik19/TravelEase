"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Hotel, Car, MapPin, Download, X, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

const bookings = {
  flights: [
    {
      id: "TRV-FL001",
      status: "confirmed",
      airline: "SkyWings Airlines",
      flightNumber: "SW 1234",
      departure: { time: "08:30", airport: "JFK", city: "New York", date: "Dec 15, 2024" },
      arrival: { time: "11:45", airport: "LAX", city: "Los Angeles", date: "Dec 15, 2024" },
      passenger: "John Doe",
      bookingDate: "Nov 28, 2024",
      price: 356,
    },
    {
      id: "TRV-FL002",
      status: "pending",
      airline: "AeroConnect",
      flightNumber: "AC 5678",
      departure: { time: "14:20", airport: "LAX", city: "Los Angeles", date: "Dec 22, 2024" },
      arrival: { time: "22:55", airport: "JFK", city: "New York", date: "Dec 22, 2024" },
      passenger: "John Doe",
      bookingDate: "Nov 30, 2024",
      price: 389,
    },
  ],
  hotels: [
    {
      id: "TRV-HT001",
      status: "confirmed",
      name: "Grand Plaza Hotel",
      location: "Los Angeles, CA",
      checkIn: "Dec 15, 2024",
      checkOut: "Dec 18, 2024",
      nights: 3,
      guests: 2,
      roomType: "Deluxe King Room",
      bookingDate: "Nov 28, 2024",
      price: 450,
    },
  ],
  cars: [
    {
      id: "TRV-CR001",
      status: "confirmed",
      company: "Enterprise Rent-A-Car",
      vehicle: "Toyota Camry or Similar",
      pickup: { location: "LAX Airport", date: "Dec 15, 2024", time: "12:00 PM" },
      dropoff: { location: "LAX Airport", date: "Dec 18, 2024", time: "10:00 AM" },
      bookingDate: "Nov 28, 2024",
      price: 180,
    },
  ],
}

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case "cancelled":
        return <X className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: "default",
      pending: "secondary",
      cancelled: "destructive",
    }
    return (
      <Badge variant={variants[status as keyof typeof variants] as any}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

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
              <Link href="/bookings" className="text-gray-900 hover:text-blue-600">
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage and view all your travel bookings in one place</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Bookings</TabsTrigger>
            <TabsTrigger value="flights">Flights</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="cars">Cars</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Flights */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Plane className="h-5 w-5" />
                Flights
              </h2>
              {bookings.flights.map((flight) => (
                <Card key={flight.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-semibold">{flight.airline}</span>
                          <Badge variant="outline">{flight.flightNumber}</Badge>
                          {getStatusBadge(flight.status)}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Departure</div>
                            <div className="font-semibold">{flight.departure.time}</div>
                            <div className="text-sm">
                              {flight.departure.airport} - {flight.departure.city}
                            </div>
                            <div className="text-sm text-gray-600">{flight.departure.date}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Arrival</div>
                            <div className="font-semibold">{flight.arrival.time}</div>
                            <div className="text-sm">
                              {flight.arrival.airport} - {flight.arrival.city}
                            </div>
                            <div className="text-sm text-gray-600">{flight.arrival.date}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Passenger</div>
                            <div className="font-semibold">{flight.passenger}</div>
                            <div className="text-sm text-gray-600">Booking: {flight.id}</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600 mb-2">${flight.price}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            E-Ticket
                          </Button>
                          {flight.status === "confirmed" && (
                            <Button variant="outline" size="sm">
                              Check-in
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Hotels */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Hotel className="h-5 w-5" />
                Hotels
              </h2>
              {bookings.hotels.map((hotel) => (
                <Card key={hotel.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-semibold">{hotel.name}</span>
                          {getStatusBadge(hotel.status)}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Location</div>
                            <div className="font-semibold flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {hotel.location}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Check-in / Check-out</div>
                            <div className="font-semibold">{hotel.checkIn}</div>
                            <div className="font-semibold">{hotel.checkOut}</div>
                            <div className="text-sm text-gray-600">{hotel.nights} nights</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Room Details</div>
                            <div className="font-semibold">{hotel.roomType}</div>
                            <div className="text-sm text-gray-600">{hotel.guests} guests</div>
                            <div className="text-sm text-gray-600">Booking: {hotel.id}</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600 mb-2">${hotel.price}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Voucher
                          </Button>
                          <Button variant="outline" size="sm">
                            Modify
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cars */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Car className="h-5 w-5" />
                Car Rentals
              </h2>
              {bookings.cars.map((car) => (
                <Card key={car.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-semibold">{car.company}</span>
                          {getStatusBadge(car.status)}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Vehicle</div>
                            <div className="font-semibold">{car.vehicle}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Pick-up</div>
                            <div className="font-semibold">{car.pickup.location}</div>
                            <div className="text-sm">
                              {car.pickup.date} at {car.pickup.time}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Drop-off</div>
                            <div className="font-semibold">{car.dropoff.location}</div>
                            <div className="text-sm">
                              {car.dropoff.date} at {car.dropoff.time}
                            </div>
                            <div className="text-sm text-gray-600">Booking: {car.id}</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600 mb-2">${car.price}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Voucher
                          </Button>
                          <Button variant="outline" size="sm">
                            Modify
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flights" className="space-y-4">
            {bookings.flights.map((flight) => (
              <Card key={flight.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-semibold">{flight.airline}</span>
                        <Badge variant="outline">{flight.flightNumber}</Badge>
                        {getStatusBadge(flight.status)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-600">Departure</div>
                          <div className="font-semibold">{flight.departure.time}</div>
                          <div className="text-sm">
                            {flight.departure.airport} - {flight.departure.city}
                          </div>
                          <div className="text-sm text-gray-600">{flight.departure.date}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Arrival</div>
                          <div className="font-semibold">{flight.arrival.time}</div>
                          <div className="text-sm">
                            {flight.arrival.airport} - {flight.arrival.city}
                          </div>
                          <div className="text-sm text-gray-600">{flight.arrival.date}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Passenger</div>
                          <div className="font-semibold">{flight.passenger}</div>
                          <div className="text-sm text-gray-600">Booking: {flight.id}</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 mb-2">${flight.price}</div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          E-Ticket
                        </Button>
                        {flight.status === "confirmed" && (
                          <Button variant="outline" size="sm">
                            Check-in
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="hotels" className="space-y-4">
            {bookings.hotels.map((hotel) => (
              <Card key={hotel.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-semibold">{hotel.name}</span>
                        {getStatusBadge(hotel.status)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-600">Location</div>
                          <div className="font-semibold flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {hotel.location}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Check-in / Check-out</div>
                          <div className="font-semibold">{hotel.checkIn}</div>
                          <div className="font-semibold">{hotel.checkOut}</div>
                          <div className="text-sm text-gray-600">{hotel.nights} nights</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Room Details</div>
                          <div className="font-semibold">{hotel.roomType}</div>
                          <div className="text-sm text-gray-600">{hotel.guests} guests</div>
                          <div className="text-sm text-gray-600">Booking: {hotel.id}</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 mb-2">${hotel.price}</div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Voucher
                        </Button>
                        <Button variant="outline" size="sm">
                          Modify
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="cars" className="space-y-4">
            {bookings.cars.map((car) => (
              <Card key={car.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-semibold">{car.company}</span>
                        {getStatusBadge(car.status)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-600">Vehicle</div>
                          <div className="font-semibold">{car.vehicle}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Pick-up</div>
                          <div className="font-semibold">{car.pickup.location}</div>
                          <div className="text-sm">
                            {car.pickup.date} at {car.pickup.time}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Drop-off</div>
                          <div className="font-semibold">{car.dropoff.location}</div>
                          <div className="text-sm">
                            {car.dropoff.date} at {car.dropoff.time}
                          </div>
                          <div className="text-sm text-gray-600">Booking: {car.id}</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 mb-2">${car.price}</div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Voucher
                        </Button>
                        <Button variant="outline" size="sm">
                          Modify
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
