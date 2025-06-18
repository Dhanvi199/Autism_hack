document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Handle Button Clicks
    const findSpecialistBtn = document.querySelector(".btn-specialist");
    const donateBtn = document.querySelector(".btn-donate");
    const langBtn = document.querySelector(".btn-lang");

    findSpecialistBtn.addEventListener("click", function () {
        document.getElementById("map-container").scrollIntoView({ behavior: "smooth" });
    });

    donateBtn.addEventListener("click", function () {
        alert("Redirecting to donation page...");
    });

    langBtn.addEventListener("click", function () {
        alert("Language switch feature coming soon!");
    });

    // 🔹 Load Google Map with Autism Specialists
    function initMap() {
        var map = L.map("map-container").setView([43.7, -79.42], 6); // Center Ontario

        // Load OpenStreetMap tiles
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // List of Autism Specialists in Ontario
        var locations = [
            { name: "Jake's House", address: "200 Consumers Rd, North York, ON", lat: 43.775, lng: -79.34 },
            { name: "Autism Ontario", address: "1179 King St W, Toronto, ON", lat: 43.637, lng: -79.424 },
            { name: "Shining Through Centre", address: "7365 Martin Grove Rd, Woodbridge, ON", lat: 43.773, lng: -79.595 },
            { name: "Geneva Centre for Autism", address: "112 Merton St, Toronto, ON", lat: 43.698, lng: -79.391 },
            { name: "AUTISM COUNSELING & TREATMENT", address: "104 Rankin Rd, Sault Ste. Marie, ON P6A 4R8", lat: 46.52448, lng: -84.26370 },
            { name: "AUTISM COUNSELING & TREATMENT", address: "633225 Hwy 10, Mono, ON L0N 1L0", lat: 43.9397850, lng: -80.1022345 },
            { name: "AUTISM INFORMATION & REFERRAL SVC", address: "3820 Doane Rd, East Gwillimbury (Mount Albert), ON L0G 1V0", lat: 44.137353, lng: -79.370807 },
            { name: "AUTISM COUNSELING & TREATMENT", address: "316 Rideau River Place, Waterloo, ON N2V 2Y5", lat: 43.491888, lng: -80.591336 },
            { name: "AUTISM INFORMATION & REFERRAL SVC", address: "30 East Glen Dr, Arkona, ON N0M 1B0", lat: 43.071717, lng: -81.823838 },
            { name: "AUTISM INFORMATION & REFERRAL SVC", address: "Unit 1, 8000 Bathurst St, Thornhill, ON L4J 0B8", lat: 43.813538, lng: -79.451799 },
            { name: "AUTISM COUNSELING & TREATMENT", address: "56 Bronte St S, Milton, ON L9T 1Y8", lat: 43.5072346, lng: -79.8867978 },
            { name: "AUTISM COUNSELING & TREATMENT", address: "Suite 103, 1405 North Service Rd E, Oakville, ON L6H 1A7", lat: 43.48415, lng: -79.67388 },
            { name: "AUTISM COUNSELING & TREATMENT", address: "6219 Abbott St W, Stittsville, ON K2S 0B4", lat: 45.25651, lng: -75.924472 }
        ];

        // Add markers
        locations.forEach((loc) => {
            var marker = L.marker([loc.lat, loc.lng]).addTo(map)
                .bindPopup(`<strong>${loc.name}</strong><br>${loc.address}`);
        });

        // Add Search Bar
        var searchControl = new L.Control.Search({
            layer: L.featureGroup(),
            initial: false,
            textPlaceholder: "🔍 Search for a specialist...",
            position: "topright"
        }).addTo(map);
    }

    // Load Map when the page is ready
    initMap();
});
