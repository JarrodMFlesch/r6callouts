import React, { Component } from 'react';
import Head from 'next/head';

class meta extends Component {
	render() {
		return (
			<span>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<link
						href="https://fonts.googleapis.com/css?family=Asap:400,500,600"
						rel="stylesheet"
					/>
				</Head>
				<style>{`
          html {
            font-size:62.5%;
          }
					body {
						background: #fff;
						font-family: Asap;
            margin: unset;
          }
          h1,h2,h3,h4,h5,h6,ul,li {
            margin: unset;
          }
				`}</style>
			</span>
		);
	}
}

export default meta;
