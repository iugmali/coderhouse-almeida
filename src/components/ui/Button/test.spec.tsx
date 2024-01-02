import {render} from "@testing-library/react";
import Button, {TextButton} from "@/components/ui/Button/index";

describe('Button', () => {
  describe('default Button', () => {
    it('renders unchanged', () => {
      const {container} = render(<Button handleClick={jest.fn()}>button</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
  describe('text Button', () =>{
    it('renders unchanged', () => {
      const {container} = render(<TextButton handleClick={jest.fn()}>button</TextButton> )
      expect(container.firstChild).toMatchSnapshot();
    })
  });
});
