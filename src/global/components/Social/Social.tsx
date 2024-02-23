'use client'
import './social.scss'
import * as pixel from "@/src/lib/fpixel";

function Social () {
  return (
    <div className="social">
      <a
        className="social__links social__links-telegram"
        href="https://t.me/MetaLabs23"
        target='_blank'
        onClick={() => 
          {pixel.event('Contact', {contact_form: 'telegram'})}}
      />
      <a
        className="social__links social__links-whatsapp"
        href="https://wa.me/996705311113"
        target='_blank'
        onClick={() => 
          {pixel.event('Contact', {contact_form: 'whatsapp'})}}
      />
    </div>
  )
}
export default Social