import {
  Http
} from '../util/http.js'
class bookModel extends Http {
  gethotList(){
    return super.wxRequest(
      'book/hot_list'
    )
  }
  getHotCount(){
    return super.wxRequest(
      'book/favor/count'
    )
  }
  getComments(bid) {
    return super.wxRequest(
      `book/${bid}/short_comment`
    )
  }
  getLikeStatus(bid) {
    return super.wxRequest(
       `book/${bid}/favor`
    )
  }
  getHotCountDetail(bid) {
    return super.wxRequest(
      `book/${bid}/detail`
    )
  }
}
export {
  bookModel
}