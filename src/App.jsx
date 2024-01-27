
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';



function App() {





  const [password, setPassword] = useState('');
  const [length, setLength] = useState(4);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [copy, setCopy] = useState(false)

  const generatePassword = () => {
    setCopy(false)

    const charset = (
      (includeUppercase ? 'ABCDEVWXYZ' : '') +
      (includeLowercase ? 'abcwxyz' : '') +
      (includeNumbers ? '012389' : '') +
      (includeSpecialChars ? '@#$%&_+' : '')
    );
    console.log(charset)
    if (charset.length <= 0) {
      
      toast.error( "Please select any  one", {
       
        theme: "colored"
      })
      return
    }

    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      console.log(randomIndex)
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleChange = (event, newValue) => {
    setLength(newValue);
  };

  const copystatus = copy ? 'Copied' : 'Copy'



  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-700 to-black text-white p-16">
        <h2 className="text-3xl font-bold mb-36 ">Password Generator</h2>
        <div className="flex w-full ">
          <div className=" flex flex-col w-6/12  ml-20">
            <div className="flex  items-center mb-4  space-x-4">
              <h3 className="text-xl font-bold mb-2">Generated Password</h3>
              <div className="border p-2 w-64 h-8 text-center items-center"><span className='mb-4'>{password}</span></div>
              <CopyToClipboard text={password}>
                <Tooltip title={copystatus} enterDelay={200} leaveDelay={1000}>
                  {!copy ? (
                    <ContentCopyOutlinedIcon
                      className="cursor-pointer"
                      onClick={() => setCopy(true)}
                    />
                  ) : (
                    <ContentCopyTwoToneIcon
                      className="cursor-pointer text-green-500"
                      style={{ cursor: 'pointer', color: 'green' }}
                    />
                  )}
                </Tooltip>
              </CopyToClipboard>
            </div>
            <div className="w-3/4 h-48 mt-8 ">
              <p className=' text-semibold font-medium '>Creating a strong and secure password is crucial to safeguarding your online accounts and personal information. When using our password generator, we recommend enabling all options—uppercase and lowercase letters, numbers, and special characters. By incorporating a diverse set of characters, your password becomes more resilient against various hacking methods.</p>
            </div>
            <div >

              <Button
                variant="contained"
                color="success"
                onClick={generatePassword}

              >
                Generate Password
              </Button>
            </div>
          </div>

          <div className="flex flex-col w-6/12 bg-slate  items-center ">
            <div className="flex  w-3/4 justify-around ">
              <h1 className='text-bold font-medium mt-2 space-x-4'>Password Length <span className='border rounded px-2 shadow-md bg-slate-200 text-black ml-3'>{length}</span></h1>
              <div className=" w-2/4">

                <Slider
                  aria-labelledby="slider-label"
                  value={length}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  color="success"
                  step={1}
                  marks
                  min={1}
                  max={12}
                />
              </div>
            </div>
            <div className="  mr-52 mt-8">
              

              <div className="flex space-x-2 mb-4">
                <motion.h1
                  className="text-bold font-medium mt-2"
                  initial={{ textDecoration: includeUppercase ? "none" : "line-through" }}
                  animate={{ textDecoration: includeUppercase ? "none" : "line-through" }}
                  transition={{ duration: 0.3 }}
                >
                  Include Uppercase:
                </motion.h1>
                <Switch
                  color="success"
                  checked={includeUppercase}
                  onChange={() => setIncludeUppercase(!includeUppercase)}
                />
              </div>

              <div className="flex space-x-2 mb-4">
                <motion.h1
                  className="text-bold font-medium mt-2"
                  initial={{ textDecoration: includeLowercase ? "none" : "line-through" }}
                  animate={{ textDecoration: includeLowercase ? "none" : "line-through" }}
                  transition={{ duration: 0.3 }}
                >
                  Include Lowercase:
                </motion.h1>
                <Switch
                  color="success"
                  checked={includeLowercase}
                  onChange={() => setIncludeLowercase(!includeLowercase)}
                />
              </div>

              <div className="flex space-x-2 mb-4">
                <motion.h1
                  className="text-bold font-medium mt-2"
                  initial={{ textDecoration: includeNumbers ? "none" : "line-through" }}
                  animate={{ textDecoration: includeNumbers ? "none" : "line-through" }}
                  transition={{ duration: 0.3 }}
                >
                  Include Numbers:
                </motion.h1>
                <Switch
                  color="success"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                />
              </div>

              
              <div className="flex space-x-2 mb-4">
                <motion.h1
                  className="text-bold font-medium mt-2"
                  initial={{ textDecoration: includeSpecialChars ? "none" : "line-through" }}
                  animate={{ textDecoration: includeSpecialChars ? "none" : "line-through" }}
                  transition={{ duration: 0.3 }}
                >
                  Include Special Characters:
                </motion.h1>
                <Switch
                  color="success"
                  checked={includeSpecialChars}
                  onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                />
              </div>


            </div>
          </div>
        </div>

      </div>
      <ToastContainer />
    </>




  );
}

export default App