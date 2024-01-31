
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
  const [copy, setCopy] = useState(false);

  const generatePassword = () => {
    setCopy(false);

    const charset =
      (includeUppercase ? 'ABXYZ' : '') +
      (includeLowercase ? 'abyz' : '') +
      (includeNumbers ? '0189' : '') +
      (includeSpecialChars ? '@#_+' : '');

    if (charset.length <= 0) {
      toast.error('Please select any one', {
        theme: 'colored',
      });
      return;
    }

    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleChange = (event, newValue) => {
    setLength(newValue);
  };

  const copystatus = copy ? 'Copied' : 'Copy';

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-700 to-black text-white p-4 sm:p-8">
        <h2 className="text-3xl font-bold mb-36 sm:mb-12">Password Generator</h2>

        <div className="flex flex-col mt-10 sm:flex-row  w-full">
          <div className="flex flex-col w-full space-y-10 sm:w-1/2 mr-0 sm:mr-4 mb-4 sm:mb-0 ">
            <div className="flex items-center   mb-4 space-x-4">
              <motion.h3 className="text-xl font-bold mb-2" initial={{ y: -1000 }}
                animate={{ y: 0, transition: { duration: 18, ease: "anticipate", type: "spring", stiffness: 80, damping: 16 } }}>Generated Password</motion.h3>

              <motion.div
                className="border p-2 w-full sm:w-64 h-8 text-center items-center"
                initial={{ y: -1000 }}
                animate={{ y: 0, transition: { duration: 18, ease: "easeInOut", type: "spring", stiffness: 80, damping: 18 } }}
              >
                <span className='mb-4'>{password}</span>
              </motion.div>

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

            <div className="w-full">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } }}
                className="text-semibold font-medium text-sm sm:text-base"
              >
                Creating a strong and secure password is crucial to safeguarding your online accounts and personal information. When using our password generator, we recommend enabling all options—uppercase and lowercase letters, numbers, and special characters. By incorporating a diverse set of characters, your password becomes more resilient against various hacking methods.
              </motion.div>
            </div>

            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 25, ease: "easeInOut", type: "spring", stiffness: 80, damping: 29, delay: 0.2 } }}
              className="mt-4"
            >
              <Button
                variant="contained"
                color="success"
                onClick={generatePassword}
                className="w-full"
              >
                Generate Password
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col w-full sm:w-1/2 bg-slate items-center mt-4 sm:mt-0">
            <motion.div className="flex w-full sm:w-3/4 justify-around"
              initial={{ y: -1000 }}
              animate={{ y: 0, transition: { duration: 8, ease: "easeInOut", type: "spring", stiffness: 80, damping: 12 } }}>
              <h1 className='text-bold font-medium mt-2 space-x-4 text-sm sm:text-base'>Password Length <span className='border rounded px-2 shadow-md bg-slate-200 text-black ml-3'>{length}</span></h1>
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
            </motion.div>

            <div className="w-full sm:w-3/4 mt-8 ml-12  sm:mb-8">
              <motion.div className="flex space-x-2 mb-4" initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 18, ease: "easeInOut", type: "spring", stiffness: 40, damping: 13, delay: 0.56 } }}>
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
              </motion.div>

              <motion.div className="flex space-x-2 mb-4" initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 18, ease: "easeInOut", type: "spring", stiffness: 40, damping: 13, delay: 0.98 } }}>
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
              </motion.div>

              <motion.div className="flex space-x-2 mb-4" initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 18, ease: "easeInOut", type: "spring", stiffness: 40, damping: 13, delay: 1.5 } }}>
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
              </motion.div>

              <motion.div className="flex space-x-2 mb-4" initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 18, ease: "easeInOut", type: "spring", stiffness: 40, damping: 13, delay: 1.9 } }}>
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App