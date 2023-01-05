import React from 'react';
import { InlineWidget } from 'react-calendly';

function MyCalendly() {
    return (
        <InlineWidget apiKey={process.env.REACT_APP_CALENDLY_APIKEY} url="https://calendly.com/marcoguzmandev" />
    );
}

export default MyCalendly;