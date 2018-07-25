import { CollectionsModule } from './collections.module';

describe('CollectionsModule', () => {
  let collectionsModule: CollectionsModule;

  beforeEach(() => {
    collectionsModule = new CollectionsModule();
  });

  it('should create an instance', () => {
    expect(collectionsModule).toBeTruthy();
  });
});
