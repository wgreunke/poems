import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // For parsing CSV files
import { Box, Container, InputLabel, MenuItem } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
    style={{ width: '100px', padding: '4px', fontSize: '12px' }}
    >
    <option value="German">German</option>
    <option value="Spanish">Spanish</option>
    </select>
    </div>

  );
}


const DisplayPoem = ({ poem_data, currentIndex,showBase }) => {
  //const poem=poem_data[currentIndex];
  return (
    <div>
      {/*<h1 style={{color:'blue',fontSize:'16px' }}>{poem_data.key_words}</h1> */}
      

      <p style={{margin:0, padding:0}}>{poem_data.target_line1}</p>
      <p style={{ color: showBase ? 'grey':'white', margin:0, padding:0}}>
        {showBase ? poem_data[currentIndex].base_line1 :'.'}</p>
       
      <p style={{margin:0, padding:0}}>{poem_data.target_line2}</p>
      <p style={{ color: showBase ? 'grey':'white', margin:0, padding:0}}>
        {showBase ? poem_data[currentIndex].base_line2 :'.'}</p>
      
      
      <p style={{margin:0, padding:0}}>{poem_data.target_line3}</p>
      <p style={{ color: showBase ? 'grey':'white', margin:0, padding:0}}>
      {showBase ? poem_data[currentIndex].base_line3 :'.'}</p>
      <p style={{margin:0, padding:0}}>{poem_data.target_line4}</p>
      <p style={{color: showBase ? 'grey':'white', margin:0, padding:0}}>
      {showBase ? poem_data.base_line4 :'.'}</p>
      <br style={{height:'3px'}}></br>
      <img style={{height:150, width:150}}  src={`./images/${poem_data.image_name}`} alt="Poem Illustration" />
      <br></br>
      <img style={{height:10, width:10}}  src={`./poems/images/${poem_data.image_name}`} alt="" />

    </div>
  );
};


//Add a toggle to hide the english
const ToggleSwitch=({handleToggle, showBase})=>{
  return (
    <div style={{margin:'5px'}}>
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
    <div style={{margin:'5px'}}>
      <button onClick={onPrevious} style={{ fontSize: '1rem', padding: '5px', borderRadius: '8px', width:'80px',marginRight:'8px'}} >
        Previous</button>
      <button onClick={onNext} style={{ fontSize: '1rem',padding: '5px',  borderRadius: '8px',width:'80px' }}>
        Next</button>
    </div>
  );
};

//************************** Main Function ************************/
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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container maxWidth="md"> {/* Adjust maxWidth as needed */}
     
      
      {/*  Need a header <h1 style={{margin:30}}>Simple German Poems </h1> */}
      
      {/* Load JSON data on start */}
      <LoadLocalData setData={setData} chosenLanguage={chosenLanguage} />
    
      {/* Display data if available */}
      {data.length > 0 && (
        <div style={{margin:'10px'}}>
          <LanguageChooser setChosenLanguage={setChosenLanguage} setCurrentIndex={setCurrentIndex} />
        
        
        {/* Map over the data to display each poem */}
        <div>
        {data.map((poem, index) => (
          <React.Fragment key={index}>
          <DisplayPoem key={index} poem_data={poem} currentIndex={index} showBase={showBase} />
          </React.Fragment>
      ))} </div>
      

          {/*<DisplayPoem poem_data={data} currentIndex={currentIndex} showBase={showBase} chosenLanguage={chosenLanguage} />*/}
          {/* Navigation buttons */}
          <ToggleSwitch handleToggle={handleToggle} showBase={showBase} />
          <NavigationButtons onNext={handleNext} onPrevious={handlePrevious} />
    
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6BFc00n1gch93HZzOI5WN4LjfIw4lrOaMZmGFYfEYWND4Ug/viewform?usp=sf_link" alt="">Share a poem or leave feedback</a>
          <br></br>     
          <a href="https://www.linkedin.com/in/wgreunke/" alt=""> Written by Ward Greunke</a>
        </div>
      )}
    </Container>
    </Box>
  );
}

export default App;
