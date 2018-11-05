import { Http } from '../util/http.js'
class likeModel extends Http {
  getLatest(behavior,artID, category) {
    let url = behavior == 'like' ? 'like' : 'like/cancel'
    super.wxRequest(
      url,
      { "art_id": artID, "type": category },
      'POST'
    )
  }
}
export { likeModel }