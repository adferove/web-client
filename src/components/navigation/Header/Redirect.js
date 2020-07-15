import React, { useEffect } from 'react';

const Redirect = () => {
  useEffect((window.location = 'http://www.bom.gov.au'), []);
  return <section>Redirecting...</section>;
};

export default Redirect;
