export const TOGGLE_NAVBAR ='TOGGLENAVBAR';


export function toggleNavbar(navbarState) {
	return {
		type:TOGGLE_NAVBAR,
		payload:navbarState
	}
}