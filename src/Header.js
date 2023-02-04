
function Header() {
 
    return (
        <> 
              <section id="header">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <nav class="navbar navbar-expand-lg">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="media/logoindi.png" alt=""/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <i class="bi bi-list"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Gallery</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
          
                        <li class="nav-item">
                          <a class="nav-link" href="#">Link</a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </nav>
          </div>
      </div>
  </div>
      </section>
        </>
     );
}

export default Header;