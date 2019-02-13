import React, { Component } from 'react';

import styled from 'styled-components';

const NavWrapper = styled.div`
	background: red;
	position: fixed;
	left: 100%;
	height: 100%;
`;

class Navigation extends Component {
	render() {
		return (
			<NavWrapper>
				<ul>
					<li>Link 1</li>
					<li>Link 1</li>
					<li>Link 1</li>
				</ul>
			</NavWrapper>
		);
	}
}

export default Navigation;
