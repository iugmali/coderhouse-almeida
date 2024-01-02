import {render} from "@testing-library/react";
import Navbar from "@/components/Navbar/index";

describe('Navbar', () => {
  it('renders unchanged with null Session', () => {
    const {container} = render(<Navbar logout={jest.fn()} session={null} />)
    expect(container.firstChild).toMatchSnapshot();
  })
})
