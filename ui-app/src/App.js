import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "react-loading-screen";

import { API_URL } from "./config.js";
import { EN, ES } from "./constants.js";

import Header from "./components/Header";
import Article from "./components/Article";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState(EN);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleLanguage = () => {
    if (lang === EN) setLang(ES);
    else setLang(EN);
  };

  return (
    <div className="app">
      <LoadingScreen
        loading={loading}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        text="Loading data..."
      >
        <Header
          feed={data?.feed}
          language={lang}
          toggleLanguage={toggleLanguage}
        />
        <main className="main-list">
          {data?.entries?.length === 0 ? (
            <p>No articles available.</p>
          ) : (
            data?.entries?.map((entry) => (
              <Article entry={entry} key={entry.id} />
            ))
          )}
        </main>
      </LoadingScreen>
    </div>
  );
}

export default App;
