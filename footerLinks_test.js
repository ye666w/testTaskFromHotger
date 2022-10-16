
Feature('FooterLinks');

// Проставляем в куки локаль en для обхода редиректа на /ru
Before(async (I) => {
    I.amOnPage('https://www.flvto.biz/');
    I.setCookie({name: 'hl', value: 'en'});
  });

Scenario('CheckFuterLinks', (I) => {
    for (var i = 1; i < 6; i++) {

        I.amOnPage('https://www.flvto.biz/');

        I.click({xpath: `#footer-menu > ul > li:nth-child(${i}) > a`});

        switch (i) {
            case 1:
                I.waitInUrl('https://www.flvto.biz/terms/', 5);
            break;
            case 2:
                I.waitInUrl('https://www.flvto.biz/how-to/', 5);
            break;
            case 3:
                I.waitInUrl('https://www.flvto.biz/policy/', 5);
            break;
            case 4:
                I.waitInUrl('https://www.flvto.biz/dmca/', 5);
            break;
            case 5:
                I.waitInUrl('https://www.flvto.biz/feedback/', 5);
            break;
        }
    }
});