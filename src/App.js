import React,{useEffect,useState} from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import GrapesJS from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage'; 

const App = () => {
  
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editor) {
        const e = GrapesJS.init({
            container: `#editor`,
            fromElement: true,
            plugins: [gjsPresetWebpage],
            storageManager: {
              id: 'editor',             // Prefix identifier that will be used on parameters
              type: 'remote',          // Type of the storage
              autosave: true,         // Store data automatically
              autoload: true,         // Autoload stored data on init
              stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
              urlStore: 'http://localhost:8000/api/v1/template',
              urlLoad: 'http://localhost:8000/api/v1/template',
            },
        });
        setEditor(e);
    } 
  });
  return (
    <div id="editor"></div>
  );
}

export default App;