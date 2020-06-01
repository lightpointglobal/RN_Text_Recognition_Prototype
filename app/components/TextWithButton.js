import React from 'react';
import {
	Text,
	Button,
} from 'react-native';

import style from "../styles";

function TextWithButton(props) {
	return (
		<>
			{props.text && <Text style={style.textParagraph}>{props.text}</Text>}
			<Button title={props.buttonTitle} onPress={props.onPress}></Button>
		</>
	);
}

export default React.memo(TextWithButton);