import {render} from "@testing-library/react";
import Navbar from "@/components/Navbar/index";

import {useParams} from "next/navigation";
import {Session} from "next-auth";
import {useFormStatus} from "react-dom";

jest.mock('next/navigation');
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn()
}));
const mockedUseParams = useParams as jest.MockedFunction<typeof useParams>;
const mockedUseFormStatus = useFormStatus as jest.MockedFunction<typeof useFormStatus>;
const mockedSession = {user: {}} as Session;

describe('Navbar', () => {
  describe('Snapshot tests - ', () => {
    it('renders unchanged with null Session and undefined category', () => {
      mockedUseParams.mockReturnValue({});
      const {container} = render(<Navbar logout={jest.fn()} session={null} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with null Session and bibliotecas category', () => {
      mockedUseParams.mockReturnValue({category: 'bibliotecas'});
      const {container} = render(<Navbar logout={jest.fn()} session={null} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with null Session and linguagens category', () => {
      mockedUseParams.mockReturnValue({category: 'linguagens'});
      const {container} = render(<Navbar logout={jest.fn()} session={null} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with null Session and frameworks category', () => {
      mockedUseParams.mockReturnValue({category: 'frameworks'});
      const {container} = render(<Navbar logout={jest.fn()} session={null} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with a Session object, undefined category and sair button not clicked', () => {
      mockedUseParams.mockReturnValue({});
      mockedUseFormStatus.mockReturnValue({data: null, method: null, action: null, pending: false});
      const {container} = render(<Navbar logout={jest.fn()} session={mockedSession} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with a Session object, undefined category and sair button clicked', () => {
      mockedUseParams.mockReturnValue({});
      mockedUseFormStatus.mockReturnValue({data: {} as FormData, method: "", action: "", pending: true});
      const {container} = render(<Navbar logout={jest.fn()} session={mockedSession} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with a Session object, bibliotecas category and sair button not clicked', () => {
      mockedUseParams.mockReturnValue({category: 'bibliotecas'});
      mockedUseFormStatus.mockReturnValue({data: null, method: null, action: null, pending: false});
      const {container} = render(<Navbar logout={jest.fn()} session={mockedSession} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with a Session object, bibliotecas category and sair button clicked', () => {
      mockedUseParams.mockReturnValue({category: 'bibliotecas'});
      mockedUseFormStatus.mockReturnValue({data: {} as FormData, method: "", action: "", pending: true});
      const {container} = render(<Navbar logout={jest.fn()} session={mockedSession} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with a Session object, linguagens category and sair button not clicked', () => {
      mockedUseParams.mockReturnValue({category: 'linguagens'});
      mockedUseFormStatus.mockReturnValue({data: null, method: null, action: null, pending: false});
      const {container} = render(<Navbar logout={jest.fn()} session={mockedSession} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with a Session object, linguagens category and sair button clicked', () => {
      mockedUseParams.mockReturnValue({category: 'linguagens'});
      mockedUseFormStatus.mockReturnValue({data: {} as FormData, method: "", action: "", pending: true});
      const {container} = render(<Navbar logout={jest.fn()} session={mockedSession} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with a Session object, frameworks category and sair button not clicked', () => {
      mockedUseParams.mockReturnValue({category: 'frameworks'});
      mockedUseFormStatus.mockReturnValue({data: null, method: null, action: null, pending: false});
      const {container} = render(<Navbar logout={jest.fn()} session={mockedSession} />)
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders unchanged with a Session object, frameworks category and sair button clicked', () => {
      mockedUseParams.mockReturnValue({category: 'frameworks'});
      mockedUseFormStatus.mockReturnValue({data: {} as FormData, method: "", action: "", pending: true});
      const {container} = render(<Navbar logout={jest.fn()} session={mockedSession} />)
      expect(container.firstChild).toMatchSnapshot();
    });
  });

})
