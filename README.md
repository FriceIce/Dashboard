# Dashboard

# Reflektion
<h3 style="text-decoration: underline;">Styrkor:<h3> 
I projektet valde jag att inkludera moduler med tanke på deras mångsidiga fördelar. En av styrkorna hos dessa moduler är deras kapacitet att strukturera koden genom att bryta ner den, vilket möjliggör  återanvändning av samma kod över olika filer. Uppdatering av koden har varit effektivare under projektets gång, då varje modul är fördelad i separata JavaScript-filer med tydliga namn, vilket underlättar både navigeringen i programmet och sökandet efter buggar.
Huvudfilen (main.js) importerar dessa moduler. Den innehåller enbart eventhantering och de specifika moduler. Med andra ord möjliggör modulerna mindre kod i huvudfilen. 

<h3 style="text-decoration: underline;">Brister:<h3>  
Säkerheten i projektet har sina brister och jag har åtgärdat det som var möjligt med mina begränsade kunskaper. Den första säkerhetsrisken var att jag exponerade mina API-nycklar direkt i programkoden, vilket gör de lättillgänglig via DevTools under source-fliken. Det ökar risken för att någon får tag på mina API-nycklar och orsaka oönskade kostnader för betalda API-tjänster. För att gömma API-nycklarna laddae jag ner dotenv via npm, skapade en .env-fil i dashboard-repot och importerade sedan specifika variabler från filen till utvalda JavaScript-variabler. Detta ökade säkerheten. 
Andra säkerhetsbristen är att det finns fortfarande risker med att utföra fetch-anrop i frontend (client-side). Det skulle vara mer önskvärt om anropet kunde utföras i backend för att ytterligare minska exponeringen och stärka säkerheten i helhet.