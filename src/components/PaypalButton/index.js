import React from 'react'

const PaypalButton = ({buttonId, children}) => (
  <form
    target="paypal"
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
  >
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value={buttonId} />
    {children}
    <img
      alt=""
      border="0"
      src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif"
      width="1"
      height="1"
    />
  </form>
)
export {PaypalButton}
