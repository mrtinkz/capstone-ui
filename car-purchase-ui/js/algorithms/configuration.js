class Vehicle {
    constructor(make, model, trim, basePrice) {
      this.make = make;
      this.model = model;
      this.trim = trim;
      this.basePrice = basePrice;
      this.selectedOptions = {};
      this.selectedUpgrades = [];
    }
  
    calculateTotalPrice(
  ) {
      let totalPrice = this.basePrice;
  
      for (let option in this.selectedOptions) {
        if (this.selectedOptions.hasOwnProperty(option)) {
          totalPrice += this.selectedOptions[option].price;
        }
      }
  
      for (let upgrade of this.selectedUpgrades) {
        totalPrice += upgrade.price;
      }
  
      return totalPrice;
    }
  }
  
  class Option {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Upgrade {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  // Create sample vehicles, options, and upgrades
  const vehicles = [
    new Vehicle("Toyota", "Rav4", "XLE", 25000),
  ];
  
  const options = {
    "Transmission": [
      new Option("Automatic", 1000),
      new Option("Manual", 800)
    ],
    "Color": [
      new Option("Silver", 500),
      new Option("Black", 800),
    ]
  };
  
  const upgrades = [
    new Upgrade("Sunroof", 1200),
    new Upgrade("Premium Sound System", 1800)
  ];
  
  function configureVehicle(baseVehicle) {
    let vehicle = vehicles.find((v) => v.make === baseVehicle.make && v.model === baseVehicle.model && v.trim === baseVehicle.trim);
  
    for (let optionName in options) {
      if (options.hasOwnProperty(optionName)) {
        const selectedOption = options[optionName].find((o) => o.name === baseVehicle.selectedOptions[optionName]);
        if (selectedOption) {
          vehicle.selectedOptions[optionName] = selectedOption;
        }
      }
    }
  
    for (let upgrade of upgrades) {
      if (baseVehicle.selectedUpgrades.includes(upgrade.name)) {
        vehicle.selectedUpgrades.push(upgrade);
      }
    }
  
    return vehicle;
  }
  
  // Test the function
  let baseVehicle = {
    make: "Toyota",
    model: "Rav4",
    trim: "XLE",
    selectedOptions: {
      Transmission: "Automatic",
      Color: "Black"
  },
    selectedUpgrades: ["Sunroof"]
  };
  
  let configuredVehicle = configureVehicle(baseVehicle);
  console.log(configuredVehicle);
  console.log("Total price: " + configuredVehicle.calculateTotalPrice());
  