import Storage from '../common/webStorage';
import Constants from '../common/constants';

let allLoans = [];

export default{
  setAllLoans: function(data){
    allLoans.push(data);
    Storage.setCollection(Constants.STOARGE_ALL_LOANS,allLoans);
  },

  getAllLoans: function(){
    return allLoans;
  }
}
