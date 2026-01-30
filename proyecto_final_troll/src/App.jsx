import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/index.esm.js';

function App() {
  return (
    <>
      <header>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="menuLateral">
          <div className="offcanvas-header">
            <img className="logo" src="/src/assets/imagenes/Logo_negro.png" width="80"/>
            <button className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>

          <div className="offcanvas-body text-center fs-4">
            <a href="panaderia.html" className="d-block mb-4 text-decoration-none text-dark">Panadería</a>
            <a href="bolleria.html" className="d-block mb-4 text-decoration-none text-dark">Bollería</a>
            <a href="envios.html" className="d-block mb-4 text-decoration-none text-dark">Envíos</a>
          </div>
        </div>

        <nav className="navbar navbar-dark px-4">
            <button className="btn btn-light me-3" data-bs-toggle="offcanvas" data-bs-target="#menuLateral">
              <img src="/src/assets/imagenes/barra_lateral.png" width="35"/>
            </button>

            <a className="navbar-brand d-flex align-items-center gap-3" href="index.html">
              <img className="logo" src="/src/assets/imagenes/Logo_blanco.png" width="60"/>
              <h1 className="m-0 fs-3">Venture Panaderias</h1>
            </a>
        </nav>
      </header>

      <main>
        <section className="container my-5">
          <h2 className="text-center mb-5">Productos Destacados</h2>

          <div className="row justify-content-center g-5">
            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-0 shadow-sm h-100 rounded-4">
                <img src="/src/assets/imagenes/producto_destacado_1.jpg" className="card-img-top"/>
                <div className="card-body">
                  <p className="fs-5">Pack Malvaviscos Variados</p>
                  <span className="badge bg-secondary fs-6">6.99€</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-0 shadow-sm h-100 rounded-4">
                <img src="/src/assets/imagenes/producto_destacado_2.jpg" className="card-img-top"/>
                <div className="card-body">
                  <p className="fs-5">Pack Malvavisco Triple</p>
                  <span className="badge bg-secondary fs-6">8.99€</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card text-center border-0 shadow-sm h-100 rounded-4">
                <img src="/src/assets/imagenes/producto_destacado_3.jpg" className="card-img-top"/>
                <div className="card-body">
                  <p className="fs-5">Pack Malvavisco Triple Navideño</p>
                  <span className="badge bg-secondary fs-6">9.99€</span>
                </div>
              </div>
            </div>
          </div>
        </section>
          
        <section className="principal container-fluid py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center px-5">
              <h2 className="mb-4">Los mejores panes de España</h2>
              <p className="fs-5">
                En Venture Panaderias horneamos cada pan con paciencia, pasion y manos artesanas. Usamos harinas seleccionadas, masa madre natural y tecnicas tradicionales que rescatan el sabor autentico del buen pan. Cada pieza sale del horno con el aroma, la textura y el corazon que nos distinguen como la panaderia con los mejores panes del pais.
              </p>
            </div>

            <div className="col-lg-6 text-center">
              <img src="/src/assets/imagenes/contenido_principal.png" className="img-fluid"/>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-4">
              <p>Calle Falsa 132, España</p>
              <p>Teléfono: 612-345-678</p>
              <div className="d-flex gap-2">
                <img src="/src/assets/imagenes/rrss.png" width="20"/>
                <img src="/src/assets/imagenes/insta.png" width="20"/>
                <img src="/src/assets/imagenes/facebook.png" width="20"/>
                <img src="/src/assets/imagenes/x.png" width="20"/>
              </div>
            </div>

            <div className="col-md-4 text-center">
              ©1999-2025 Venture Panaderias
            </div>

            <div className="col-md-4 d-flex justify-content-end">
              <a href="#top">
                <img src="/src/assets/imagenes/Logo_blanco.png" width="50"/>
              </a>
            </div>
          </div>
        </div>
      </footer>   
    </>
  )
}

export default App
