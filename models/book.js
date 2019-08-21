import {HTTP} from '../utils/http-p.js'

class BookModel extends HTTP{
  getHoList(){
   return this.request('book/hot_list')
  }
}

export{BookModel}