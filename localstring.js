let indonesia_rp = 1000000;

let my_idr = indonesia_rp.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});

//console.log(my_idr);

// to persent

let num = 0.2;

var mynum = num.toLocaleString(undefined, {
  style: "percent",
});

console.log(mynum);
