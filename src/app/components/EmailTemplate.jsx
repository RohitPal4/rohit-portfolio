// components/EmailTemplate.jsx
import React from "react";

export const EmailTemplate = ({ firstName, message }) => {
  return React.createElement('div', {
    style: { fontFamily: "Arial, sans-serif" }
  }, [
    React.createElement('h1', { key: 'title' }, `Hello ${firstName},`),
    React.createElement('p', { key: 'message' }, message),
    React.createElement('p', { key: 'footer' }, "We'll get back to you soon!")
  ]);
};