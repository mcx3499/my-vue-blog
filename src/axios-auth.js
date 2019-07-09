import axios from 'axios'

const instance = axios.create({
	baseURL:"https://vueblog-cc8c5.firebaseio.com/"
})

/*instance.defaults.header.common['SOMETHING'] = 'SOMETHING'*/

export default instance