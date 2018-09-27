import { LazyModModule } from './lazy-mod.module';

describe('LazyModModule', () => {
  let lazyModModule: LazyModModule;

  beforeEach(() => {
    lazyModModule = new LazyModModule();
  });

  it('should create an instance', () => {
    expect(lazyModModule).toBeTruthy();
  });
});
