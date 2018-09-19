import { Http } from '../util/http.js'
class likeModel extends Http {
  getLatest(behavior,artID, category) {
    let url = behavior == 'like' ? 'like' : 'like/cancel'
    super.wxRequest({
      url:url,
      method:"POST",
      data:{
        "art_id":artID,
        "type":category
      }
    })
  }
}
export { likeModel }