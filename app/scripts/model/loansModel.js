import Storage from '../common/webStorage';
import Constants from '../common/constants';


export default{
  setAllLoans: function(data){
    let getLoans = Storage.getCollection(Constants.STOARGE_ALL_LOANS)
    if(getLoans){
      getLoans.push(data);
      Storage.setCollection(Constants.STOARGE_ALL_LOANS,getLoans);
    } else {
      Storage.setCollection(Constants.STOARGE_ALL_LOANS, null)
    }
  },

  getAllLoans: function(){
    return _.reverse(Storage.getCollection(Constants.STOARGE_ALL_LOANS));
  }
}
