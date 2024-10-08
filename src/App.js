import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // For parsing CSV files

//Data loader goes here:



const LoadLocalData = ({ setData, chosenLanguage }) => {
  useEffect(() => {
    // Ensure chosenLanguage is valid before proceeding
    if (!chosenLanguage || typeof chosenLanguage !== "string") {
      console.error("Invalid chosenLanguage:", chosenLanguage);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/poems_data.csv`);
        const csvData = await response.text();

        // Parse the CSV data into JSON
        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            const jsonData = result.data;

            // Filter data based on chosen language, ensure item.target_language is defined
            const filteredData = jsonData.filter(
              (item) =>
                item.target_language &&
                typeof item.target_language === "string" &&
                item.target_language.toLowerCase() === chosenLanguage.toLowerCase()
            );

            // Set the filtered data into state
            setData(filteredData);
          },
          error: (error) => {
            console.error("Error parsing CSV file:", error);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV file:", error);
      }
    };

    fetchData();
  }, [setData, chosenLanguage]);

  return null; // This component doesn't render anything
};





const LanguageChooser=({setChosenLanguage,setCurrentIndex})=>{

  const [selectedLanguage,setSelectedLanguage]=useState('German');

  const handleLanguageChange=(event)=>{
    setSelectedLanguage(event.target.value);
    setChosenLanguage(event.target.value);
    setCurrentIndex(0);
  };

  return(
  //Dropdown for the given languages
    <div>
    <select 
    id="language-select"
    value={selectedLanguage}
    onChange={handleLanguageChange}
    style={{ width: '100px', padding: '8px', fontSize: '16px' }}
    >
    <option value="German">German</option>
    <option value="Spanish">Spanish</option>
    </select>

</div>
  );
}

const DisplayPoem = ({ poem_data, currentIndex,showBase, chosenLanguage }) => {
  return (
    <div>
      <p>You are studying: {chosenLanguage}</p>
      <h1>{poem_data[currentIndex].key_words}</h1>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_line1}</p>
      
      <p style={{ color: 'grey', margin:0, padding:0}}>
        {showBase ? poem_data[currentIndex].base_line1  :'.'}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_line2}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>
        {showBase ? poem_data[currentIndex].base_line2 :'.'}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_line3}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>
      {showBase ? poem_data[currentIndex].base_line3 :'.'}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_line4}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>
      {showBase ? poem_data[currentIndex].base_line4 :'.'}</p>
      <br></br>      
      <img style={{height:200, width:200}}  src={`./images/${poem_data[currentIndex].image_name}`} alt="Poem Illustration" />
      <br></br>
      <img style={{height:10, width:10}}  src={`./poems/images/${poem_data[currentIndex].image_name}`} alt="" />

    </div>
  );
};


//Add a toggle to hide the english
const ToggleSwitch=({handleToggle, showBase})=>{
  return (
    <div>
    <label>
    Show English?  
    <input type="checkbox" checked={showBase} onChange={handleToggle} 
    style={{ transform: 'scale(1.5)', marginLeft:'10px', marginRight: '8px' }}
    />
      </label>
      </div>
  );
};


// NavigationButtons component with Next and Previous buttons
const NavigationButtons = ({ onNext, onPrevious }) => {
  return (
    <div>
      <button onClick={onPrevious} style={{ fontSize: '1.4rem', padding: '10px 20px', borderRadius: '8px', width:'120px',marginRight:'8px' }} >
        Previous</button>
      <button onClick={onNext} style={{ fontSize: '1.4rem',padding: '10px 20px',  borderRadius: '8px',width:'120px' }}>
        Next</button>
    </div>
  );
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]); // Initially empty

//ChosenLanguage
const [chosenLanguage, setChosenLanguage] = useState('German');


//Decide to show the base language
const [showBase, setShowBase] = useState(false);
const handleToggle=()=> {setShowBase(!showBase);};


  // Functions to handle next and previous buttons
  const handleNext = () => {
    setShowBase(false);
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    setShowBase(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


// ******************* App Return *********************************
  return (
    <div>
      <LanguageChooser setChosenLanguage={setChosenLanguage} setCurrentIndex={setCurrentIndex} />

      {/*  Need a header <h1 style={{margin:30}}>Simple German Poems </h1> */}
      
      {/* Load JSON data on start */}
      <LoadLocalData setData={setData} chosenLanguage={chosenLanguage} />
    
      {/* Display data if available */}
      {data.length > 0 && (
        <div style={{margin:30}}>
          <DisplayPoem poem_data={data} currentIndex={currentIndex} showBase={showBase} chosenLanguage={chosenLanguage} />
          {/* Navigation buttons */}
          <ToggleSwitch handleToggle={handleToggle} showBase={showBase} />
          <br></br>
          <NavigationButtons onNext={handleNext} onPrevious={handlePrevious} />
          <br></br>
          <br></br>
          <a href="https://www.linkedin.com/in/wgreunke/" alt=""> Written by Ward Greunke</a>
        </div>
      )}
    </div>
  );
}

export default App;
