export function aside() {
  let aside = document.querySelector("aside");

  aside.innerHTML = `
    <h1>valuet <p class="line"></p>
    </h1>
    <ul type="none">
        <li class="active"> <img src="/img/vector.svg" alt=""> Overview <p class="line"></p>
        </li>
        <li> <img src="/img/group.svg" alt=""> Wallets <p></p>
        </li>
        <li> <img src="/img/trans.svg" alt=""> Transictions <p></p>
        </li>
        <li> <img src="/img/exchange.svg" alt=""> Exchange <p></p>
        </li>
    </ul>
    <div class="others_box">
        <div class="user_box"> <img src="/img/circle.svg" alt="">
            <p class="user_name">Alex Adams</p>
        </div>
        <div class="log_out"> <img src="/img/logout.svg" alt="">
            <a class="log_out" href="/pages/sign_up/index.html">Log Out</a>
        </div>
    </div>
    `;
} 

export function header() {  
  let header = document.querySelector("header");

  header.innerHTML = `
        <div class="header">
            <input type="search" name="searcher" id="searcher">
            <div class="head_imgs">
                <img src="/img/email.svg" alt="">
                <img src="/img/bell.svg" alt="">
            </div>
        </div>
    `;
}
