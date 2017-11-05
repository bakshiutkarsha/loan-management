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
  },

  searchFromAllLoans: function(searchText){
    searchText = searchText.toLowerCase();
    let filteredLoanArr = [];
    let allLoansArr = this.getAllLoans();
    _.each(allLoansArr,function(loanObj){
      let filterBy = [loanObj.name]
      let isSearchable = _.some(filterBy, function(searchableValue){
        if(searchableValue != null){
						return (searchableValue.toLowerCase().indexOf(searchText) != -1);
				}
      });
      if(isSearchable){
        filteredLoanArr.push(loanObj)
      }
    });
    return filteredLoanArr;
  }

}
