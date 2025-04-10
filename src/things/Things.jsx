import React from 'react'

export default function Things({photo,saxeli,agwera,fasi}) {

  function go() {
    window.location.href = "https://projects-firs.vercel.app/"
  }
  
  return (
    <>

        <div className="card">
        <img src={photo} alt="" />
        <div className="card-content">
          <h1 className="card-title">{saxeli}</h1>
          <p className="card-description">{agwera}</p>
          <div className="card-footer">
            <h3 className="card-price">{fasi}$</h3>
            <button className="buy-button" onClick={go}>
              <span>see</span>
              <div className="liquid"></div>
            </button>
          </div>
        </div>
    </div>
    </>
  )
}
