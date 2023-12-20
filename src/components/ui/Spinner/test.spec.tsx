import {render} from "@testing-library/react";
import Spinner from "@/components/ui/Spinner/index";

describe('Spinner', () => {
  it('renders unchanged', () => {
    const {container} = render(<Spinner />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
