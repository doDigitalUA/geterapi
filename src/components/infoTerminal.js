import React, { useState } from 'react';


function Info() {
	const [serial, setSerial] = useState('');
	const [terminalID, setTerminalID] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	return (
		<>
		<label>Cерійний номер</label>
		 <input placeholder="Введіть серійний номер" 
                        className="relative w-full px-3 py-3 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        onChange={(e) => setSerial(e.target.value)}/>
		<label>ID номер  терміналу</label>
		<input placeholder="Введіть ID  терміналу" 
                        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"               
			onChange={(e) => setTerminalID(e.target.value)}/>
               <button onClick={handleSubmit}
                       className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                       type="button">
			       Надіслати
               </button>
		</>
		)
	}

export default Info;
