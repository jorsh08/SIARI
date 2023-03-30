const lugares = [
    {
        id: 1,
        nombre: 'Mundo magico',
        persona: 'Jorge Verdugo',
        direccion: 'Calle 123, Centro',
        horario: '10:00 - 22:00',
        tipo: 'Monumento',
        latitude: 27.480340,
        longitude: -109.941346,
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
        icono: 'https://kentuckylandscape.ca/wp-content/uploads/2019/12/fb-icon.png',
        imagen: 'https://static.wikia.nocookie.net/los-padrinos-magicos4real/images/7/7c/Tumblr_lfu4jdyHQL1qb82q8o1_500_large.jpg/revision/latest?cb=20180328215059&path-prefix=es'
    },
    {
        id: 2,
        nombre: 'Estadio Manuel Piri Sagasta',
        persona: 'Jorge Verdugo',
        direccion: 'Calle 123, Centro',
        horario: '10:00 - 22:00',
        tipo: 'Recreativo',
        latitude: 27.501326,
        longitude: -109.928579,
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
        icono: 'https://w7.pngwing.com/pngs/434/247/png-transparent-fb-social-icons-circular-black-icon.png',
        imagen: 'https://ca-times.brightspotcdn.com/dims4/default/2ae2539/2147483647/strip/true/crop/1269x763+0+0/resize/1200x722!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa2%2Fb5%2F81e87fe54af28570a963be0f2d50%2Fscreen-shot-2021-08-27-at-3.36.50%20PM.png'
    },
    {
        id: 3,
        nombre: 'Laguna del Nainari',
        persona: 'Jorge Verdugo',
        direccion: 'Calle 123, Centro',
        horario: '10:00 - 22:00',
        tipo: 'Parque',
        latitude: 27.489330,
        longitude: -109.943858,
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
        icono: 'http://www.ariadne-comunicacion.com/blog/wp-content/uploads/2018/06/icono-fb.png',
        imagen: 'https://fastly.4sqi.net/img/general/600x600/1938641_sM9UmTxzy9tdRleipsqAU6ciWsNWu92-iaE99UEiGw4.jpg'
    },
    {
        id: 4,
        nombre: 'Plaza Sendero',
        persona: 'Jorge Verdugo',
        direccion: 'Calle 123, Centro',
        horario: '10:00 - 22:00',
        tipo: 'Parque',
        latitude: 27.487779,
        longitude: -109.948010,
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
        icono: 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        imagen: 'https://www.sintesisnoticias.com/fotos/154452017021325846.jpg'
    },
    {
        id: 5,
        nombre: 'Estatua Valentin Elizalde',
        persona: 'Jorge Verdugo',
        direccion: 'Calle 123, Centro',
        horario: '10:00 - 22:00',
        tipo: 'Monumento',
        latitude: 27.484570,
        longitude: -109.919573,
        informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
        icono: 'https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-icon-png-image_3566125.png',
        imagen: 'https://i0.wp.com/claudiaperalta.com.mx/wp-content/uploads/2020/11/VALE9.jpg?w=1170&ssl=1'
    },
]

export default lugares;