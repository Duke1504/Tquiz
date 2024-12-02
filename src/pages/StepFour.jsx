import { Button, Input } from "../components";

export const StepFour = () => {
  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>4. Занимательный вопрос</h2>
        <ul className="level-variants">
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-1" />
            <label htmlFor="variant-1">1</label>
          </li>
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-2" />
            <label htmlFor="variant-2">2</label>
          </li>
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-3" />
            <label htmlFor="variant-3">3</label>
          </li>
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-4" />
            <label htmlFor="variant-4">4</label>
          </li>
          <li className="variant-wrapper">
            <Input InputType="radio" InputName="variant" InputID="variant-5" />
            <label htmlFor="variant-5">5</label>
          </li>
        </ul>
        <Button type="button" id="next-btn" text="Далее" disabled />
      </div>
    </div>
  );
};
