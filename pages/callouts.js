import React, { Component } from 'react';
import Page from '../layouts/main';
import styled from 'styled-components';

// -- json
import CalloutImageJson from '../static/json/map_callouts.json';

import MapSelector from '../components/callouts/map_selector';
import CalloutViewer from '../components/callouts/callout_viewer';

//
// -- Styles
const CalloutWrapper = styled.div`
	display: flex;
	> div {
		flex: 1;
	}
`;

class Callouts extends Component {
	state = {
		active_map: '',
		timer: 5,
		timer_is_paused: false,
		map_images: [
			{
				image_path:
					'static/images/callout_images/clubhouse/blue_stairs_supply.jpg',
				callout_location: 'clubhouse image 1'
			}
		],
		map_image_index: 0
	};

	componentDidMount() {
		this.startTimer();
	}

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
		this.setState({ active_map: map_name, timer: 5 });
		this.setActiveMapImages(map_name);
	};

	setActiveMapImages = map_name_passed => {
		CalloutImageJson.map(current_map => {
			if (current_map.map_name === map_name_passed) {
				this.setState(
					{ map_images: current_map.images, map_image_index: 0 },
					this.startTimer()
				);
			}
		});
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

	render() {
		return (
			<Page>
				<CalloutWrapper>
					<MapSelector
						setActiveMap={this.setActiveMap}
						activeMap={this.state.active_map}
					/>
					<CalloutViewer
						activeMap={this.state.active_map}
						activeMapImages={this.state.map_images}
						activeImageIndex={this.state.map_image_index}
						timer={this.state.timer}
						timerIsPaused={this.state.timer_is_paused}
						stopTimer={this.stopTimer}
						startTimer={this.startTimer}
					/>
				</CalloutWrapper>
			</Page>
		);
	}
}

export default Callouts;