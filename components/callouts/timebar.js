import React, { Component } from 'react';
import styled from 'styled-components';

import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';

const TimebarWrapper = styled.div`
	font-size: 1.6rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	display: flex;
	.time {
		display: inline;
		margin: 0;
		line-height: 2.4rem;
	}
	.seconds_s {
		text-transform: lowercase;
	}
	.toggle_time {
		cursor: pointer;
		transition: 300ms ease;
		margin-left: 1.5rem;
		font-size: 2.4rem;
		display: inline-block;
		&.paused {
			&:hover {
				color: green;
			}
		}
		&.playing {
			&:hover {
				color: #e64e4e;
			}
		}
	}
`;

class timebar extends Component {
	handleTimerToggle = () => {
		if (this.props.timerIsPaused) {
			this.props.startTimer();
		} else {
			this.props.stopTimer();
		}
	};

	render() {
		return (
			<TimebarWrapper>
				<p className="time">
					Time Remaining: {this.props.timer}
					<span className="seconds_s">s</span>
				</p>
				{/* inline if statement needed to determine what icon to show */}
				<div
					onClick={this.handleTimerToggle}
					className={
						this.props.timerIsPaused
							? 'paused toggle_time'
							: 'playing toggle_time'
					}
				>
					{this.props.timerIsPaused ? (
						<FaRegPlayCircle />
					) : (
						<FaRegPauseCircle />
					)}
				</div>
			</TimebarWrapper>
		);
	}
}

export default timebar;
