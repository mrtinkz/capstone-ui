class Vehicle {
    constructor(make, model, trim, basePrice) {
        this.make = make;
        this.model = model;
        this.trim = trim;
        this.basePrice = basePrice;
        this.selectedOptions = {};
        this.selectedUpgrades = [];
      }
  calculateTaxesAndFees(taxRate, fees) {
      let taxes = this.calculateTotalPrice() * (taxRate / 100);
      let totalTaxesAndFees = taxes + fees;
      return totalTaxesAndFees;
    }
  
    applyIncentives(incentives) {
      let priceAfterIncentives = this.calculateTotalPrice() - incentives;
      return priceAfterIncentives;
    }
  
    generatePricingSummary(taxRate, fees, incentives) {
      let pricingSummary = {
        basePrice: this.basePrice,
        optionsPrice: this.calculateOptionsPrice(),
        upgradesPrice: this.calculateUpgradesPrice(),
        totalPrice: this.calculateTotalPrice(),
        taxesAndFees: this.calculateTaxesAndFees(taxRate, fees),
        priceAfterIncentives: this.applyIncentives(incentives)
      };
  
      return pricingSummary;
    }
  }
  
  // Usage example
  let vehicle = new Vehicle("Toyota", "Rav4", "XLE", 25000);
  // Add options and upgrades to the vehicle
  let taxRate = 7.0; // 7% tax rate
  let fees = 500; // Additional fees, e.g., registration, documentation, etc.
  let incentives = 2000; // Incentives or rebates
  let pricingSummary = vehicle.generatePricingSummary(taxRate, fees, incentives);
  console.log(pricingSummary);
  