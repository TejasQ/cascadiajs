export default function MainLayout({ html }) {
  return html`
    <style>
      #root {
        background-color: #fffbeb;
        color: #112378;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-weight: 200;
        font-family: canada-type-gibson, sans-serif;
        font-size: 18px;
        line-height: 1.125em;
      }

      .landing {
        padding: 32px 32px;
      }

      .landing h1 {
        font-size: 48px;
        margin: 0 0 32px 0;
      }

      .landing h2 {
        font-size: 32px;
        color: #112378;
        margin-bottom: 0;
      }

      .landing h3 {
        font-size: 28px;
        color: #fff;
        font-weight: 400;
        margin-top: 4px;
      }

      @media only screen and (min-width: 768px) {
        #root {
          display: grid;
          min-height: 100%;
          grid-template-columns: 100%;
          grid-template-rows: auto 1fr auto;
        }

        section.landing {
          text-align: center;
        }

        #testimonials div {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        #testimonials div div {
          width: 300px;
          margin-right: 16px;
        }
      }
    </style>
    <div id="root">
      <main-header></main-header>
      <main id="content">
        <slot></slot>
        <section id="testimonials" class="landing">
          <h1>Testimonials</h1>
          <div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  I&#39;m absolutely blown away by how much
                  <a href="https://twitter.com/cartwr?ref_src=twsrc%5Etfw"
                    >@cartwr</a
                  >
                  and the entire team
                  <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw"
                    >@CascadiaJS</a
                  >
                  lifts up and highlights the people who contribute to and make
                  this conference so special. This is what a conf that focuses
                  on community looks like! 🌲
                  <a
                    href="https://twitter.com/hashtag/cjs19?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#cjs19</a
                  >
                  <a href="https://t.co/Yh0CdOzVyx"
                    >pic.twitter.com/Yh0CdOzVyx</a
                  >
                </p>
                &mdash; Divya (@shortdiv)
                <a
                  href="https://twitter.com/shortdiv/status/1192967417867034625?ref_src=twsrc%5Etfw"
                  >November 9, 2019</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  I absolutely LOVED MCing
                  <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw"
                    >@CascadiaJS</a
                  >! This was such a well organized conference, huge kudos to
                  the speakers, the organizers, the sponsors, and of course the
                  audience + community for making it great. It was a pleasure!!
                  <a
                    href="https://twitter.com/hashtag/cjs20?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#cjs20</a
                  >
                  <a href="https://t.co/EhqjhYJEVY"
                    >pic.twitter.com/EhqjhYJEVY</a
                  >
                </p>
                &mdash; Cassidy (@cassidoo)
                <a
                  href="https://twitter.com/cassidoo/status/1301313550577577984?ref_src=twsrc%5Etfw"
                  >September 3, 2020</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  Attended
                  <a
                    href="https://twitter.com/hashtag/CascadiaJS?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#CascadiaJS</a
                  >
                  last week! Awesome speakers/workshops and very well done
                  virtual/hybrid experience! Can&#39;t recommend it enough for
                  developers no matter where they are in their coding journey!
                  🖥️🌲<a
                    href="https://twitter.com/hashtag/webdevelopment?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#webdevelopment</a
                  >
                  <a
                    href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#javascript</a
                  >
                  <a
                    href="https://twitter.com/hashtag/CascadiaJS2021?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#CascadiaJS2021</a
                  >
                  <a
                    href="https://twitter.com/hashtag/PNW?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#PNW</a
                  >
                  <a href="https://t.co/imknQzJmBZ"
                    >pic.twitter.com/imknQzJmBZ</a
                  >
                </p>
                &mdash; Nathan Pickard (@NathanPickard)
                <a
                  href="https://twitter.com/NathanPickard/status/1457848244034170886?ref_src=twsrc%5Etfw"
                  >November 8, 2021</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  Had an amazing time at
                  <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw"
                    >@CascadiaJS</a
                  >. See you next year!
                  <a href="https://t.co/eJYIkqHVMf"
                    >pic.twitter.com/eJYIkqHVMf</a
                  >
                </p>
                &mdash; Treasure Porth (@treasureporth)
                <a
                  href="https://twitter.com/treasureporth/status/1194446190068158464?ref_src=twsrc%5Etfw"
                  >November 13, 2019</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  I was honored to participate in
                  <a
                    href="https://twitter.com/hashtag/CascadiaJS?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#CascadiaJS</a
                  >
                  again this year. I&#39;ve been so impressed again with all the
                  creativity and effort the organizers, speakers, and community
                  puts into making it a uniquely fun event. ✨
                  <a href="https://t.co/x0byI4utED"
                    >pic.twitter.com/x0byI4utED</a
                  >
                </p>
                &mdash; Nicole Oliver (@nixcodes)
                <a
                  href="https://twitter.com/nixcodes/status/1456441379760992258?ref_src=twsrc%5Etfw"
                  >November 5, 2021</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  Huge shoutout to the
                  <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw"
                    >@CascadiaJS</a
                  >
                  organizers for a truly unique experience that went above and
                  beyond anything I could have imagined. You could really feel
                  their passion for the community and the time, attention, and
                  care they put into every single aspect. THANK YOU!! ❤️🌲
                  <a
                    href="https://twitter.com/hashtag/cjs20?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#cjs20</a
                  >
                  <a href="https://t.co/5NH2FVfMA2"
                    >pic.twitter.com/5NH2FVfMA2</a
                  >
                </p>
                &mdash; Rachael Thomas (@rachael_codes)
                <a
                  href="https://twitter.com/rachael_codes/status/1301317932840972289?ref_src=twsrc%5Etfw"
                  >September 3, 2020</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  So about
                  <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw"
                    >@CascadiaJS</a
                  >
                  last year…
                  <a href="https://t.co/iFsMyd71FA"
                    >pic.twitter.com/iFsMyd71FA</a
                  >
                </p>
                &mdash; Michelle Bakels (@MichelleBakels)
                <a
                  href="https://twitter.com/MichelleBakels/status/1486119944630775808?ref_src=twsrc%5Etfw"
                  >January 25, 2022</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  Yeah, tonight was great.
                  <a
                    href="https://twitter.com/hashtag/CascadiaJS?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#CascadiaJS</a
                  >
                  <a href="https://t.co/4hHgTP46fg"
                    >pic.twitter.com/4hHgTP46fg</a
                  >
                </p>
                &mdash; Jessica West (@jessicaewest)
                <a
                  href="https://twitter.com/jessicaewest/status/1456483897596809216?ref_src=twsrc%5Etfw"
                  >November 5, 2021</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  Awesome
                  <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw"
                    >@CascadiaJS</a
                  >
                  afterparty at the
                  <a
                    href="https://twitter.com/LivingComputers?ref_src=twsrc%5Etfw"
                    >@LivingComputers</a
                  ><br /><br />I had so much fun.
                  <a
                    href="https://twitter.com/hashtag/CJS18?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#CJS18</a
                  >
                  <a href="https://t.co/xUiF2iupz6"
                    >pic.twitter.com/xUiF2iupz6</a
                  >
                </p>
                &mdash; Welling Guzmán (@wellingguzman)
                <a
                  href="https://twitter.com/wellingguzman/status/1063708080259518464?ref_src=twsrc%5Etfw"
                  >November 17, 2018</a
                >
              </blockquote>
            </div>
            <div>
              <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                  I can&#39;t thank
                  <a href="https://twitter.com/crtr0?ref_src=twsrc%5Etfw"
                    >@crtr0</a
                  >, the
                  <a href="https://twitter.com/CascadiaJS?ref_src=twsrc%5Etfw"
                    >@CascadiaJS</a
                  >
                  team, and the conference sponsors enough for the opportunity
                  to attend
                  <a
                    href="https://twitter.com/hashtag/cascadiajs?src=hash&amp;ref_src=twsrc%5Etfw"
                    >#cascadiajs</a
                  >! Everyone was so encouraging and welcoming, I&#39;m thrilled
                  to bring back what I learned to
                  <a
                    href="https://twitter.com/MakeThinkCode?ref_src=twsrc%5Etfw"
                    >@MakeThinkCode</a
                  >
                  &amp;
                  <a href="https://twitter.com/pnca?ref_src=twsrc%5Etfw"
                    >@pnca</a
                  >.
                  <a href="https://t.co/5hVyhcmyUL"
                    >pic.twitter.com/5hVyhcmyUL</a
                  >
                </p>
                &mdash; meganmckissack (@meganmckissack)
                <a
                  href="https://twitter.com/meganmckissack/status/1064595216995246081?ref_src=twsrc%5Etfw"
                  >November 19, 2018</a
                >
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <main-footer></main-footer>
    </div>
  `;
}
