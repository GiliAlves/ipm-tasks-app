import { HinarioModule } from './hinario.module';

describe('HinarioModule', () => {
  let hinarioModule: HinarioModule;

  beforeEach(() => {
    hinarioModule = new HinarioModule();
  });

  it('should create an instance', () => {
    expect(hinarioModule).toBeTruthy();
  });
});
