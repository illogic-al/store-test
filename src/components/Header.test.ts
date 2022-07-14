import { render } from "@testing-library/svelte";
import Header from "./Header.svelte";


describe("Header", () => {
  it("should render without crashing", () => {
    const { container } = render(Header);
    expect(container.firstChild).toMatchSnapshot();
  });
});