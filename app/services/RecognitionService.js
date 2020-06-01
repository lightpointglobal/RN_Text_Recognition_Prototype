import RNTextDetector from "react-native-text-detector";

export function recognize(uri) {
	return new Promise(async (resolve, reject) => {
		const visionResp = await RNTextDetector.detect({
			imagePath: uri, // this can be remote url as well, package will handle such url internally
			language: "eng",
			pageIteratorLevel: "textLine",
			pageSegmentation: "SparseTextOSD", // optional
			imageTransformationMode: 2, // optional | 0 => none | 1 => g8_grayScale | 2 => g8_blackAndWhite
		});

		if (!(visionResp && visionResp.length > 0)) {
			reject();
			return;
		}

		resolve(visionResp);
	});
};