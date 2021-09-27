import { createMemoryHistory } from 'history'

export const history = createMemoryHistory()

export const listenHistory = (cb: (location: any) => void) => history.listen(({location, action}) => {
	console.log("HISTORY", location, action)
	cb(location.state)
})