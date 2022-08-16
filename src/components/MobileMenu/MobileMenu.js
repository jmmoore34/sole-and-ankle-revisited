/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
		<Content aria-label='Menu'>
			<CloseButton onClick={onDismiss}>
				<Icon id='close'></Icon>
				<VisuallyHidden>Dismiss menu</VisuallyHidden>
			</CloseButton>
			<Spacer />
      <Nav>
        <NavItem href="/sale">Sale</NavItem>
        <NavItem href="/new">New&nbsp;Releases</NavItem>
        <NavItem href="/men">Men</NavItem>
        <NavItem href="/women">Women</NavItem>
        <NavItem href="/kids">Kids</NavItem>
        <NavItem href="/collections">Collections</NavItem>
      </Nav>
      <Footer>
        <A href="/terms">Terms and Conditions</A>
        <A href="/privacy">Privacy Policy</A>
        <A href="/contact">Contact Us</A>
      </Footer>
	  	</Content>
    </Overlay>
  );
};

const A = styled.a`
	text-decoration: none;
	color: var(--color-gray-500)
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const NavItem = styled.a`
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};
	text-decoration: none;
	font-size: 1.125rem;
	text-transform: uppercase;

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

const Spacer = styled.div`
	flex: 1;
`;

const Footer = styled.footer`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
	position: absolute;
	top: 10px;
	right: 0px;
	padding: 16px; 
`;

const Overlay = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: var(--color-backdrop);
	display: flex;
	justify-content: flex-end;
`;

const Content = styled(DialogContent)`
	background: white;
	width: 300px;
	height: 100%;
	padding: 36px;
	display: flex;
	flex-direction: column;
`;

export default MobileMenu;
