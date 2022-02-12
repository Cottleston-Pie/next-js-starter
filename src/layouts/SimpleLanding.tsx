import React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/header/Header';
import { Meta } from '../components/Meta';
import { AppConfig } from '../utils/AppConfig';

const SimpleLanding = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    {/* CONTENT */}
    <Footer />
  </div>
);

export { SimpleLanding };
