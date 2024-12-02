import classNames from 'classnames';

export const Progress = ({ steps, activeStep }) => {

  const progress = (100 / steps) * (activeStep - 1) + '%'

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Прогресс прохождения:</span>
        <span className="indicator__value">
          {progress}
        </span>
      </div>
      <div className="indicator__progressbar">
        {Array(steps)
          .fill("0")
          .map((_, index) => (
            <div
              className={classNames({
                indicator__unit: true, 
                [`indicator__unit-${index + 1}`]: true,
                _active: index < activeStep,
                _current: index === activeStep - 1
              })}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};
