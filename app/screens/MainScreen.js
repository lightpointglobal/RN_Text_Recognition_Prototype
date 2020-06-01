import React from 'react';
import {
	Alert,
	View,
} from 'react-native';

import TextWithButton from "../components/TextWithButton";
import RecognitionResultView from "../views/RecognitionResultView";

import * as CameraService from "../services/CameraService";
import * as RecognitionService from "../services/RecognitionService";
import style from "../styles";

class MainScreen extends React.Component {
	state = {
		isProcessingResults: false,
		image: null,
		visionResponse: [],
	}

	onUploadImagePressed = () => {
		CameraService.showImagePicker((response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else {
				this.setState(
					{
						isProcessingResults: true,
						image: { uri: response.uri },
						visionResponse: [],
					},
					() => {
						this.processImage(response.path);
					}
				);
			}
		});
	}

	processImage = (uri) => {
		RecognitionService.recognize(uri).then(visionResponse => {
			this.setState({
				visionResponse: visionResponse,
				isProcessingResults: false,
			});
		}).catch(() => {
			Alert.alert(
				"Parsing error",
				"We didn't manage to parse this receipt. Please, try one more time or select another one.",
				[
					{ text: "OK", onPress: this.reset }
				],
				{ cancelable: false }
			);
		});
	}

	reset = () => {
		this.setState({
			isProcessingResults: false,
			image: null,
			visionResponse: [],
		});
	}

	render() {
		return <View style={style.screen}>
			{!this.state.image
				? <TextWithButton text="No receipt selected" buttonTitle="Select receipt" onPress={this.onUploadImagePressed} />
				: <RecognitionResultView
					loading={this.state.isProcessingResults}
					image={this.state.image}
					textLines={this.state.visionResponse}
					buttonTitle="Process new receipt"
					onButtonPress={this.onUploadImagePressed}
				/>
			}
		</View>;
	}
}

export default MainScreen;