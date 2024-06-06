class Vehicle {
    constructor(make, model, trim, price, location) {
      this.make = make;
      this.model = model;
      this.trim = trim;
      this.price = price;
      this.location = location;
    }
  }
  
  // Create sample vehicles
  const vehicles = [
    new Vehicle("Toyota", "Corolla", "LE", 20000, "Detroit"),
    new Vehicle("Honda", "Civic", "EX", 19500, "Ann Arbor"),
    new Vehicle("Toyota", "Camry", "SE", 23000, "Lansing"),
    new Vehicle("Honda", "Accord", "LX", 25000, "Grand Rapids"),
    new Vehicle("Toyota", "Rav4", "XLE", 27000, "Canton"),
    // Add more vehicles as needed...
  ];
  
  function searchVehicle(make, model, trim, minPrice, maxPrice, location) {
    // Filter vehicles based on parameters
  let results = vehicles.filter((vehicle) => {
      return (
        vehicle.make === make &&
        vehicle.model === model &&
        vehicle.trim === trim &&
        vehicle.price >= minPrice &&
        vehicle.price <= maxPrice &&
        vehicle.location === location
      );
    });
  
    // Return results
  return results;
  }
  
  // Test the function
  let searchResults = searchVehicle("Toyota", "Rav4", "XLE", 25000, 30000, "Canton");
  console.log(searchResults);

  
  