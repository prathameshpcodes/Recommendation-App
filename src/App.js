import React, { useState } from "react";
import "./styles.css";

const booksList = [
  { name: "12 Rules For Life - Jordan Peterson", rating: "4/5" },
  { name: "Thinking Fast & Slow- Daniel Kaahneman", rating: "4/5" },
  { name: "Crushing it! - Gary Vaynerchuck", rating: "3.5/5" },
  { name: "Man's Search For Meaning - Victor Frankl", rating: "3.5/5" },
  { name: "Rich Dad Poor Dad - Robert Kiyosaki", rating: "4/5" },
  { name: "Range - David Epsteinl", rating: "4.4/5" },
  {
    name: "Never Split The Difference - Chris Voss",
    rating: "4.2/5"
  },
  {
    name:
      "Lost and Founder: A Painfully Honest Field Guide to the Startup World - Rand Fishkin",
    rating: "4/5"
  },
  {
    name: "	The Order of Time - Carlo Rovelli",
    rating: "4.7/5"
  },
  {
    name: "	Metamorphosis - Franz Kafka",
    rating: "4.6/5"
  }
];
const movieList = [
  { name: "I Saw The Devil ", rating: "4.4/5" },
  { name: "Old Boy", rating: "4.2/5" },
  { name: "Memories of Murder", rating: "4.8/5" },
  { name: "Parasite", rating: "4.5/5" },
  { name: "The Chaser", rating: "4.3/5" }
];
const tvseriesList = [
  { name: "Black Mirror", rating: "4.1/5" },
  { name: "The Queen's Gambit", rating: "4/5" },
  { name: "Attack on Titan", rating: "4.7/5" },
  { name: "One Punch Man", rating: "4.1/5" },
  { name: "Full Metal Alchemist Brotherhood", rating: "4.9/5" },
  { name: "Death Parade", rating: "4.6/5" },
  { name: "Breaking Bad", rating: "5.3/5" }
];

export default function App() {
  const [currentList, setCurrentList] = useState(booksList);

  function categoryClickHandler(event) {
    let category = event.target.innerText;

    switch (category) {
      case "Books":
        setCurrentList(booksList);
        break;
      case "Movies":
        setCurrentList(movieList);
        break;
      case "TV-Series":
        setCurrentList(tvseriesList);
        break;
      default:
        setCurrentList(booksList);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Watch List 📚 🍿 📺</h1>
        <p>
          This is a log of the books 📚 , Movies 🍿 & TV-Series 📺 I've read or
          watched and how I rate them...
        </p>
      </header>

      <div className="container-center">
        <div className="categories">
          <button onClick={categoryClickHandler}>Books </button>
          <button onClick={categoryClickHandler}>Movies </button>
          <button onClick={categoryClickHandler}>TV-Series </button>
        </div>
        <hr />
        <div className="main-content">
          <ul>
            {currentList.map((item) => {
              return (
                <li key={item.name}>
                  <div className="item-name">{item.name}</div>
                  <div className="rating">{item.rating}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
