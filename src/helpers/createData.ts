import { IDataValue } from "../components/Form/Form";
import { createNumber } from "./createNumber";
type TForm = IDataValue
export const createData = (obj: TForm): FormData => {
	var data = new FormData()
	const arr_form = Object.entries(obj)
	arr_form.forEach(el => {
		if (el[0] === 'phone') return data.append('phone', createNumber.set(el[1]));
		if (el[0] === 'file') return data.append('photo', el[1]);
		data.append(el[0], el[1]);
	})
	return data
}