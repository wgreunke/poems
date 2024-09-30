import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // For parsing CSV files


// DataDisplay component to show the title, line 1, and line 2
const DataDisplay = ({ key_words, line1, line2 }) => {
  return (
    <div>
      <h1>{key_words}</h1>
      <p>{line1}</p>
      <p style={{ color: 'grey' }}>{line2}</p>
    </div>
  );
};


const DisplayPoem = ({ poem_data, currentIndex }) => {
  return (
    <div>
      <h1>{poem_data[currentIndex].key_words}</h1>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_1}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>{poem_data[currentIndex].base_1}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_2}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>{poem_data[currentIndex].base_2}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_3}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>{poem_data[currentIndex].base_3}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_4}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>{poem_data[currentIndex].base_4}</p>
      <br></br>      
      <img style={{height:200, width:200}}  src={`/images/${poem_data[currentIndex].image_name}`} alt="Poem Illustration" />


    </div>
  );
};




// NavigationButtons component with Next and Previous buttons
const NavigationButtons = ({ onNext, onPrevious }) => {
  return (
    <div>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

// LoadData component for loading JSON data and setting the state
const LoadLocalData = ({ setData }) => {
  useEffect(() => {
    // Define the data as JSON
    const jsonData = [
      {
        key_words: "Cup, Mouse, Pen",
        poem_lines: 4,
        image_name:"cup-mouse-pen.jpg",
        target_1: "Auf dem Tisch steht eine Tasse,",
        target_2:"da sitzt eine kleine Maus in der Hasse.",
        target_3: "Mit einem Stift schreibt sie schnell,",
        target_4:"die Worte tanzen, oh wie hell.",
        base_1: "On the table stands a cup,",
        base_2: "there sits a little mouse in the hat.",
        base_3: "With a pen writes she fast,",
        base_4: "the words dance, oh how bright."

      },
      {
        key_words: "Cat, House, Shoe",
        poem_lines: 4,
        image_name:"cat-shoe-house.jpg",
        target_1: "Die Katze sitzt vor dem Haus",
        target_2:"trägt einen kleinen, bunten Schuh.",
        target_3: "Sie schaut zum Fenster raus,",
        target_4:"und schnurrt leise immerzu.",
        base_1: "The cat sits in front of the house,",
        base_2: "wears a small, colorful shoe.",
        base_3: "She looks to the window out,",
        base_4: "and purrs quietly always."
      },
      // Add more items as needed
    ];

    // Set the data into state
    setData(jsonData);
  }, [setData]);

  return null; // This component doesn't render anything
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]); // Initially empty

  // Functions to handle next and previous buttons
  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>Simple German Poems</h1>

      {/* Load JSON data on start */}
      <LoadLocalData setData={setData} />

      {/* Display data if available */}
      {data.length > 0 && (
        <div>
          <DataDisplay
            key_words={data[currentIndex].key_words} // Access 'title' from JSON data
            line1={data[currentIndex].target_1} // Access 'line_1' from JSON data
            line2={data[currentIndex].base_1} // Access 'line_2' from JSON data
          />

          <DisplayPoem poem_data={data} currentIndex={currentIndex} />
          {/* Navigation buttons */}
          <NavigationButtons onNext={handleNext} onPrevious={handlePrevious} />
          <br></br>
          <a href="https://www.linkedin.com/in/wgreunke/"> Written by Ward Greunke</a>
        </div>
      )}
    </div>
  );
}

export default App;
