import "./styles.scss";

export function Sobre(){
  return(
    <>
      <section id="sobre">
        <div className="wrapper">
          <div className="info-left">
            <h1>Sobre o Dani's cake</h1>
            <p>Olá meu nome é Daniela Moreira. <br />O Dani's cake começou de forma muito natural, eu fazia os bolos e oferecia alguns pedaços pros meus amigos provarem, quando vi, meus bolos ja era um sucesso tanto no estágio quanto na faculdade, e as pessoas me pediam para vender os pedaços semanalmente para eles, assim nasceu o Dani's cake.</p>
            <div className="sotial">
              <a href="https://api.whatsapp.com/send?phone=5538998060266" target={"__blank"}>
                <img src="/assets/whatsapp.svg" alt="" />
                (38) 99806-0266
              </a>
              <a href="https://www.instagram.com/dani_cakeoficial/" target={"__blank"}>
                <img src="/assets/instagram.svg" alt="" />
                @dani_cakeoficial
              </a>
            </div>
          </div>
          <div className="info-rigth">
            <img src="/assets/confeiteira.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}