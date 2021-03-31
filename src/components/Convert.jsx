import { useState, useEffect } from 'react';
import axios from 'axios';
// Key from .env
const KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

console.log(process.env)

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: KEY,
        },
      }
    );
  }, [language, text]);

  return <div>Translate</div>;
};

export default Convert;
