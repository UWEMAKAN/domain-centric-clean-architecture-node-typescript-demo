import IInventoryService from '../../application/interfaces/infrastructure/IInventoryService';

class InventoryService implements IInventoryService {
  public notifySaleOcurred(productId: number, quantity: number): void {

  }
}

export default InventoryService;
