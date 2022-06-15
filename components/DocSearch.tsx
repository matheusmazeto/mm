import '@docsearch/css';

import { DocSearch as AlogliaDocSearch } from '@docsearch/react';
import * as React from 'react';

export const DocSearch = () => {
  return (
    <div className="ml-16">
      <AlogliaDocSearch
        appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string}
        indexName="matheusmazeto"
        apiKey="c99913d99ab9d921133e2fe216e4e591"
      />
    </div>
  );
};
