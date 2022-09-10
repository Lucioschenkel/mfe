import React from 'react';

import MarketingApp from './components/MarketingApp';

export default function AppEntry() {
   console.log('ldev::AppEntry - Application loaded');
  
  return <div>
    <h1>Hi there!</h1>
    <hr />
    <MarketingApp />
  </div>
}
