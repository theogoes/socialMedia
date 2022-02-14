import React from 'react';
import PartyBody from './party/PartyBody';
import PartyFeed from './party/PartyFeed';
import PartyHeader from './party/PartyHeader';

function PartyMainSection() {
  return (
      <main>
        <div className='party_container'>
          <PartyHeader/>
          <PartyBody/>
          <PartyFeed/>
        </div>
      </main>
  );
}

export default PartyMainSection;
