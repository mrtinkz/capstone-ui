class Vehicle {
    constructor(make, model, trim, basePrice) {
      this.make = make;
      this.model = model;
      this.trim = trim;
      this.basePrice = basePrice;
      this.selectedOptions = {};
      this.selectedUpgrades = [];
    }
  
    addOption(option) {
      this.selectedOptions[option.name] = option;
    }
  
    addUpgrade(upgrade) {
      this.selectedUpgrades.push(upgrade);
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
  
    generatePricingSummary(
  ) {
      let pricingSummary = {
        basePrice: this.basePrice,
        optionsPrice: this.calculateOptionsPrice(),
        upgradesPrice: this.calculateUpgradesPrice(),
        totalPrice: this.calculateTotalPrice()
      };
  
      return pricingSummary;
    }
  
    calculateOptionsPrice(
  ) {
      let optionsPrice = 0;
  
      for (let option in this.selectedOptions) {
        if (this.selectedOptions.hasOwnProperty(option)) {
          optionsPrice += this.selectedOptions[option].price;
        }
      }
  
      return optionsPrice;
    }
  
    calculateUpgradesPrice(
  ) {
      let upgradesPrice = 0;
  
      for (let upgrade of this.selectedUpgrades) {
        upgradesPrice += upgrade.price;
      }
  
      return upgradesPrice;
    }
  }
  
  // Usage example
  let vehicle = new Vehicle("Toyota", "Rav4", "XLE", 25000);
  vehicle.addOption(new Option("Automatic Transmission", 1000));
  vehicle.addUpgrade(new Upgrade("Sunroof", 1200));
  let pricingSummary = vehicle.generatePricingSummary();
  console.log(pricingSummary);
  