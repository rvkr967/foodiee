import { IOrders } from './Orders';

export interface IDeliveryPartner {
  PartnerId: number;
  PartnerName: string;
  PartnerEmailId: string;
  PartnerMobile: number;
  PartnerStatus: string;
  Order: IOrders;
}
