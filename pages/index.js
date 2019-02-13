import React, { Component } from 'react';
import Page from '../layouts/main';
import styled from 'styled-components';

// -- json
import CalloutImageJson from '../static/json/map_callouts.json';

import Menu from '../components/Navigation';
import MapSelector from '../components/callouts/map_selector';
import CalloutViewer from '../components/callouts/callout_viewer';
import Explaination from '../components/callouts/explaination';

import { FaMapMarkedAlt } from 'react-icons/fa';

//
// -- Styles
const CalloutWrapper = styled.div`
	display: flex;
	> div {
		flex: 1;
	}
`;

const RightSideContainer = styled.div`
	background: linear-gradient(120deg, #44505f, #19232e);
	margin-left: 260px;
	color: #fff;
	padding: 30px;
	display: block;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 60px);
	overflow-x: hidden;
	overflow-y: scroll;
	transition: 300ms ease;
	@media (max-width: 800px) {
		z-index: 1;
		margin: 0;
		position: fixed;
		top: 0;
		&.hidden {
			top: 100%;
		}
	}
`;

const MapToggle = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	margin: 20px;
	background: #a2a6aa;
	padding: 0;
	font-size: 25px;
	font-weight: 600;
	border-radius: 50%;
	color: #212c38;
	border: 1px solid #ffffff;
	width: 35px;
	height: 35px;
	text-align: center;
	box-shadow: inset 0px 0px 16px 0px #ffffff, 0px 0px 16px 0px #99ffea;
	transition: 300ms ease;
	@media (min-width: 800px) {
		display: none;
	}
	> svg {
		position: relative;
		top: 2px;
	}
	&.hidden {
		bottom: -80px;
	}
`;

class Callouts extends Component {
	state = {
		active_map: 'none',
		timer: 5,
		timer_is_paused: true,
		map_images: [],
		map_image_index: 0,
		viewbox_is_visible: true
	};

	startTimer = () => {
		this.setState({ timer_is_paused: false });
		this.incrementer = setInterval(() => {
			if (this.state.timer === 0) {
				this.changeImage();
			} else {
				this.setState({ timer: this.state.timer - 1 });
			}
		}, 1000);
	};

	stopTimer = () => {
		clearInterval(this.incrementer);
		this.setState({ timer_is_paused: true });
	};

	setActiveMap = map_name => {
		this.stopTimer();
		clearInterval(this.incrementer);
		this.setState({ active_map: map_name, timer: 5, viewbox_is_visible: true });
		this.setActiveMapImages(map_name);
	};

	setActiveMapImages = map_name_passed => {
		let foundMap = false;

		CalloutImageJson.map(current_map => {
			if (current_map.map_name === map_name_passed) {
				for (let i = current_map.images.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[current_map.images[i], current_map.images[j]] = [
						current_map.images[j],
						current_map.images[i]
					];
				}
				this.setState(
					{ map_images: current_map.images, map_image_index: 0 },
					this.startTimer()
				);
				foundMap = true;
			}
		});

		if (!foundMap) {
			this.setState({ map_images: [], map_image_index: 0 }, this.stopTimer());
		}
	};

	changeImage = () => {
		this.stopTimer();
		if (this.show_answer_timeout) {
			clearTimeout(this.show_answer_timeout);
		}
		this.show_answer_timeout = setTimeout(() => {
			if (this.state.map_image_index !== this.state.map_images.length - 1) {
				this.setState(
					{
						map_image_index: this.state.map_image_index + 1,
						timer: 5
					},
					this.startTimer()
				);
			} else {
				this.setState({ map_image_index: 0, timer: 5 }, this.startTimer());
			}
		}, 3500);
	};

	mobileViewboxToggle = () => {
		this.setState({
			viewbox_is_visible: false,
			timer: 5,
			timer_is_paused: true
		});
	};

	render() {
		return (
			<Page>
				<Menu />
				<CalloutWrapper>
					<MapSelector
						setActiveMap={this.setActiveMap}
						activeMap={this.state.active_map}
					/>
					<RightSideContainer
						className={this.state.viewbox_is_visible ? '' : 'hidden'}
					>
						<MapToggle
							onClick={this.mobileViewboxToggle}
							className={this.state.viewbox_is_visible ? '' : 'hidden'}
						>
							<FaMapMarkedAlt />
						</MapToggle>
						{this.state.active_map === 'none' ? (
							<Explaination />
						) : (
							<CalloutViewer
								activeMap={this.state.active_map}
								activeMapImages={this.state.map_images}
								activeImageIndex={this.state.map_image_index}
								timer={this.state.timer}
								timerIsPaused={this.state.timer_is_paused}
								stopTimer={this.stopTimer}
								startTimer={this.startTimer}
							/>
						)}
					</RightSideContainer>
				</CalloutWrapper>
			</Page>
		);
	}
}

export default Callouts;
