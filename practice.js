
export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  console.log(varsAndTypes, typeof(varsAndTypes))
  let f = 3 //("Tilldelar värdet 3")
  f == 3 //("Kollar om f är like med 3")
  f === 3 //("Kollar om f är lika med 3, fast strikt")
  f != 4 //Säger att f inte är lika med 4
  //Vet inte riktigt hur jag ska visa att jag kan saker om variabler, antar att du får se i senare bitar av uppgiften att jag kan.
  console.log("Det finns många datatyper, t.ex nummer, strängar, listor(array)...")
}

function operators(element) {
  // kod för att visa vad du lärt dig om operatorer
  console.log('operators === ', 1 === 1, "operatorer är olika slags tecken som används för att sätta värden eller skapa krav, t.ex +, -, *, !=, ! !=...")
  console.log("b = 1, b != 5, b*2 = 2, b + b = 2, b/4 = 0.25")
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let c = 0
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
  if(c >= 30){
    console.log("C är lika med 30")
  }
  else {
    console.log("C är inte 30")
    c++
  }
  console.log("Denna kodsnutt gör att den kommmer att kolla om c >= 30, ifall den inte är det kommer den skriva ut 'C är inte 30' och plussa på 1 på C variabeln.")
  for(let i = 0; i < 5; i++ ){
      console.log("Detta är koden som körs när i > 5, den kommer fortsätta plussa på 1 på i tills i är större än fem och då körs koden.")

      //Du ville att man skulle använda variabel.forEach((b)=>{där man lägger in en array och någonting den ska göra})
  }
}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])
  console.log("En array är en lista med variabler, nummer, strängar eller karaktärer. Jag kan inte riktigt förklara vad ett objekt är.")
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log("Fick inte till eventlistener :C")
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
  let hejhej = document.queryselector 
  hejhej.classList.add(hej)
  console.log("Detta lägger till elementet 'hej'")
  hejhej.classList.remove(hej)
  console.log("Detta tar bort elementet 'hej'")
}