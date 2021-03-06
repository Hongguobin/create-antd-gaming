import store from '../redux/store'
import localSto from './localStorage'
import { changeUserInfo } from '../redux/actions'

const user = {
  login(token) {
    localSto.set('MUSIC-TOKEN', token)
  },
  logOut() {
    store.dispatch(changeUserInfo({}))
    localSto.remove('MUSIC-TOKEN')
  },
  token() {
    return localSto.get('MUSIC-TOKEN')
  }
}

export default user
