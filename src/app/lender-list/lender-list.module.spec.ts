import { LenderListModule } from './lender-list.module';

describe('LenderListModule', () => {
  let lenderListModule: LenderListModule;

  beforeEach(() => {
    lenderListModule = new LenderListModule();
  });

  it('should create an instance', () => {
    expect(lenderListModule).toBeTruthy();
  });
});
