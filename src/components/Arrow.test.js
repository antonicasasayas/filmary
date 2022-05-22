import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Arrow from "./Arrow";

test("click triggers onClick function", () => {
  const onClick = jest.fn();

  // eslint-disable-next-line testing-library/render-result-naming-convention
  const ArrowComponent = render(
    <Arrow
      html="&#8250;"
      onClick={onClick}
          type="right"
          
    />
  );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = ArrowComponent.getByTestId('sliderButton')
    
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});
