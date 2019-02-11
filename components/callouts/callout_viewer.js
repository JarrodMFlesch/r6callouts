import React, { Component } from 'react';
import styled from 'styled-components';

import CalloutImageBox from './callout_image_box';
import TimeBar from './timebar';

const CalloutViewerWrapper = styled.div`
	background: linear-gradient(120deg, #44505f, #19232e);
	margin-left: 260px;
	color: #fff;
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 60px);
	overflow-x: hidden;
	overflow-y: scroll;
	> div {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		> div:last-child {
			flex: 1;
		}
		> div:nth-child(2) {
			flex: 5;
		}
	}
`;

const ViewerInformation = styled.div`
	margin-bottom: 8px;
	margin-top: 20px;
	font-size: 2rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	> span:last-child {
		float: right;
	}
`;

class callout_viewer extends Component {
	render() {
		return (
			<CalloutViewerWrapper>
				<div>
					<ViewerInformation>
						<span className="map_name">
							{this.props.activeMap ? this.props.activeMap : 'No map selected'}
						</span>
						<span className="showing_info">
							Showing {this.props.activeImageIndex + 1} of{' '}
							{this.props.activeMapImages.length}
						</span>
					</ViewerInformation>
					<CalloutImageBox
						activeMap={this.props.activeMap}
						timer={this.props.timer}
						timerIsPaused={this.props.timerIsPaused}
						activeImage={
							this.props.activeMapImages[this.props.activeImageIndex]
						}
					/>
					<TimeBar
						timer={this.props.timer}
						timerIsPaused={this.props.timerIsPaused}
						stopTimer={this.props.stopTimer}
						startTimer={this.props.startTimer}
					/>
				</div>
			</CalloutViewerWrapper>
		);
	}
}

export default callout_viewer;
