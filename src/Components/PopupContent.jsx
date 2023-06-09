import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #AED6F1;
  border-radius:10px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color:  #154360;
`;


const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 60%;
  border-radius: 5px;
  border: 2px solid #2B547E;
`;


const Select = styled.select`
  padding: 5px;
  margin-bottom: 10px;
  width: 60%;
  border-radius: 5px;
  border: 2px solid #2B547E;

  option {
    color: #2B547E;
    font-size: 14px;
    font-weight: bold;
  }
`;


const TextArea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #2B547E;
  resize: vertical;
`;


const AjouterButton = styled.button`
  background-color: #2B547E;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-left: 380px;
  margin-right:20px;
`;

const SaveButton = styled.button`
  background-color: #fff;
  color: #2B547E;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid #2B547E;
  cursor: pointer;
  `;

const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  color: #154360;
  `;

const Legend = styled.legend`
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;`
  ;


const ScrollableContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;
  width: 100%;
`;


function PopupContent({ onClose, onSave }) {
  const [error, setError] = useState('');
  const [module, setModule] = useState('');
  const [defaut,setDefaut]=useState('');
  const [defaut3,setDefaut3]=useState('');
  const [option,setOption]=useState('');
  const [composant, setComposant] = useState('');
  const [typeComposant, setTypeComposant] = useState('-- Select --');
  const [typeData, setTypeData] = useState('-- Select --');
  const [plageCaracteresmin, setPlageCaracteresmin] = useState('');
  const [plageCaracteresmax, setPlageCaracteresmax] = useState('');
  const [obligatoire, setObligatoire] = useState('');
  const [chiffres, setChiffres] = useState('');
  const [visible, setVisible] = useState('');
  const [numItems,setNumItems]=useState('0'); 
  const [pItems,setPropItems]=useState(''); 
  const [items, setItems] = useState([]);

  const [min_items,setMinItems]=useState('0');
  const [checkItem,setCheckedItem]=useState('');
  const [checkItem1,setCheckedItems]=useState('');
  const [max_items,setMaxItems]=useState('0');
  const [active, setActive] = useState('');
  const [valeurEntieremin, setValeurEntieremin] = useState('');
  const [valeurEntieremax, setValeurEntieremax] = useState(''); 
  const [Datemin, setDatemin] = useState('');
  const [Datemax, setDatemax] = useState(''); 

  const [lettreMaj, setValeurLettreMaj] = useState('');
  const [lettreMin, setValeurLettreMin] = useState('');
  const [clic, setClic] = useState('');
  const [double, setDouble] = useState('');
  const [caractereSpec, setCaractereSpec] = useState('');
  const [caractereSensible, setCaractereSensible] = useState('');
  const [espace, setEspace] = useState('');
  const [checked, setChecked] = useState('');
  const [showInputField, setShowInputField] = useState(false);
  
  const [defaut1, setDefaut1] = useState('');
  const [defaut2, setDefaut2] = useState('');
  const [emptyField,setEmptyField]=useState('');



  const handleTypeComposantChange = (event) => {
    setTypeComposant(event.target.value);
    setShowInputField(false); 
  };

  const handleTypeDataChange = (event) => {
    setTypeData(event.target.value);
    if (typeComposant === 'Input') {
      setShowInputField(true); 
    } else {
      setShowInputField(false); 
    }
  };

  const saveToExcel = async () => {
    let data = {
      module,
      composant,
      typeComposant,
    };

    let data1 = {
      module,
      composant,
      typeComposant,
    };

    
    /*if (setComposant().trim() === '') {
      toast.error('Please select an option');
      return;
    }*/
    const componentData = [];
    

    if (typeComposant === "Input") {
      if (typeData === "Integer") {
        data = {
          ...data,
          typeData,
          valeurEntieremin,
          valeurEntieremax,
          obligatoire,
          visible,
          emptyField,
          defaut,
        };
      }
      if (typeData === "Double") {
        data = {
          ...data,
          typeData,
          valeurEntieremin,
          valeurEntieremax,
          obligatoire,
          visible,
          emptyField,
          defaut,
        };
      }
      if (typeData === "Date") {
        data = {
          ...data,
          typeData,
          Datemin,
          Datemax,
          option,
          obligatoire,
          visible,
          emptyField,
          defaut,
        };
      }
      if (typeData === "String") {
        data = {
          ...data,
          typeData,
          plageCaracteresmin,
          plageCaracteresmax,
          obligatoire,
          lettreMin,
          lettreMaj,
          chiffres,
          caractereSpec,
          caractereSensible,
          espace,
          visible,
          emptyField,
          defaut,
        };
      }
    }
     if (typeComposant === "Button") {
      data = {
        ...data,
        typeComposant,
        obligatoire,
        active,
        clic,
        defaut1,
        defaut3,
      };
    }
    if (typeComposant === "Checkbox") {
      data = {
        ...data,
        typeComposant,
        obligatoire,
        active,
        checked,
        defaut1,
        clic,
        defaut2,
        defaut3,
        checkItem1,
        numItems,
        min_items,
        max_items
      };
    }
    if (typeComposant === "Radio") {
      data = {
        ...data,
        typeComposant,
        obligatoire,
        active,
        checked,
        defaut2,
        defaut3,
        numItems,
        pItems,
        //min_items,
        //max_items,
        checkItem,
        checkItem1,
        defaut1,
        clic
      };
    }
    
    componentData.push(data);
    // clear the form
    setModule("");
    setComposant("");
    setTypeComposant("");
    setTypeData("");
    setValeurEntieremin("");
    setValeurEntieremax("");
    setObligatoire(false);
    setVisible(false);
    setEmptyField(false);
    setDefaut("");
    setDatemax("");
    setDatemin("");
    setPlageCaracteresmin("");
    setPlageCaracteresmax("");
    setValeurLettreMin(false);
    setValeurLettreMaj(false);
    setChiffres(false);
    setCaractereSpec(false);
    setCaractereSensible(false);
    setEspace(false);
    setActive(false);
    setClic(false);
    setDefaut1("");
    setDefaut3("");
    setChecked(false);
    setDefaut2("");
    setDefaut3("");
    setNumItems("");
    setItems("");
    setMinItems("");
    setMaxItems("");   
    setCheckedItems("");
    setCheckedItem("");
    setPropItems("");

    try {

      const response = await fetch('/api/save-to-excel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to save data to Excel');
      }
    
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${module}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      
      toast.info("Please wait!!! Your file is currently being generated....",{ duration: 2000}); 

    } catch (err) {
      console.error(err);
    }
  };
  

    const isEntier = typeComposant === "Integer";
    const isInput = typeComposant === "Input"; 
    const isChaine = typeData === "String"; 
    const isDate = typeData === "Date"; 
    const isInt = typeData === "Integer"; 
    const isDouble = typeData === "Double"; 

    const isButton = typeComposant === "Button";
    const check = typeComposant === "Checkbox" || typeComposant === "Radio";
    const ischeck = typeComposant === "Checkbox" 
    const isRadio = typeComposant === "Radio";
    const isActive = typeComposant != "Input"
    const isConcat = typeData === "String" || typeData === "Integer" || typeData === "Double" || typeData === "Date";
    const isVal = typeData === "Integer" || typeData === "Double"  || typeComposant === 'Input' ;
    const isEmpty = typeComposant ==="Button" || typeComposant ==="Checkbox" ||  typeComposant ==="Radio"
    ||typeComposant ==="Input";
    const isEmptData =typeData === " "


    const handleNumItemsChange = (event) => {
      const newNumItems = parseInt(event.target.value);
      setNumItems(newNumItems);
      setItems(Array(newNumItems).fill(''));
    };
    

    const handleSave = () => {
      const formData = new FormData();
      fetch('/api/save-model', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to save data to Excel');
          }
          toast.dark("The model of the downloaded file saved with success!!!", {
            duration: 2000 // the toast will be displayed for 3 seconds (3000 milliseconds)
          });
              return response.json();
        })
        .then(data => {
          console.log(data.message);
        })
        .catch(err => {
          console.error('Error saving model:', err);
        });
    };
    
  return (
    <Container>
      <Title>Acceptance Criteria</Title>
      <ScrollableContainer>
      <form>

        <Fieldset>
          <Legend>Module Name</Legend>
          <Input type="text" placeholder="Ex: Login Module..." id="module" name="module" value={module} 
          onChange={(event) => setModule(event.target.value)} required onInvalid={(event) => {
            event.target.setCustomValidity('Ce champ est requis');
          }}/>
        </Fieldset>
        <Fieldset>
          <Legend>Component Name</Legend>
          <Input type="text" required placeholder="Ex: Login Button..." id="composant" name="composant" value={composant} 
          onChange={(event) => setComposant(event.target.value)}/>
        </Fieldset>
        
        <Fieldset>
          <Legend > Type Component</Legend>
          <Select id="typeComposant" value={typeComposant} onChange={handleTypeComposantChange} required>
             <option value="" selected>-- Select --</option>
             <option value="Input" selected>Input Area</option>
             <option value="Button">Button</option>
             <option value="Checkbox">Checkbox</option>
             <option value="Radio">Radio</option>
          </Select>
        </Fieldset>
        {isInput &&(
            <>
        <Fieldset>
          <Legend htmlFor="typeData"> Type Data</Legend>
          <Select id="typeData" value={typeData} onChange={handleTypeDataChange} required>
             <option value=" ">-- Select --</option>
             <option value="String">String</option>
             <option value="Integer">Integer</option>
             <option value="Date">Date</option>
             <option value="Double">Double</option>
          </Select>
        </Fieldset>
        </>)}
        { isChaine && !isButton && !isRadio && !ischeck && (
          <>
        <Fieldset>
          <Legend>Range Characters</Legend>
          <Input type="number" placeholder="Minimum" required id="min_caractere" value={plageCaracteresmin}
          onChange={(event) => setPlageCaracteresmin(event.target.value)}/>
          <Input type="number" placeholder="Maximum" id="max_caractere" value={plageCaracteresmax}
          onChange={(event) => setPlageCaracteresmax(event.target.value)} />
        </Fieldset>
        </>
        )}
        {isVal && isEmpty && !isDate && !isChaine && !isButton && !ischeck && !isRadio && !isEmptData && (
            <>
            <Fieldset>
                <Legend>Range Values</Legend>
                <Input type="number" placeholder="Minimum" required id="min_val" value={valeurEntieremin}
                onChange={(event) => setValeurEntieremin(event.target.value)}/>
                <Input type="number" placeholder="Maximum" required id="max_val" value={valeurEntieremax}
                onChange={(event) => setValeurEntieremax(event.target.value)}/>
            </Fieldset>
            </>
        )}

            { showInputField && isDate && (
              <>
              <Fieldset>
                  <Legend>Range Dates</Legend>
                  <Input type="date" required id="min_date" value={Datemin}
                  onChange={(event) => setDatemin(event.target.value)}/>
                  <Input type="date" required id="max_date" value={Datemax}
                  onChange={(event) => setDatemax(event.target.value)}/>
              </Fieldset>
              
              </>
            )}
        <Fieldset>
        <table>
            <tbody>
              { isEmpty && !isEmptData && ( 
                <>
            <tr >
                <td><Legend for="obligatoireC">Required Field</Legend></td>
                <td><input type="checkbox" id="obligatoireC" value={obligatoire} 
                onChange={(event) => setObligatoire(event.target.checked ? "yes" : "no")}/></td>
            </tr>
            </>
              )}
            {showInputField && isChaine && (
                    <>
            <tr>
                <td><Legend for="lettres-minuscules">Lowercase</Legend></td>
                <td><input type="checkbox" id="lettres-minuscules" value={lettreMin} onChange={(event) => setValeurLettreMin(event.target.checked ? "yes" : "no")}/></td>
            </tr>
            <tr>
                <td><Legend for="lettres-majuscules">Capital letters</Legend></td>
                <td><input type="checkbox" id="lettres-majuscules" value={lettreMaj} onChange={(event) => setValeurLettreMaj(event.target.checked ? "yes" : "no")} /></td>
            </tr>
            </>
            )}
            { showInputField && isChaine && (
                <>
            <tr>
                <td><Legend for="chiffres_input">Numbers</Legend></td>
                <td><input type="checkbox" id="chiffres_input" value={chiffres} onChange={(event) => setChiffres(event.target.checked ? "yes" : "no")}/></td>
            </tr>
            </>
            )
            }
             { isEntier && (
                <>
                <tr>
                    <td><Legend for="doubleC">Double</Legend></td>
                    <td><input type="checkbox" id="doubleC" value={double} onChange={(event) => setDouble(event.target.checked ? "yes" : "no")}/></td>
                </tr>
                </>
             )}

            {showInputField && isChaine && (
                    <>
            <tr>
                <td><Legend for="caractSpec">Special characters</Legend></td>
                <td><input type="checkbox" id="caractSpec" value={caractereSpec} onChange={(event) => setCaractereSpec(event.target.checked ? "yes" : "no")}/></td>
            </tr>
            <tr>
                <td><Legend for="sensibleCase">Case Sensitive</Legend></td>
                <td><input type="checkbox" id="sensibleCase" value={caractereSensible} onChange={(event) => setCaractereSensible(event.target.checked ? "yes" : "no")}/></td>
            </tr>
            <tr>
                <td><Legend for="spaces">Spaces</Legend></td>
                <td><input type="checkbox" id="spaces" value={espace} onChange={(event) => setEspace(event.target.checked ? "yes" : "no")}/></td>
            </tr>
            </>
            )}

            {
                !isButton && !check && isEmpty && !isEmptData &&
            <>
            <tr>
                <td><Legend for="visibleC">Visible</Legend></td>
                <td><input type="checkbox" id="visibleC" value={visible} onChange={(event) => setVisible(event.target.checked ? "yes" : "no")}/></td>
            </tr>
            </>
            }
            
            {check && (
                <>
                    <tr>
                        <td><Legend style={{ width:'160px'}}>Number of Items:</Legend></td>
                        <td><Input type="number" required id="numItems" value={numItems}
                        onChange={handleNumItemsChange}
                style={{ width:'30px'}}/></td>
                </tr>
                <tr>
                        <td><Legend style={{ width:'160px'}}>Proposed Items:</Legend></td>
                        <td><Input type="text" required  placeholder="Add Items..."  id="pItems" value={pItems}
                        onChange={(event) => setPropItems(event.target.value)}
                style={{ width:'150px'}}/></td>
                </tr>
                    </>
                  )}

                  { ischeck && (
                    <>
                      <tr>
                        <td><Legend style={{ width:'160px'}}>Checked Items:</Legend></td>
                        <Input type="text"style={{ width:'100px',height:'20px'}} placeholder="Specify Items checked.." id="checkItem1" name="checkItem1" value={checkItem1}
                        onChange={(event) => setCheckedItems(event.target.value)} />
                    </tr>
                    </>
                  )

                  }
                  {isRadio && (
                    <>
                  <tr>
                  <td><Legend style={{ width:'160px'}}>Checked Item:</Legend></td>
                  <Input type="text"style={{ width:'150px'}} placeholder="Specify Item.." id="checkItem" name="checkItem" value={checkItem}
                  onChange={(event) => setCheckedItem(event.target.value)} />
                    </tr>
                    </>
                     )}
                    {ischeck && (
                    <>
                    <tr>
                        <td><Legend for="check">Min Items Checked</Legend></td>
                        <td><Input type="number" required id="min_items" value={min_items}
                onChange={(event) => setMinItems(event.target.value)}
                style={{ width:'30px'}}/></td>
                    </tr>

                    <tr>
                        <td><Legend for="check">Max Items Checked</Legend></td>
                        <td><Input type="number" required id="max_items" value={max_items}
                onChange={(event) => setMaxItems(event.target.value)}
                style={{ width:'30px'}}/></td>
                    </tr>
                </>
            )}
              { isEmpty && !isEmptData && ( 
                <>
            <tr>
              <Legend style={{ fontSize:'14px', color:'crimson' }}>By Default:</Legend>  
            </tr>
            </>)}
            { showInputField && isConcat && (
              <>
            <tr >
                <td><Legend for="emptyField">Empty Field</Legend></td>
                <td><input type="checkbox" id="emptyField" value={emptyField} 
                onChange={(event) => setEmptyField(event.target.checked ? "yes" : "no")}/></td>
              <td><Legend style={{fontSize:'14px', color:'crimson' }}>Else*:</Legend></td><td><Input type="text" required placeholder="Ex: Specify the default Content here..." 
                 id="defaut" name="defaut" value={defaut}
                onChange={(event) => setDefaut(event.target.value)} 
                style={{ width: '300px' }}
                /></td>
            </tr>
            </>
            )}
            { isActive && isEmpty && (
                <>
            <tr>
            <td><Legend for="activeC">Active</Legend></td>
                <td><input type="checkbox" id="activeC" value={active} onChange={(event) => setActive(event.target.checked ? "yes" : "no")} /></td>
                <td><Legend style={{fontSize:'14px', color:'crimson' }}>When*:</Legend></td><td><Input type="text" required placeholder="Ex: The username & password fields are already filled..." 
                 id="defaut3" name="defaut3" value={defaut3}
                onChange={(event) => setDefaut3(event.target.value)} 
                style={{ width: '350px' }}
                /></td>
            </tr>
            </>
            )}
            {check && (
              <>
            <tr>
                        <td><Legend for="check">Checked</Legend></td>
                        <td><input type="checkbox" id="check" value={checked} onChange={(event) => setChecked(event.target.checked ? "yes" : "no")}/></td>
                        <td><Legend style={{fontSize:'14px', color:'crimson' }}>Specify*:</Legend></td><td><Input type="text" required placeholder="Ex: Enter the default Item here else None..." 
                        id="defaut2" name="defaut2" value={defaut2}
                        onChange={(event) => setDefaut2(event.target.value)} 
                        style={{ width: '350px' }}
                        /></td>
            </tr>
            </>
          )}
            {isButton && (
                    <>
            <tr>
                <td><Legend for="Cliquable">clicked</Legend></td>
                <td><input type="checkbox" id="Cliquable" onChange={(event) => setClic(event.target.checked ? "yes" : "no")}/></td>
                <td><Legend style={{fontSize:'14px', color:'crimson' }}>When*:</Legend></td><td><Input type="text" required placeholder="Ex: The Button is already active..." 
                 id="defaut1" name="defaut1" value={defaut1}
                onChange={(event) => setDefaut1(event.target.value)} 
                style={{ width: '350px' }}></Input></td></tr>
            </>
            )}

            </tbody>
        </table>
            <AjouterButton type="button" onClick={saveToExcel}>Generate</AjouterButton>
            <SaveButton type="button" onClick={handleSave}>Save Model</SaveButton>
            <ToastContainer />
        </Fieldset>
    
        </form>
        </ScrollableContainer>
    </Container>
  );
  };


export default PopupContent;
