import React, { Component } from 'react';
import Main from '../layouts/main';
import Link from 'next/link';
import { FaMicrophoneAlt, FaLifeRing } from 'react-icons/fa';
import styled from 'styled-components';

const HomeWrap = styled.div`
	background: url('static/images/backgrounds/r6_blackice.jpg');
	height: 100vh;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	> div {
		flex: 1;
	}
	.left_side {
		cursor: pointer;
		height: 100%;
		transition: 300ms ease;
		background: rgb(255, 255, 255, 0.5);
		&:hover {
			background: unset;
		}
	}
	.right_side {
		cursor: pointer;
		height: 100%;
		transition: 300ms ease;
		background: rgb(255, 255, 255, 0.5);
		&:hover {
			background: unset;
		}
	}
	a.full_area_link {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: #fff;
		font-size: 4.5rem;
		.all_text {
			max-width: 500px;
			text-align: center;
			.icon {
				display: inline-block;
				font-size: 7rem;
			}
			.link_text {
				display: block;
				margin-top: 2rem;
				line-height: 140%;
			}
		}
	}
`;

class index extends Component {
	render() {
		return (
			<Main>
				<HomeWrap>
					<div className="left_side">
						<Link href="callouts">
							<a className="full_area_link">
								<span className="all_text">
									<FaMicrophoneAlt className="icon" />
									<span className="link_text">
										I want to get better with my callouts
									</span>
								</span>
							</a>
						</Link>
					</div>
					<div className="right_side">
						<Link href="support">
							<a className="full_area_link">
								<span className="all_text">
									<FaLifeRing className="icon" />
									<span className="link_text">
										I want to get better with my callouts
									</span>
								</span>
							</a>
						</Link>
					</div>
				</HomeWrap>
			</Main>
		);
	}
}

export default index;
