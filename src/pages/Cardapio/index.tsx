import "./styles.scss";


export function Cardapio(){
  const bolosList = [
    {title: "nome do bolo1", image: "/assets/bolo-banana-sol.png", value: 28},
    {title: "nome do bolo2", image: "/assets/bolo-cenoura-bis.png", value: 28},
    {title: "nome do bolo3", image: "/assets/bolo-c-goiabada.png", value: 28},
    {title: "nome do bolo4", image: "/assets/bolo-mesclado.png", value: 28},
    {title: "nome do bolo4", image: "/assets/bolo-mesclado.png", value: 28},
    {title: "nome do bolo4", image: "/assets/bolo-mesclado.png", value: 28},
    {title: "nome do bolo4", image: "/assets/bolo-mesclado.png", value: 28},
  ]
  return(
    <section id="cardapio">
      <h2>Bolos caseiros de qualidade</h2>
      <div className="wrapper">
        {bolosList.map(bolo =>(
          <>
            <div className="card">
              <span>{bolo.title}</span>
              <img src={bolo.image} alt=""/>
              <strong>R$ {bolo.value},00</strong>
              {/* <div className="know-more">
                <Link to={`/cardapio/${bolo.title}`}>
                  <button>
                    Saiba Mais
                  </button>
                </Link>
              </div> */}
            </div>
          </>
        ))}
      </div>
  </section>
  )
}