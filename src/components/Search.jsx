import {useState} from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <CenterWrapper>
      <FormStyle onSubmit={submitHandler}>
      <FaSearch></FaSearch>
      <input 
        onChange={(e) => setInput(e.target.value)}
        type="text" 
        value={input}
        
      />
   
    </FormStyle>
    </CenterWrapper>
  )
}

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh; /* Full screen height */
  position: static;

  
`;

const FormStyle = styled.form `
  margin: 0rem 20rem;
  position: relative;
  width: 100%;

  input{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    width: 100%;
    outline: none;
  }

  svg{
    position: absolute;
    top:50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search