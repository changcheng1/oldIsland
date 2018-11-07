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
  postComment(bid,comment){
    return super.wxRequest(
      'book/add/short_comment',
      {
        book_id:bid,
        content:comment
      },
      'POST',
    )
  }
}
export {
  bookModel
}