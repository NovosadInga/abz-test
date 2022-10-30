export const validateImage = {
	type: (
		file: File
	): boolean => {
		let valid = true
		if (file) return file && file.name.toLowerCase().endsWith('.jpg') || file.name.toLowerCase().endsWith('.jpeg')
		return valid
	},
	weight: (
		file: File,
		max: number
	): boolean => {
		let valid = true
		if (file) {
			const size = file.size / 1024 / 1024
			if (size > max) {
				valid = false
			}
		}
		return valid
	},
	sizes: (
		file: File,
		minWidth: number,
		minHeight: number
	): Promise<boolean> | boolean => {
		let valid = true
		if (file) {
			var img = new Image();
			img.src = window.URL.createObjectURL(file);
			return new Promise((resolve) => {
				img.onerror = (e) => {
					resolve(false);
				};

				img.onload = (e) => {
					let width = img.width;
					let height = img.height;

					window.URL.revokeObjectURL(img.src);
					if (width < minWidth || height < minHeight) resolve(false);
					resolve(true);
				};
			});
		}
		return valid
	}
}