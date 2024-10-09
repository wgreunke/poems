const LanguageChooser=({setChosenLanguage,setCurrentIndex})=>{
  const [selectedLanguage,setSelectedLanguage]=useState('German');
  const handleLanguageChange=(event)=>{
    setSelectedLanguage(event.target.value);
    setChosenLanguage(event.target.value);
    setCurrentIndex(0);
  };

  return(
  //Dropdown for the given languages
    <Container>
    <select 
    id="language-select"
    value={selectedLanguage}
    onChange={handleLanguageChange}
    style={{ width: '100px', padding: '8px', fontSize: '16px' }}
    >
    <option value="German">German</option>
    <option value="Spanish">Spanish</option>
    </select>
    </Container>

  );
}