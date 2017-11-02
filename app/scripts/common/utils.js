import Storage from './webStorage';

export default {
  monthFlag: 0,

  convertToDecimal: function(amnt){
    return parseFloat(amnt).toFixed(2);
  },

  periodicDate: function(date){
    if(this.monthFlag == 0){
      var i = 0;
    } else {
      i = 1
    }

    let split = date.split('-');
    let splitVal = Number(split[1]) + i;
    if(splitVal == 13){
      splitVal = 1;
      split[0] = Number(split[0]) + i;
    }
    let fullDate = split[0]+'-'+splitVal+'-'+split[2];
    this.monthFlag++;
    return fullDate;
  }
}
