<template>
  <SectionWrapper class="bg-white">
    <SectionContainer :width="containerWidth" class="bg-white">
      <div class="w-3/4 flex flex-col gap-y-12">
        <div class="container">
          <h3 class="text-3xl font-semibold mb-4">Zonnepanelen offertes vergelijken</h3>
          <p class="mb-6">Op steeds meer daken zie je ze liggen: zonnepanelen. Overweeg jij ook om zonnepanelen te laten plaatsen?
            Lees dan hier alles over het rendement en de gemiddelde kosten. Benieuwd naar de exacte kosten in jouw
            situatie? Vraag dan eenvoudig zonnepaneel offertes aan en ontvang tot drie vrijblijvende offertes!</p>
          <Button>Ontvang gratis offertes</Button>
        </div>
        <div class="container">
          <h3 class="text-3xl font-semibold mb-4">Waarom zonnepanelen?</h3>
          <p>De belangrijkste reden voor veel mensen om zonnepanelen op hun dak te installeren, is om te besparen op de
            energierekening. Dankzij het hoge rendement leveren zonnepanelen net zoveel op als 6% rente op de
            spaarrekening. Naast dit financiële voordeel lever je een positieve bijdrage aan het milieu, doordat
            zonne-energie geen CO-2 uitstoot heeft.</p>
        </div>
        <div class="container">
          <h3 class="text-3xl font-semibold mb-4">Hele jaar rendement</h3>
          <p>Zonnepanelen leveren niet alleen een hoog rendement in de zomer, maar werken ook perfect op bewolkte koude
            dagen. Hierdoor profiteer je het hele jaar door maximaal van jouw panelen.</p>
        </div>
        <div class="container">
          <h3 class="text-3xl font-semibold mb-4">Jaarlijkse besparing</h3>
          <p class="mb-6">Jaarlijks bespaar je honderden euro’s op de energierekening met zonnepanelen. Hoeveel dit precies is,
            hangt af van het aantal panelen, het type panelen en de stand van jouw dak. Hieronder vind je een overzicht
            van de gemiddelde besparing die zonnepanelen opleveren:</p>
          <NuxtImg src="table_image.jpg"/>
        </div>
        <div class="container">
          <h3 class="text-3xl font-semibold mb-4">Kosten zonnepanelen</h3>
          <p>De kosten van zonnepanelen verschillen erg per aanbieder. Het is daarom slim om prijzen te vergelijken bij
            meerdere partijen. De gemiddelde prijs voor tien zonnepanelen bedraagt €4.650. Dit is inclusief btw, montage
            en omvormer. Dankzij het hoge rendement betalen de zonnepanelen zich gemiddeld in 7 tot 10 jaar volledig
            terug. Hierna verdien je jaarlijks honderden euro's met het opwekken van je eigen stroom.</p>
        </div>
        <div class="container">
          <h3 class="text-3xl font-semibold mb-4">3 Tips zonnepanelen</h3>
          <p class="mb-1"><span class="font-medium">Tip 1: Zonnepaneel offertes vergelijken</span></p>
          <p class="mb-2">Zonnepanelen zijn een grote investering. Vraag daarom altijd meerdere offertes aan om zeker te weten dat je
            de beste deal kiest. Vergelijk de bedrijven niet alleen op prijs, maar let ook op certificaten en
            garantiemogelijkheden.</p>

          <p class="mb-1"><span class="font-medium">Tip 2: 0% BTW op zonnepanelen</span></p>
          <p class="mb-2">Wist je dat je sinds 1 januari 2023 geen btw meer betaalt bij de aanschaf van zonnepanelen? Het btw-tarief
            is sinds begin 2023 teruggedraaid naar 0%. Het voordeel hiervan is dat je geen btw betaalt, maar ook geen
            formulieren moet invullen en opsturen naar de Belastingdienst. Dit scheelt jou een hoop tijd ten opzichte
            van de oude situatie, waarbij je wel 21% terug moest vragen bij de Belastingdienst.</p>

          <p class="mb-1"><span class="font-medium">Tip 3: Monument</span></p>
          <p>Het plaatsen van zonnepanelen kan meestal zonder vergunning. Woon je echter in een monumentaal pand of een
            beschermd stadsgezicht? Dan zul je wel een vergunning moeten aanvragen bij de gemeente.</p>
        </div>
        <div class="container">
          <h3 class="text-3xl font-semibold mb-4">Gratis offertes vergelijken</h3>
          <p class="mb-6">Zonnepanelen zijn de afgelopen zes jaar maar liefst 26% goedkoper geworden. Wil je de prijs voor
            zonnepanelen vergelijken in jouw situatie? Vraag dan nu gratis en vrijblijvend tot 3 offertes aan van
            ervaren zonnepaneelspecialisten uit de regio. Zo bespaar je in 2 minuten eenvoudig tot wel 30% van de
            kosten!</p>
          <Button>Ontvang gratis offertes</Button>
        </div>
      </div>
      <div class="w-1/3 bg-white">
        <div class="sticky top-28 flex flex-col gap-y-6">
          <div class="container bg-primary-500 rounded-lg text-white p-12">
            <h3 class="text-3xl font-semibold mb-4">Meer weten</h3>
            <ul class="space-y-2">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div class="container bg-primary-100 rounded-lg p-12">
            <h3 class="text-3xl font-semibold mb-4">Navigatie</h3>
            <ul class="space-y-2">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  </SectionWrapper>
</template>

<script setup lang="ts">
defineProps({
  containerWidth: {
    type: String,
    default: 'three-quarters'
  },
});
</script>

