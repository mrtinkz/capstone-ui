class ThirdPartyAPIService {
    constructor(
  ) {
      this.financingAPIClient = new FinancingAPIClient();
      this.protectionPlansAPIClient = new ProtectionPlansAPIClient();
      this.taxAPIClient = new TaxAPIClient();
      this.dealerInventoryAPIClient = new DealerInventoryAPIClient();
    }
  
    async performAPICalls(vehicle) {
      const financingInfo = await this.financingAPIClient.getFinancingInfo(vehicle);
      const protectionPlans = await this.protectionPlansAPIClient.getProtectionPlans(vehicle);
      const taxInfo = await this.taxAPIClient.getTaxInfo(vehicle);
      const dealerInventory = await this.dealerInventoryAPIClient.getInventory(vehicle);
  
      return {
        financingInfo,
        protectionPlans,
        taxInfo,
        dealerInventory
      };
    }
  }
  
  class FinancingAPIClient {
    async getFinancingInfo(vehicle) {
      // Call the Financing API with vehicle information
  // Implement the API call here, e.g., using fetch or axios
  }
  }
  
  class ProtectionPlansAPIClient {
    async getProtectionPlans(vehicle) {
      // Call the Protection Plans API with vehicle information
  // Implement the API call here
  }
  }
  
  class TaxAPIClient {
    async getTaxInfo(vehicle) {
      // Call the Tax API with vehicle information
  // Implement the API call here
  }
  }
  
  class DealerInventoryAPIClient {
    async getInventory(vehicle) {
      // Call the Dealer Inventory API with vehicle information
  // Implement the API call here
  }
  }
  
  // Usage example
  let apiService = new ThirdPartyAPIService();
  let vehicle = new Vehicle("Toyota", "Rav4", "XLE", 25000);
  let apiResults = apiService.performAPICalls(vehicle);
  