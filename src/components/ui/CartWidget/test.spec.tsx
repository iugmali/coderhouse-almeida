import {render} from "@testing-library/react";
import CartWidget from "@/components/ui/CartWidget/index";

describe('CartWidget', () => {
  it('renders unchanged', () => {
    const {container} = render(<CartWidget />)
    expect(container.firstChild).toMatchSnapshot();
  })
})
