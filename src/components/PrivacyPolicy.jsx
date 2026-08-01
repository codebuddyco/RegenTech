import Logo from "./Logo.jsx";

export default function PrivacyPolicy() {
  return (
    <>
      <header className="pp-header">
        <div className="pp-header-inner">
          <a href="/" className="pp-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Wróć na stronę
          </a>
          <a href="/"><Logo /></a>
        </div>
      </header>

      <main className="pp-main">
        <div className="pp-inner">
          <div className="pp-hero">
            <span className="eyebrow"><span className="dot" /></span>
            <h1>Polityka Prywatności</h1>
            <p className="pp-meta mono">Ostatnia aktualizacja: 1 sierpnia 2025 r.</p>
          </div>

          <div className="pp-body">

            <section className="pp-section">
              <h2>1. Administrator danych</h2>
              <p>
                Administratorem Twoich danych osobowych jest <strong>Regen Tech</strong>,
                z siedzibą pod adresem <strong>Stanisława Zbrowskiego 60, 26-600 Radom</strong>, NIP: <strong>7963038856</strong>
                (dalej: „Administrator").
              </p>
              <p>Kontakt w sprawach ochrony danych: <strong>regentech.rt@gmail.com</strong></p>
            </section>

            <section className="pp-section">
              <h2>2. Jakie dane zbieramy</h2>
              <p>W zależności od sposobu korzystania z serwisu możemy przetwarzać:</p>
              <ul>
                <li><strong>Dane kontaktowe</strong> — imię, nazwisko, adres e-mail, numer telefonu podane w formularzu kontaktowym.</li>
                <li><strong>Dane techniczne</strong> — adres IP, typ przeglądarki, system operacyjny, czas wizyty — zbierane automatycznie w celach analitycznych.</li>
                <li><strong>Pliki cookies</strong> — szczegóły opisano w sekcji 6.</li>
              </ul>
            </section>

            <section className="pp-section">
              <h2>3. Cel i podstawa prawna przetwarzania</h2>
              <div className="pp-table-wrap">
                <table className="pp-table">
                  <thead>
                    <tr>
                      <th>Cel</th>
                      <th>Podstawa prawna (RODO)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Odpowiedź na zapytania z formularza kontaktowego</td>
                      <td>Art. 6 ust. 1 lit. b — wykonanie umowy / działania przedumowne</td>
                    </tr>
                    <tr>
                      <td>Analiza ruchu na stronie (statystyki)</td>
                      <td>Art. 6 ust. 1 lit. f — prawnie uzasadniony interes Administratora</td>
                    </tr>
                    <tr>
                      <td>Marketing własnych usług</td>
                      <td>Art. 6 ust. 1 lit. f — prawnie uzasadniony interes Administratora</td>
                    </tr>
                    <tr>
                      <td>Wypełnienie obowiązków prawnych</td>
                      <td>Art. 6 ust. 1 lit. c — obowiązek prawny</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="pp-section">
              <h2>4. Okres przechowywania danych</h2>
              <ul>
                <li>Dane z formularza kontaktowego — do 3 lat od ostatniego kontaktu lub do czasu realizacji umowy i upływu okresu przedawnienia roszczeń.</li>
                <li>Dane analityczne (logi, cookies) — do 26 miesięcy.</li>
                <li>Dane wymagane przepisami prawa (np. faktury) — przez okres wynikający z przepisów podatkowych (zazwyczaj 5 lat).</li>
              </ul>
            </section>

            <section className="pp-section">
              <h2>5. Odbiorcy danych</h2>
              <p>Twoje dane możemy przekazywać:</p>
              <ul>
                <li>Podmiotom świadczącym usługi hostingowe i IT (np. dostawcy serwera, poczty e-mail).</li>
                <li>Narzędziom analitycznym (np. Google Analytics — Google LLC, USA) na podstawie zawartych umów powierzenia lub standardowych klauzul umownych.</li>
                <li>Organom państwowym, gdy wynika to z przepisów prawa.</li>
              </ul>
              <p>Nie sprzedajemy danych osobowych podmiotom trzecim.</p>
            </section>

            <section className="pp-section">
              <h2>6. Pliki cookies</h2>
              <p>Serwis używa plików cookies (ciasteczek) — małych plików tekstowych zapisywanych w przeglądarce. Wyróżniamy:</p>
              <ul>
                <li><strong>Cookies niezbędne</strong> — konieczne do działania strony (np. zapamiętanie wyboru dotyczącego cookies). Nie wymagają zgody.</li>
                <li><strong>Cookies analityczne</strong> — zbierają anonimowe dane o sposobie korzystania ze strony (np. Google Analytics). Wymagają Twojej zgody.</li>
                <li><strong>Cookies marketingowe</strong> — umożliwiają personalizację reklam. Wymagają Twojej zgody.</li>
              </ul>
              <p>
                Możesz w każdej chwili wycofać zgodę lub zmienić ustawienia cookies w swojej przeglądarce.
                Szczegółowe informacje znajdziesz w pomocy swojej przeglądarki.
              </p>
            </section>

            <section className="pp-section">
              <h2>7. Twoje prawa</h2>
              <p>Na podstawie RODO przysługują Ci następujące prawa:</p>
              <ul>
                <li><strong>Prawo dostępu</strong> — możesz zażądać kopii swoich danych.</li>
                <li><strong>Prawo do sprostowania</strong> — możesz poprosić o poprawienie nieprawidłowych danych.</li>
                <li><strong>Prawo do usunięcia</strong> — możesz zażądać usunięcia danych („prawo do bycia zapomnianym").</li>
                <li><strong>Prawo do ograniczenia przetwarzania</strong> — możesz zażądać wstrzymania przetwarzania danych.</li>
                <li><strong>Prawo do przenoszenia danych</strong> — możesz otrzymać dane w ustrukturyzowanym formacie.</li>
                <li><strong>Prawo do sprzeciwu</strong> — możesz sprzeciwić się przetwarzaniu danych na podstawie prawnie uzasadnionego interesu.</li>
                <li><strong>Prawo do skargi</strong> — możesz złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.</li>
              </ul>
              <p>Aby skorzystać z praw, skontaktuj się z nami: <strong>regentech.rt@gmail.com</strong></p>
            </section>

            <section className="pp-section">
              <h2>8. Bezpieczeństwo danych</h2>
              <p>
                Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane przed
                nieuprawnionym dostępem, utratą lub zniszczeniem, w tym szyfrowanie połączeń (SSL/TLS).
              </p>
            </section>

            <section className="pp-section">
              <h2>9. Zmiany polityki prywatności</h2>
              <p>
                Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. O istotnych zmianach
                poinformujemy poprzez stosowny komunikat na stronie. Data ostatniej aktualizacji
                znajduje się na górze dokumentu.
              </p>
            </section>

          </div>

          <div className="pp-footer-note mono">
            Dokument sporządzony zgodnie z Rozporządzeniem (UE) 2016/679 (RODO) oraz ustawą
            z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.
          </div>
        </div>
      </main>
    </>
  );
}
