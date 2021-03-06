import { useState } from 'react';
import { APP_NAME } from '../../../config';
import { actionLogOut, isAuth } from '../../../actions/auth';
import Link from 'next/link';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import Router from 'next/router';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<Navbar color='light' light expand='md'>
				<Link href='/'>
					<NavLink className='font-weight-bold'>{APP_NAME}</NavLink>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						{!isAuth() && (
							<>
								<NavItem>
									<Link href='/auth/login'>
										<NavLink>Log In</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<Link href='/auth/signup'>
										<NavLink>Sign Up</NavLink>
									</Link>
								</NavItem>
							</>
						)}
						{isAuth() && (
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										<NavLink
											style={{ cursor: 'pointer' }}
											onClick={() =>
												actionLogOut(() => Router.replace(`/auth/login`))
											}
										>
											Log Out
										</NavLink>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						)}
					</Nav>
				</Collapse>
			</Navbar>

			<style jsx>{`
				a {
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export default Header;
