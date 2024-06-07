export type Project = {
  slug: string
  title: string
  description: string
  text: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'examensarbete',
    title: 'Examensarbete',
    description:
      'Optimering av arbetsplatsens tillgänglighet: Strategier för att integrera tillgänglighet i företagets praxis.',
    text: "Arbetet är baserat på kunskaper som härleds från de erfarenheter samt arbetsuppgifter som genomfördes under praktik, kallad lärande i arbetslivet (LIA), på Martin & Servera. Där arbetet utfördes på avdelningen för digitala tjänster och samarbetade med två team samtidigt; ett team hade fokus på CIAM (Customer Identity and Access Management), som är en inloggningstjänst, och det andra teamet hade fokus på att förbättra Martin & Serveras tillgänglighet" +
    "De primära arbetsuppgifterna som utfördes var relaterade till tillgänglighet. Vilket innebar att utveckla CX-ramverket (Customer Experience) skapad av företaget i Confluence. Ramverket la vikt vid tillgänglighet och noterade vad varje roll inom organisationen skulle fylla för att prioritera tillgänglighet. Ramverket innehöll även riktlinjer och verktyg för att uppnå de aktuella målen." +
    "Arbetet under praktiken gav inspiration samt möjliggjorde en kunskapsgrund för det aktuella examensarbetet. Examensarbetet syftar till att utforska hur tillgänglighet kan implementeras inom ett företag. Syftet omfattar:" +
    "Bygga ett ramverk för tillgänglighet" +
    "Utveckla workshops om tillgänglighet" +
    "Utformning av tillgänglighetsaudits och viktiga överväganden i den processen,",
    image:
      '/logo_martinservera.jpg',
  },
  {
    slug: 'accessibility',
    title: 'Tillgänglighet',
    description: "En kort problemformulering om tillgänglighet från mitt examensarbete",
    text: "Företaget står inför utmaningen att säkerställa engagemang och förståelse för tillgänglighetsarbetet bland alla anställda."+
          "Trots tillgänglighetskravens ökande betydelse har arbetet med att integrera dessa principer i arbetsstrukturen varit otillräckligt." + 
          "Att använda materialet för att implementera tillgänglighet i företagets arbete och säkerställa efterlevnad av kommande lagkrav gällande tillgänglighet som träder i kraft den 28 juni, år 2025 (digin.nu). Visionen är att företaget ska ligga i framkant av tillgänglighet. CX-ramverket lade grunden för att alla inom företaget skulle använda det för att säkerställa tillgängligheten för sina uppgifter och ge information om hur varje berörd roll, alltså PO (Product owner), content manager, utvecklare och designer, kan förbättra prestandan vad gäller tillgänglighet. En nyfikenhet fanns för att se hur effektivt företaget kan implementera ett tillgänglighetsprogram för att uppfylla juridiska krav och förbättra användarupplevelsen för alla.",
    image:
      '/accessibility.png',
  },
]
