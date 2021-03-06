import React from "react";
import styled from "styled-components";

const DeviceCanvas = styled.canvas`
	max-width: 800px;
	width: 100%;
`;

export default class MotionSensor extends React.Component {
	componentDidMount() {
		function deviceOrientationListener(event) {
			var c = document.querySelector("#DeviceCanvas");
			var ctx = c.getContext("2d");

			ctx.clearRect(0, 0, c.width, c.height);
			ctx.fillStyle = "#FF7777";
			ctx.font = "14px Verdana";
			ctx.fillText("Alpha: " + Math.round(event.alpha), 10, 20);
			ctx.beginPath();
			ctx.moveTo(180, 75);
			ctx.lineTo(210, 75);
			ctx.arc(180, 75, 60, 0, (event.alpha * Math.PI) / 180);
			ctx.fill();

			ctx.fillStyle = "#FF6600";
			ctx.fillText("Beta: " + Math.round(event.beta), 10, 140);
			ctx.beginPath();
			ctx.fillRect(180, 150, event.beta, 90);

			ctx.fillStyle = "#FF0000";
			ctx.fillText("Gamma: " + Math.round(event.gamma), 10, 270);
			ctx.beginPath();
			ctx.fillRect(90, 340, 180, event.gamma);
		}

		if (window.DeviceOrientationEvent) {
			window.addEventListener("deviceorientation", deviceOrientationListener);
		} else {
			alert("Sorry, your browser doesn't support Device Orientation");
		}
	}

	render() {
		return (
			<div>
				<DeviceCanvas id="DeviceCanvas" />
			</div>
		);
	}
}
