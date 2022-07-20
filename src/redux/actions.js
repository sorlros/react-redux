// 액션의 타입들을 오타를 방지하기 위해 변수로 미리 지정
export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"

// 액션 생성 함수
export function addTodo(text) {
	return {
		type: ADD_TODO,
		text,
	}
}

export function completeTodo(index) {
	return {
		type: COMPLETE_TODO,
		index,
	}
}

export const SHOW_ALL = "SHOW_ALL"
export const SHOW_COMPLETE = "SHOW_COMPLETE"

export function showAll() {
	return {
		type: SHOW_ALL,
	}
}

export function showComplete() {
	return {
		type: SHOW_COMPLETE,
	}
}
