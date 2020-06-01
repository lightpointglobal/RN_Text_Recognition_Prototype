import React from 'react';
import {
	Image,
	StyleSheet,
} from 'react-native';

import { screenWidth, screenHeight } from "../styles";
const style = StyleSheet.create({
	imageContainer: {
		width: screenWidth,
		height: screenHeight,
	}
});

function ImagePreview(props) {
	if (!props.image) {
		return null;
	}

	return (
		<Image
			source={props.image}
			style={style.imageContainer}
			resizeMode="contain"
		/>
	);
}

export default React.memo(ImagePreview);