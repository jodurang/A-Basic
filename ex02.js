function PutDate() {
  var remark = "put by function defined in other file of the same folder";
  x.innerHTML += "<Br>" + (new Date()).toDateString() + " " + remark;
}
