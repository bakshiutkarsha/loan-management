import Storage from '../common/webStorage';
import Constants from '../common/constants';

let allLoans =[];
export default{
  setAllLoans: function(data){
    allLoans.push(data);
    Storage.setCollection(Constants.STOARGE_ALL_LOANS,allLoans);
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
