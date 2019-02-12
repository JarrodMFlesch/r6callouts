import React, { Component } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
	border-radius: 15px;
	position: relative;
	img {
		border-radius: inherit;
		max-width: 100%;
		max-height: 100%;
		margin: 10px 0px;
		box-shadow: 0px 0px 6px 0px #212121;
	}
	.answer_overlay {
		transition: 300ms ease;
		position: absolute;
		width: 100%;
		height: calc(100% - 20px);
		margin-top: 10px;
		background: radial-gradient(rgba(0, 0, 0, 0.7) 20%, black);
		border-radius: inherit;
		left: 100%;
		top: 0;
		opacity: 0;
		.answer {
			padding: 40px;
			width: calc(100% - 80px);
			height: calc(100% - 80px);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			span {
				font-size: 40px;
				text-align: center;
				text-transform: uppercase;
				letter-spacing: 2px;
			}
			.correct_words {
				position: relative;
				&:after {
					content: '';
					position: absolute;
					bottom: -20px;
					left: 0;
					height: 4px;
					width: 100%;
					border-radius: 4px;
					background: linear-gradient(20deg, #209aa0 -10%, #18e8b8);
				}
			}
			.actual_answer {
				font-weight: 700;
			}
		}
		&.show {
			left: 0%;
			opacity: 1;
		}
	}
`;

class callout_image_box extends Component {
	state = {
		card_answer: ''
	};

	componentDidMount() {
		this.setState({ card_answer: this.props.activeImage.callout_location });
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.activeImage.callout_location !==
			prevProps.activeImage.callout_location
		) {
			if (this.hault_transition) {
				clearTimeout(this.hault_transition);
			}
			// set the new title after animation completes (animation: 300ms)
			this.hault_transition = setTimeout(() => {
				this.setState({ card_answer: this.props.activeImage.callout_location });
			}, 1000);
		}
	}

	render() {
		return (
			<ImageWrapper>
				<img src={this.props.activeImage.image_path} alt="" />
				<span
					className={
						this.props.timer === 0 && this.props.timerIsPaused
							? 'answer_overlay show'
							: 'answer_overlay'
					}
				>
					<span className="answer">
						<span>
							<p className="correct_words">Answer</p>
							<p className="actual_answer">{this.state.card_answer}</p>
						</span>
					</span>
				</span>
			</ImageWrapper>
		);
	}
}

export default callout_image_box;
