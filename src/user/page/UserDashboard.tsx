import React, { useState } from "react";
import {
  Search,
  Heart,
  Calendar,
  User,
  Bell,
  Menu,
  X,
  Plane,
  Hotel,
  Car,
  Utensils,
  MapPin,
  ChevronRight,
} from "lucide-react";

type Page =
  | "home"
  | "search"
  | "flights"
  | "multi-stop"
  | "results"
  | "details"
  | "filter";
// Move components to module scope to avoid creating them during render
type NavProps = {
  setCurrentPage: (p: Page) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
};

type TripSetter = (t: "roundtrip" | "oneway" | "multistop") => void;

const Navbar: React.FC<NavProps> = ({
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => (
  <nav className="bg-cyan-500 text-white fixed w-full z-10 shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            Trilux
          </h1>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => setCurrentPage("home")}
              className="hover:text-cyan-100 transition"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("search")}
              className="hover:text-cyan-100 transition"
            >
              Flights
            </button>
            <button className="hover:text-cyan-100 transition">Hotels</button>
            <button className="hover:text-cyan-100 transition">
              Car Rentals
            </button>
            <button className="hover:text-cyan-100 transition">
              Restaurants
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Bell className="w-5 h-5 cursor-pointer hover:text-cyan-100" />
          <Heart className="w-5 h-5 cursor-pointer hover:text-cyan-100" />
          <Calendar className="w-5 h-5 cursor-pointer hover:text-cyan-100" />
          <User className="w-5 h-5 cursor-pointer hover:text-cyan-100" />
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>

    {mobileMenuOpen && (
      <div className="md:hidden border-t border-cyan-400">
        <div className="px-4 py-4 space-y-3">
          <button
            onClick={() => {
              setCurrentPage("home");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 hover:text-cyan-100"
          >
            Home
          </button>
          <button
            onClick={() => {
              setCurrentPage("search");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 hover:text-cyan-100"
          >
            Flights
          </button>
          <button className="block w-full text-left py-2 hover:text-cyan-100">
            Hotels
          </button>
          <button className="block w-full text-left py-2 hover:text-cyan-100">
            Car Rentals
          </button>
          <button className="block w-full text-left py-2 hover:text-cyan-100">
            Restaurants
          </button>
        </div>
      </div>
    )}
  </nav>
);

const HomePage: React.FC<NavProps & { setTripType: TripSetter }> = ({
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
  setTripType,
}) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar
      setCurrentPage={setCurrentPage}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />

    <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
      <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-t-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">Hi, Stella</h2>
            <p className="text-cyan-50">What do you want to do today?</p>
          </div>
          <Bell className="w-6 h-6" />
        </div>

        <div
          className="bg-white rounded-lg p-4 flex items-center cursor-pointer hover:shadow-lg transition"
          onClick={() => setCurrentPage("search")}
        >
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <span className="text-gray-400">Fly anywhere with flexibility</span>
        </div>
      </div>

      <div className="bg-cyan-500 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-b-2xl">
        <button
          onClick={() => setCurrentPage("search")}
          className="flex flex-col items-center space-y-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition p-4 rounded-lg"
        >
          <Plane className="w-8 h-8 text-white" />
          <span className="text-white text-sm font-medium">Flights</span>
        </button>
        <button className="flex flex-col items-center space-y-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition p-4 rounded-lg">
          <Hotel className="w-8 h-8 text-white" />
          <span className="text-white text-sm font-medium">Hotels</span>
        </button>
        <button className="flex flex-col items-center space-y-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition p-4 rounded-lg">
          <Car className="w-8 h-8 text-white" />
          <span className="text-white text-sm font-medium">Car rentals</span>
        </button>
        <button className="flex flex-col items-center space-y-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition p-4 rounded-lg">
          <Utensils className="w-8 h-8 text-white" />
          <span className="text-white text-sm font-medium">Restaurant</span>
        </button>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Destinations you can travel to
            </h3>
            <p className="text-sm text-gray-500">
              Popular destinations you can explore from Nigeria
            </p>
          </div>
          <button className="text-cyan-500 font-medium text-sm hover:text-cyan-600">
            See all &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=250&fit=crop"
              alt="Turkey"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-800">Turkey</h4>
              <p className="text-xs text-gray-500">COVID-19 test required</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=250&fit=crop"
              alt="Mexico"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-800">Mexico</h4>
              <p className="text-xs text-gray-500">COVID-19 test required</p>
            </div>
          </div>
          <div
            onClick={() => {
              setTripType("roundtrip");
              setCurrentPage("flights");
            }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop"
              alt="Paris"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-800">France</h4>
              <p className="text-xs text-gray-500">COVID-19 test required</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Tools</h3>
        <p className="text-sm text-gray-500 mb-4">Travel like a pro</p>
        <div className="bg-white rounded-xl p-4 shadow-md flex items-center space-x-4 cursor-pointer hover:shadow-lg transition">
          <div className="bg-cyan-100 p-3 rounded-lg">
            <Plane className="w-6 h-6 text-cyan-500" />
          </div>
          <span className="font-medium text-gray-800">Flight Tracker</span>
        </div>
      </div>
    </div>
  </div>
);

const SearchPage: React.FC<
  NavProps & { setCurrentPage: (p: Page) => void }
> = ({ setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar
      setCurrentPage={setCurrentPage}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />

    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Flights</h2>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Plane className="w-5 h-5 text-cyan-500" />
            <input
              type="text"
              value="ABV - Abuja, Nigeria"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
              readOnly
            />
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-cyan-500" />
            <input
              type="text"
              placeholder="Enter destination"
              className="flex-1 p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value="Thu, 26th May, 2022"
            className="w-full p-3 border border-gray-300 rounded-lg"
            readOnly
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Adult</label>
            <input
              type="text"
              value="1"
              className="w-full p-3 border border-gray-300 rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Children</label>
            <input
              type="text"
              value="0"
              className="w-full p-3 border border-gray-300 rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Infant</label>
            <input
              type="text"
              value="0"
              className="w-full p-3 border border-gray-300 rounded-lg"
              readOnly
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm text-gray-500 mb-1 block">
            Passengers & Class
          </label>
          <input
            type="text"
            value="1 Passenger, Economy"
            className="w-full p-3 border border-gray-300 rounded-lg"
            readOnly
          />
        </div>

        <button
          onClick={() => setCurrentPage("results")}
          className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold hover:bg-cyan-600 transition"
        >
          Search Flights
        </button>
      </div>
    </div>
  </div>
);

const FlightsPage: React.FC<
  { tripType: "roundtrip" | "oneway" | "multistop" } & NavProps
> = ({ tripType, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar
      setCurrentPage={setCurrentPage}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Flights ({tripType})
      </h2>
      <p className="text-gray-600">Flight search UI placeholder.</p>
      <button
        onClick={() => setCurrentPage("results")}
        className="mt-6 bg-cyan-500 text-white px-4 py-2 rounded"
      >
        See results
      </button>
    </div>
  </div>
);

const MultiStopPage: React.FC<NavProps & { setTripType: TripSetter }> = ({
  setTripType,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar
      setCurrentPage={setCurrentPage}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />
    <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Multi-stop</h2>
      <p className="text-gray-600">Multi-stop booking placeholder.</p>
      <button
        onClick={() => {
          setTripType("multistop");
          setCurrentPage("results");
        }}
        className="mt-6 bg-cyan-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  </div>
);

const ResultsPage: React.FC<NavProps> = ({
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar
      setCurrentPage={setCurrentPage}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />

    <div className="max-w-6xl mx-auto px-4 py-8 pt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">ABV - LOS</h2>
          <p className="text-sm text-gray-500">June 6 - 9 | 1 Passenger</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage("filter")}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <span>Sort & Filter</span>
          </button>
          <div className="px-4 py-2 border border-gray-300 rounded-lg">USD</div>
        </div>
      </div>

      <div className="flex space-x-4 mb-6 overflow-x-auto px-2 md:px-0">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg whitespace-nowrap">
          Recommended
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap">
          Best
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap">
          Cheapest
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap">
          Airlines
        </button>
      </div>

      <p className="text-gray-600 mb-4">24 Result(s)</p>

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            onClick={() => setCurrentPage("details")}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-bold text-cyan-500">
                    {i === 1
                      ? "Quater Airways"
                      : i === 2
                      ? "Ethopia Airlines"
                      : "Quater Airways"}
                  </h3>
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-xs font-bold">
                      WiFi
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-xs font-bold px-3 py-1 rounded mb-2 inline-block ${
                      i === 1
                        ? "bg-green-500 text-white"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {i === 1 ? "Best" : "Cheapest"}
                  </div>
                  <div className="text-3xl font-bold text-gray-800">$248</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
                    <div>
                      <div className="text-2xl font-bold text-gray-800">
                        6:30am
                      </div>
                      <div className="text-sm text-gray-500">ABV</div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="text-xs text-gray-500 text-center mb-1">
                        1hr 15mins
                      </div>
                      <div className="h-px bg-gray-300 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-500">
                          0 Stops
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">
                        7:30am
                      </div>
                      <div className="text-sm text-gray-500">LOS</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
                    <div
                      key={i}
                      onClick={() => setCurrentPage("details")}
                      className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
                    >
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="text-xs text-gray-500 text-center mb-1">
                        2hr 30mins
                      </div>
                      <div className="h-px bg-gray-300 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-500">
                          1 Stop
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">
                        10:30pm
                      </div>
                      <div className="text-sm text-gray-500">LOS</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-medium hover:bg-cyan-600 transition flex items-center justify-center">
                  <span>3+ Qatar Airways flight</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DetailsPage: React.FC<
  NavProps & { setCurrentPage?: (p: Page) => void }
> = ({ setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar
      setCurrentPage={setCurrentPage ?? (() => {})}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />

    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Flight Details</h2>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Outbound</h3>
            <button className="flex items-center space-x-2 text-cyan-500 font-medium">
              <span>Flight rules</span>
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                !
              </div>
            </button>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <h4 className="text-gray-700 font-medium">Abuja</h4>
            <Plane className="w-5 h-5 text-gray-400" />
            <h4 className="text-gray-700 font-medium">Lagos</h4>
          </div>

          <div className="bg-cyan-50 rounded-xl p-6 mb-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold text-cyan-500">
                  Qatar Airways QR1432
                </h4>
                <p className="text-sm text-gray-600">Economy N Class</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">WiFi</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="w-0.5 h-16 bg-orange-300"></div>
                </div>
                <div>
                  <div className="font-bold text-gray-800">
                    Fri May 27 8:55am
                  </div>
                  <div className="text-sm text-gray-600">Abuja</div>
                  <div className="text-sm text-gray-500">
                    (Nnamdi Azikwe International Airport)
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="w-0.5 h-16 bg-orange-300"></div>
                </div>
                <div>
                  <div className="font-bold text-gray-800">
                    Fri May 27 9:55am
                  </div>
                  <div className="text-sm text-gray-600">Kwara</div>
                  <div className="text-sm text-gray-500">
                    (Ilorin International Airport)
                  </div>
                </div>
              </div>

              <div className="ml-7 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600">
                  <span className="font-bold">Layover</span> at Kwara (Ilorin){" "}
                  <span className="font-bold">1hr 0min</span>
                </p>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="w-0.5 h-16 bg-orange-300"></div>
                </div>
                <div>
                  <div className="font-bold text-gray-800">
                    Fri May 27 10:30am
                  </div>
                  <div className="text-sm text-gray-600">Kwara</div>
                  <div className="text-sm text-gray-500">
                    (Ilorin International Airport)
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                </div>
                <div>
                  <div className="font-bold text-gray-800">
                    Fri May 27 11:00am
                  </div>
                  <div className="text-sm text-gray-600">Lagos</div>
                  <div className="text-sm text-gray-500">
                    (Muritala Muhammed International Airport)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cyan-200">
              <div className="bg-cyan-500 text-white py-3 px-4 rounded-lg text-center font-bold">
                Total Duration: 2h 05mins
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Inbound</h3>
            <button className="flex items-center space-x-2 text-cyan-500 font-medium">
              <span>Flight rules</span>
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                !
              </div>
            </button>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <h4 className="text-gray-700 font-medium">Lagos</h4>
            <Plane className="w-5 h-5 text-gray-400 transform rotate-180" />
            <h4 className="text-gray-700 font-medium">Abuja</h4>
          </div>

          <div className="bg-cyan-50 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold text-cyan-500">
                  Qatar Airways QR1432
                </h4>
                <p className="text-sm text-gray-600">Economy N Class</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">WiFi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FilterPage: React.FC<
  NavProps & { setCurrentPage: (p: Page) => void }
> = ({ setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar
      setCurrentPage={setCurrentPage}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />

    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="flex items-center justify-between p-6 border-b">
          <button
            onClick={() => setCurrentPage("results")}
            className="text-cyan-500 text-xl"
          >
            ✕
          </button>
          <h2 className="text-xl font-bold text-gray-800">Sort and Filter</h2>
          <button className="text-cyan-500 font-medium">Clear</button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Payment Type</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                  defaultChecked
                />
                <span className="text-gray-700">Free cancellation</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">Book now, pay later</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-3">Date and time</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                  defaultChecked
                />
                <span className="text-gray-700">Today</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">Tomorrow</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">This week</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">Next</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">This month</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">Next month</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">Next 6 months</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">Apartment</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-3">Airline</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">Qatar</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-cyan-500 rounded"
                />
                <span className="text-gray-700">Fly Emirates</span>
              </label>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage("results")}
            className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold hover:bg-cyan-600 transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
);

const UserDashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [tripType, setTripType] = useState<
    "roundtrip" | "oneway" | "multistop"
  >("roundtrip");

  return (
    <div>
      {currentPage === "home" && (
        <HomePage
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          setTripType={setTripType}
        />
      )}
      {currentPage === "search" && (
        <SearchPage
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      {currentPage === "flights" && (
        <FlightsPage
          tripType={tripType}
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      {currentPage === "multi-stop" && (
        <MultiStopPage
          setTripType={setTripType}
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      {currentPage === "results" && (
        <ResultsPage
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      {currentPage === "details" && (
        <DetailsPage
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      {currentPage === "filter" && (
        <FilterPage
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
    </div>
  );
};

export default UserDashboard;
