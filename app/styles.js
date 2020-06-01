import { StyleSheet } from "react-native";

import Colors from "./theme/Colors";
import Dimensions from "./theme/Dimensions";

export const screenHeight = Dimensions.screenHeight;
export const screenWidth = Dimensions.screenWidth;

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
	},
	screen: {
		backgroundColor: Colors.white,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	textParagraph: {
		marginBottom: 10,
	}
});

export default styles;