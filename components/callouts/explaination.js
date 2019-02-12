import React, { Component } from 'react';
import styled from 'styled-components';

const ExplainationWrapper = styled.div`
	margin-top: 55px;
	margin-left: 35px;
	h1 {
		font-size: 2.4rem;
		color: #00e6b6;
		margin-top: 2.8rem;
	}
	p {
		font-size: 1.8rem;
		color: #fff;
		max-width: 800px;
		line-height: 2.8rem;
		margin-top: 1rem;
		margin-left: 1.8rem;
	}
	ul {
		margin-top: 1rem;
		li {
			font-size: 1.8rem;
			line-height: 140%;
		}
	}

	a {
		color: #fff;
		padding-bottom: 1px;
		text-decoration-color: #00e6b3;
		border-radius: 2px;
		padding: 0px 4px;
		font-weight: 600;
		transition: 300ms ease;
		letter-spacing: 0.5px;
		&:hover {
			background: #02ffc8;
			color: #41524f;
		}
	}
`;

class Explaination extends Component {
	render() {
		return (
			<ExplainationWrapper>
				<h1>Overview</h1>
				<p>
					Too many times we join ranked or casual games and the callouts are
					inconsistent to what we have heard before or non-existant, and in a
					game like Rainbow that can be be the deciding factor of a round or
					even a match. I think teams and solo-queue players would really
					benefit from a well known set of callouts, and thats where this app
					aims to help out the community.
				</p>

				<h1>How To</h1>
				<ul>
					<li>Select a map on the left hand side</li>
					<li>A set of images for that map will load</li>
					<li>
						You will have 5 seconds to guess the callout and then the answer
						will be given
					</li>
				</ul>

				<h1>Goals</h1>
				<ul>
					<li>More consistent callouts</li>
					<li>Lower barrier of entry for new players</li>
					<li>More fun to be had in seasons to come</li>
				</ul>

				<h1>Want to help? Sweet!</h1>
				<p>
					If you want to help you can visit the{' '}
					<a href="https://github.com/JarrodMFlesch/r6callouts" target="_blank">
						R6Callouts Github repository
					</a>{' '}
					for more information.
				</p>
			</ExplainationWrapper>
		);
	}
}

export default Explaination;
