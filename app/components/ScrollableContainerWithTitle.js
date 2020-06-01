import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	title: {
		paddingHorizontal: 20,
		marginBottom: 10,
		fontWeight: "bold"
	},
	holder: {
		paddingHorizontal: 20,
	},
});

function ScrollableContainerWithTitle(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.title}</Text>
			<ScrollView style={styles.holder}>
				{props.children}
			</ScrollView>
		</View>
	);
}

export default React.memo(ScrollableContainerWithTitle);