import React, { Component } from 'react';
import styled from 'styled-components';

// -- json data
import MapThumbnails from '../../static/json/map_thumbnails.json';

const Sidebar = styled.div`
	max-width: 260px;
	background: #1b232e;
	box-shadow: 2px 0px 6px 0px #09101a;
	z-index: 1;
	position: fixed;
	width: 260px;
	.maps_header {
		height: 100px;
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
			font-size: 50px;
		}
	}
	.maps {
		max-height: calc(100vh - 100px);
		overflow: scroll;
		width: 100%;
		padding-left: unset;
		.map {
			cursor: pointer;
			position: relative;
			display: block;
			margin: 23.5px 18px;
			border-radius: 5px;
			max-width: 275px;
			box-shadow: 0px 3px 8px #171717;
			max-height: 160px;
			transition: 300ms ease;
			height: 132px;
			&:hover {
				transform: rotate(-2deg);
				box-shadow: 0px 0px 11px 0px #00c3ad;
			}
			img {
				width: 100%;
				height: 100%;
				border-radius: inherit;
			}
			.map_overlay {
				height: 100%;
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
								<img src={item.image_path} alt="" />
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
