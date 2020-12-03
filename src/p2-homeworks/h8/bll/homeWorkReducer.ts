export const sortUp = () => {
	return {type: "sort", payload: "up"}
}
export const sortDown = () => {
	return {type: "sort", payload: "down"}
}
export const sortChesk = () => {
	return {type: "check", payload: 18}
}

export type ActionType =
	ReturnType<typeof sortUp> |
	ReturnType<typeof sortDown> |
	ReturnType<typeof sortChesk>

type InitialStateType = {
	_id: number
	name: string
	age: number
}

const initialState: Array<InitialStateType> = [
	{_id: 0, name: "Кот", age: 3},
	{_id: 1, name: "Александр", age: 66},
	{_id: 2, name: "Коля", age: 16},
	{_id: 3, name: "Виктор", age: 44},
	{_id: 4, name: "Дмитрий", age: 40},
	{_id: 5, name: "Ирина", age: 55},
]

const sortArrayUp = initialState.sort((a, b) => a.name.localeCompare(b.name))

export const homeWorkReducer = (state: Array<InitialStateType> = initialState, action: ActionType): Array<InitialStateType> => {
	switch (action.type) {
		case "sort": {
			const copyState = [...state]
			if (action.payload === "up") {
				const stateSortUp = copyState.sort((a, b) => a.name.localeCompare(b.name))
				return stateSortUp
			}
			if (action.payload === "down") {
				const stateSortDown = copyState.sort((a, b) => b.name.localeCompare(a.name))
				return stateSortDown
			}
			return state
		}
		case "check": {
			const copyState = [...state]
			const newStateSort = copyState.filter(n => n.age > 18)
			return newStateSort
		}
		default:
			return state
	}
};