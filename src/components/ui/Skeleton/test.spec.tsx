import {render} from "@testing-library/react";
import {ItemListSkeleton} from "@/components/ui/Skeleton/index";

describe('Skeleton', () => {
  it('renders unchanged', () => {
    const {container} = render(<ItemListSkeleton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
