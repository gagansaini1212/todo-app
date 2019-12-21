import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Sidebar from '../components/Sidebar';

export default () => (
  <Layout>
    <Seo title="Home" description="Some description here." />
    <section className="section">
      <div className="container">
        <Sidebar />
      </div>
    </section>
  </Layout>
);
