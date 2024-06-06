function compareVehicles(vehicle1, vehicle2) {
    let areSimilar = true;
    let priceDifference = 0;
  
    if (vehicle1.make !== vehicle2.make) {
      areSimilar = false;
    }
  
    if (vehicle1.model !== vehicle2.model) {
      areSimilar = false;
    }
  
    if (vehicle1.trim !== vehicle2.trim) {
      areSimilar = false;
    }
  
    if (vehicle1.calculateTotalPrice() !== vehicle2.calculateTotalPrice()) {
      priceDifference = Math.abs(vehicle1.calculateTotalPrice() - vehicle2.calculateTotalPrice());
    }
  
    return {
      areSimilar,
      priceDifference
    };
  }
  
  // Test the function
  let configuredVehicle1 = configureVehicle(baseVehicle);
  let configuredVehicle2 = configureVehicle(baseVehicle);
  configuredVehicle2.selectedUpgrades.push(upgrades[1]);
  
  let comparisonResult = compareVehicles(configuredVehicle1, configuredVehicle2);
  console.log("Are the vehicles similar: " + comparisonResult.areSimilar);
  console.log("Price difference: $" + comparisonResult.priceDifference);
  