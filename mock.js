const menu = [
  {
    name: 'Inicio',
    url: '',
  },
  {
    name: 'Shop Online',
    url: '',
    nodes: [
      {
        name: 'Cueros Ecológicos',
        url: '',
        nodes: [
          {
            name: 'Metalizados',
            url: '',
          },
          {
            name: 'Simil Reptiles',
            url: '',
          },
          {
            name: 'Pelos',
            url: '',
          },
          {
            name: 'Gamuzados',
            url: '',
          },
          {
            name: 'Granulados',
            url: '',
          },
          {
            name: 'Tornasolados',
            url: '',
          },
          {
            name: 'Espejados',
            url: '',
          },
          {
            name: 'Vinilos',
            url: '',
          },
          {
            name: 'Microfibras',
            url: '',
          },
          {
            name: 'Elastizados',
            url: '',
          },
          {
            name: 'Corchos',
            url: '',
          },
          {
            name: 'Lisos',
            url: '',
          },
          {
            name: 'Simil Descarnes',
            url: '',
          },
          {
            name: 'Craquelados',
            url: '',
          },
          {
            name: 'Estampados',
            url: '',
          },
          {
            name: 'Matelassé',
            url: '',
          },
        ],
      },
      {
        name: 'Forrería',
        url: '',
        nodes: [
          {
            name: 'Metalizada',
            url: '',
          },
          {
            name: 'Lisa',
            url: '',
          },
        ],
      },
      {
        name: 'Fantasías',
        url: '',
        nodes: [
          {
            name: 'Glitter',
            url: '',
          },
          {
            name: 'Lurex',
            url: '',
          },
          {
            name: 'Glow',
            url: '',
          },
          {
            name: 'Lentejuelas',
            url: '',
          },
          {
            name: 'Estampadas',
            url: '',
          },
        ],
      },
      {
        name: 'Telas',
        url: '',
        nodes: [
          {
            name: 'Telas Estampadas',
            url: '',
          },
          {
            name: 'Redes',
            url: '',
          },
          {
            name: 'Encajes',
            url: '',
          },
          {
            name: 'Telas de zapatillas',
            url: '',
          },
          {
            name: 'Telas Elastizadas',
            url: '',
          },
        ],
      },
      {
        name: 'Refuerzos',
        url: '',
        nodes: [
          {
            name: 'Telas de cambire',
            url: '',
          },
          {
            name: 'Taloneras',
            url: '',
          },
        ],
      },
      {
        name: 'Estampas',
        url: '',
      },
      {
        name: 'Accesorios',
        url: '',
        nodes: [
          {
            name: 'Pompones',
            url: '',
          },
          {
            name: 'Tiras',
            url: '',
          },
          {
            name: 'Apliques',
            url: '',
          },
        ],
      },
      {
        name: 'Bases',
        url: '',
      },
      {
        name: 'Servicio de Bondeado',
        url: '',
      },
      {
        name: 'Servicio de estampado',
        url: '',
        nodes: [
          {
            name: 'Servicio de estampado sobre pu',
            url: '',
          },
          {
            name: 'Servicio de estampado sobre textil/fantasía',
            url: '',
          },
          {
            name: 'Desarrollo de estampa personalizada',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'Preguntas frecuentes',
    url: '',
  },
  {
    name: 'Donde estamos',
    url: '',
  },
  {
    name: 'Contacto',
    url: '',
  },
];

const dataMock = {
  header: {
    logo: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/007/659/themes/common/logo-214954226-1560440516-60369c9be1db4823fb41fafccbee49b31560440516-480-0.png?0',
    name: 'Test Shop',
    home_url: '',
    flash: {
      enabled: true,
      message: "Envíos a toda la Argentina",
      tooltip_message: "Flash action custom message",
      trigger_message: "",
      action: {
        message: "",
        href: "#section-info"
      }
    },
    bannerStyles: '',
    contact: { label: 'Contact Us', href: '/contacto' },
    cart: { label: 'Cart', href: '/gz/cart' },
    cartInfo: 5,
    i18n: { search: 'Search', searchPlaceholder: 'Search...' },
    headerAdditionalClasses: 'header-wrapper--with-flash with-hamburguer-menu',
    headerTransparent: '221,209,201,1',
    sale: {
      text: 'sale',
      url: ''
    },
    menu,
  },
  footer: {
    logo: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/007/659/themes/common/logo-214954226-1560440516-60369c9be1db4823fb41fafccbee49b31560440516-480-0.png?0',
    name: 'Test Shop',
    logoCaption: '<p>Todos los medios de pago</p>',
    mobileExtraClass: 'nav-bounds-large', // optional class, only for mobile
    footerEditableClass: 'nav-footer--editable', // optional class, editable footer
    email: 'ventas@saxs.com.ar',
    phone: {
      raw: '+5491177000140',
      formatted: ' 11 7700 0140'
    },
    socialNetworks: [
      {
        account: 'facebook test',
        name: 'facebook',
        url: 'https://www.facebook.com/test_shop',
      },
      {
        account: 'instagram test',
        name: 'instagram',
        url: 'https://www.instagram.com/test_shop',
      },
    ],
    address: {
      address: 'Tomás Justo Villegas 426',
      city: '',
      state: '(Lomas del Mirador)'
    },
    i18n: {
      contact: 'Test contact text',
      powered_by: 'Powered by Mercado Shops'
    },
    showContact: true,
    showEmail: true,
    showAddress: false,
    showPhone: true,
    showBusinessData: false, // just BR, only if data is present and user wants to show it
    showQrData: true, // just AR, only if QR is present and user wants to show it
    fiscalData: {
      legal_name: 'Test legal name', // just BR
      legal_doc: '12345', // just BR
      qr_img: 'https://www.afip.gob.ar/images/f960/DATAWEB.jpg', // just AR
      qr_link: 'https://www.afip.gob.ar' // just AR
    },
    menu,
  }
};

module.exports = { dataMock };
