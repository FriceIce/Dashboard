# Dashboard Projekt

Detta projekt är en interaktiv dashboard skapad med HTML, CSS, och JavaScript. Dashbordet består huvudsakligen av fyra kort som visar olika funktioner och tre av korten hämtar data via API-anrop med hjälp av Axios. Headern består av en live klocka med dagens datum och footern innehåller en funktion som genererar en slumpmässig bakgrundsbild. 

<b>Korten:</b>

  1. Det första kortet lagrar URL-länkar med webbsidans ikon till vänster om länken.

  2. Det andra kortet hämtar väderinformation för en specifik plats och visar den direkt på kortet. Dessutom uppdateras sidomenyn med den senaste sökningen. Applikationen börjar med att fråga efter webbbrowserns koordinater och vid godkännande visas den befintliga väderinformationen för webbläsaren. Om det förfrågan nekas visas väderinformation för Sverige.

  3. Det tredje kortet visar en karta som antingen centrerar sig kring användarens koordinater eller Sveriges koordinater, beroende på om användaren har gett tillstånd för platsinformation. Här har man även möjligheten att få vägbeskrivning till olika platser runt om i världen samt att uppleva kartan i helskärmsläge.

  4. Det fjärde kortet visar The New York Times bästsäljarlista för 'Hardcover Fictions' 15 bästa böcker.

# Teknologier
<ul>
  <li>HTML</li> 
  <li>CSS</li> 
  <li>JavaScript</li> 
  <li>Vite</li> 
  <li>Axios</li> 
  <li>dotenv</li>
</ul>

# Installation
Följ dessa steg: 
 1. Klona projektet till din lokala miljö - git clone https://github.com/FriceIce/Dashboard.git

 2. Installera nödvändiga paket via npm:<br>
  [1]. Vite - npm create vite@latest, (https://vitejs.dev/guide/)<br>
  [2]. Axios - npm install axios, (https://axios-http.com/docs/intro)<br>
  [3]. dotenv - npm install dotenv --save, (https://www.npmjs.com/package/dotenv?activeTab=readme) & (https://vitejs.dev/guide/env-and-mode)<br>

3. Skaffa API-nycklar/Tokens - Documentation: 
  [1]. Openweathermap API - (https://openweathermap.org/api)<br>
  [2]. Mapbox API - (https://www.youtube.com/watch?v=OySigNMXOZU)<br>
  [3]. The New York Time API - (https://developer.nytimes.com/docs/books-product/1/overview)<br>
  [4]. Unsplash API - (https://unsplash.com/documentation#get-a-random-photo)

# Reflektion
<h2>Styrkor:<h2> 
<p>
  I projektet valde jag att inkludera moduler med tanke på deras flera fördelar. En av styrkorna med dessa moduler är deras kapacitet att strukturera koden genom att bryta ner den, vilket möjliggör återanvändning av samma kod över olika filer. Uppdatering av koden har varit effektivare under projektets gång, då varje modul är fördelad i separata JavaScript-filer med tydliga namn, vilket underlättar både navigeringen i programmet och sökandet efter buggar.
  Huvudfilen (main.js) importerar dessa moduler. Filen innehåller enbart eventhantering och nödvändiga moduler. Med andra ord möjliggör modulerna mindre kod i huvudfilen.
</p>

<h2>Brister:<h2>  
<p>
  Säkerheten i projektet har sina brister och jag har åtgärdat det som var möjligt med mina begränsade kunskaper. Den första säkerhetsrisken var att jag exponerade mina API-nycklar direkt i programkoden, vilket gör de lättillgänglig via DevTools under source-fliken. Det ökar risken för att någon får tag på mina API-nycklar och kan orsaka oönskade kostnader för betalda API-tjänster. För att gömma API-nycklarna laddade jag ner dotenv via npm, skapade en .env-fil i roten av dashboard-repot och importerade sedan specifika variabler från filen till utvalda JavaScript-variabler. Detta ökade säkerheten.
  Andra säkerhetsbristen är att det finns fortfarande risker med att utföra fetch-anrop i frontend (client-side). Det skulle vara mer önskvärt om anropet kunde utföras i backend för att ytterligare minska exponeringen och stärka säkerheten i helhet.
</p>