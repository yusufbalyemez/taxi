import React from 'react'
import { Collapse, Table } from 'antd';
const { Panel } = Collapse;
import "./PolicyTerms.css"

const PolicyTerms = () => {

  /* Google Fonts Tablosu - Start*/
  const columns1 = [

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render:(text,record)=> <a href={record.url}>{text}</a>,
    },
    {
      title: 'Ablaufdatum',
      dataIndex: 'expiry',
      key: 'expiry',
    },
    {
      title: 'Funktion',
      dataIndex: 'function',
      key: 'function',
    },
  ];

  const data1 = [
    {
      key: '1',
      name: 'Google Fonts API',
      url:'https://cookiedatabase.org/cookie/google-fonts/tcb_google_fonts/',
      expiry: 'keins',
      function: 'Fordere die Benutzer-IP-Adresse an',
    },
  ];
  /* Google Fonts Tablosu - End */


  /* Google Fonts reCAPTCHA Tablosu - Start*/
  const columns2 = [

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render:(text,record)=> <a href={record.url}>{text}</a>,
      
    },
    {
      title: 'Ablaufdatum',
      dataIndex: 'expiry',
      key: 'expiry',
    },
    {
      title: 'Funktion',
      dataIndex: 'function',
      key: 'function',
    },
  ];

  const data2 = [
    {
      key: '1',
      name: 'rc::c',
      url:'https://cookiedatabase.org/cookie/google-recaptcha/rcc/',
      expiry: 'Sitzung',
      function: 'Anfragen von Bots lesen und filtern',
    },
    {
      key: '2',
      name: 'rc::b',
      url:'https://cookiedatabase.org/cookie/google-recaptcha/rcb/',
      expiry: 'Sitzung',
      function: 'Anfragen von Bots lesen und filtern',
    },
    {
      key: '3',
      name: 'rc::a',
      url:'https://cookiedatabase.org/cookie/google-recaptcha/rca/',
      expiry: 'beständig',
      function: 'Anfragen von Bots lesen und filtern',
      
    },
  ];
  /* Google Fonts reCAPTCHA Tablosu - End */

  /* Google Maps Tablosu - Start*/
  const columns3 = [

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render:(text,record)=> <a href={record.url}>{text}</a>,
      
    },
    {
      title: 'Ablaufdatum',
      dataIndex: 'expiry',
      key: 'expiry',
    },
    {
      title: 'Funktion',
      dataIndex: 'function',
      key: 'function',
    },
  ];

  const data3 = [
    {
      key: '1',
      name: 'Google Maps API',
      url:'https://cookiedatabase.org/cookie/google-maps/google-maps-api/',
      expiry: 'keins',
      function: 'Fordere die Benutzer-IP-Adresse an',
    },
  ];
  /* Google Maps Tablosu - End */
  return (
    <div className='policy-container'>
      <h1>Cookie-Richtlinie (EU)</h1>
      <p>Diese Cookie-Richtlinie wurde zuletzt am 25. September 2023 aktualisiert und gilt für Bürger und Einwohner mit ständigem Wohnsitz im Europäischen Wirtschaftsraum und der Schweiz.</p>
      <h2>1. Einführung</h2>
      <p>Unsere Website, <a href='https://grossraumv-klassetaxi.de'>https://grossraumv-klassetaxi.de</a>(im folgenden: "Die Website") verwendet Cookies und ähnliche Technologien (der Einfachheit halber werden all diese unter "Cookies" zusammengefasst). Cookies werden außerdem von uns beauftragten Drittparteien platziert. In dem unten stehendem Dokument informieren wir dich über die Verwendung von Cookies auf unserer Website.</p>
      <h2>2. Was sind Cookies?</h2>
      <p>Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den Seiten einer Internetadresse versendet und vom Webbrowser auf dem PC oder einem anderen Gerät gespeichert werden kann. Die darin gespeicherten Informationen können während folgender Besuche zu unseren oder den Servern relevanter Drittanbieter gesendet werden.</p>
      <h2>3. Was sind Skripte?</h2>
      <p>Ein Script ist ein Stück Programmcode, das benutzt wird, um unserer Website Funktionalität und Interaktivität zu ermöglichen. Dieser Code wird auf unseren Servern oder auf deinem Gerät ausgeführt.</p>
      <h2>4. Was ist ein Web Beacon?</h2>
      <p>Ein Web-Beacon (auch Pixel-Tag genannt), ist ein kleines unsichtbares Textfragment oder Bild auf einer Website, das benutzt wird, um den Verkehr auf der Website zu überwachen. Um dies zu ermöglichen werden diverse Daten von dir mittels Web-Beacons gespeichert.</p>
      <h2>5. Cookies</h2>
      <h4>5.1 Technische oder funktionelle Cookies</h4>
      <p>Einige Cookies stellen sicher, dass Teile unserer Website richtig funktionieren und deine Nutzervorlieben bekannt bleiben. Durch das Platzieren funktionaler Cookies machen wir es dir einfacher unsere Website zu besuchen. Auf diese Weise musst du bei Besuchen unserer Website nicht wiederholt die gleichen Informationen eingeben, oder deine Gegenstände bleiben beispielsweise in deinem Warenkorb bis du bezahlst. Wir können diese Cookies ohne dein Einverständnis platzieren.</p>
      <h4>5.2 Marketing- / Tracking-Cookies</h4>
      <p>Marketing- / Tracking-Cookies sind Cookies oder eine andere Form der lokalen Speicherung, die zur Erstellung von Benutzerprofilen verwendet werden, um Werbung anzuzeigen oder den Benutzer auf dieser Website oder über mehrere Websites hinweg für ähnliche Marketingzwecke zu verfolgen.</p>
      <h2>6. Platzierte Cookies</h2>
      <Collapse style={{marginTop:"1.5rem"}}>
        <Panel header="Google Fonts" key="1">
          <h4>Nutzung</h4>
          <p>Wir verwenden Google Fonts für Anzeige von Webfonts. <a href='https://cookiedatabase.org/service/google-fonts/'>Mehr lesen</a></p>
          <h4>Weitergabe von Daten</h4>
          <p>Für weitere Informationen, bitte die <a href="https://policies.google.com/privacy">Google Fonts Datenschutzerklärung lesen.</a></p>
          <h4>Marketing</h4>
          <Table columns={columns1} dataSource={data1} pagination={false} bordered />
        </Panel>
      </Collapse>
      <Collapse>
        <Panel header="Google reCAPTCHA" key="1">
          <h4>Nutzung</h4>
          <p>Wir verwenden Google reCAPTCHA für Spam-Vorbeugung.<a href='https://cookiedatabase.org/service/google-recaptcha/'>Mehr lesen</a></p>
          <h4>Weitergabe von Daten</h4>
          <p>Für weitere Informationen, bitte die Google reCAPTCHA <a href='https://policies.google.com/privacy'>Datenschutzerklärung lesen.</a></p>
          <Table columns={columns2} dataSource={data2} pagination={false} bordered />
        </Panel>
      </Collapse>

      <Collapse style={{marginBottom:"1.5rem"}}>
        <Panel header="Google Maps" key="1">
          <h4>Nutzung</h4>
          <p>Wir verwenden Google Maps für Kartenanzeige.<a href='https://cookiedatabase.org/service/google-maps/'>Mehr lesen</a></p>
          <h4>Weitergabe von Daten</h4>
          <p>Für weitere Informationen, bitte die <a href='https://policies.google.com/privacy'>Datenschutzerklärung lesen.</a></p>
          <Table columns={columns3} dataSource={data3} pagination={false} bordered />
        </Panel>
      </Collapse>
      <h2>7. Zustimmung</h2>
      <p>Wenn du unsere Website das erste Mal besuchst, zeigen wir dir ein Pop-Up mit einer Erklärung über Cookies. Sobald du auf „Einstellungen speichern“ klickst, gibst du uns dein Einverständnis, alle von dir gewählten Kategorien von Cookies und Plugins wie in dieser Cookie-Erklärung beschrieben zu verwenden. Du kannst die Verwendung von Cookies über deinen Browser deaktivieren, aber bitte beachte, dass unsere Website dann unter Umständen nicht richtig funktioniert.</p>
      <h4>7.1 Verwalte deine Zustimmungseinstellungen</h4>
      <Collapse style={{marginTop:"1.5rem"}}>
        <Panel header="Funktional" key="1">
          <p>Die technische Speicherung oder der Zugang ist unbedingt erforderlich für den rechtmäßigen Zweck, die Nutzung eines bestimmten Dienstes zu ermöglichen, der vom Teilnehmer oder Nutzer ausdrücklich gewünscht wird, oder für den alleinigen Zweck, die Übertragung einer Nachricht über ein elektronisches Kommunikationsnetz durchzuführen.</p>
        </Panel>
      </Collapse>
      <Collapse style={{marginBottom:"1.5rem"}}>
        <Panel header="Marketing" key="1">
          <p>Die technische Speicherung oder der Zugriff ist erforderlich, um Nutzerprofile zu erstellen, um Werbung zu versenden oder um den Nutzer auf einer Website oder über mehrere Websites hinweg zu ähnlichen Marketingzwecken zu verfolgen.</p>
        </Panel>
      </Collapse>
      <h2>8. Aktivierung/Deaktivierung und Löschen von Cookies</h2>
      <p>Du kannst deinen Internetbrowser verwenden um automatisch oder manuell Cookies zu löschen. Du kannst außerdem spezifizieren ob spezielle Cookies nicht platziert werden sollen. Eine andere Möglichkeit ist es deinen Internetbrowser derart einzurichten, dass du jedes Mal benachrichtigt wirst, wenn ein Cookie platziert wird. Für weitere Information über diese Möglichkeiten beachte die Anweisungen in der Hilfesektion deines Browsers.</p>
      <p>Bitte nimm zur Kentniss, dass unsere Website möglicherweise nicht richtig funktioniert wenn alle Cookies deaktiviert sind. Wenn du die Cookies in deinem Browser löscht, werden diese neuplatziert wenn du unsere Website erneut besuchst.</p>
      <h2>9. Deine Rechte in Bezug auf persönliche Daten</h2>
      <p>Du hast in Bezug auf deine persönlichen Daten die folgenden Rechte:</p>
      <ul>
        <li>Du hast das Recht zu wissen, warum deine persönlichen Daten gebraucht werden, was mit ihnen passiert und wie lange diese verwahrt werden.</li>
        <li>Zugriffsrecht: Du hast das Recht deine uns bekannten persönliche Daten einzusehen.</li>
        <li>Recht auf Berichtigung: Du hast das Recht wann immer du wünscht, deine persönlichen Daten zu ergänzen, zu korrigieren sowie gelöscht oder blockiert zu bekommen.</li>
        <li>Wenn du uns dein Einverständnis zur Verarbeitung deiner Daten gegeben hast, hast du das Recht dieses Einverständnis zu widerrufen und deine persönlichen Daten löschen zu lassen.</li>
        <li>Recht auf Datentransfer deiner Daten: Du hast das Recht, alle deine persönlichen Daten von einem Kontrolleur anzufordern und in ihrer Gesamtheit zu einem anderen Kontrolleur zu transferieren.</li>
        <li>Widerspruchsrecht: Du kannst der Verarbeitung deiner Daten widersprechen. Wir entsprechen dem, es sei denn es gibt berechtigte Gründe für die Verarbeitung.</li>

      </ul>
      <p>Um diese Rechte auszuüben kontaktiere uns bitte. Bitte beziehe dich auf die Kontaktdaten am Ende dieser Cookie-Erklärung. Wenn du eine Beschwerde darüber hast, wie wir deine Daten behandeln, würden wir diese gerne hören, aber du hast auch das Recht diese an die Aufsichtsbehörde (der Datenschutzbehörde) zu richten.</p>
      <h2>10. Kontaktdaten</h2>
      <p>Für Fragen und/oder Kommentare über unsere Cookie-Richtlinien und diese Aussage kontaktiere uns bitte mittels der folgenden Kontaktdaten:</p>
      <ul>
      <li>Grossraum V-Klasse Taxi</li>
      <li>Schafhofstr. 10</li>
      <li>90411 Nürnberg</li>
      <li>Deutschland</li>
      <li>Website: <a href='https://grosraumv-klassetaxi.de'>https://grosraumv-klassetaxi.de</a></li>
      <li>Telefonnummer: 0911/666112</li>
      </ul>
      <p>Diese Cookie-Richtlinie wurde mit <a href='https://cookiedatabase.org/'>cookiedatabase.org </a>am 20. Marsch 2024 synchronisiert.</p>
    </div>
  )
}

export default PolicyTerms