import './index.css';

import Start from './components/Start';

import Info from './components/infoTerminal';
import ImageFetch  from './components/MyHook'
function App() {

  return (
  <div class="m-4 p-6 rounded-lg shadow-2xl justify-center max-w-4xl mx-auto bg-gray-100 h-scree">
 <Start />
    
   <section>
   
  
   </section>

   
     <Info />
    <ImageFetch />

  </div>
     )
  }
     export default App;
