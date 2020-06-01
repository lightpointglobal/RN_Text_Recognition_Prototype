import React from 'react';
import {
	ActivityIndicator,
	Button,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import ImagePreview from "../components/ImagePreview";
import ScrollableContainerWithTitle from "../components/ScrollableContainerWithTitle";

import globalStyles, { screenHeight } from "../styles";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	imagePreviewContainer: {
		flexGrow: 3,
		flexShrink: 3,
		maxHeight: screenHeight / 3,
	},
	textPreviewHolder: {
		flexGrow: 3,
		flexShrink: 3,
		paddingVertical: 10,
		backgroundColor: "#f0f0f0",
		borderTopWidth: 1,
		borderTopColor: "#ccc",
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonsContainer: {
		flex: 0,
		paddingVertical: 20,
		justifyContent: "center",
		alignItems: "center",
	}
});

function RecognitionResultView(props) {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.imagePreviewContainer}>
				<ImagePreview image={props.image} />
			</ScrollView>
			<View style={styles.textPreviewHolder}>
				{props.loading
					? <ActivityIndicator size="large" color="#0000ff" />
					: <ScrollableContainerWithTitle title="Recognized text:">
						{props.textLines.map((item, index) => <Text style={globalStyles.textParagraph} key={index}>{item.text}</Text>)}
					</ScrollableContainerWithTitle>
				}
			</View>
			<View style={styles.buttonsContainer}>
				<Button title={props.buttonTitle} onPress={props.onButtonPress}></Button>
			</View>
		</View>
	);
}

export default React.memo(RecognitionResultView);