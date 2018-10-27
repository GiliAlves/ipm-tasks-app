import { BoletimModule } from './boletim.module';

describe('BoletimModule', () => {
  let boletimModule: BoletimModule;

  beforeEach(() => {
    boletimModule = new BoletimModule();
  });

  it('should create an instance', () => {
    expect(boletimModule).toBeTruthy();
  });
});
