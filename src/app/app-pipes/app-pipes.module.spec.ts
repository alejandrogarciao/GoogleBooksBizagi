import { AppPipesModule } from './app-pipes.module';

describe('AppPipesModule', () => {
  let appPipesModule: AppPipesModule;

  beforeEach(() => {
    appPipesModule = new AppPipesModule();
  });

  it('should create an instance', () => {
    expect(appPipesModule).toBeTruthy();
  });
});
