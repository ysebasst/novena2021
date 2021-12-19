import styled from "styled-components";

export const NavStyled = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 3.5rem;
  background-color: var(--blue);
  color: #ddd;
  box-shadow: #00000040 0px -1.75rem 1.75rem inset;
`;

export const NavWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  max-width: 720px;
  min-height: 3.5rem;
  margin: 0 auto;

  @media screen and (min-width: 1110px) {
    max-width: 1110px;
  }
`;

export const NavToggleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
`;
export const NavBrandStyled = styled.h1`
  margin: 0;
  flex-grow: 1;
  user-select: none;
`;

export const MenuListStyled = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-left: 0;
  margin: 0;
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: #ffffff;
  color: var(--black);
  transform-origin: left;
  transform: ${({ active }) => (active ? "scale(1, 1)" : "scale(0, 1)")};
  transition: transform 0.3s;

  &::before {
    content: "";
    z-index: -1;
    position: fixed;
    top: 3.5rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    // background-color: #00000080;
  }
`;

export const MenuItemStyled = styled.li`
  list-style: none;

  & a {
    display: flex;
    align-items: center;
    padding: 0.5rem 1.5rem;
    min-height: 3.5rem;
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    &.active {
      color: var(--blue);
    }
  }
`;
