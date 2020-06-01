import ImagePicker from "react-native-image-picker";

const ImagePickerOptions = {
	title: 'Select Receipt',
	storageOptions: {
		skipBackup: true,
		path: 'images',
		cameraRoll: true,
		waitUntilSaved: true,
	},
	noData: true,
};

export function showImagePicker(callback) {
	callback = callback || function(){};

	ImagePicker.showImagePicker(ImagePickerOptions, (response) => {
		callback(response);
	});
};