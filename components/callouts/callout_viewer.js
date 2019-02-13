import React, { Component } from 'react';
import styled from 'styled-components';

import CalloutImageBox from './callout_image_box';
import TimeBar from './timebar';

const CalloutViewerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	> div {
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media (max-width: 800px) {
			width: 100%;
		}
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
	font-weight: 700;
	letter-spacing: 2px;
	> span:last-child {
		float: right;
	}
	> span:first-child {
		float: left;
	}

	.coming_soon {
		background: #04b995;
		padding: 3px 9px;
		border-radius: 4px;
		font-size: 14px;
		letter-spacing: 0.7px;
		text-transform: uppercase;
		font-weight: 800;
		margin-left: 10px;
		position: relative;
		top: -3px;
	}
`;

class callout_viewer extends Component {
	render() {
		return (
			<CalloutViewerWrapper>
				<div>
					<ViewerInformation>
						<span className="map_name">
							{this.props.activeMap ? this.props.activeMap : ''}
							{this.props.activeMapImages[this.props.activeImageIndex] ===
								undefined && <span className="coming_soon">Coming Soon</span>}
						</span>

						{this.props.activeMapImages[this.props.activeImageIndex] !==
							undefined && (
							<span className="showing_info">
								{this.props.activeImageIndex + 1} of{' '}
								{this.props.activeMapImages.length}
							</span>
						)}
					</ViewerInformation>
					{this.props.activeMapImages[this.props.activeImageIndex] !==
						undefined && (
						<>
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
						</>
					)}
				</div>
			</CalloutViewerWrapper>
		);
	}
}

export default callout_viewer;
