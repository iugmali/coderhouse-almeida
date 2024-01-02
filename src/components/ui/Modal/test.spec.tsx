import {render} from "@testing-library/react";
import Modal from "@/components/ui/Modal/index";

describe('Modal', () => {
  it('renders unchanged', () => {
    const {container} = render(<Modal onClose={jest.fn()}>modal</Modal>)
    expect(container.firstChild).toMatchSnapshot();
  })
})
