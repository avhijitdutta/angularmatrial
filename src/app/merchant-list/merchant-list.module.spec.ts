import { MerchantListModule } from './merchant-list.module';

describe('MerchantListModule', () => {
  let merchantListModule: MerchantListModule;

  beforeEach(() => {
    merchantListModule = new MerchantListModule();
  });

  it('should create an instance', () => {
    expect(merchantListModule).toBeTruthy();
  });
});
