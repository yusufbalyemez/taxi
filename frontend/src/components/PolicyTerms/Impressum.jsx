import React from 'react'
import { Collapse, Table } from 'antd';
const { Panel } = Collapse;
import "./PolicyTerms.css"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Impressum = () => {


  return (
    <>
      <Header />
      <div className='policy-container'>
        <h1>Impressum</h1>
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p>Yüksel Lacin Taxiunternehmen<br/>
        Nordring 110<br/>
        90409 Nürnberg</p>

          <p>Vertreten durch:<br/>
            Yüksel Lacin</p>

          <h2>Genehmigungsbehörde:</h2>
          <p>Stadt Nürnberg<br/>
            Ordnungsamt<br/>
              Fahrerlaubnisse, Personenbeförderung und Güterkraftverkehr<br/>
                Innerer Laufer Platz 3<br/>
                  90403 Nürnberg</p>

                <h2>Kontakt</h2>
                <p>Telefon: +49 176/84435028<br/>
                  
                    E-Mail: <a href="mailto:yuksellacin1@outlook.de">yuksellacin1@outlook.de</a></p>

                  <h2>Umsatzsteuer-ID</h2>
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>
                  238 243 00518 </p>

                  <h2>EU-Streitschlichtung</h2>
                  <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank">https://ec.europa.eu/consumers/odr</a>.<br/>
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                  <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                  <h2>Haftung für Inhalte</h2>
                  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

                  <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

                  <h2>Haftung für Links</h2>
                  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>

                  <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

                  <h2>Urheberrecht</h2>
                  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                  <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

                  </div>
                  <Footer />
                </>
                  )
}

                  export default Impressum