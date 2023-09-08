import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function GenderSelectionPage() {
  const [selectedGender, setSelectedGender] = useState('');
  const history = useHistory();

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSaveAndRedirect = () => {
    // Здесь вы можете отправить выбранный пол на сервер и перенаправить пользователя
    // на следующую страницу после успешного сохранения.

    // Пример перенаправления на следующую страницу (после успешного сохранения):
    history.push('/nextPage');
  };

  return (
    <div>
      <h1>Выберите ваш пол:</h1>
      <label>
        <input
          type="radio"
          name="gender"
          value="Мужчина"
          checked={selectedGender === 'Мужчина'}
          onChange={handleGenderChange}
        /> Мужчина
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Женщина"
          checked={selectedGender === 'Женщина'}
          onChange={handleGenderChange}
        /> Женщина
      </label>
      <br />
      <button onClick={handleSaveAndRedirect}>Сохранить и перейти</button>
    </div>
  );
}

export default GenderSelectionPage;
