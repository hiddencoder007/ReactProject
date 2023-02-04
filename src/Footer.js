function Footer() {
    return ( 
        <>
        <section id="footer">
        <img src="media/border2.png" alt="" id="footer-banner"/>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img src="media/logo.png" alt="" id="footerlogo"/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo laboriosam animi architecto maxime magni quam molestias alias ipsa tempora.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nam?</p>
            </div>
            <div class="col-md-4">
              <h2>Indigo pvt LTD.</h2>
              <p><span><i class="bi bi-house-door-fill"></i></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum.</p>
              <p><span><i class="bi bi-phone-fill"></i></span> +91-7976558568</p>
              <p><span><i class="bi bi-telephone-fill"></i></span> 0141-3259680</p>
            </div>
            <div class="col-md-4">
              <form action="" method="post">
              <h2>Query Form</h2>
             <input type="email" name="" id="" placeholder="enter email" class="form-control"/>
             <textarea name="" id="" placeholder="Query" class="form-control mt-2 mb-2"></textarea>
             <button type="submit" class="form-control btn btn-success">Post Query</button>
            </form>
            </div>
          </div>
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <img src="media/instagram-icon.png" alt=""/>
                <img src="media/linkedin-icon.png" alt=""/>
                <img src="media/snapchat-icon.png" alt=""/>
                <img src="media/twitter-icon.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>

      </>
     );
}

export default Footer;