const fontsDescriptors = [
    {
        fontFamily: 'Myriad Pro Black Cond',
        src: "local('Myriad Pro Black Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Black-Condensed-Italic_0.ttf')",
        style: 'italic',
        weight: 900,
        stretch: 'condensed'
    },
    {
        fontFamily: 'Myriad Pro Black Cond',
        src: "local('Myriad Pro Black Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-BlackCond_1.otf') format('opentype')",
        weight: 900,
        stretch: 'condensed'
    },
    {
        fontFamily: 'Myriad Pro Black SemiCond',
        src: "local('Myriad Pro Black SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Black-SemiCondensed-Italic_0.ttf')",
        style: 'italic',
        weight: 900,
        stretch: 'semi-condensed'
    },
    {
        fontFamily: 'Myriad Pro Black SemiCond',
        src: "local('Myriad Pro Black SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Black-SemiCondensed_0.ttf')",
        weight: 900,
        stretch: 'semi-condensed'
    },
    {
        fontFamily: 'Myriad Pro Black SemiExt',
        src: "local('Myriad Pro Black SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Black-SemiExtended-Italic_0.ttf')",
        style: 'italic',
        weight: 900,
        stretch: 'semi-expanded'
    },
    {
        fontFamily: 'Myriad Pro Black SemiExt',
        src: "local('Myriad Pro Black SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Black-SemiExtended_0.ttf')",
        weight: 900,
        stretch: 'semi-expanded',
    },
    {
        fontFamily: 'Myriad Pro SemiCond',
        src: "local('Myriad Pro SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Bold-SemiCondensed-Italic_0.ttf')",
        style: 'italic',
        weight: 'bold',
        stretch: 'semi-condensed',
    },
    {
        fontFamily: 'Myriad Pro SemiCond',
        src: "local('Myriad Pro SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Bold-SemiCondensed_0.ttf')",
        weight: 'bold',
        stretch: 'semi-condensed',
    },
    {
        fontFamily: 'Myriad Pro SemiExt',
        src: "local('Myriad Pro SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Bold-SemiExtended-Italic_0.ttf')",
        style: 'italic',
        weight: 'bold',
        stretch: 'semi-expanded',
    },
    {
        fontFamily: 'Myriad Pro SemiExt',
        src: "local('Myriad Pro SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Bold-SemiExtended_0.ttf')",
        weight: 'bold',
        stretch: 'semi-expanded',
    },
    {
        fontFamily: 'Myriad Pro Light Cond',
        src: "local('Myriad Pro Light Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Light-Condensed-Italic_0.ttf')",
        style: 'italic',
        weight: 300,
        stretch: 'condensed',
    },
    {
        fontFamily: 'Myriad Pro Light Cond',
        src: "local('Myriad Pro Light Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Light-Condensed_0.ttf')",
        weight: 300,
        stretch: 'condensed',
    },
    {
        fontFamily: 'Myriad Pro Light',
        src: "local('Myriad Pro Light'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Light-Italic_0.ttf')",
        style: 'italic',
        weight: 300,
    },
    {
        fontFamily: "Myriad Pro Light SemiCond",
        src: "local('Myriad Pro Light SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Light-SemiCondensed-Italic_0.ttf')",
        stretch: "semi-condensed",
        style: "italic",
        weight: 300,
    },
    {
        fontFamily: "Myriad Pro Light SemiCond",
        src: "local('Myriad Pro Light SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Light-SemiCondensed_0.ttf')",
        stretch: "semi-condensed",
        weight: 300,
    },
    {
        fontFamily: "Myriad Pro Light SemiExt",
        src: "local('Myriad Pro Light SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Light-SemiExtended-Italic_0.ttf')",
        stretch: "semi-expanded",
        style: "italic",
        weight: 300,
    },
    {
        fontFamily: "Myriad Pro Light SemiExt",
        src: "local('Myriad Pro Light SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Light-SemiExtended_0.ttf')",
        stretch: "semi-expanded",
        weight: 300,
    },
    {
        fontFamily: "Myriad Pro Light Cond",
        src: "local('Myriad Pro Light Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Semibold-Condensed-Italic_0.ttf')",
        stretch: "condensed",
        style: "italic",
        weight: 600,
    },
    {
        fontFamily: "Myriad Pro Light SemiCond",
        src: "local('Myriad Pro Light SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Semibold-SemiCondensed-Italic_0.ttf')",
        stretch: "semi-condensed",
        style: "italic",
        weight: 600,
    },
    {
        fontFamily: "Myriad Pro Light SemiCond",
        src: "local('Myriad Pro Light SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Semibold-SemiCondensed_0.ttf')",
        stretch: "semi-condensed",
        weight: 600,
    },
    {
        fontFamily: "Myriad Pro Light SemiExt",
        src: "local('Myriad Pro Light SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Semibold-SemiExtended-Italic_0.ttf')",
        stretch: "semi-expanded",
        style: "italic",
        weight: 600,
    },
    {
        fontFamily: "Myriad Pro Light SemiExt",
        src: "local('Myriad Pro Light SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-Semibold-SemiExtended_0.ttf')",
        stretch: "semi-expanded",
        weight: 600,
    },
    {
        fontFamily: 'Myriad Pro SemiCond',
        src: "local('Myriad Pro SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-SemiCondensed-Italic_0.ttf')",
        stretch: 'semi-condensed',
        style: 'italic'
    },
    {
        fontFamily: 'Myriad Pro SemiCond',
        src: "local('Myriad Pro SemiCond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/Myriad-Pro-SemiCondensed_0.ttf')",
        stretch: 'semi-condensed'
    },
    {
        fontFamily: 'Myriad Pro Black',
        src: "local('Myriad Pro Black'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-BlackIt.otf') format('opentype')",
        weight: 900,
        style: 'italic'
    },
    {
        fontFamily: 'Myriad Pro Black',
        src: "local('Myriad Pro Black'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-Black_2.otf') format('opentype')",
        weight: 900
    },
    {
        fontFamily: 'Myriad Pro',
        src: "local('Myriad Pro'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-Bold.otf') format('opentype')",
        weight: 'bold'
    },
    {
        fontFamily: 'Myriad Pro Cond',
        src: "local('Myriad Pro Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-BoldCond.otf') format('opentype')",
        stretch: 'condensed',
        weight: 'bold'
    },
    {
        fontFamily: 'Myriad Pro Cond',
        src: "local('Myriad Pro Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-BoldCondIt.otf') format('opentype')",
        stretch: 'condensed',
        style: 'italic',
        weight: 'bold'
    },
    {
        fontFamily: 'Myriad Pro',
        src: "local('Myriad Pro'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-BoldIt.otf') format('opentype')",
        weight: 'bold',
        style: 'italic'
    },
    {
        fontFamily: 'Myriad Pro Cond',
        src: "local('Myriad Pro Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-Cond.otf') format('opentype')",
        stretch: 'condensed'
    },
    {
        fontFamily: 'Myriad Pro Cond',
        src: "local('Myriad Pro Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-CondIt.otf') format('opentype')",
        stretch: 'condensed',
        style: 'italic'
    }, {
        fontFamily: 'Myriad Pro',
        src: "local('Myriad Pro'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-It.otf') format('opentype')",
        style: 'italic',
    },
    {
        fontFamily: 'Myriad Pro Light',
        src: "local('Myriad Pro Light'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-Light.otf') format('opentype')",
        weight: 300,
    },
    {
        fontFamily: 'Myriad Pro',
        src: "local('Myriad Pro'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-Regular.otf') format('opentype')",
    },
    {
        fontFamily: 'Myriad Pro Light',
        src: "local('Myriad Pro Light'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-Semibold.otf') format('opentype')",
        weight: 600,
    },
    {
        fontFamily: 'Myriad Pro Light Cond',
        src: "local('Myriad Pro Light Cond'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-SemiboldCond_1.otf') format('opentype')",
        stretch: 'condensed',
        weight: 600,
    },
    {
        fontFamily: 'Myriad Pro Light',
        src: "local('Myriad Pro Light'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-SemiboldIt.otf') format('opentype')",
        style: 'italic',
        weight: 600,
    },
    {
        fontFamily: 'Myriad Pro SemiExt',
        src: "local('Myriad Pro SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-SemiExtIt_1.otf') format('opentype')",
        stretch: 'semi-expanded',
        style: 'italic',
    },
    {
        fontFamily: 'Myriad Pro SemiExt',
        src: "local('Myriad Pro SemiExt'), url('/PriceTagPrintTest/priceTagsRendererApi/Fonts/Myriad/MyriadPro-SemiExt_1.otf') format('opentype')",
        stretch: 'semi-expanded',
    }
];

class FontLoadManager {
    isLoaded = false;
    callbacks = [];
    constructor(fonts) {
        var loadedFonts = 0;
       var fontLoaded = ()=> {
            if (++loadedFonts == fonts.length) {
                this.allFontsLoaded();
            }
        }
        for (var i = 0; i < fonts.length; i++) {
            const { fontFamily, src, ...fontProperties } = fonts[i];
            var newFont = new FontFace(fontFamily, src, fontProperties);
            newFont.load().then((loadedFace)=> {
                document.fonts.add(loadedFace);
                fontLoaded();
            }).catch((error)=> {
                fontLoaded();
            });
        }
    }
    onFontsLoaded(callback) {
        if (this.isLoaded) {
            callback();
        } else {
            this.callbacks.push(callback);
        }
    }
    allFontsLoaded() {
        this.isLoaded = true;
        this.callbacks.forEach(callback => callback());
    }
}

window.fontLoadManager = new FontLoadManager(fontsDescriptors);