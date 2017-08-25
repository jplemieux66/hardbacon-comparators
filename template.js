export default (body) => (`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!-- jQuery -->
    <script src="http://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- ReCaptcha JS -->
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <!-- Custom JS -->
    <script src="assets/script.js"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/styles.css">
    
    <title>Brokerages | Hardbacon</title>
  </head>
  <body>
    <div id="success-alert" class="alert alert-success alert-fixed">
      <a href="#" class="close" aria-label="close">&times;</a>
      <strong>Success!</strong> The promotional offer was sent to your email. 
    </div>
    <div id="root">${body}</div>
    <div id="promotional-offer-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button id="close-promotional-offers-button" type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Promotional Offer</h4>
          </div>
          <div class="modal-body">
            <form id="promotional-offer-form" class="form-group">
              <p class="promotional-offer-text">
              We’ll send you an email right away with all the info you need to redeem the promotional offer from XXXXXXXXX. Before we do
                that, we need you to give us your name and email address below.
              </p>
              <input type="hidden" name="offerName" id="offer-name-input">
              <input type="hidden" name="language" id="language-input">
              <p>
                <input type="text" name="name" class="promotional-offer-text-input form-control" required="required" placeholder="Name">
             </p>
              <p>
                <input type="email" name="email" class="promotional-offer-text-input form-control" required="required" placeholder="Email">
              </p>
              <p>
                <div class="g-recaptcha" data-sitekey="6LeW-iwUAAAAAGMImWgEdHyZPYQTiaz6hh2ITYPT"></div>
              </p>
              <p>
                <input type="checkbox" name="subscribe" id="subscribe-checkbox"> Subscribe me to Hardbacon's newsletter.
              </p>
              <p>
                <input type="submit" class="btn btn-info btn-lg" value="Submit">
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`);