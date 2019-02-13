import React, { Component } from 'react';
import styled from 'styled-components';

// -- json data
import MapThumbnails from '../../static/json/map_thumbnails.json';

const Sidebar = styled.div`
	max-width: 260px;
	background: #1b232e;
	z-index: 1;
	position: fixed;
	width: 260px;
	min-height: 100vh;
	@media (max-width: 800px) {
		width: unset;
		max-width: unset;
	}
	.maps_header {
		height: 80px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		&:after {
			content: '';
			width: 80%;
			height: 2px;
			background: linear-gradient(20deg, #209aa0 -10%, #18e8b8);
			position: absolute;
			bottom: 0;
			margin: auto;
			border-radius: 4px;
		}
		h2 {
			margin: unset;
			color: #fff;
			text-transform: uppercase;
			letter-spacing: 2px;
			font-size: 4rem;
		}
	}
	.maps {
		max-height: calc(100vh - 80px);
		overflow: scroll;
		width: 100%;
		padding-left: unset;
		@media (max-width: 800px) {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.map {
			cursor: pointer;
			position: relative;
			display: block;
			margin: 23.5px 18px;
			border-radius: 5px;
			max-width: 275px;
			height: 100%;
			max-height: 160px;
			transition: 300ms ease;
			@media (max-width: 800px) {
				display: inline-block;
				max-width: 150px;
				margin: 10px;
			}
			&:hover {
				transform: rotate(-2deg);
				@media (max-width: 800px) {
					transform: rotate(0deg);
				}
			}
			img {
				width: 100%;
				border-radius: inherit;
				box-shadow: 0px 3px 8px #171717;
			}
			.map_overlay {
				height: calc(100% - 2px);
				width: 100%;
				background: rgba(0, 0, 0, 0.6);
				position: absolute;
				top: 0;
				left: 0;
				border-radius: inherit;
				transition: 500ms ease;
			}
			&:hover,
			&.active {
				.map_overlay {
					background: rgba(0, 0, 0, 0);
				}
			}
		}
	}
`;

class map_selector extends Component {
	render() {
		return (
			<Sidebar>
				<div className="maps_header">
					<h2>Maps</h2>
				</div>
				<ul className="maps">
					{MapThumbnails.maps.map(item => {
						return (
							<li
								className={
									this.props.activeMap === item.map_name ? 'map active' : 'map'
								}
								key={item.map_name}
								onClick={() => this.props.setActiveMap(item.map_name)}
							>
								<img src={item.image_path} alt={item.map_name} />
								<span className="map_overlay" />
							</li>
						);
					})}
				</ul>
			</Sidebar>
		);
	}
}

export default map_selector;
