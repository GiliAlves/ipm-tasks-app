import { CanticosModule } from './canticos.module';

describe('CanticosModule', () => {
  let canticosModule: CanticosModule;

  beforeEach(() => {
    canticosModule = new CanticosModule();
  });

  it('should create an instance', () => {
    expect(canticosModule).toBeTruthy();
  });
});
