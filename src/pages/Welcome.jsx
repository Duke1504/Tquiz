import { useState } from "react";
import { useNavigate } from "react-router";

import { Button, Input } from '../components';

export const Welcome = () => {
  const navigate = useNavigate()

  const [isNameValid, setIsNameValid] = useState(false)
  const [isTelValid, setIsTelValid] = useState(false)

  const isDisabled = !(isNameValid && isTelValid)
  console.log(isDisabled);


  const onNameInputHandler = e => {
    const value = e.target.value.trim()

    if (value.length < 3) {
      setIsNameValid(false)
      return
    }

    setIsNameValid(true)

  }

  const onTelInputHandler = e => {
    const value = e.target.value.trim()

    if (value.length !== 13) {
      setIsTelValid(false)
      return
    }

    if (value.slice(0, 4) !== '+998') {
      setIsTelValid(false)
      return
    }

    setIsTelValid(true)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    navigate('/step/1')
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form" onSubmit={onSubmitHandler}>
            <Input label="Ваше имя" type="text" name="username" id="username" placeholder="Ваш ответ" onInput={onNameInputHandler} />
            <Input label="Ваш номер" type="tel" name="phone" id="phone" placeholder="+998 XX XXX XX XX" pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$" onInput={onTelInputHandler} />

            <Button type={'submit'} id={'next-btn'} text='Далее' disabled={isDisabled} />
          </form>
        </div>
      </div>
    </div>
  );
};
