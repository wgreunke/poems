import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // For parsing CSV files


// LoadData component for loading JSON data and setting the state
const LoadLocalData = ({ setData, chosenLanguage }) => {
  useEffect(() => {
    // Define the data as JSON
    const jsonData = [
      {
        target_language:"Spanish",
        key_words: "Cup, Mouse, Pen",
        poem_lines: 4,
        image_name:"cup-mouse-pen.jpg",
        target_1: "Habla Espanol",
        target_2:"da sitzt eine kleine Maus in der Hasse.",
        target_3: "Mit einem Stift schreibt sie schnell,",
        target_4:"die Worte tanzen, oh wie hell.",
        base_1: "This is Spanish,",
        base_2: "there sits a little mouse in the hat.",
        base_3: "With a pen writes she fast,",
        base_4: "the words dance, oh how bright."
      },
      {
        target_language:"German",
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
        target_language:"German",
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
      {
        target_language:"German",
        key_words: "Garten, Blumen, Luck ",
        poem_lines: 4,
        image_name:"garden.jpg",
        target_1: "In einem Garten, wo Blumen sind,",
        target_2:"Leben viele Träume, die klein beginnen.",
        target_3: "Die Farben strahlen, der Wind weht geschwind,",
        target_4:"Freude und Glück, die wir stets gewinnen.",
        base_1: "In a garden where flowers reside",
        base_2: "Many dreams live, starting small",
        base_3: "Colors radiate, the wind blows swiftly,",
        base_4: "Joy and happiness, we always win."
      },
      {
        target_language:"German",
        key_words: "End",
        poem_lines: 4,
        image_name:"",
        target_1: "",
        target_2:"",
        target_3: "",
        target_4:"",
        base_1: "",
        base_2: "",
        base_3: "",
        base_4: ""
      },
      
    ];

    const filteredData = jsonData.filter(
      (item) => item.target_language.toLowerCase() === chosenLanguage.toLowerCase()
    );

    // Set the filtered data into state
    setData(filteredData);


    // Set the data into state
    setData(filteredData);
    //setData(jsonData);
  }, [setData,chosenLanguage]);

  return null; // This component doesn't render anything
};

const LanguageChooser=({setChosenLanguage})=>{

const [selectedLanguage,setSelectedLanguage]=useState('German');

  const handleLanguageChange=(event)=>{
    setSelectedLanguage(event.target.value);
    setChosenLanguage(event.target.value)
  };

  return(
  //Dropdown for the given languages
    <div>
    Choose a language to learn
    <select 
    id="language-select"
    value={selectedLanguage}
    onChange={handleLanguageChange}
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
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_1}</p>
      
      <p style={{ color: 'grey', margin:0, padding:0}}>
        {showBase ? poem_data[currentIndex].base_1 :'.'}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_2}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>
        {showBase ? poem_data[currentIndex].base_2 :'.'}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_3}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>
      {showBase ? poem_data[currentIndex].base_3 :'.'}</p>
      <br></br>
      <p style={{margin:0, padding:0}}>{poem_data[currentIndex].target_4}</p>
      <p style={{ color: 'grey', margin:0, padding:0}}>
      {showBase ? poem_data[currentIndex].base_4 :'.'}</p>
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
      <LanguageChooser setChosenLanguage={setChosenLanguage} />
      <h1 style={{margin:30}}>Simple German Poems</h1>

      {/* Load JSON data on start */}
      <LoadLocalData setData={setData} chosenLanguage={chosenLanguage} />

      {/* Display data if available */}
      {data.length > 0 && (
        <div style={{margin:30}}>
          <DisplayPoem poem_data={data} currentIndex={currentIndex} showBase={showBase} chosenLanguage={chosenLanguage} />
          
          {/* Navigation buttons */}
          <ToggleSwitch handleToggle={handleToggle} showBase={showBase} />
          <br></br>
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
