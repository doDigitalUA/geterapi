import React, { useState } from 'react';


function Info() {
	const [serial, setSerial] = useState('');
	const [terminalID, setTerminalID] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

        (async () => {
  const rawResponse = await fetch("https://services.ua.printecgroup.com/tobo/IMS/api.nsf/MainAPIHelper", {
    method: "POST",
	referrerPolicy: "strict-origin-when-cross-origin",
    mode: "cors",
    credentials: "include",
    headers: {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
    body: JSON.stringify({
      "modelName": "InfoTerminal",
      "calledMethod": "allSection",
      "serial": "11111",
      "terminalID": "11111"
    })
  });
  const content = await rawResponse.json();

  console.log(content);
})();

	return (
		<>
					<label>Cерійний номер</label>
					<input
						placeholder="Введіть серійний номер" 
                        className="relative w-full px-3 py-3 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        onChange={(e) => setSerial(e.target.value)}
					/>
				    <label>ID номер  терміналу</label>
					<input
						placeholder="Введіть ID  терміналу" 
                        class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"               
						onChange={(e) => setTerminalID(e.target.value)}
					/>
			

				<button onClick={handleSubmit}
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                        type="button">
					Submit
				</button>
		</>
	);
}

export default Info;
