"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Plane, CreditCard, Shield, User } from "lucide-react"
import Link from "next/link"

export default function FlightBookingPage({ params }: { params: { id: string } }) {
  const [step, setStep] = useState(1)

  // Mock flight data - in real app, fetch by ID
  const flight = {
    id: params.id,
    airline: "SkyWings Airlines",
    flightNumber: "SW 1234",
    departure: { time: "08:30", airport: "JFK", city: "New York", date: "Dec 15, 2024" },
    arrival: { time: "11:45", airport: "LAX", city: "Los Angeles", date: "Dec 15, 2024" },
    duration: "5h 15m",
    price: 299,
    class: "Economy",
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
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            <div className={`flex items-center ${step >= 1 ? "text-blue-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              >
                1
              </div>
              <span className="ml-2 font-medium">Passenger Details</span>
            </div>
            <div className={`flex items-center ${step >= 2 ? "text-blue-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              >
                2
              </div>
              <span className="ml-2 font-medium">Payment</span>
            </div>
            <div className={`flex items-center ${step >= 3 ? "text-blue-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              >
                3
              </div>
              <span className="ml-2 font-medium">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Passenger Information
                  </CardTitle>
                  <CardDescription>Please provide passenger details for your flight booking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input id="dateOfBirth" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="font-semibold">Additional Services</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="baggage" />
                        <Label htmlFor="baggage">Extra Baggage (+$50)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="seat" />
                        <Label htmlFor="seat">Seat Selection (+$25)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="meal" />
                        <Label htmlFor="meal">Special Meal (+$15)</Label>
                      </div>
                    </div>
                  </div>

                  <Button onClick={() => setStep(2)} className="w-full">
                    Continue to Payment
                  </Button>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </CardTitle>
                  <CardDescription>Secure payment processing with 256-bit SSL encryption</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="font-semibold">Billing Address</h3>
                    <div className="space-y-4">
                      <Input placeholder="Street Address" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="City" />
                        <Input placeholder="State" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="ZIP Code" />
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the Terms of Service and Privacy Policy
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="flex-1">
                      Complete Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Shield className="h-5 w-5" />
                    Booking Confirmed!
                  </CardTitle>
                  <CardDescription>
                    Your flight has been successfully booked. Confirmation details have been sent to your email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        Booking Reference: TRV-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </div>
                      <p className="text-green-700">Please save this reference number for your records</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Next Steps:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Check-in online 24 hours before departure</li>
                      <li>• Arrive at the airport 2 hours before domestic flights</li>
                      <li>• Bring a valid photo ID and your booking reference</li>
                      <li>• Download our mobile app for easy access to your boarding pass</li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Link href="/bookings" className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        View My Bookings
                      </Button>
                    </Link>
                    <Link href="/" className="flex-1">
                      <Button className="w-full">Book Another Flight</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{flight.airline}</span>
                    <Badge variant="outline">{flight.flightNumber}</Badge>
                  </div>
                  <div className="text-sm text-gray-600">{flight.departure.date}</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{flight.departure.time}</div>
                      <div className="text-sm text-gray-600">{flight.departure.airport}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">{flight.duration}</div>
                      <Plane className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{flight.arrival.time}</div>
                      <div className="text-sm text-gray-600">{flight.arrival.airport}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Fare</span>
                    <span>${flight.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>$45</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Service Fee</span>
                    <span>$12</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${flight.price + 45 + 12}</span>
                </div>

                <div className="text-xs text-gray-500 text-center">Price includes all taxes and fees</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
