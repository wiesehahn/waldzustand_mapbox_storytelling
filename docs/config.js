var config = {
    style: 'mapbox://styles/wiesehahn/ck2xfshz61op11dtdzhxfehrb', //'mapbox://styles/mapbox/satellite-v9',//  'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1Ijoid2llc2VoYWhuIiwiYSI6ImNrMnhjMzRmaTA3ejQzY3FydjN2bjV3djAifQ.dlWSd8EtIAmyjGmeK4MRAw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Waldschäden aus der Sicht von Satelliten',
    subtitle: 'Waldschadensflächen in Nordrhein-Westfalen wurden mithilfe von freien Satellitenbildern detektiert',
    byline: 'By Jens Wiesehahn',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            title: 'Waldschadensmonitoring',
            image: './images/waldschaden.jpg',
            description: 'Dem Wald geht es aktuell schlecht, Stichwort Waldsterben 2.0. Durch Stürme, Dürre, Brände und Borkenkäferbefall sind laut Bundesregierung in 2018 und 2019 insgesamt mehr als 180.000 Hektar Wald geschädigt worden. Die Verantwortung zur Quantifizierung der Waldschäden liegt zwar in erster Linie beim Waldbewirtschafter, dennoch ist auch eine unabhängige Schätzung auf Überregionaler Ebene mit einheitlicher Methodik wichtig. So könnten z.B. Regionen besser miteinander vergleichen werden oder Zahlen unterschiedlicher Quellen verifiziert werden. Terrestrische Inventurdaten werden entweder zu selten erfasst, um aktuelle Zahlen zu liefern (Betriebsinventuren, Bundeswaldinventur) oder sie haben einen zu geringen Umfang um Entwicklungen auf regionaler Ebene abbilden zu können (Waldzustandserfassung). Eine Alternative (Ergänzung) besteht in der Auswertung von Fernerkundungsdaten. ',
            location: {
                center: [10.616, 51.818], //[7.2, 51.7]
                zoom: 16.52, //7.2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                     layer: 'wrs2-germany',
                     opacity: 0
                 },
                                  {
                     layer: 'hochstift',
                     opacity: 0
                 },
                 {
                     layer: 'nrw',
                     opacity: 0
                 },
                 {
                     layer: 'nbr_brakel_19',
                     opacity: 0
                 },
                 {
                     layer: 'nbr_brakel_18',
                     opacity: 0
                 },
                 {
                     layer: 'nbr_brakel_17',
                     opacity: 0
                 },
                 {
                     layer: 'friederike',
                     opacity: 0
                 },
                 {
                     layer: 'mapbox-satellite',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'mapbox-satellite',
                     opacity: 0
                 }
            ]
        },
        
        {
            id: 'nrw',
            title: 'Waldschadensmonitoring',
            image: './images/waldzustand_app_logo.png',
            description: 'Um das Potenzial von freien Daten und Algorithmen zur automatisierten Schadflächenerkennung zu testen wurde eine Pilotstudie durchgeführt. Kostenlose Satellitenbilddaten und frei verfügbaren Geodaten wurden genutzt um stark geschädigte Waldflächen der letzten 10 Jahre in Nordrhein-Westfalen zu detektieren und regionalisierte Waldschadensflächen abzuleiten. Das Land NRW wurde aufgrund der freien Datenverfügbarkeit als Beispielregion ausgewählt. Zwar sind die benötigten Satellitenbilder global kostenfrei verfügbar, regionale Daten wie Forstamtsgrenzen oder Waldflächen welche zur Regionalisierung der Berechnungen benutzt werden unterliegen aber in vielen Bundesländern immer noch komplizierten Beschränkungen.',
            location: {
                center: [7.2, 51.7],
                zoom: 7.2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'nrw',
                     opacity: 0.5
                 }
            ],
            onChapterExit: [
            ]
        },
        
        {
            id: 'Methodik',
            title: 'Methodik',
            image: './images/LandTrendr.jpg',
            description: 'Um die Schadflächen zu bestimmen wurden Daten der Landsat-Satelliten von 1984 bis 2019 auf einer Cloud-Computing-Plattform (Google-Earth-Engine) ausgewertet. Die Auswertung auf externen Rechenclustern ermöglicht es enorme Datenmengen in kurzer Zeit zu prozessieren. So wurden hier für die gesamte Landesfläche Satellitenbilddaten aus 35 Jahren ausgewertet, was in etwa 1600 Bildern mit einer Datengröße von insgesamt 1,6 Terrabyte entspricht. Die Bilder wurden zu jährlichen Kompositen verrechnet und aus diesen mit einer Zeitreihenanalyse (LandTrendr-Algorithmus) Flächen abgeleitet, auf welchen eine signifikante Reduktion der Bestandesvitalität verzeichnet wurde. Durch diese Methode ist es möglich für große Regionen einheitliche Daten zu Anzahl, Größe und Verteilung von Schadflächen zu erzeugen, aus welchen sich dann z.B. Statistiken für unterschiedliche Verwaltungseinheiten ableiten lassen.',
            location: {
                center: [7.2, 51.7],
                zoom: 7.2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                     layer: 'wrs2-germany',
                     opacity: 0.5
                 },
                 {
                     layer: 'mapbox-satellite',
                     opacity: 1
                 }
            ],
            onChapterExit: [
              {
                     layer: 'wrs2-germany',
                     opacity: 0
                 },
                 {
                     layer: 'nrw',
                     opacity: 0
                 },
                 {
                     layer: 'mapbox-satellite',
                     opacity: 0
                 }
            ]
        },
         
                 
        {
            id: 'brakel_ortho',
            title: 'Waldzustandserkennung aus Satellitenbildern',
            image: './images/ortho_flugzeug.png',
            description: 'Hochaufgelöste Orthofotos werden im Forstbereich schon sehr lange genutzt. Aus ihnen lassen sich auch Waldschäden visuell erkennen. Allerdings kostet die Befliegung Geld und wird meist nur mit einer geringen Wiederholrate durchgeführt. Zwar werden die Orthofotos oft nach einiger Zeit von Providern wie Google oder in diesem Fall Mapbox als Hintergrundlayer angeboten, diese sind dann aber meist schon älter. Für ein flächendeckendes Schadmonitoring fehlen einheitliche, kostenfreie Daten.',
            location: {
                center: [9.26606, 51.70882],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                     layer: 'mapbox-satellite',
                     opacity: 1
                 }
                 ],
            onChapterExit: [
            ]
        },
        
        {
            id: 'brakel_2017',
            title: 'Waldzustand 2017',
            image: './images/spectral_responses_nbr.jpg',
            description: 'Landsat und Sentinel Satellitenbilder dagegen sind kostenfrei verfügbar, haben eine hohe Wiederholrate und sind global verfügbar. Als Vitalitätsmaß wurde hier der Normalized Burn Ratio (NBR) berechnet. Er basiert auf den Rückstrahlungswerten im Nahen Infrarot und im Kurzwelligen Infrarot und liefert damit ein indirektes Maß der Photosyntheseleistung. Bei gesunder Vegetation er hoch bei trockener Biomasse oder sichtbarem Boden ist der niedrig. Hier ist der NBR und damit näherungsweise der Waldzustand während der Sommermonate 2017 zu sehen.',
            location: {
                center: [9.26606, 51.70882],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                     layer: 'nbr_brakel_17',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                            {
                     layer: 'nbr_brakel_17',
                     opacity: 0
                 }
            ]
        },
        
        {
            id: 'brakel_2018',
            title: 'Waldzustand 2018',
            image: '',
            description: 'Der Index während der Sommermonate 2018 lässt erkennen, dass sich die Vitalität in zahlreichen Beständen verschlechtert hat. Die Hauptursache hier im östlichen Nordrhein-Westfalen war das Sturmtief Friederike, wodurch Anfang 2018 massive Schäden verursacht wurden.',
            location: {
                center: [9.26606, 51.70882],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                     layer: 'nbr_brakel_18',
                     opacity: 1
                 }
            ],
            onChapterExit: [
              {
                     layer: 'nbr_brakel_18',
                     opacity: 0
                 }
            ]
        },
        
        {
            id: 'brakel_2019',
            title: 'Waldzustand 2019',
            image: '',
            description: 'Am Index des Jahres 2019 ist zu sehen, dass der Vitalitätsindex in einigen Beständen nochmals gesunken ist (dunkler). Die Hauptursachen hier sind die Folgen des Sturms in Kombination mit extremen Trockensommern.',
            location: {
                center: [9.26606, 51.70882],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                     layer: 'nbr_brakel_19',
                     opacity: 1
                 }
            ],
            onChapterExit: [
              {
                     layer: 'nbr_brakel_19',
                     opacity: 0
                 }
            ]
        },
               
        {
            id: 'Friederike',
            title: 'Friederike',
            image: './path/to/image/source.png',
            description: 'Hier wurde auch der Copernicus Emergency Management Service (EMS) genutzt um nach Sturmtief Friederike Anfang 2018 einen schnellen Überblick der Schäden zu erhalten. ',
            location: {
                center: [9.26606, 51.70882],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'friederike',
                     opacity: 0.8
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'friederike',
                     opacity: 0
                 },
                 {
                     layer: 'mapbox-satellite',
                     opacity: 0
                 }
            ]
        },
        
                {
            id: 'Hochstift',
            title: 'Hochstift',
            image: './images/waldschadensflächen_hochstift.jpg',
            description: 'Besonders die Östlichen Forstämter waren von Sturmtief Friederike und seinen Folgen betroffen. Im Forstamt Hochstift sind XXX Festmeter gefallen. Die Auswertung der Landsat-Zeitreihe ergibt allein im Forstamt Hochstift Schadflächen von XXX ha in 2018. dabei lässt sich erkennen, dass vor allem die Nadelholzbestände betroffen waren.',
            location: {
                center: [8.98465, 51.66492],
                zoom: 9.30,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'hochstift',
                     opacity: 0.5
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'hochstift',
                     opacity: 0
                 }
            ]
        },
        
        {
            id: 'Ergebnisse',
            title: 'Ergebnisse',
            image: './images/waldschadensflächen_nrw.jpg',
            description: 'Erste Ergebnisse wurden online abrufbar in einer Web-App zusammengefasst (https://wiesehahn.users.earthengine.app/view/waldzustand-nrw-v11). In der Anwendung lassen sich Statistiken zu Schadflächen pro Jahr und Bestandestyp auf der Ebene der Forstämter darstellen. Die Werte beziehen sich jeweils auf die Periode von Juli des Vorjahres bis Juli des betreffenden Jahres. Es ist klar zu erkennen, dass das Jahr 2018 durch den Sturm Friederike und den anschließenden Hitzesommer mit erhöhter Borkenkäfervermehrung heraussticht. Auch im Jahr 2019 sind die Folgen des Vorjahres und des erneut trockenen Sommers erkennbar. Ein Teil der diesjährigen Schäden wird aber auch in den Satellitenbildern erst in den nächsten Jahren sichtbar sein. Für die meisten Forstämter lässt sich auch klar erkennen, dass besonders die Nadelholzbestände von Vitalitätsverlusten betroffen waren. Die Auswertung ergibt für NRW Schadflächen in Höhe von 5600 ha in 2018 und 3100 ha im Jahr 2019. ',
            location: {
                center: [7.2, 51.7],
                zoom: 7.2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },        

        {
            id: 'outlook',
            title: 'Zukunft',
            image: './images/LandTrendr.jpg',
            description: 'Die genutzten Daten und die Methoden sind nicht neu, praktische Anwendung in der Forstwirtschaft finden sie jedoch immer noch selten. Eine großflächige Anwendung z.B. auf die gesamte Bundesrepublik könnte durch die Berechnung in der Cloud und die freie Datenverfügbarkeit relativ einfach realisiert werden. ',
            location: {
                center: [8.22206, 51.37960],
                zoom: 5.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                     layer: 'wrs2-germany',
                     opacity: 0.5
                 }
                 ],
            onChapterExit: []
        }
    ]
};
