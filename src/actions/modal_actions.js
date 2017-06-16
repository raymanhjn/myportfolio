export const OPEN_MODAL ='OPEN_MODAL';
export const CLOSE_MODAL ='CLOSE_MODAL';

export function openModal(content) {
	let info = {
		modalIsOpen:true,
		modalContent:content,
	}
	return {
		type:OPEN_MODAL,
		payload:info
	}
}

export function closeModal() {
	return {
		type:CLOSE_MODAL,
		payload:false
	}
}