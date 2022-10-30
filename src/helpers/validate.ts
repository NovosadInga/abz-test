import { validateImage } from './validateImage';
import * as Yup from "yup";
// валидация на стороне клиента
const err = {
	server: "Server error",
	required: "Required",
	phone: "Format: +38 (XXX) XXX XX XX",
	email: "Invalid email",
	name: "Invalid name",
	file: ["Photo is too large", "Accepted only: .jpeg, .jpg", "Photo is too small"],
}
function createError(name: string) {
	switch (name) {
		case "name":
			return Yup.string()
				.required(err.required)
				.min(3, err.name)
				.max(60, err.name);
		case "email":
			return Yup.string()
				.required(err.required)
				.email(err.email);
		case "phone":
			return Yup.string()
				.required(err.required)
				.nullable()
				.matches(/^\+38\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/, err.phone);
		case "position_id":
			return Yup.string()
				.required(err.required)
		case "file":
			return Yup.mixed()
				.required(err.required)
				.test("weight", err.file[0], value => validateImage.weight(value, 5))
				.test("type", err.file[1], value => validateImage.type(value))
				.test("sizes", err.file[2], value => validateImage.sizes(value, 70, 70))
		default:
			return false;
	}
}
export const setErrorsServer = (e: any, callback: (field: string, message: string | undefined) => void) => {
	if (e.data.hasOwnProperty("fails")) {
		const errors = Object.entries(e.data.fails)
		errors.map((e) => callback(e[0], Array.isArray(e[1]) ? e[1][0] : err.server));
	}
};
export const validate = (values: any) => {
	const form_values = Object.keys(values);
	let errors = {} as any;
	form_values.map((val) => {
		let err = createError(val);
		if (err) errors[val] = err;
	});
	return Object.keys(values).length ? Yup.object(errors) : false;
};


