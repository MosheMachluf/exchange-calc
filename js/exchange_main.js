var json_ar;

window.onload = () => {
  doRestApi();
  declareEvents();
};

const declareEvents = () => {
  let exe_btn = document.querySelector("#id_btn");

  exe_btn.addEventListener("click", () => {
    let price = document.querySelector("#id_price").value;
    let coin = document.querySelector("#coin").value;
    let to_coin = document.querySelector("#to_coin");
    let coin_type = to_coin.options[to_coin.selectedIndex].text;

    exchange(
      "#result",
      price,
      json_ar[coin],
      json_ar[to_coin.value],
      coin_type
    );
  });
};

const exchange = (_parent, _price, _coin, _to_coin, _coin_type) => {
  let price_usd = _price / _coin;
  let result = price_usd * _to_coin;

  document.querySelector(_parent).innerHTML = `You Will Get: ${result.toFixed(
    2
  )} ${_coin_type}`;
};

const doRestApi = async () => {
  const myUrl =
    "http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd%2Cils%2Ceur%2Cbtc%2Cthb&fbclid=IwAR2fHpjxNurqH86ad8vz5CPum_TubfxF_JRxd4YbB4SxgMChEurO1kFHYnI";
  try {
    let resp = await fetch(myUrl);
    let data = await resp.json();
    json_ar = data.quotes;
    console.log(json_ar);
  } catch (err) {
    console.log(err);
  }
};
