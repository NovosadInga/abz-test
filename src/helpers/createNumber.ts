export const createNumber = {
	get: (num: string): string => {
		return `${num.slice(0, 3)} (${num.slice(3, 6)}) ${num.slice(6, 9)}  ${num.slice(9, 11)} ${num.slice(11)}`
	},
	set: (num: string): string => {
		return `+${num.replace(/[^0-9]/g, "")}`
	}
}