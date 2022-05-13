import { useState } from "react";
import { Header } from "../../Components/Header";
import { Sobre } from "../Sobre";
import {ImageWhatsApp} from "../../Components/images"
import "./styles.scss";

export function Home(){
  const [headerScroll, setHeaderScroll] = useState(false);
  const toggleScroll = ()=>{
    if(window.scrollY > 20){
      setHeaderScroll(true);
    }else{
      setHeaderScroll(false);
    }
  }
  window.addEventListener("scroll", toggleScroll);
  return(
    <>
      <Header headerScroll={headerScroll}/>
      <section id="home">
        <img className='imageBack' src="/assets/bolo-banana-sol.png" alt="imagem de um bolo de banana delicioso sobre a mesa."/>
        <div className="backImage">
          <ImageWhatsApp/>
        </div>
        <div className="text">
          <h2>Seja de manhã ou a tarde, café com <span>bolo caseiro</span> é sempre a melhor pedida! <strong>🥰🥰🥰</strong></h2>
          <button className="button">
            <a  target={"_blank"} href="https://api.whatsapp.com/send?phone=5538998060266">
              <img src="/assets/whatsapp.svg" alt="icone do whatsapp" />
              Pedir agora
            </a>
          </button>
        </div>
        <div className='amostra'>
          <img src="" alt="" />
        </div>
      </section>
      <section id="cardapio">
        <h2>Experimente um de nossos bolos caseiros.</h2>
        <div className="wrapper">
          <div className="card">
            <div className="textCard">
              <h3>Bolo de banana com canela e chocolate!</h3>
              <p>Um delicioso bolo de banana feito de frutas maduras com uma pitada de canela e pedaçinhos de chocolate, ideal para o fim de tarde com a família!
                <br/>
                <span>
                  <strong>R$ 28,00</strong> <del>R$ 35,00</del>
                </span>
                  <div className="copy">oferta por tempo limitado!</div>
              </p>
              
              <a target={"_blank"} href="https://api.whatsapp.com/send?phone=5538998060266&text=Ol%C3%A1%20Dani%2C%20tudo%20bem%3F%20eu%20gostaria%20de%20encomendar%20o%20bolo%20de%20banana%20com%20canela%20e%20chocolate%2C%20para%20o%20dia%2000%2F00%2F00%20%C3%A1s%2000%3A00Hs%20">Pedir agora</a>
            </div>
            <img src="/assets/bolo-banana-sol.png" alt="" />
          </div>

          <div className="card">
            <img src="/assets/bolo-c-goiabada.png" alt="" />
            <div className="textCard">
              <h3>Bolo de fubá com goiabada!</h3>
              <p>Equilíbrio perfeito de sabor e leveza, um encontro do tradicional bolo de fubá com a goiabada, dois items que estão sempre presentes no café da manhã da maioria dos mineiros agora em uma só receita deliciosa!
                <br/>
                <span>
                  <strong>R$ 25,00</strong> <del>R$ 30,00</del>
                </span>
                  <div className="copy">oferta por tempo limitado!</div>
              </p>
              <a target={"_blank"} href="https://api.whatsapp.com/send?phone=5538998060266&text=Ol%C3%A1%20Dani%20tudo%20bem%3F%20eu%20gostaria%20de%20encomendar%20o%20bolo%20de%20fub%C3%A1%20com%20goiabada%2C%20para%20o%20dia%2000%2F00%2F00%20%C3%A1s%2000%3A00Hs%20">Pedir agora</a>
            </div>
          </div>

          <div className="card">
            <div className="textCard">
              <h3>Bolo de cenoura!</h3>
              <p>Outro clássico que você não pode deixar de experimentar, seja no café da manhã, no fim de tarde ou até mesmo no lanchinho da madrugada o nosso bolo de cenoura com cobertura de chocolate conquista corações!
                <br/>
                <span>
                  <strong>R$ 25,00</strong> <del>R$ 30,00</del>
                  
                </span>
                  <div className="copy">oferta por tempo limitado!</div>
              </p>
              <a target={"_blank"} href="https://api.whatsapp.com/send?phone=5538998060266&text=Ol%C3%A1%20Dani%20tudo%20bem%3F%20eu%20gostaria%20de%20encomendar%20o%20bolo%20de%20cenoura%20com%20cobertura%20de%20chocolate%2C%20para%20o%20dia%2000%2F00%2F00%20%C3%A1s%2000%3A00Hs%20">Pedir agora</a>
            </div>
            <img src="/assets/bolo-cenoura.png" alt="" />
          </div>
        </div>
      </section>
      <Sobre/>
    </>
  )
}