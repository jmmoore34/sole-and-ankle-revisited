import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
	<SuperHeader />

      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
		<MobileNav>
			<IconWrapper>
				<Icon id='shopping-bag'></Icon>
				<VisuallyHidden>Open cart</VisuallyHidden>
			</IconWrapper>
			<UnstyledButton>
				<Icon id='search'></Icon>
				<VisuallyHidden>Search</VisuallyHidden>
			</UnstyledButton>
			<UnstyledButton onClick={() => setShowMobileMenu(true)}>
				<Icon id='menu'></Icon>
				<VisuallyHidden>Open menu</VisuallyHidden>
			</UnstyledButton>
		</MobileNav>
        <Spacer />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const IconWrapper = styled(UnstyledButton)`
transform: translateX(-2px);

`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
	justify-content: space-between;
	align-items: center;
	border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.phoneAndSmaller} {
	padding-left 16px;
	padding-right: 16px;
  }
`;

const MobileNav = styled.div`
	display: none;
	margin-left: auto;
	
	@media ${QUERIES.tabletAndSmaller} {
		gap: 32px;
		display: flex;
	}

	@media ${QUERIES.phoneAndSmaller} {
		gap: 16px;
	}
`;

const Nav = styled.nav`
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  display: flex;
  margin: 0px 48px;
  
  @media ${QUERIES.tabletAndSmaller} {
	display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
	flex: none;
  }
`;

const Spacer = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
	flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
