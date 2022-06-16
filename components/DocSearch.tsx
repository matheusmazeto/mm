import '@docsearch/css';

import { DocSearch as AlgoliaDocSearch } from '@docsearch/react';

export function DocSearch() {
  return (
    <AlgoliaDocSearch
      appId="BOKLC625CE"
      indexName="matheusmazeto"
      apiKey="c99913d99ab9d921133e2fe216e4e591"
    />
  );
}
