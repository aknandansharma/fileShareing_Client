import React from 'react'
import './Faq.css'

const Faq = () => {
    return (
        <div className='maindiv'>
            <section classname="faq">
                <h1 classname="heading">Frequently asked questions</h1>
                <details>
                    <summary>Is this FAQ section serious?</summary>
                    <p>Of course not, why would you even think that? We're just here to waste your time and make you question your life choices.</p>
                </details>
                <details>
                    <summary>Will this FAQ section be updated regularly?</summary>
                    <p>Definitely not. We're just here to give you a false sense of security that you might actually learn something useful.</p>
                </details>
                <details>
                    <summary>Can I trust the information in this FAQ section?</summary>
                    <p>Trust? What's that? We just make things up as we go along, so don't take anything we say too seriously.</p>
                </details>
                <details>
                    <summary>Will this FAQ section be updated regularly?</summary>
                    <p>Ha! That's a good one. We have better things to do than update this useless piece of text on a regular basis.</p>
                </details>
                <details>
                    <summary>Is there any point to this FAQ section at all?</summary>
                    <p>Nope, not really. We just wanted to fill up some space on the page and give you something to scroll past. Thanks for playing along!</p>
                </details>
            </section>
        </div>
    )
}

export default Faq