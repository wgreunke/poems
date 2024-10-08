//This is the origional data loader component that pulls the data from inline text.
//The next version loads data from a csv file.
//The final version will be to have a database and load data using API


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
  
//this is only needed when you are putting this in a seperate file.
  export default LoadLocalData;