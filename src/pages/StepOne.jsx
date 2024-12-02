import { Button, Input } from "../components";

export const StepOne = () => {
  return (
    <div className="single-input-quiz">
      <div className="question">
        <h2>1. Занимательный вопрос</h2>
        <Input
          type="text"
          name="answer"
          placeholder="Ваш ответ"
          errorMessage="Введите номер в правильном формате"
        />
        <Button type="button" id="next-btn" text="Далее" disabled />
      </div>
    </div>
  );
};
