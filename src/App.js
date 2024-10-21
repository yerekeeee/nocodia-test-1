import "./assets/css/style.css";
import React, { useState } from 'react';
import axios from 'axios';
import Configuration from './components/Configuration';
import Workspace from './components/Workspace';

function App() {
  const [contentTopic, setContentTopic] = useState('');
  const [methodology, setMethodology] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  function generateText() {
    axios.post('https://c4f57cb8f7f56b15.mokky.dev/post', { topic: contentTopic, methodology })
        .then((response) => {
          setGeneratedText(response.data.message || 'Сгенерированный текст на основе методологии.');
        })
        .catch((error) => {
          console.error('Error generating text:', error);
        });
  }

    function updateText() {
        axios.patch('https://c4f57cb8f7f56b15.mokky.dev/post', {
            text: generatedText,
        })
            .then((response) => {
                setGeneratedText(response.data.message || 'Обновленный текст на основе новых данных.');
                alert('Текст успешно обновлен!');
            })
            .catch((error) => {
                console.error('Error updating text:', error);
                alert('Ошибка при обновлении текста.');
            });
    }


    function saveToDatabase() {
        axios.post('https://c4f57cb8f7f56b15.mokky.dev/post', {
            text: generatedText,
        })
            .then((response) => {
                console.log('Data saved successfully:', response.data);
                alert('Текст успешно сохранен в базу данных!');
            })
            .catch((error) => {
                console.error('Error saving to database:', error);
                alert('Ошибка при сохранении текста в базу данных.');
            });
    }


  function copyToClipboard() {
    navigator.clipboard.writeText(generatedText)
        .then(() => {
          alert('Текст скопирован в буфер обмена!');
        })
        .catch((error) => {
          console.error('Ошибка при копировании:', error);
        });
  }

  function clearAllFields() {
    setContentTopic('');
    setMethodology('');
    setGeneratedText('');
  }

  return (
      <div className="wrap">
        <Configuration
            contentTopic={contentTopic}
            setContentTopic={setContentTopic}
            methodology={methodology}
            setMethodology={setMethodology}
            generateText={generateText}
            updateText={updateText}
            saveToDatabase={saveToDatabase}
            copyToClipboard={copyToClipboard}
            clearAllFields={clearAllFields}
        />
        <Workspace generatedText={generatedText} />
      </div>
  );
}

export default App;
