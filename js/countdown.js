let box = document.getElementById('countdown')
    disable = document.getElementById('disable')
let time = {
  day: parseInt(box.dataset.days*(24*3600), 10),
  hrs: parseInt(box.dataset.hrs*3600, 10),
  mins: parseInt(box.dataset.mins*60, 10),
  secs: parseInt(box.dataset.secs, 10)
}

let sec = parseInt(time.day + time.hrs + time.mins + time.secs, 10)
let counted = sec

const pad = (t) => {
  return (t + '').length < 2 ? pad('0' + t + '') : t ;
}

const countDown = () => {
  let days = Math.floor(sec / (3600*24))
  sec -= days*3600*24
  let hrs = Math.floor(sec / 3600)
  sec -= hrs*3600
  let mins = Math.floor(sec / 60)
  sec -= mins*60
  box.innerHTML = pad(days) + ':' + pad(hrs) + ':' + pad(mins) + ':' + pad(sec)
  sec = counted-- 
}

countDown()

let countDownIntVal = setInterval(() => {
  if(counted < 0)
  disable.style.display = "none"
  countDown() 
}, 1 * 1000)


function receive({order = "", fullName = ""}){
  if(disable){
    const receive = document.createElement('div');
    receive.classList.add('card-body')
    receive.innerHTML = `
      <nav aria-label="breadcrumb" class="main-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"> ${order}</li>
          </ol>
      </nav>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Full Name</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        ${fullName}
      </div>
    </div>
    <hr>
    <div class="row">          
      <div class="col-sm-9 text-secondary">
        <div id="countdown" data-days="0" data-hrs="0" data-mins="0" data-secs="5"></div>
          <div class="btn__receive" onclick="alert()">
              Receive
          </div>
      </div>
    </div> `;
    receive.appendChild(card-body)
  }
  

  receive({
    order: '1st',
    fullName: 'Hồ Thanh Tâm',
    
  })
}